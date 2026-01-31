(function() {
    /* ==========================================
       DevProPeru - Auth Widget v1.0
       Author: David (DevPro)
       ========================================== */
    
    // 1. URL DEL BACKEND (A donde se envían los datos)
    const API_URL = "https://devproperu.com/developer/login"; 
    const HOME_URL = "https://devproperu.com";

    // 2. INYECTAR DEPENDENCIAS (Tailwind + Iconos + Fuentes)
    const head = document.head;
    const deps = [
        {tag: 'link', rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&family=Inter:wght@300;400;600&display=swap'},
        {tag: 'link', rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'},
        {tag: 'script', src: 'https://cdn.tailwindcss.com'} // Tailwind vía CDN para que funcione en cualquier web
    ];

    deps.forEach(d => {
        let el = document.createElement(d.tag);
        if(d.rel) el.rel = d.rel;
        if(d.href) el.href = d.href;
        if(d.src) el.src = d.src;
        head.appendChild(el);
    });

    // 3. INYECTAR TUS ESTILOS PERSONALIZADOS (CSS Minificado)
    const styleTag = document.createElement('style');
    styleTag.innerHTML = `
        #devpro-widget { position: fixed; top: 0; left: 0; width: 100%; height: 100vh; background: #020617; z-index: 9999; display: flex; align-items: center; justify-content: center; font-family: 'Inter', sans-serif; }
        .cyber-grid { position: absolute; inset: 0; z-index: -1; background-size: 40px 40px; background-image: linear-gradient(to right, rgba(139, 92, 246, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(139, 92, 246, 0.05) 1px, transparent 1px); mask-image: radial-gradient(circle at center, black 40%, transparent 80%); }
        .login-card { background: rgba(15, 23, 42, 0.9); backdrop-filter: blur(12px); border: 1px solid rgba(255, 255, 255, 0.08); box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5); }
        .input-dev { background-color: #0f111a; border: 1px solid #334155; font-family: 'JetBrains Mono', monospace; color: white; transition: all 0.3s ease; }
        .input-dev:focus { border-color: #8b5cf6; box-shadow: 0 0 0 2px rgba(139, 92, 246, 0.2); outline: none; }
        .btn-glow { background: linear-gradient(135deg, #7c3aed, #4f46e5); transition: all 0.3s ease; }
        .btn-glow:hover { box-shadow: 0 0 20px rgba(124, 58, 237, 0.4); transform: translateY(-1px); }
    `;
    head.appendChild(styleTag);

    // 4. INYECTAR EL HTML (Minificado en una variable)
    const widgetHTML = `
        <div class="cyber-grid"></div>
        <div class="absolute top-0 left-1/4 w-96 h-96 bg-violet-600 rounded-full mix-blend-screen filter blur-[150px] opacity-10 animate-pulse pointer-events-none"></div>
        <div class="w-full max-w-md p-4 relative z-10">
            <div class="login-card rounded-2xl p-8 relative overflow-hidden">
                <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-violet-500 to-transparent"></div>
                <div class="text-center mb-8">
                    <div class="w-16 h-16 bg-violet-900/30 rounded-xl flex items-center justify-center mx-auto mb-4 border border-violet-500/30">
                        <i class="fas fa-terminal text-3xl text-violet-400"></i>
                    </div>
                    <h1 class="text-2xl font-bold text-white tracking-tight">DevPro <span class="text-violet-400">Console</span></h1>
                    <p class="text-sm text-slate-400 font-mono mt-2">Authenticate to access API Gateway</p>
                </div>
                <form class="space-y-5" action="${API_URL}" method="POST">
                    <div class="relative">
                        <input type="text" name="username" class="w-full p-3 pl-10 rounded-lg placeholder-slate-600 input-dev" placeholder="Dev Username" required autocomplete="off">
                        <i class="fas fa-user absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-500"></i>
                    </div>
                    <div class="relative">
                        <input type="password" name="password" class="w-full p-3 pl-10 rounded-lg placeholder-slate-600 input-dev" placeholder="Password" required>
                        <i class="fas fa-lock absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-500"></i>
                    </div>
                    <button type="submit" class="w-full py-3.5 rounded-lg text-white font-bold text-sm btn-glow tracking-wide mt-4 cursor-pointer">
                        INITIALIZE SESSION <i class="fas fa-arrow-right ml-2"></i>
                    </button>
                </form>
                <div class="text-center mt-8 border-t border-slate-700/50 pt-6">
                    <a href="${HOME_URL}" class="text-xs text-slate-500 hover:text-violet-400 transition-colors font-mono flex items-center justify-center gap-2 no-underline">
                        <i class="fas fa-home"></i> Powered by DevProPeru
                    </a>
                    <div class="mt-2 text-[10px] text-slate-600 uppercase tracking-widest">Secure Environment v4.0</div>
                </div>
            </div>
        </div>
    `;

    // 5. RENDERIZAR EN EL DOM
    const container = document.createElement('div');
    container.id = 'devpro-widget';
    container.innerHTML = widgetHTML;
    document.body.appendChild(container);

})();