export const Background = () => {
    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden bg-black">
            {/* Base gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-950 to-zinc-900" />
            
            {/* Animated Blobs */}
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/10 blur-[120px] animate-pulse-subtle" />
            <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] rounded-full bg-primary/5 blur-[100px] animate-float" />
            <div className="absolute top-[20%] right-[10%] w-[20%] h-[20%] rounded-full bg-zinc-800/20 blur-[80px]" />
            
            {/* Subtle Grid overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        </div>
    );
}