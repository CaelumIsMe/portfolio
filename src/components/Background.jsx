/**
 * Fixed backdrop for the whole page.
 *
 * Layer order, bottom to top:
 *   1. the animated field (React Bits "Aero Shards" once installed — see below)
 *   2. a radial darkener that keeps the hero copy readable
 *   3. a 40px grid, masked to fade out below the fold
 *
 * The wrapper is pointer-events:none on purpose. Aero Shards binds its pointer
 * listeners to `window`, so `interaction="repel"` still tracks the cursor while
 * clicks continue to fall through to the page content.
 */
export const Background = () => {
    return (
        <div className="fixed inset-0 z-0 overflow-hidden bg-black pointer-events-none">
            {/*
              Interim field. Step 4 replaces this block with:
                  npx shadcn@latest add https://reactbits.dev/r/AeroShards-JS-CSS
                  npm i vgpu
              then <AeroShards backgroundColor="#000000" shardColor="#b31c1c" ... />
            */}
            <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-950 to-zinc-900" />
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/10 blur-[120px] animate-pulse-subtle" />
            <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] rounded-full bg-primary/5 blur-[100px] animate-float" />
            <div className="absolute top-[20%] right-[10%] w-[20%] h-[20%] rounded-full bg-zinc-800/20 blur-[80px]" />

            {/* Radial darkener */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_95%_70%_at_50%_0%,rgba(0,0,0,0.04),rgba(0,0,0,0.55)_55%,rgba(0,0,0,0.9)_100%)]" />

            {/* Masked grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        </div>
    );
};
