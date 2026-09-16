import { lazy, Suspense, useCallback, useState } from "react";

/*
  Aero Shards pulls in vgpu and a large block of WGSL. It is purely decorative,
  so it is code-split out of the initial bundle — the canvas fades in over 650ms
  anyway, which more than covers the chunk fetch.
*/
const AeroShards = lazy(() => import("./AeroShards"));

/*
  The handoff asks for "glass". The installed build only defines
  pearl | chrome | satin and resolves anything else to pearl, so this renders as
  pearl today — kept verbatim so a future React Bits release that adds a glass
  material is picked up without a change here.
*/
const SHARD_MATERIAL = "glass";

/*
  Shown when WebGPU is missing or the renderer dies, so the page never degrades
  to flat black. It can't double up with the shards: AeroShards paints an opaque
  backgroundColor of its own, and this only mounts once that has failed.
*/
const ShardsFallback = () => (
    <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-950 to-zinc-900">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/10 blur-[120px] animate-pulse-subtle" />
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] rounded-full bg-primary/5 blur-[100px] animate-float" />
        <div className="absolute top-[20%] right-[10%] w-[20%] h-[20%] rounded-full bg-zinc-800/20 blur-[80px]" />
    </div>
);

/**
 * Fixed backdrop for the whole page.
 *
 * Layer order, bottom to top:
 *   1. React Bits "Aero Shards" (or the CSS fallback)
 *   2. a radial darkener that keeps the hero copy readable
 *   3. a 40px grid, masked to fade out below the fold
 *
 * The wrapper is pointer-events:none on purpose. Aero Shards binds its pointer
 * listeners to `window`, so `interaction="repel"` still tracks the cursor while
 * clicks continue to fall through to the page content.
 */
export const Background = () => {
    const [shardsFailed, setShardsFailed] = useState(false);

    const handleShardsError = useCallback((error) => {
        console.warn("Aero Shards unavailable — falling back to the CSS backdrop.", error);
        setShardsFailed(true);
    }, []);

    return (
        <div className="fixed inset-0 z-0 overflow-hidden bg-black pointer-events-none">
            {shardsFailed ? (
                <ShardsFallback />
            ) : (
                /*
                  fallback={null} rather than <ShardsFallback />: the wrapper is
                  already black, so nothing pops when the chunk lands.
                */
                <Suspense fallback={null}>
                    <div className="absolute inset-0">
                        <AeroShards
                            backgroundColor="#000000"
                            shardColor="#b31c1c"
                            accentColor="#dc2626"
                            placement="full"
                            flow="stream"
                            material={SHARD_MATERIAL}
                            detail="balanced"
                            effect="none"
                            density={1.3}
                            speed={0.9}
                            glow={1.15}
                            bloom={0.45}
                            grain={0.04}
                            interaction="repel"
                            onError={handleShardsError}
                        />
                    </div>
                </Suspense>
            )}

            {/* Radial darkener */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_95%_70%_at_50%_0%,rgba(0,0,0,0.04),rgba(0,0,0,0.55)_55%,rgba(0,0,0,0.9)_100%)]" />

            {/* Masked grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        </div>
    );
};
