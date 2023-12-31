/*! For license information please see main.js.LICENSE.txt */
(() => {
  var r = {
      892: (r, e, n) => {
        'use strict';
        n.d(e, {Z: () => f});
        var o = n(537),
          t = n.n(o),
          a = n(645),
          A = n.n(a),
          i = n(667),
          c = n.n(i),
          s = new URL(n(494), n.b),
          l = new URL(n(458), n.b),
          g = new URL(n(297), n.b),
          C = new URL(n(503), n.b),
          u = A()(t()),
          d = c()(s),
          p = c()(l),
          m = c()(g),
          b = c()(C);
        u.push([
          r.id,
          '*,*::after,*::before{box-sizing:inherit}*{font:inherit}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video,hr{padding:0;margin:0;border:0}html{box-sizing:border-box}body{background-color:var(--color-bg, white)}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section,main,form legend{display:block}ol,ul{list-style:none}blockquote,q{quotes:none}button,input,textarea,select{margin:0}textarea{overflow:auto;vertical-align:top;resize:vertical}input::-ms-clear{display:none}table{border-spacing:0;border-collapse:collapse}img,video,svg{max-width:100%}button{width:auto;padding:0;margin:0;overflow:visible;font:inherit;line-height:normal;color:inherit;background:transparent;border:none;-webkit-font-smoothing:inherit;-moz-osx-font-smoothing:inherit;-webkit-appearance:none}button::-moz-focus-inner{padding:0;border:0}:root{--color-primary-50:#fef2f2;--color-primary-50-rgb:254, 242, 242;--color-primary-100:#fee2e2;--color-primary-100-rgb:254, 226, 226;--color-primary-200:#fecaca;--color-primary-200-rgb:254, 202, 202;--color-primary-300:#fca5a5;--color-primary-300-rgb:252, 165, 165;--color-primary-400:#f87171;--color-primary-400-rgb:248, 113, 113;--color-primary-500:#ef4444;--color-primary-500-rgb:239, 68, 68;--color-primary-600:#dc2626;--color-primary-600-rgb:220, 38, 38;--color-primary-700:#b91c1c;--color-primary-700-rgb:185, 28, 28;--color-primary-800:#991b1b;--color-primary-800-rgb:153, 27, 27;--color-primary-900:#7f1d1d;--color-primary-900-rgb:127, 29, 29;--color-contrast-50:#fafaf9;--color-contrast-50-rgb:250, 250, 249;--color-contrast-100:#f5f5f4;--color-contrast-100-rgb:245, 245, 244;--color-contrast-200:#e7e5e4;--color-contrast-200-rgb:231, 229, 228;--color-contrast-300:#d6d3d1;--color-contrast-300-rgb:214, 211, 209;--color-contrast-400:#a8a29e;--color-contrast-400-rgb:168, 162, 158;--color-contrast-500:#78716c;--color-contrast-500-rgb:120, 113, 108;--color-contrast-600:#57534e;--color-contrast-600-rgb:87, 83, 78;--color-contrast-700:#44403c;--color-contrast-700-rgb:68, 64, 60;--color-contrast-800:#292524;--color-contrast-800-rgb:41, 37, 36;--color-contrast-900:#1c1917;--color-contrast-900-rgb:28, 25, 23;--color-error-50:#fef2f2;--color-error-50-rgb:254, 242, 242;--color-error-100:#fee2e2;--color-error-100-rgb:254, 226, 226;--color-error-200:#fecaca;--color-error-200-rgb:254, 202, 202;--color-error-300:#fca5a5;--color-error-300-rgb:252, 165, 165;--color-error-400:#f87171;--color-error-400-rgb:248, 113, 113;--color-error-500:#ef4444;--color-error-500-rgb:239, 68, 68;--color-error-600:#dc2626;--color-error-600-rgb:220, 38, 38;--color-error-700:#b91c1c;--color-error-700-rgb:185, 28, 28;--color-error-800:#991b1b;--color-error-800-rgb:153, 27, 27;--color-error-900:#7f1d1d;--color-error-900-rgb:127, 29, 29;--color-success-50:#f0fdf4;--color-success-50-rgb:240, 253, 244;--color-success-100:#dcfce7;--color-success-100-rgb:220, 252, 231;--color-success-200:#bbf7d0;--color-success-200-rgb:187, 247, 208;--color-success-300:#86efac;--color-success-300-rgb:134, 239, 172;--color-success-400:#4ade80;--color-success-400-rgb:74, 222, 128;--color-success-500:#22c55e;--color-success-500-rgb:34, 197, 94;--color-success-600:#16a34a;--color-success-600-rgb:22, 163, 74;--color-success-700:#15803d;--color-success-700-rgb:21, 128, 61;--color-success-800:#166534;--color-success-800-rgb:22, 101, 52;--color-success-900:#14532d;--color-success-900-rgb:20, 83, 45;--color-warning-50:#fefce8;--color-warning-50-rgb:254, 252, 232;--color-warning-100:#fef9c3;--color-warning-100-rgb:254, 249, 195;--color-warning-200:#fef08a;--color-warning-200-rgb:254, 240, 138;--color-warning-300:#fde047;--color-warning-300-rgb:253, 224, 71;--color-warning-400:#facc15;--color-warning-400-rgb:250, 204, 21;--color-warning-500:#eab308;--color-warning-500-rgb:234, 179, 8;--color-warning-600:#ca8a04;--color-warning-600-rgb:202, 138, 4;--color-warning-700:#a16207;--color-warning-700-rgb:161, 98, 7;--color-warning-800:#854d0e;--color-warning-800-rgb:133, 77, 14;--color-warning-900:#713f12;--color-warning-900-rgb:113, 63, 18;--color-caution-50:#fff7ed;--color-caution-50-rgb:255, 247, 237;--color-caution-100:#ffedd5;--color-caution-100-rgb:255, 237, 213;--color-caution-200:#fed7aa;--color-caution-200-rgb:254, 215, 170;--color-caution-300:#fdba74;--color-caution-300-rgb:253, 186, 116;--color-caution-400:#fb923c;--color-caution-400-rgb:251, 146, 60;--color-caution-500:#f97316;--color-caution-500-rgb:249, 115, 22;--color-caution-600:#ea580c;--color-caution-600-rgb:234, 88, 12;--color-caution-700:#c2410c;--color-caution-700-rgb:194, 65, 12;--color-caution-800:#9a3412;--color-caution-800-rgb:154, 52, 18;--color-caution-900:#7c2d12;--color-caution-900-rgb:124, 45, 18;--spacing-4xs:0.125em;--spacing-3xs:0.25em;--spacing-2xs:0.375em;--spacing-xs:0.5em;--spacing-sm:0.75em;--spacing-md:1.25em;--spacing-lg:2em;--spacing-xl:3.25em;--spacing-2xl:5.25em;--spacing-3xl:8.5em;--spacing-4xl:13.75em;--max-w-none:none;--max-w-0:0;--max-w-4xs:20rem;--max-w-3xs:26rem;--max-w-2xs:32rem;--max-w-xs:38rem;--max-w-sm:48rem;--max-w-md:64rem;--max-w-lg:80rem;--max-w-xl:90rem;--max-w-2xl:100rem;--max-w-3xl:120rem;--max-w-4xl:150rem;--max-w-prose:65ch;--max-w-full:100%;--base-font:-apple-system, blinkmacsystemfont, segoe ui, roboto, oxygen, ubuntu, cantarell, fira sans, droid sans, helvetica neue, sans-serif;--base-line-height:1.4;--base-color:var(--color-contrast-900);--heading-line-height:1.5;--heading-weight:700;--heading-color:var(--color-contrast-900);--text-scale-ratio:1.2;--text-base-size:1em;--text-xs:calc(var(--text-base-size, 1em) / var(--text-scale-ratio, 1.2) / var(--text-scale-ratio, 1.2));--text-sm:calc(var(--text-xs, 0.6944444444em) * var(--text-scale-ratio, 1.2));--text-md:calc(var(--text-sm, 0.8333333333em) * var(--text-scale-ratio, 1.2) * var(--text-scale-ratio, 1.2));--text-lg:calc(var(--text-md, 1.2em) * var(--text-scale-ratio, 1.2));--text-xl:calc(var(--text-lg, 1.44em) * var(--text-scale-ratio, 1.2));--text-2xl:calc(var(--text-xl, 1.728em) * var(--text-scale-ratio, 1.2));--text-3xl:calc(var(--text-2xl, 2.0736em) * var(--text-scale-ratio, 1.2));--text-4xl:calc(var(--text-3xl, 2.48832em) * var(--text-scale-ratio, 1.2));--color-bg: var(--color-contrast-200);--back-top-bg: var(--color-contrast-50);--back-top-bg-hover: var(--color-contrast-200);--back-top-icon: var(--color-contrast-900)}.text-primary-50{color:var(--color-primary-50, #fef2f2)}.text-primary-100{color:var(--color-primary-100, #fee2e2)}.text-primary-200{color:var(--color-primary-200, #fecaca)}.text-primary-300{color:var(--color-primary-300, #fca5a5)}.text-primary-400{color:var(--color-primary-400, #f87171)}.text-primary-500{color:var(--color-primary-500, #ef4444)}.text-primary-600{color:var(--color-primary-600, #dc2626)}.text-primary-700{color:var(--color-primary-700, #b91c1c)}.text-primary-800{color:var(--color-primary-800, #991b1b)}.text-primary-900{color:var(--color-primary-900, #7f1d1d)}.text-contrast-50{color:var(--color-contrast-50, #fafaf9)}.text-contrast-100{color:var(--color-contrast-100, #f5f5f4)}.text-contrast-200{color:var(--color-contrast-200, #e7e5e4)}.text-contrast-300{color:var(--color-contrast-300, #d6d3d1)}.text-contrast-400{color:var(--color-contrast-400, #a8a29e)}.text-contrast-500{color:var(--color-contrast-500, #78716c)}.text-contrast-600{color:var(--color-contrast-600, #57534e)}.text-contrast-700{color:var(--color-contrast-700, #44403c)}.text-contrast-800{color:var(--color-contrast-800, #292524)}.text-contrast-900{color:var(--color-contrast-900, #1c1917)}.text-error-50{color:var(--color-error-50, #fef2f2)}.text-error-100{color:var(--color-error-100, #fee2e2)}.text-error-200{color:var(--color-error-200, #fecaca)}.text-error-300{color:var(--color-error-300, #fca5a5)}.text-error-400{color:var(--color-error-400, #f87171)}.text-error-500{color:var(--color-error-500, #ef4444)}.text-error-600{color:var(--color-error-600, #dc2626)}.text-error-700{color:var(--color-error-700, #b91c1c)}.text-error-800{color:var(--color-error-800, #991b1b)}.text-error-900{color:var(--color-error-900, #7f1d1d)}.text-success-50{color:var(--color-success-50, #f0fdf4)}.text-success-100{color:var(--color-success-100, #dcfce7)}.text-success-200{color:var(--color-success-200, #bbf7d0)}.text-success-300{color:var(--color-success-300, #86efac)}.text-success-400{color:var(--color-success-400, #4ade80)}.text-success-500{color:var(--color-success-500, #22c55e)}.text-success-600{color:var(--color-success-600, #16a34a)}.text-success-700{color:var(--color-success-700, #15803d)}.text-success-800{color:var(--color-success-800, #166534)}.text-success-900{color:var(--color-success-900, #14532d)}.text-warning-50{color:var(--color-warning-50, #fefce8)}.text-warning-100{color:var(--color-warning-100, #fef9c3)}.text-warning-200{color:var(--color-warning-200, #fef08a)}.text-warning-300{color:var(--color-warning-300, #fde047)}.text-warning-400{color:var(--color-warning-400, #facc15)}.text-warning-500{color:var(--color-warning-500, #eab308)}.text-warning-600{color:var(--color-warning-600, #ca8a04)}.text-warning-700{color:var(--color-warning-700, #a16207)}.text-warning-800{color:var(--color-warning-800, #854d0e)}.text-warning-900{color:var(--color-warning-900, #713f12)}.text-caution-50{color:var(--color-caution-50, #fff7ed)}.text-caution-100{color:var(--color-caution-100, #ffedd5)}.text-caution-200{color:var(--color-caution-200, #fed7aa)}.text-caution-300{color:var(--color-caution-300, #fdba74)}.text-caution-400{color:var(--color-caution-400, #fb923c)}.text-caution-500{color:var(--color-caution-500, #f97316)}.text-caution-600{color:var(--color-caution-600, #ea580c)}.text-caution-700{color:var(--color-caution-700, #c2410c)}.text-caution-800{color:var(--color-caution-800, #9a3412)}.text-caution-900{color:var(--color-caution-900, #7c2d12)}.bg-primary-50{background-color:var(--color-primary-50, #fef2f2) !important}.bg-primary-100{background-color:var(--color-primary-100, #fee2e2) !important}.bg-primary-200{background-color:var(--color-primary-200, #fecaca) !important}.bg-primary-300{background-color:var(--color-primary-300, #fca5a5) !important}.bg-primary-400{background-color:var(--color-primary-400, #f87171) !important}.bg-primary-500{background-color:var(--color-primary-500, #ef4444) !important}.bg-primary-600{background-color:var(--color-primary-600, #dc2626) !important}.bg-primary-700{background-color:var(--color-primary-700, #b91c1c) !important}.bg-primary-800{background-color:var(--color-primary-800, #991b1b) !important}.bg-primary-900{background-color:var(--color-primary-900, #7f1d1d) !important}.bg-contrast-50{background-color:var(--color-contrast-50, #fafaf9) !important}.bg-contrast-100{background-color:var(--color-contrast-100, #f5f5f4) !important}.bg-contrast-200{background-color:var(--color-contrast-200, #e7e5e4) !important}.bg-contrast-300{background-color:var(--color-contrast-300, #d6d3d1) !important}.bg-contrast-400{background-color:var(--color-contrast-400, #a8a29e) !important}.bg-contrast-500{background-color:var(--color-contrast-500, #78716c) !important}.bg-contrast-600{background-color:var(--color-contrast-600, #57534e) !important}.bg-contrast-700{background-color:var(--color-contrast-700, #44403c) !important}.bg-contrast-800{background-color:var(--color-contrast-800, #292524) !important}.bg-contrast-900{background-color:var(--color-contrast-900, #1c1917) !important}.bg-error-50{background-color:var(--color-error-50, #fef2f2) !important}.bg-error-100{background-color:var(--color-error-100, #fee2e2) !important}.bg-error-200{background-color:var(--color-error-200, #fecaca) !important}.bg-error-300{background-color:var(--color-error-300, #fca5a5) !important}.bg-error-400{background-color:var(--color-error-400, #f87171) !important}.bg-error-500{background-color:var(--color-error-500, #ef4444) !important}.bg-error-600{background-color:var(--color-error-600, #dc2626) !important}.bg-error-700{background-color:var(--color-error-700, #b91c1c) !important}.bg-error-800{background-color:var(--color-error-800, #991b1b) !important}.bg-error-900{background-color:var(--color-error-900, #7f1d1d) !important}.bg-success-50{background-color:var(--color-success-50, #f0fdf4) !important}.bg-success-100{background-color:var(--color-success-100, #dcfce7) !important}.bg-success-200{background-color:var(--color-success-200, #bbf7d0) !important}.bg-success-300{background-color:var(--color-success-300, #86efac) !important}.bg-success-400{background-color:var(--color-success-400, #4ade80) !important}.bg-success-500{background-color:var(--color-success-500, #22c55e) !important}.bg-success-600{background-color:var(--color-success-600, #16a34a) !important}.bg-success-700{background-color:var(--color-success-700, #15803d) !important}.bg-success-800{background-color:var(--color-success-800, #166534) !important}.bg-success-900{background-color:var(--color-success-900, #14532d) !important}.bg-warning-50{background-color:var(--color-warning-50, #fefce8) !important}.bg-warning-100{background-color:var(--color-warning-100, #fef9c3) !important}.bg-warning-200{background-color:var(--color-warning-200, #fef08a) !important}.bg-warning-300{background-color:var(--color-warning-300, #fde047) !important}.bg-warning-400{background-color:var(--color-warning-400, #facc15) !important}.bg-warning-500{background-color:var(--color-warning-500, #eab308) !important}.bg-warning-600{background-color:var(--color-warning-600, #ca8a04) !important}.bg-warning-700{background-color:var(--color-warning-700, #a16207) !important}.bg-warning-800{background-color:var(--color-warning-800, #854d0e) !important}.bg-warning-900{background-color:var(--color-warning-900, #713f12) !important}.bg-caution-50{background-color:var(--color-caution-50, #fff7ed) !important}.bg-caution-100{background-color:var(--color-caution-100, #ffedd5) !important}.bg-caution-200{background-color:var(--color-caution-200, #fed7aa) !important}.bg-caution-300{background-color:var(--color-caution-300, #fdba74) !important}.bg-caution-400{background-color:var(--color-caution-400, #fb923c) !important}.bg-caution-500{background-color:var(--color-caution-500, #f97316) !important}.bg-caution-600{background-color:var(--color-caution-600, #ea580c) !important}.bg-caution-700{background-color:var(--color-caution-700, #c2410c) !important}.bg-caution-800{background-color:var(--color-caution-800, #9a3412) !important}.bg-caution-900{background-color:var(--color-caution-900, #7c2d12) !important}.bg-purple-50{background-color:#faf5ff}.bg-hover-purple-50{background-color:#faf5ff;transition:background-color .3s var(--ease-out)}.bg-hover-purple-50:hover{background-color:#f3e8ff}.bg-purple-100{background-color:#f3e8ff}.bg-hover-purple-100{background-color:#f3e8ff;transition:background-color .3s var(--ease-out)}.bg-hover-purple-100:hover{background-color:#e9d5ff}.bg-purple-200{background-color:#e9d5ff}.bg-hover-purple-200{background-color:#e9d5ff;transition:background-color .3s var(--ease-out)}.bg-hover-purple-200:hover{background-color:#d8b4fe}.bg-purple-300{background-color:#d8b4fe}.bg-hover-purple-300{background-color:#d8b4fe;transition:background-color .3s var(--ease-out)}.bg-hover-purple-300:hover{background-color:#c084fc}.bg-purple-400{background-color:#c084fc}.bg-hover-purple-400{background-color:#c084fc;transition:background-color .3s var(--ease-out)}.bg-hover-purple-400:hover{background-color:#a855f7}.bg-purple-500{background-color:#a855f7}.bg-hover-purple-500{background-color:#a855f7;transition:background-color .3s var(--ease-out)}.bg-hover-purple-500:hover{background-color:#9333ea}.bg-purple-600{background-color:#9333ea}.bg-hover-purple-600{background-color:#9333ea;transition:background-color .3s var(--ease-out)}.bg-hover-purple-600:hover{background-color:#7e22ce}.bg-purple-700{background-color:#7e22ce}.bg-hover-purple-700{background-color:#7e22ce;transition:background-color .3s var(--ease-out)}.bg-hover-purple-700:hover{background-color:#6b21a8}.bg-purple-800{background-color:#6b21a8}.bg-hover-purple-800{background-color:#6b21a8;transition:background-color .3s var(--ease-out)}.bg-hover-purple-800:hover{background-color:#581c87}.bg-purple-900{background-color:#581c87}.bg-hover-purple-900{background-color:#581c87;transition:background-color .3s var(--ease-out)}.bg-hover-purple-900:hover{background-color:#6b21a8}.bg-pink-50{background-color:#fdf2f8}.bg-hover-pink-50{background-color:#fdf2f8;transition:background-color .3s var(--ease-out)}.bg-hover-pink-50:hover{background-color:#fce7f3}.bg-pink-100{background-color:#fce7f3}.bg-hover-pink-100{background-color:#fce7f3;transition:background-color .3s var(--ease-out)}.bg-hover-pink-100:hover{background-color:#fbcfe8}.bg-pink-200{background-color:#fbcfe8}.bg-hover-pink-200{background-color:#fbcfe8;transition:background-color .3s var(--ease-out)}.bg-hover-pink-200:hover{background-color:#f9a8d4}.bg-pink-300{background-color:#f9a8d4}.bg-hover-pink-300{background-color:#f9a8d4;transition:background-color .3s var(--ease-out)}.bg-hover-pink-300:hover{background-color:#f472b6}.bg-pink-400{background-color:#f472b6}.bg-hover-pink-400{background-color:#f472b6;transition:background-color .3s var(--ease-out)}.bg-hover-pink-400:hover{background-color:#ec4899}.bg-pink-500{background-color:#ec4899}.bg-hover-pink-500{background-color:#ec4899;transition:background-color .3s var(--ease-out)}.bg-hover-pink-500:hover{background-color:#db2777}.bg-pink-600{background-color:#db2777}.bg-hover-pink-600{background-color:#db2777;transition:background-color .3s var(--ease-out)}.bg-hover-pink-600:hover{background-color:#be185d}.bg-pink-700{background-color:#be185d}.bg-hover-pink-700{background-color:#be185d;transition:background-color .3s var(--ease-out)}.bg-hover-pink-700:hover{background-color:#9d174d}.bg-pink-800{background-color:#9d174d}.bg-hover-pink-800{background-color:#9d174d;transition:background-color .3s var(--ease-out)}.bg-hover-pink-800:hover{background-color:#831843}.bg-pink-900{background-color:#831843}.bg-hover-pink-900{background-color:#831843;transition:background-color .3s var(--ease-out)}.bg-hover-pink-900:hover{background-color:#9d174d}.bg-yellow-50{background-color:#fefce8}.bg-hover-yellow-50{background-color:#fefce8;transition:background-color .3s var(--ease-out)}.bg-hover-yellow-50:hover{background-color:#fef9c3}.bg-yellow-100{background-color:#fef9c3}.bg-hover-yellow-100{background-color:#fef9c3;transition:background-color .3s var(--ease-out)}.bg-hover-yellow-100:hover{background-color:#fef08a}.bg-yellow-200{background-color:#fef08a}.bg-hover-yellow-200{background-color:#fef08a;transition:background-color .3s var(--ease-out)}.bg-hover-yellow-200:hover{background-color:#fde047}.bg-yellow-300{background-color:#fde047}.bg-hover-yellow-300{background-color:#fde047;transition:background-color .3s var(--ease-out)}.bg-hover-yellow-300:hover{background-color:#facc15}.bg-yellow-400{background-color:#facc15}.bg-hover-yellow-400{background-color:#facc15;transition:background-color .3s var(--ease-out)}.bg-hover-yellow-400:hover{background-color:#eab308}.bg-yellow-500{background-color:#eab308}.bg-hover-yellow-500{background-color:#eab308;transition:background-color .3s var(--ease-out)}.bg-hover-yellow-500:hover{background-color:#ca8a04}.bg-yellow-600{background-color:#ca8a04}.bg-hover-yellow-600{background-color:#ca8a04;transition:background-color .3s var(--ease-out)}.bg-hover-yellow-600:hover{background-color:#a16207}.bg-yellow-700{background-color:#a16207}.bg-hover-yellow-700{background-color:#a16207;transition:background-color .3s var(--ease-out)}.bg-hover-yellow-700:hover{background-color:#854d0e}.bg-yellow-800{background-color:#854d0e}.bg-hover-yellow-800{background-color:#854d0e;transition:background-color .3s var(--ease-out)}.bg-hover-yellow-800:hover{background-color:#713f12}.bg-yellow-900{background-color:#713f12}.bg-hover-yellow-900{background-color:#713f12;transition:background-color .3s var(--ease-out)}.bg-hover-yellow-900:hover{background-color:#854d0e}.bg-cool-gray-50{background-color:#f9fafb}.bg-hover-cool-gray-50{background-color:#f9fafb;transition:background-color .3s var(--ease-out)}.bg-hover-cool-gray-50:hover{background-color:#f3f4f6}.bg-cool-gray-100{background-color:#f3f4f6}.bg-hover-cool-gray-100{background-color:#f3f4f6;transition:background-color .3s var(--ease-out)}.bg-hover-cool-gray-100:hover{background-color:#e5e7eb}.bg-cool-gray-200{background-color:#e5e7eb}.bg-hover-cool-gray-200{background-color:#e5e7eb;transition:background-color .3s var(--ease-out)}.bg-hover-cool-gray-200:hover{background-color:#d1d5db}.bg-cool-gray-300{background-color:#d1d5db}.bg-hover-cool-gray-300{background-color:#d1d5db;transition:background-color .3s var(--ease-out)}.bg-hover-cool-gray-300:hover{background-color:#9ca3af}.bg-cool-gray-400{background-color:#9ca3af}.bg-hover-cool-gray-400{background-color:#9ca3af;transition:background-color .3s var(--ease-out)}.bg-hover-cool-gray-400:hover{background-color:#6b7280}.bg-cool-gray-500{background-color:#6b7280}.bg-hover-cool-gray-500{background-color:#6b7280;transition:background-color .3s var(--ease-out)}.bg-hover-cool-gray-500:hover{background-color:#4b5563}.bg-cool-gray-600{background-color:#4b5563}.bg-hover-cool-gray-600{background-color:#4b5563;transition:background-color .3s var(--ease-out)}.bg-hover-cool-gray-600:hover{background-color:#374151}.bg-cool-gray-700{background-color:#374151}.bg-hover-cool-gray-700{background-color:#374151;transition:background-color .3s var(--ease-out)}.bg-hover-cool-gray-700:hover{background-color:#1f2937}.bg-cool-gray-800{background-color:#1f2937}.bg-hover-cool-gray-800{background-color:#1f2937;transition:background-color .3s var(--ease-out)}.bg-hover-cool-gray-800:hover{background-color:#111827}.bg-cool-gray-900{background-color:#111827}.bg-hover-cool-gray-900{background-color:#111827;transition:background-color .3s var(--ease-out)}.bg-hover-cool-gray-900:hover{background-color:#1f2937}.bg-warm-gray-50{background-color:#fafaf9}.bg-hover-warm-gray-50{background-color:#fafaf9;transition:background-color .3s var(--ease-out)}.bg-hover-warm-gray-50:hover{background-color:#f5f5f4}.bg-warm-gray-100{background-color:#f5f5f4}.bg-hover-warm-gray-100{background-color:#f5f5f4;transition:background-color .3s var(--ease-out)}.bg-hover-warm-gray-100:hover{background-color:#e7e5e4}.bg-warm-gray-200{background-color:#e7e5e4}.bg-hover-warm-gray-200{background-color:#e7e5e4;transition:background-color .3s var(--ease-out)}.bg-hover-warm-gray-200:hover{background-color:#d6d3d1}.bg-warm-gray-300{background-color:#d6d3d1}.bg-hover-warm-gray-300{background-color:#d6d3d1;transition:background-color .3s var(--ease-out)}.bg-hover-warm-gray-300:hover{background-color:#a8a29e}.bg-warm-gray-400{background-color:#a8a29e}.bg-hover-warm-gray-400{background-color:#a8a29e;transition:background-color .3s var(--ease-out)}.bg-hover-warm-gray-400:hover{background-color:#78716c}.bg-warm-gray-500{background-color:#78716c}.bg-hover-warm-gray-500{background-color:#78716c;transition:background-color .3s var(--ease-out)}.bg-hover-warm-gray-500:hover{background-color:#57534e}.bg-warm-gray-600{background-color:#57534e}.bg-hover-warm-gray-600{background-color:#57534e;transition:background-color .3s var(--ease-out)}.bg-hover-warm-gray-600:hover{background-color:#44403c}.bg-warm-gray-700{background-color:#44403c}.bg-hover-warm-gray-700{background-color:#44403c;transition:background-color .3s var(--ease-out)}.bg-hover-warm-gray-700:hover{background-color:#292524}.bg-warm-gray-800{background-color:#292524}.bg-hover-warm-gray-800{background-color:#292524;transition:background-color .3s var(--ease-out)}.bg-hover-warm-gray-800:hover{background-color:#1c1917}.bg-warm-gray-900{background-color:#1c1917}.bg-hover-warm-gray-900{background-color:#1c1917;transition:background-color .3s var(--ease-out)}.bg-hover-warm-gray-900:hover{background-color:#292524}.bg-true-gray-50{background-color:#fafafa}.bg-hover-true-gray-50{background-color:#fafafa;transition:background-color .3s var(--ease-out)}.bg-hover-true-gray-50:hover{background-color:#f5f5f5}.bg-true-gray-100{background-color:#f5f5f5}.bg-hover-true-gray-100{background-color:#f5f5f5;transition:background-color .3s var(--ease-out)}.bg-hover-true-gray-100:hover{background-color:#e5e5e5}.bg-true-gray-200{background-color:#e5e5e5}.bg-hover-true-gray-200{background-color:#e5e5e5;transition:background-color .3s var(--ease-out)}.bg-hover-true-gray-200:hover{background-color:#d4d4d4}.bg-true-gray-300{background-color:#d4d4d4}.bg-hover-true-gray-300{background-color:#d4d4d4;transition:background-color .3s var(--ease-out)}.bg-hover-true-gray-300:hover{background-color:#a3a3a3}.bg-true-gray-400{background-color:#a3a3a3}.bg-hover-true-gray-400{background-color:#a3a3a3;transition:background-color .3s var(--ease-out)}.bg-hover-true-gray-400:hover{background-color:#737373}.bg-true-gray-500{background-color:#737373}.bg-hover-true-gray-500{background-color:#737373;transition:background-color .3s var(--ease-out)}.bg-hover-true-gray-500:hover{background-color:#525252}.bg-true-gray-600{background-color:#525252}.bg-hover-true-gray-600{background-color:#525252;transition:background-color .3s var(--ease-out)}.bg-hover-true-gray-600:hover{background-color:#404040}.bg-true-gray-700{background-color:#404040}.bg-hover-true-gray-700{background-color:#404040;transition:background-color .3s var(--ease-out)}.bg-hover-true-gray-700:hover{background-color:#262626}.bg-true-gray-800{background-color:#262626}.bg-hover-true-gray-800{background-color:#262626;transition:background-color .3s var(--ease-out)}.bg-hover-true-gray-800:hover{background-color:#171717}.bg-true-gray-900{background-color:#171717}.bg-hover-true-gray-900{background-color:#171717;transition:background-color .3s var(--ease-out)}.bg-hover-true-gray-900:hover{background-color:#262626}.bg-blue-gray-50{background-color:#f8fafc}.bg-hover-blue-gray-50{background-color:#f8fafc;transition:background-color .3s var(--ease-out)}.bg-hover-blue-gray-50:hover{background-color:#f1f5f9}.bg-blue-gray-100{background-color:#f1f5f9}.bg-hover-blue-gray-100{background-color:#f1f5f9;transition:background-color .3s var(--ease-out)}.bg-hover-blue-gray-100:hover{background-color:#e2e8f0}.bg-blue-gray-200{background-color:#e2e8f0}.bg-hover-blue-gray-200{background-color:#e2e8f0;transition:background-color .3s var(--ease-out)}.bg-hover-blue-gray-200:hover{background-color:#cbd5e1}.bg-blue-gray-300{background-color:#cbd5e1}.bg-hover-blue-gray-300{background-color:#cbd5e1;transition:background-color .3s var(--ease-out)}.bg-hover-blue-gray-300:hover{background-color:#94a3b8}.bg-blue-gray-400{background-color:#94a3b8}.bg-hover-blue-gray-400{background-color:#94a3b8;transition:background-color .3s var(--ease-out)}.bg-hover-blue-gray-400:hover{background-color:#64748b}.bg-blue-gray-500{background-color:#64748b}.bg-hover-blue-gray-500{background-color:#64748b;transition:background-color .3s var(--ease-out)}.bg-hover-blue-gray-500:hover{background-color:#475569}.bg-blue-gray-600{background-color:#475569}.bg-hover-blue-gray-600{background-color:#475569;transition:background-color .3s var(--ease-out)}.bg-hover-blue-gray-600:hover{background-color:#334155}.bg-blue-gray-700{background-color:#334155}.bg-hover-blue-gray-700{background-color:#334155;transition:background-color .3s var(--ease-out)}.bg-hover-blue-gray-700:hover{background-color:#1e293b}.bg-blue-gray-800{background-color:#1e293b}.bg-hover-blue-gray-800{background-color:#1e293b;transition:background-color .3s var(--ease-out)}.bg-hover-blue-gray-800:hover{background-color:#0f172a}.bg-blue-gray-900{background-color:#0f172a}.bg-hover-blue-gray-900{background-color:#0f172a;transition:background-color .3s var(--ease-out)}.bg-hover-blue-gray-900:hover{background-color:#1e293b}.bg-blue-50{background-color:#eff6ff}.bg-hover-blue-50{background-color:#eff6ff;transition:background-color .3s var(--ease-out)}.bg-hover-blue-50:hover{background-color:#dbeafe}.bg-blue-100{background-color:#dbeafe}.bg-hover-blue-100{background-color:#dbeafe;transition:background-color .3s var(--ease-out)}.bg-hover-blue-100:hover{background-color:#bfdbfe}.bg-blue-200{background-color:#bfdbfe}.bg-hover-blue-200{background-color:#bfdbfe;transition:background-color .3s var(--ease-out)}.bg-hover-blue-200:hover{background-color:#93c5fd}.bg-blue-300{background-color:#93c5fd}.bg-hover-blue-300{background-color:#93c5fd;transition:background-color .3s var(--ease-out)}.bg-hover-blue-300:hover{background-color:#60a5fa}.bg-blue-400{background-color:#60a5fa}.bg-hover-blue-400{background-color:#60a5fa;transition:background-color .3s var(--ease-out)}.bg-hover-blue-400:hover{background-color:#3b82f6}.bg-blue-500{background-color:#3b82f6}.bg-hover-blue-500{background-color:#3b82f6;transition:background-color .3s var(--ease-out)}.bg-hover-blue-500:hover{background-color:#2563eb}.bg-blue-600{background-color:#2563eb}.bg-hover-blue-600{background-color:#2563eb;transition:background-color .3s var(--ease-out)}.bg-hover-blue-600:hover{background-color:#1d4ed8}.bg-blue-700{background-color:#1d4ed8}.bg-hover-blue-700{background-color:#1d4ed8;transition:background-color .3s var(--ease-out)}.bg-hover-blue-700:hover{background-color:#1e40af}.bg-blue-800{background-color:#1e40af}.bg-hover-blue-800{background-color:#1e40af;transition:background-color .3s var(--ease-out)}.bg-hover-blue-800:hover{background-color:#1e3a8a}.bg-blue-900{background-color:#1e3a8a}.bg-hover-blue-900{background-color:#1e3a8a;transition:background-color .3s var(--ease-out)}.bg-hover-blue-900:hover{background-color:#1e40af}.bg-amber-50{background-color:#fffbeb}.bg-hover-amber-50{background-color:#fffbeb;transition:background-color .3s var(--ease-out)}.bg-hover-amber-50:hover{background-color:#fef3c7}.bg-amber-100{background-color:#fef3c7}.bg-hover-amber-100{background-color:#fef3c7;transition:background-color .3s var(--ease-out)}.bg-hover-amber-100:hover{background-color:#fde68a}.bg-amber-200{background-color:#fde68a}.bg-hover-amber-200{background-color:#fde68a;transition:background-color .3s var(--ease-out)}.bg-hover-amber-200:hover{background-color:#fcd34d}.bg-amber-300{background-color:#fcd34d}.bg-hover-amber-300{background-color:#fcd34d;transition:background-color .3s var(--ease-out)}.bg-hover-amber-300:hover{background-color:#fbbf24}.bg-amber-400{background-color:#fbbf24}.bg-hover-amber-400{background-color:#fbbf24;transition:background-color .3s var(--ease-out)}.bg-hover-amber-400:hover{background-color:#f59e0b}.bg-amber-500{background-color:#f59e0b}.bg-hover-amber-500{background-color:#f59e0b;transition:background-color .3s var(--ease-out)}.bg-hover-amber-500:hover{background-color:#d97706}.bg-amber-600{background-color:#d97706}.bg-hover-amber-600{background-color:#d97706;transition:background-color .3s var(--ease-out)}.bg-hover-amber-600:hover{background-color:#b45309}.bg-amber-700{background-color:#b45309}.bg-hover-amber-700{background-color:#b45309;transition:background-color .3s var(--ease-out)}.bg-hover-amber-700:hover{background-color:#92400e}.bg-amber-800{background-color:#92400e}.bg-hover-amber-800{background-color:#92400e;transition:background-color .3s var(--ease-out)}.bg-hover-amber-800:hover{background-color:#78350f}.bg-amber-900{background-color:#78350f}.bg-hover-amber-900{background-color:#78350f;transition:background-color .3s var(--ease-out)}.bg-hover-amber-900:hover{background-color:#92400e}.bg-gray-50{background-color:#fafafa}.bg-hover-gray-50{background-color:#fafafa;transition:background-color .3s var(--ease-out)}.bg-hover-gray-50:hover{background-color:#f4f4f5}.bg-gray-100{background-color:#f4f4f5}.bg-hover-gray-100{background-color:#f4f4f5;transition:background-color .3s var(--ease-out)}.bg-hover-gray-100:hover{background-color:#e4e4e7}.bg-gray-200{background-color:#e4e4e7}.bg-hover-gray-200{background-color:#e4e4e7;transition:background-color .3s var(--ease-out)}.bg-hover-gray-200:hover{background-color:#d4d4d8}.bg-gray-300{background-color:#d4d4d8}.bg-hover-gray-300{background-color:#d4d4d8;transition:background-color .3s var(--ease-out)}.bg-hover-gray-300:hover{background-color:#a1a1aa}.bg-gray-400{background-color:#a1a1aa}.bg-hover-gray-400{background-color:#a1a1aa;transition:background-color .3s var(--ease-out)}.bg-hover-gray-400:hover{background-color:#71717a}.bg-gray-500{background-color:#71717a}.bg-hover-gray-500{background-color:#71717a;transition:background-color .3s var(--ease-out)}.bg-hover-gray-500:hover{background-color:#52525b}.bg-gray-600{background-color:#52525b}.bg-hover-gray-600{background-color:#52525b;transition:background-color .3s var(--ease-out)}.bg-hover-gray-600:hover{background-color:#3f3f46}.bg-gray-700{background-color:#3f3f46}.bg-hover-gray-700{background-color:#3f3f46;transition:background-color .3s var(--ease-out)}.bg-hover-gray-700:hover{background-color:#27272a}.bg-gray-800{background-color:#27272a}.bg-hover-gray-800{background-color:#27272a;transition:background-color .3s var(--ease-out)}.bg-hover-gray-800:hover{background-color:#18181b}.bg-gray-900{background-color:#18181b}.bg-hover-gray-900{background-color:#18181b;transition:background-color .3s var(--ease-out)}.bg-hover-gray-900:hover{background-color:#27272a}.bg-cyan-50{background-color:#ecfeff}.bg-hover-cyan-50{background-color:#ecfeff;transition:background-color .3s var(--ease-out)}.bg-hover-cyan-50:hover{background-color:#cffafe}.bg-cyan-100{background-color:#cffafe}.bg-hover-cyan-100{background-color:#cffafe;transition:background-color .3s var(--ease-out)}.bg-hover-cyan-100:hover{background-color:#a5f3fc}.bg-cyan-200{background-color:#a5f3fc}.bg-hover-cyan-200{background-color:#a5f3fc;transition:background-color .3s var(--ease-out)}.bg-hover-cyan-200:hover{background-color:#67e8f9}.bg-cyan-300{background-color:#67e8f9}.bg-hover-cyan-300{background-color:#67e8f9;transition:background-color .3s var(--ease-out)}.bg-hover-cyan-300:hover{background-color:#22d3ee}.bg-cyan-400{background-color:#22d3ee}.bg-hover-cyan-400{background-color:#22d3ee;transition:background-color .3s var(--ease-out)}.bg-hover-cyan-400:hover{background-color:#06b6d4}.bg-cyan-500{background-color:#06b6d4}.bg-hover-cyan-500{background-color:#06b6d4;transition:background-color .3s var(--ease-out)}.bg-hover-cyan-500:hover{background-color:#0891b2}.bg-cyan-600{background-color:#0891b2}.bg-hover-cyan-600{background-color:#0891b2;transition:background-color .3s var(--ease-out)}.bg-hover-cyan-600:hover{background-color:#0e7490}.bg-cyan-700{background-color:#0e7490}.bg-hover-cyan-700{background-color:#0e7490;transition:background-color .3s var(--ease-out)}.bg-hover-cyan-700:hover{background-color:#155e75}.bg-cyan-800{background-color:#155e75}.bg-hover-cyan-800{background-color:#155e75;transition:background-color .3s var(--ease-out)}.bg-hover-cyan-800:hover{background-color:#164e63}.bg-cyan-900{background-color:#164e63}.bg-hover-cyan-900{background-color:#164e63;transition:background-color .3s var(--ease-out)}.bg-hover-cyan-900:hover{background-color:#155e75}.bg-emerald-50{background-color:#ecfdf5}.bg-hover-emerald-50{background-color:#ecfdf5;transition:background-color .3s var(--ease-out)}.bg-hover-emerald-50:hover{background-color:#d1fae5}.bg-emerald-100{background-color:#d1fae5}.bg-hover-emerald-100{background-color:#d1fae5;transition:background-color .3s var(--ease-out)}.bg-hover-emerald-100:hover{background-color:#a7f3d0}.bg-emerald-200{background-color:#a7f3d0}.bg-hover-emerald-200{background-color:#a7f3d0;transition:background-color .3s var(--ease-out)}.bg-hover-emerald-200:hover{background-color:#6ee7b7}.bg-emerald-300{background-color:#6ee7b7}.bg-hover-emerald-300{background-color:#6ee7b7;transition:background-color .3s var(--ease-out)}.bg-hover-emerald-300:hover{background-color:#34d399}.bg-emerald-400{background-color:#34d399}.bg-hover-emerald-400{background-color:#34d399;transition:background-color .3s var(--ease-out)}.bg-hover-emerald-400:hover{background-color:#10b981}.bg-emerald-500{background-color:#10b981}.bg-hover-emerald-500{background-color:#10b981;transition:background-color .3s var(--ease-out)}.bg-hover-emerald-500:hover{background-color:#059669}.bg-emerald-600{background-color:#059669}.bg-hover-emerald-600{background-color:#059669;transition:background-color .3s var(--ease-out)}.bg-hover-emerald-600:hover{background-color:#047857}.bg-emerald-700{background-color:#047857}.bg-hover-emerald-700{background-color:#047857;transition:background-color .3s var(--ease-out)}.bg-hover-emerald-700:hover{background-color:#065f46}.bg-emerald-800{background-color:#065f46}.bg-hover-emerald-800{background-color:#065f46;transition:background-color .3s var(--ease-out)}.bg-hover-emerald-800:hover{background-color:#064e3b}.bg-emerald-900{background-color:#064e3b}.bg-hover-emerald-900{background-color:#064e3b;transition:background-color .3s var(--ease-out)}.bg-hover-emerald-900:hover{background-color:#065f46}.bg-fuchsia-50{background-color:#fdf4ff}.bg-hover-fuchsia-50{background-color:#fdf4ff;transition:background-color .3s var(--ease-out)}.bg-hover-fuchsia-50:hover{background-color:#fae8ff}.bg-fuchsia-100{background-color:#fae8ff}.bg-hover-fuchsia-100{background-color:#fae8ff;transition:background-color .3s var(--ease-out)}.bg-hover-fuchsia-100:hover{background-color:#f5d0fe}.bg-fuchsia-200{background-color:#f5d0fe}.bg-hover-fuchsia-200{background-color:#f5d0fe;transition:background-color .3s var(--ease-out)}.bg-hover-fuchsia-200:hover{background-color:#f0abfc}.bg-fuchsia-300{background-color:#f0abfc}.bg-hover-fuchsia-300{background-color:#f0abfc;transition:background-color .3s var(--ease-out)}.bg-hover-fuchsia-300:hover{background-color:#e879f9}.bg-fuchsia-400{background-color:#e879f9}.bg-hover-fuchsia-400{background-color:#e879f9;transition:background-color .3s var(--ease-out)}.bg-hover-fuchsia-400:hover{background-color:#d946ef}.bg-fuchsia-500{background-color:#d946ef}.bg-hover-fuchsia-500{background-color:#d946ef;transition:background-color .3s var(--ease-out)}.bg-hover-fuchsia-500:hover{background-color:#c026d3}.bg-fuchsia-600{background-color:#c026d3}.bg-hover-fuchsia-600{background-color:#c026d3;transition:background-color .3s var(--ease-out)}.bg-hover-fuchsia-600:hover{background-color:#a21caf}.bg-fuchsia-700{background-color:#a21caf}.bg-hover-fuchsia-700{background-color:#a21caf;transition:background-color .3s var(--ease-out)}.bg-hover-fuchsia-700:hover{background-color:#86198f}.bg-fuchsia-800{background-color:#86198f}.bg-hover-fuchsia-800{background-color:#86198f;transition:background-color .3s var(--ease-out)}.bg-hover-fuchsia-800:hover{background-color:#701a75}.bg-fuchsia-900{background-color:#701a75}.bg-hover-fuchsia-900{background-color:#701a75;transition:background-color .3s var(--ease-out)}.bg-hover-fuchsia-900:hover{background-color:#86198f}.bg-green-50{background-color:#f0fdf4}.bg-hover-green-50{background-color:#f0fdf4;transition:background-color .3s var(--ease-out)}.bg-hover-green-50:hover{background-color:#dcfce7}.bg-green-100{background-color:#dcfce7}.bg-hover-green-100{background-color:#dcfce7;transition:background-color .3s var(--ease-out)}.bg-hover-green-100:hover{background-color:#bbf7d0}.bg-green-200{background-color:#bbf7d0}.bg-hover-green-200{background-color:#bbf7d0;transition:background-color .3s var(--ease-out)}.bg-hover-green-200:hover{background-color:#86efac}.bg-green-300{background-color:#86efac}.bg-hover-green-300{background-color:#86efac;transition:background-color .3s var(--ease-out)}.bg-hover-green-300:hover{background-color:#4ade80}.bg-green-400{background-color:#4ade80}.bg-hover-green-400{background-color:#4ade80;transition:background-color .3s var(--ease-out)}.bg-hover-green-400:hover{background-color:#22c55e}.bg-green-500{background-color:#22c55e}.bg-hover-green-500{background-color:#22c55e;transition:background-color .3s var(--ease-out)}.bg-hover-green-500:hover{background-color:#16a34a}.bg-green-600{background-color:#16a34a}.bg-hover-green-600{background-color:#16a34a;transition:background-color .3s var(--ease-out)}.bg-hover-green-600:hover{background-color:#15803d}.bg-green-700{background-color:#15803d}.bg-hover-green-700{background-color:#15803d;transition:background-color .3s var(--ease-out)}.bg-hover-green-700:hover{background-color:#166534}.bg-green-800{background-color:#166534}.bg-hover-green-800{background-color:#166534;transition:background-color .3s var(--ease-out)}.bg-hover-green-800:hover{background-color:#14532d}.bg-green-900{background-color:#14532d}.bg-hover-green-900{background-color:#14532d;transition:background-color .3s var(--ease-out)}.bg-hover-green-900:hover{background-color:#166534}.bg-indigo-50{background-color:#eef2ff}.bg-hover-indigo-50{background-color:#eef2ff;transition:background-color .3s var(--ease-out)}.bg-hover-indigo-50:hover{background-color:#e0e7ff}.bg-indigo-100{background-color:#e0e7ff}.bg-hover-indigo-100{background-color:#e0e7ff;transition:background-color .3s var(--ease-out)}.bg-hover-indigo-100:hover{background-color:#c7d2fe}.bg-indigo-200{background-color:#c7d2fe}.bg-hover-indigo-200{background-color:#c7d2fe;transition:background-color .3s var(--ease-out)}.bg-hover-indigo-200:hover{background-color:#a5b4fc}.bg-indigo-300{background-color:#a5b4fc}.bg-hover-indigo-300{background-color:#a5b4fc;transition:background-color .3s var(--ease-out)}.bg-hover-indigo-300:hover{background-color:#818cf8}.bg-indigo-400{background-color:#818cf8}.bg-hover-indigo-400{background-color:#818cf8;transition:background-color .3s var(--ease-out)}.bg-hover-indigo-400:hover{background-color:#6366f1}.bg-indigo-500{background-color:#6366f1}.bg-hover-indigo-500{background-color:#6366f1;transition:background-color .3s var(--ease-out)}.bg-hover-indigo-500:hover{background-color:#4f46e5}.bg-indigo-600{background-color:#4f46e5}.bg-hover-indigo-600{background-color:#4f46e5;transition:background-color .3s var(--ease-out)}.bg-hover-indigo-600:hover{background-color:#4338ca}.bg-indigo-700{background-color:#4338ca}.bg-hover-indigo-700{background-color:#4338ca;transition:background-color .3s var(--ease-out)}.bg-hover-indigo-700:hover{background-color:#3730a3}.bg-indigo-800{background-color:#3730a3}.bg-hover-indigo-800{background-color:#3730a3;transition:background-color .3s var(--ease-out)}.bg-hover-indigo-800:hover{background-color:#312e81}.bg-indigo-900{background-color:#312e81}.bg-hover-indigo-900{background-color:#312e81;transition:background-color .3s var(--ease-out)}.bg-hover-indigo-900:hover{background-color:#3730a3}.bg-orange-50{background-color:#fff7ed}.bg-hover-orange-50{background-color:#fff7ed;transition:background-color .3s var(--ease-out)}.bg-hover-orange-50:hover{background-color:#ffedd5}.bg-orange-100{background-color:#ffedd5}.bg-hover-orange-100{background-color:#ffedd5;transition:background-color .3s var(--ease-out)}.bg-hover-orange-100:hover{background-color:#fed7aa}.bg-orange-200{background-color:#fed7aa}.bg-hover-orange-200{background-color:#fed7aa;transition:background-color .3s var(--ease-out)}.bg-hover-orange-200:hover{background-color:#fdba74}.bg-orange-300{background-color:#fdba74}.bg-hover-orange-300{background-color:#fdba74;transition:background-color .3s var(--ease-out)}.bg-hover-orange-300:hover{background-color:#fb923c}.bg-orange-400{background-color:#fb923c}.bg-hover-orange-400{background-color:#fb923c;transition:background-color .3s var(--ease-out)}.bg-hover-orange-400:hover{background-color:#f97316}.bg-orange-500{background-color:#f97316}.bg-hover-orange-500{background-color:#f97316;transition:background-color .3s var(--ease-out)}.bg-hover-orange-500:hover{background-color:#ea580c}.bg-orange-600{background-color:#ea580c}.bg-hover-orange-600{background-color:#ea580c;transition:background-color .3s var(--ease-out)}.bg-hover-orange-600:hover{background-color:#c2410c}.bg-orange-700{background-color:#c2410c}.bg-hover-orange-700{background-color:#c2410c;transition:background-color .3s var(--ease-out)}.bg-hover-orange-700:hover{background-color:#9a3412}.bg-orange-800{background-color:#9a3412}.bg-hover-orange-800{background-color:#9a3412;transition:background-color .3s var(--ease-out)}.bg-hover-orange-800:hover{background-color:#7c2d12}.bg-orange-900{background-color:#7c2d12}.bg-hover-orange-900{background-color:#7c2d12;transition:background-color .3s var(--ease-out)}.bg-hover-orange-900:hover{background-color:#9a3412}.bg-lime-50{background-color:#f7fee7}.bg-hover-lime-50{background-color:#f7fee7;transition:background-color .3s var(--ease-out)}.bg-hover-lime-50:hover{background-color:#ecfccb}.bg-lime-100{background-color:#ecfccb}.bg-hover-lime-100{background-color:#ecfccb;transition:background-color .3s var(--ease-out)}.bg-hover-lime-100:hover{background-color:#d9f99d}.bg-lime-200{background-color:#d9f99d}.bg-hover-lime-200{background-color:#d9f99d;transition:background-color .3s var(--ease-out)}.bg-hover-lime-200:hover{background-color:#bef264}.bg-lime-300{background-color:#bef264}.bg-hover-lime-300{background-color:#bef264;transition:background-color .3s var(--ease-out)}.bg-hover-lime-300:hover{background-color:#a3e635}.bg-lime-400{background-color:#a3e635}.bg-hover-lime-400{background-color:#a3e635;transition:background-color .3s var(--ease-out)}.bg-hover-lime-400:hover{background-color:#84cc16}.bg-lime-500{background-color:#84cc16}.bg-hover-lime-500{background-color:#84cc16;transition:background-color .3s var(--ease-out)}.bg-hover-lime-500:hover{background-color:#65a30d}.bg-lime-600{background-color:#65a30d}.bg-hover-lime-600{background-color:#65a30d;transition:background-color .3s var(--ease-out)}.bg-hover-lime-600:hover{background-color:#4d7c0f}.bg-lime-700{background-color:#4d7c0f}.bg-hover-lime-700{background-color:#4d7c0f;transition:background-color .3s var(--ease-out)}.bg-hover-lime-700:hover{background-color:#3f6212}.bg-lime-800{background-color:#3f6212}.bg-hover-lime-800{background-color:#3f6212;transition:background-color .3s var(--ease-out)}.bg-hover-lime-800:hover{background-color:#365314}.bg-lime-900{background-color:#365314}.bg-hover-lime-900{background-color:#365314;transition:background-color .3s var(--ease-out)}.bg-hover-lime-900:hover{background-color:#3f6212}.bg-red-50{background-color:#fef2f2}.bg-hover-red-50{background-color:#fef2f2;transition:background-color .3s var(--ease-out)}.bg-hover-red-50:hover{background-color:#fee2e2}.bg-red-100{background-color:#fee2e2}.bg-hover-red-100{background-color:#fee2e2;transition:background-color .3s var(--ease-out)}.bg-hover-red-100:hover{background-color:#fecaca}.bg-red-200{background-color:#fecaca}.bg-hover-red-200{background-color:#fecaca;transition:background-color .3s var(--ease-out)}.bg-hover-red-200:hover{background-color:#fca5a5}.bg-red-300{background-color:#fca5a5}.bg-hover-red-300{background-color:#fca5a5;transition:background-color .3s var(--ease-out)}.bg-hover-red-300:hover{background-color:#f87171}.bg-red-400{background-color:#f87171}.bg-hover-red-400{background-color:#f87171;transition:background-color .3s var(--ease-out)}.bg-hover-red-400:hover{background-color:#ef4444}.bg-red-500{background-color:#ef4444}.bg-hover-red-500{background-color:#ef4444;transition:background-color .3s var(--ease-out)}.bg-hover-red-500:hover{background-color:#dc2626}.bg-red-600{background-color:#dc2626}.bg-hover-red-600{background-color:#dc2626;transition:background-color .3s var(--ease-out)}.bg-hover-red-600:hover{background-color:#b91c1c}.bg-red-700{background-color:#b91c1c}.bg-hover-red-700{background-color:#b91c1c;transition:background-color .3s var(--ease-out)}.bg-hover-red-700:hover{background-color:#991b1b}.bg-red-800{background-color:#991b1b}.bg-hover-red-800{background-color:#991b1b;transition:background-color .3s var(--ease-out)}.bg-hover-red-800:hover{background-color:#7f1d1d}.bg-red-900{background-color:#7f1d1d}.bg-hover-red-900{background-color:#7f1d1d;transition:background-color .3s var(--ease-out)}.bg-hover-red-900:hover{background-color:#991b1b}.bg-sky-50{background-color:#f0f9ff}.bg-hover-sky-50{background-color:#f0f9ff;transition:background-color .3s var(--ease-out)}.bg-hover-sky-50:hover{background-color:#e0f2fe}.bg-sky-100{background-color:#e0f2fe}.bg-hover-sky-100{background-color:#e0f2fe;transition:background-color .3s var(--ease-out)}.bg-hover-sky-100:hover{background-color:#bae6fd}.bg-sky-200{background-color:#bae6fd}.bg-hover-sky-200{background-color:#bae6fd;transition:background-color .3s var(--ease-out)}.bg-hover-sky-200:hover{background-color:#7dd3fc}.bg-sky-300{background-color:#7dd3fc}.bg-hover-sky-300{background-color:#7dd3fc;transition:background-color .3s var(--ease-out)}.bg-hover-sky-300:hover{background-color:#38bdf8}.bg-sky-400{background-color:#38bdf8}.bg-hover-sky-400{background-color:#38bdf8;transition:background-color .3s var(--ease-out)}.bg-hover-sky-400:hover{background-color:#0ea5e9}.bg-sky-500{background-color:#0ea5e9}.bg-hover-sky-500{background-color:#0ea5e9;transition:background-color .3s var(--ease-out)}.bg-hover-sky-500:hover{background-color:#0284c7}.bg-sky-600{background-color:#0284c7}.bg-hover-sky-600{background-color:#0284c7;transition:background-color .3s var(--ease-out)}.bg-hover-sky-600:hover{background-color:#0369a1}.bg-sky-700{background-color:#0369a1}.bg-hover-sky-700{background-color:#0369a1;transition:background-color .3s var(--ease-out)}.bg-hover-sky-700:hover{background-color:#075985}.bg-sky-800{background-color:#075985}.bg-hover-sky-800{background-color:#075985;transition:background-color .3s var(--ease-out)}.bg-hover-sky-800:hover{background-color:#0c4a6e}.bg-sky-900{background-color:#0c4a6e}.bg-hover-sky-900{background-color:#0c4a6e;transition:background-color .3s var(--ease-out)}.bg-hover-sky-900:hover{background-color:#075985}.bg-teal-50{background-color:#f0fdfa}.bg-hover-teal-50{background-color:#f0fdfa;transition:background-color .3s var(--ease-out)}.bg-hover-teal-50:hover{background-color:#ccfbf1}.bg-teal-100{background-color:#ccfbf1}.bg-hover-teal-100{background-color:#ccfbf1;transition:background-color .3s var(--ease-out)}.bg-hover-teal-100:hover{background-color:#99f6e4}.bg-teal-200{background-color:#99f6e4}.bg-hover-teal-200{background-color:#99f6e4;transition:background-color .3s var(--ease-out)}.bg-hover-teal-200:hover{background-color:#5eead4}.bg-teal-300{background-color:#5eead4}.bg-hover-teal-300{background-color:#5eead4;transition:background-color .3s var(--ease-out)}.bg-hover-teal-300:hover{background-color:#2dd4bf}.bg-teal-400{background-color:#2dd4bf}.bg-hover-teal-400{background-color:#2dd4bf;transition:background-color .3s var(--ease-out)}.bg-hover-teal-400:hover{background-color:#14b8a6}.bg-teal-500{background-color:#14b8a6}.bg-hover-teal-500{background-color:#14b8a6;transition:background-color .3s var(--ease-out)}.bg-hover-teal-500:hover{background-color:#0d9488}.bg-teal-600{background-color:#0d9488}.bg-hover-teal-600{background-color:#0d9488;transition:background-color .3s var(--ease-out)}.bg-hover-teal-600:hover{background-color:#0f766e}.bg-teal-700{background-color:#0f766e}.bg-hover-teal-700{background-color:#0f766e;transition:background-color .3s var(--ease-out)}.bg-hover-teal-700:hover{background-color:#115e59}.bg-teal-800{background-color:#115e59}.bg-hover-teal-800{background-color:#115e59;transition:background-color .3s var(--ease-out)}.bg-hover-teal-800:hover{background-color:#134e4a}.bg-teal-900{background-color:#134e4a}.bg-hover-teal-900{background-color:#134e4a;transition:background-color .3s var(--ease-out)}.bg-hover-teal-900:hover{background-color:#115e59}.bg-violet-50{background-color:#f5f3ff}.bg-hover-violet-50{background-color:#f5f3ff;transition:background-color .3s var(--ease-out)}.bg-hover-violet-50:hover{background-color:#ede9fe}.bg-violet-100{background-color:#ede9fe}.bg-hover-violet-100{background-color:#ede9fe;transition:background-color .3s var(--ease-out)}.bg-hover-violet-100:hover{background-color:#ddd6fe}.bg-violet-200{background-color:#ddd6fe}.bg-hover-violet-200{background-color:#ddd6fe;transition:background-color .3s var(--ease-out)}.bg-hover-violet-200:hover{background-color:#c4b5fd}.bg-violet-300{background-color:#c4b5fd}.bg-hover-violet-300{background-color:#c4b5fd;transition:background-color .3s var(--ease-out)}.bg-hover-violet-300:hover{background-color:#a78bfa}.bg-violet-400{background-color:#a78bfa}.bg-hover-violet-400{background-color:#a78bfa;transition:background-color .3s var(--ease-out)}.bg-hover-violet-400:hover{background-color:#8b5cf6}.bg-violet-500{background-color:#8b5cf6}.bg-hover-violet-500{background-color:#8b5cf6;transition:background-color .3s var(--ease-out)}.bg-hover-violet-500:hover{background-color:#7c3aed}.bg-violet-600{background-color:#7c3aed}.bg-hover-violet-600{background-color:#7c3aed;transition:background-color .3s var(--ease-out)}.bg-hover-violet-600:hover{background-color:#6d28d9}.bg-violet-700{background-color:#6d28d9}.bg-hover-violet-700{background-color:#6d28d9;transition:background-color .3s var(--ease-out)}.bg-hover-violet-700:hover{background-color:#5b21b6}.bg-violet-800{background-color:#5b21b6}.bg-hover-violet-800{background-color:#5b21b6;transition:background-color .3s var(--ease-out)}.bg-hover-violet-800:hover{background-color:#4c1d95}.bg-violet-900{background-color:#4c1d95}.bg-hover-violet-900{background-color:#4c1d95;transition:background-color .3s var(--ease-out)}.bg-hover-violet-900:hover{background-color:#5b21b6}.bg-rose-50{background-color:#fff1f2}.bg-hover-rose-50{background-color:#fff1f2;transition:background-color .3s var(--ease-out)}.bg-hover-rose-50:hover{background-color:#ffe4e6}.bg-rose-100{background-color:#ffe4e6}.bg-hover-rose-100{background-color:#ffe4e6;transition:background-color .3s var(--ease-out)}.bg-hover-rose-100:hover{background-color:#fecdd3}.bg-rose-200{background-color:#fecdd3}.bg-hover-rose-200{background-color:#fecdd3;transition:background-color .3s var(--ease-out)}.bg-hover-rose-200:hover{background-color:#fda4af}.bg-rose-300{background-color:#fda4af}.bg-hover-rose-300{background-color:#fda4af;transition:background-color .3s var(--ease-out)}.bg-hover-rose-300:hover{background-color:#fb7185}.bg-rose-400{background-color:#fb7185}.bg-hover-rose-400{background-color:#fb7185;transition:background-color .3s var(--ease-out)}.bg-hover-rose-400:hover{background-color:#f43f5e}.bg-rose-500{background-color:#f43f5e}.bg-hover-rose-500{background-color:#f43f5e;transition:background-color .3s var(--ease-out)}.bg-hover-rose-500:hover{background-color:#e11d48}.bg-rose-600{background-color:#e11d48}.bg-hover-rose-600{background-color:#e11d48;transition:background-color .3s var(--ease-out)}.bg-hover-rose-600:hover{background-color:#be123c}.bg-rose-700{background-color:#be123c}.bg-hover-rose-700{background-color:#be123c;transition:background-color .3s var(--ease-out)}.bg-hover-rose-700:hover{background-color:#9f1239}.bg-rose-800{background-color:#9f1239}.bg-hover-rose-800{background-color:#9f1239;transition:background-color .3s var(--ease-out)}.bg-hover-rose-800:hover{background-color:#881337}.bg-rose-900{background-color:#881337}.bg-hover-rose-900{background-color:#881337;transition:background-color .3s var(--ease-out)}.bg-hover-rose-900:hover{background-color:#9f1239}.color-icon{color:var(--icon-contrast)}.color-info{color:var(--color-text-info)}.m-4xs{margin:var(--spacing-4xs, 0.125em) !important}.-m-4xs{margin:calc(var(--spacing-4xs, 0.125em) * -1) !important}.mx-4xs{margin-right:var(--spacing-4xs, 0.125em) !important;margin-left:var(--spacing-4xs, 0.125em) !important}.-mx-4xs{margin-right:calc(var(--spacing-4xs, 0.125em) * -1) !important;margin-left:calc(var(--spacing-4xs, 0.125em) * -1) !important}.my-4xs{margin-top:var(--spacing-4xs, 0.125em) !important;margin-bottom:var(--spacing-4xs, 0.125em) !important}.-my-4xs{margin-top:calc(var(--spacing-4xs, 0.125em) * -1) !important;margin-bottom:calc(var(--spacing-4xs, 0.125em) * -1) !important}.mt-4xs{margin-top:var(--spacing-4xs, 0.125em) !important}.-mt-4xs{margin-top:calc(\n        var(--spacing-4xs, 0.125em) * -1\n      ) !important}.mb-4xs{margin-bottom:var(--spacing-4xs, 0.125em) !important}.-mb-4xs{margin-bottom:calc(\n        var(--spacing-4xs, 0.125em) * -1\n      ) !important}.ml-4xs{margin-left:var(--spacing-4xs, 0.125em) !important}.-ml-4xs{margin-left:calc(\n        var(--spacing-4xs, 0.125em) * -1\n      ) !important}.mr-4xs{margin-right:var(--spacing-4xs, 0.125em) !important}.-mr-4xs{margin-right:calc(\n        var(--spacing-4xs, 0.125em) * -1\n      ) !important}.m-3xs{margin:var(--spacing-3xs, 0.25em) !important}.-m-3xs{margin:calc(var(--spacing-3xs, 0.25em) * -1) !important}.mx-3xs{margin-right:var(--spacing-3xs, 0.25em) !important;margin-left:var(--spacing-3xs, 0.25em) !important}.-mx-3xs{margin-right:calc(var(--spacing-3xs, 0.25em) * -1) !important;margin-left:calc(var(--spacing-3xs, 0.25em) * -1) !important}.my-3xs{margin-top:var(--spacing-3xs, 0.25em) !important;margin-bottom:var(--spacing-3xs, 0.25em) !important}.-my-3xs{margin-top:calc(var(--spacing-3xs, 0.25em) * -1) !important;margin-bottom:calc(var(--spacing-3xs, 0.25em) * -1) !important}.mt-3xs{margin-top:var(--spacing-3xs, 0.25em) !important}.-mt-3xs{margin-top:calc(\n        var(--spacing-3xs, 0.25em) * -1\n      ) !important}.mb-3xs{margin-bottom:var(--spacing-3xs, 0.25em) !important}.-mb-3xs{margin-bottom:calc(\n        var(--spacing-3xs, 0.25em) * -1\n      ) !important}.ml-3xs{margin-left:var(--spacing-3xs, 0.25em) !important}.-ml-3xs{margin-left:calc(\n        var(--spacing-3xs, 0.25em) * -1\n      ) !important}.mr-3xs{margin-right:var(--spacing-3xs, 0.25em) !important}.-mr-3xs{margin-right:calc(\n        var(--spacing-3xs, 0.25em) * -1\n      ) !important}.m-2xs{margin:var(--spacing-2xs, 0.375em) !important}.-m-2xs{margin:calc(var(--spacing-2xs, 0.375em) * -1) !important}.mx-2xs{margin-right:var(--spacing-2xs, 0.375em) !important;margin-left:var(--spacing-2xs, 0.375em) !important}.-mx-2xs{margin-right:calc(var(--spacing-2xs, 0.375em) * -1) !important;margin-left:calc(var(--spacing-2xs, 0.375em) * -1) !important}.my-2xs{margin-top:var(--spacing-2xs, 0.375em) !important;margin-bottom:var(--spacing-2xs, 0.375em) !important}.-my-2xs{margin-top:calc(var(--spacing-2xs, 0.375em) * -1) !important;margin-bottom:calc(var(--spacing-2xs, 0.375em) * -1) !important}.mt-2xs{margin-top:var(--spacing-2xs, 0.375em) !important}.-mt-2xs{margin-top:calc(\n        var(--spacing-2xs, 0.375em) * -1\n      ) !important}.mb-2xs{margin-bottom:var(--spacing-2xs, 0.375em) !important}.-mb-2xs{margin-bottom:calc(\n        var(--spacing-2xs, 0.375em) * -1\n      ) !important}.ml-2xs{margin-left:var(--spacing-2xs, 0.375em) !important}.-ml-2xs{margin-left:calc(\n        var(--spacing-2xs, 0.375em) * -1\n      ) !important}.mr-2xs{margin-right:var(--spacing-2xs, 0.375em) !important}.-mr-2xs{margin-right:calc(\n        var(--spacing-2xs, 0.375em) * -1\n      ) !important}.m-xs{margin:var(--spacing-xs, 0.5em) !important}.-m-xs{margin:calc(var(--spacing-xs, 0.5em) * -1) !important}.mx-xs{margin-right:var(--spacing-xs, 0.5em) !important;margin-left:var(--spacing-xs, 0.5em) !important}.-mx-xs{margin-right:calc(var(--spacing-xs, 0.5em) * -1) !important;margin-left:calc(var(--spacing-xs, 0.5em) * -1) !important}.my-xs{margin-top:var(--spacing-xs, 0.5em) !important;margin-bottom:var(--spacing-xs, 0.5em) !important}.-my-xs{margin-top:calc(var(--spacing-xs, 0.5em) * -1) !important;margin-bottom:calc(var(--spacing-xs, 0.5em) * -1) !important}.mt-xs{margin-top:var(--spacing-xs, 0.5em) !important}.-mt-xs{margin-top:calc(\n        var(--spacing-xs, 0.5em) * -1\n      ) !important}.mb-xs{margin-bottom:var(--spacing-xs, 0.5em) !important}.-mb-xs{margin-bottom:calc(\n        var(--spacing-xs, 0.5em) * -1\n      ) !important}.ml-xs{margin-left:var(--spacing-xs, 0.5em) !important}.-ml-xs{margin-left:calc(\n        var(--spacing-xs, 0.5em) * -1\n      ) !important}.mr-xs{margin-right:var(--spacing-xs, 0.5em) !important}.-mr-xs{margin-right:calc(\n        var(--spacing-xs, 0.5em) * -1\n      ) !important}.m-sm{margin:var(--spacing-sm, 0.75em) !important}.-m-sm{margin:calc(var(--spacing-sm, 0.75em) * -1) !important}.mx-sm{margin-right:var(--spacing-sm, 0.75em) !important;margin-left:var(--spacing-sm, 0.75em) !important}.-mx-sm{margin-right:calc(var(--spacing-sm, 0.75em) * -1) !important;margin-left:calc(var(--spacing-sm, 0.75em) * -1) !important}.my-sm{margin-top:var(--spacing-sm, 0.75em) !important;margin-bottom:var(--spacing-sm, 0.75em) !important}.-my-sm{margin-top:calc(var(--spacing-sm, 0.75em) * -1) !important;margin-bottom:calc(var(--spacing-sm, 0.75em) * -1) !important}.mt-sm{margin-top:var(--spacing-sm, 0.75em) !important}.-mt-sm{margin-top:calc(\n        var(--spacing-sm, 0.75em) * -1\n      ) !important}.mb-sm{margin-bottom:var(--spacing-sm, 0.75em) !important}.-mb-sm{margin-bottom:calc(\n        var(--spacing-sm, 0.75em) * -1\n      ) !important}.ml-sm{margin-left:var(--spacing-sm, 0.75em) !important}.-ml-sm{margin-left:calc(\n        var(--spacing-sm, 0.75em) * -1\n      ) !important}.mr-sm{margin-right:var(--spacing-sm, 0.75em) !important}.-mr-sm{margin-right:calc(\n        var(--spacing-sm, 0.75em) * -1\n      ) !important}.m-md{margin:var(--spacing-md, 1.25em) !important}.-m-md{margin:calc(var(--spacing-md, 1.25em) * -1) !important}.mx-md{margin-right:var(--spacing-md, 1.25em) !important;margin-left:var(--spacing-md, 1.25em) !important}.-mx-md{margin-right:calc(var(--spacing-md, 1.25em) * -1) !important;margin-left:calc(var(--spacing-md, 1.25em) * -1) !important}.my-md{margin-top:var(--spacing-md, 1.25em) !important;margin-bottom:var(--spacing-md, 1.25em) !important}.-my-md{margin-top:calc(var(--spacing-md, 1.25em) * -1) !important;margin-bottom:calc(var(--spacing-md, 1.25em) * -1) !important}.mt-md{margin-top:var(--spacing-md, 1.25em) !important}.-mt-md{margin-top:calc(\n        var(--spacing-md, 1.25em) * -1\n      ) !important}.mb-md{margin-bottom:var(--spacing-md, 1.25em) !important}.-mb-md{margin-bottom:calc(\n        var(--spacing-md, 1.25em) * -1\n      ) !important}.ml-md{margin-left:var(--spacing-md, 1.25em) !important}.-ml-md{margin-left:calc(\n        var(--spacing-md, 1.25em) * -1\n      ) !important}.mr-md{margin-right:var(--spacing-md, 1.25em) !important}.-mr-md{margin-right:calc(\n        var(--spacing-md, 1.25em) * -1\n      ) !important}.m-lg{margin:var(--spacing-lg, 2em) !important}.-m-lg{margin:calc(var(--spacing-lg, 2em) * -1) !important}.mx-lg{margin-right:var(--spacing-lg, 2em) !important;margin-left:var(--spacing-lg, 2em) !important}.-mx-lg{margin-right:calc(var(--spacing-lg, 2em) * -1) !important;margin-left:calc(var(--spacing-lg, 2em) * -1) !important}.my-lg{margin-top:var(--spacing-lg, 2em) !important;margin-bottom:var(--spacing-lg, 2em) !important}.-my-lg{margin-top:calc(var(--spacing-lg, 2em) * -1) !important;margin-bottom:calc(var(--spacing-lg, 2em) * -1) !important}.mt-lg{margin-top:var(--spacing-lg, 2em) !important}.-mt-lg{margin-top:calc(\n        var(--spacing-lg, 2em) * -1\n      ) !important}.mb-lg{margin-bottom:var(--spacing-lg, 2em) !important}.-mb-lg{margin-bottom:calc(\n        var(--spacing-lg, 2em) * -1\n      ) !important}.ml-lg{margin-left:var(--spacing-lg, 2em) !important}.-ml-lg{margin-left:calc(\n        var(--spacing-lg, 2em) * -1\n      ) !important}.mr-lg{margin-right:var(--spacing-lg, 2em) !important}.-mr-lg{margin-right:calc(\n        var(--spacing-lg, 2em) * -1\n      ) !important}.m-xl{margin:var(--spacing-xl, 3.25em) !important}.-m-xl{margin:calc(var(--spacing-xl, 3.25em) * -1) !important}.mx-xl{margin-right:var(--spacing-xl, 3.25em) !important;margin-left:var(--spacing-xl, 3.25em) !important}.-mx-xl{margin-right:calc(var(--spacing-xl, 3.25em) * -1) !important;margin-left:calc(var(--spacing-xl, 3.25em) * -1) !important}.my-xl{margin-top:var(--spacing-xl, 3.25em) !important;margin-bottom:var(--spacing-xl, 3.25em) !important}.-my-xl{margin-top:calc(var(--spacing-xl, 3.25em) * -1) !important;margin-bottom:calc(var(--spacing-xl, 3.25em) * -1) !important}.mt-xl{margin-top:var(--spacing-xl, 3.25em) !important}.-mt-xl{margin-top:calc(\n        var(--spacing-xl, 3.25em) * -1\n      ) !important}.mb-xl{margin-bottom:var(--spacing-xl, 3.25em) !important}.-mb-xl{margin-bottom:calc(\n        var(--spacing-xl, 3.25em) * -1\n      ) !important}.ml-xl{margin-left:var(--spacing-xl, 3.25em) !important}.-ml-xl{margin-left:calc(\n        var(--spacing-xl, 3.25em) * -1\n      ) !important}.mr-xl{margin-right:var(--spacing-xl, 3.25em) !important}.-mr-xl{margin-right:calc(\n        var(--spacing-xl, 3.25em) * -1\n      ) !important}.m-2xl{margin:var(--spacing-2xl, 5.25em) !important}.-m-2xl{margin:calc(var(--spacing-2xl, 5.25em) * -1) !important}.mx-2xl{margin-right:var(--spacing-2xl, 5.25em) !important;margin-left:var(--spacing-2xl, 5.25em) !important}.-mx-2xl{margin-right:calc(var(--spacing-2xl, 5.25em) * -1) !important;margin-left:calc(var(--spacing-2xl, 5.25em) * -1) !important}.my-2xl{margin-top:var(--spacing-2xl, 5.25em) !important;margin-bottom:var(--spacing-2xl, 5.25em) !important}.-my-2xl{margin-top:calc(var(--spacing-2xl, 5.25em) * -1) !important;margin-bottom:calc(var(--spacing-2xl, 5.25em) * -1) !important}.mt-2xl{margin-top:var(--spacing-2xl, 5.25em) !important}.-mt-2xl{margin-top:calc(\n        var(--spacing-2xl, 5.25em) * -1\n      ) !important}.mb-2xl{margin-bottom:var(--spacing-2xl, 5.25em) !important}.-mb-2xl{margin-bottom:calc(\n        var(--spacing-2xl, 5.25em) * -1\n      ) !important}.ml-2xl{margin-left:var(--spacing-2xl, 5.25em) !important}.-ml-2xl{margin-left:calc(\n        var(--spacing-2xl, 5.25em) * -1\n      ) !important}.mr-2xl{margin-right:var(--spacing-2xl, 5.25em) !important}.-mr-2xl{margin-right:calc(\n        var(--spacing-2xl, 5.25em) * -1\n      ) !important}.m-3xl{margin:var(--spacing-3xl, 8.5em) !important}.-m-3xl{margin:calc(var(--spacing-3xl, 8.5em) * -1) !important}.mx-3xl{margin-right:var(--spacing-3xl, 8.5em) !important;margin-left:var(--spacing-3xl, 8.5em) !important}.-mx-3xl{margin-right:calc(var(--spacing-3xl, 8.5em) * -1) !important;margin-left:calc(var(--spacing-3xl, 8.5em) * -1) !important}.my-3xl{margin-top:var(--spacing-3xl, 8.5em) !important;margin-bottom:var(--spacing-3xl, 8.5em) !important}.-my-3xl{margin-top:calc(var(--spacing-3xl, 8.5em) * -1) !important;margin-bottom:calc(var(--spacing-3xl, 8.5em) * -1) !important}.mt-3xl{margin-top:var(--spacing-3xl, 8.5em) !important}.-mt-3xl{margin-top:calc(\n        var(--spacing-3xl, 8.5em) * -1\n      ) !important}.mb-3xl{margin-bottom:var(--spacing-3xl, 8.5em) !important}.-mb-3xl{margin-bottom:calc(\n        var(--spacing-3xl, 8.5em) * -1\n      ) !important}.ml-3xl{margin-left:var(--spacing-3xl, 8.5em) !important}.-ml-3xl{margin-left:calc(\n        var(--spacing-3xl, 8.5em) * -1\n      ) !important}.mr-3xl{margin-right:var(--spacing-3xl, 8.5em) !important}.-mr-3xl{margin-right:calc(\n        var(--spacing-3xl, 8.5em) * -1\n      ) !important}.m-4xl{margin:var(--spacing-4xl, 13.75em) !important}.-m-4xl{margin:calc(var(--spacing-4xl, 13.75em) * -1) !important}.mx-4xl{margin-right:var(--spacing-4xl, 13.75em) !important;margin-left:var(--spacing-4xl, 13.75em) !important}.-mx-4xl{margin-right:calc(var(--spacing-4xl, 13.75em) * -1) !important;margin-left:calc(var(--spacing-4xl, 13.75em) * -1) !important}.my-4xl{margin-top:var(--spacing-4xl, 13.75em) !important;margin-bottom:var(--spacing-4xl, 13.75em) !important}.-my-4xl{margin-top:calc(var(--spacing-4xl, 13.75em) * -1) !important;margin-bottom:calc(var(--spacing-4xl, 13.75em) * -1) !important}.mt-4xl{margin-top:var(--spacing-4xl, 13.75em) !important}.-mt-4xl{margin-top:calc(\n        var(--spacing-4xl, 13.75em) * -1\n      ) !important}.mb-4xl{margin-bottom:var(--spacing-4xl, 13.75em) !important}.-mb-4xl{margin-bottom:calc(\n        var(--spacing-4xl, 13.75em) * -1\n      ) !important}.ml-4xl{margin-left:var(--spacing-4xl, 13.75em) !important}.-ml-4xl{margin-left:calc(\n        var(--spacing-4xl, 13.75em) * -1\n      ) !important}.mr-4xl{margin-right:var(--spacing-4xl, 13.75em) !important}.-mr-4xl{margin-right:calc(\n        var(--spacing-4xl, 13.75em) * -1\n      ) !important}.m-auto{margin:auto !important}.m-0{margin:0 !important}.mx-auto{margin-right:auto !important;margin-left:auto !important}.mx-0{margin-right:0 !important;margin-left:0 !important}.my-auto{margin-top:auto !important;margin-bottom:auto !important}.my-0{margin-top:0 !important;margin-bottom:0 !important}.mt-auto{margin-top:auto !important}.mt-0{margin-top:0 !important}.mb-auto{margin-bottom:auto !important}.mb-0{margin-bottom:0 !important}.ml-auto{margin-left:auto !important}.ml-0{margin-left:0 !important}.mr-auto{margin-right:auto !important}.mr-0{margin-right:0 !important}@media(min-width: 40rem){.mt-xl\\@sm{margin-top:var(--spacing-xl, 3.25em) !important}}.p-4xs{padding:var(--spacing-4xs, 0.125em) !important}.px-4xs{padding-right:var(--spacing-4xs, 0.125em) !important;padding-left:var(--spacing-4xs, 0.125em) !important}.py-4xs{padding-top:var(--spacing-4xs, 0.125em) !important;padding-bottom:var(--spacing-4xs, 0.125em) !important}.pt-4xs{padding-top:var(--spacing-4xs, 0.125em) !important}.pb-4xs{padding-bottom:var(--spacing-4xs, 0.125em) !important}.pl-4xs{padding-left:var(--spacing-4xs, 0.125em) !important}.pr-4xs{padding-right:var(--spacing-4xs, 0.125em) !important}.p-3xs{padding:var(--spacing-3xs, 0.25em) !important}.px-3xs{padding-right:var(--spacing-3xs, 0.25em) !important;padding-left:var(--spacing-3xs, 0.25em) !important}.py-3xs{padding-top:var(--spacing-3xs, 0.25em) !important;padding-bottom:var(--spacing-3xs, 0.25em) !important}.pt-3xs{padding-top:var(--spacing-3xs, 0.25em) !important}.pb-3xs{padding-bottom:var(--spacing-3xs, 0.25em) !important}.pl-3xs{padding-left:var(--spacing-3xs, 0.25em) !important}.pr-3xs{padding-right:var(--spacing-3xs, 0.25em) !important}.p-2xs{padding:var(--spacing-2xs, 0.375em) !important}.px-2xs{padding-right:var(--spacing-2xs, 0.375em) !important;padding-left:var(--spacing-2xs, 0.375em) !important}.py-2xs{padding-top:var(--spacing-2xs, 0.375em) !important;padding-bottom:var(--spacing-2xs, 0.375em) !important}.pt-2xs{padding-top:var(--spacing-2xs, 0.375em) !important}.pb-2xs{padding-bottom:var(--spacing-2xs, 0.375em) !important}.pl-2xs{padding-left:var(--spacing-2xs, 0.375em) !important}.pr-2xs{padding-right:var(--spacing-2xs, 0.375em) !important}.p-xs{padding:var(--spacing-xs, 0.5em) !important}.px-xs{padding-right:var(--spacing-xs, 0.5em) !important;padding-left:var(--spacing-xs, 0.5em) !important}.py-xs{padding-top:var(--spacing-xs, 0.5em) !important;padding-bottom:var(--spacing-xs, 0.5em) !important}.pt-xs{padding-top:var(--spacing-xs, 0.5em) !important}.pb-xs{padding-bottom:var(--spacing-xs, 0.5em) !important}.pl-xs{padding-left:var(--spacing-xs, 0.5em) !important}.pr-xs{padding-right:var(--spacing-xs, 0.5em) !important}.p-sm{padding:var(--spacing-sm, 0.75em) !important}.px-sm{padding-right:var(--spacing-sm, 0.75em) !important;padding-left:var(--spacing-sm, 0.75em) !important}.py-sm{padding-top:var(--spacing-sm, 0.75em) !important;padding-bottom:var(--spacing-sm, 0.75em) !important}.pt-sm{padding-top:var(--spacing-sm, 0.75em) !important}.pb-sm{padding-bottom:var(--spacing-sm, 0.75em) !important}.pl-sm{padding-left:var(--spacing-sm, 0.75em) !important}.pr-sm{padding-right:var(--spacing-sm, 0.75em) !important}.p-md{padding:var(--spacing-md, 1.25em) !important}.px-md{padding-right:var(--spacing-md, 1.25em) !important;padding-left:var(--spacing-md, 1.25em) !important}.py-md{padding-top:var(--spacing-md, 1.25em) !important;padding-bottom:var(--spacing-md, 1.25em) !important}.pt-md{padding-top:var(--spacing-md, 1.25em) !important}.pb-md{padding-bottom:var(--spacing-md, 1.25em) !important}.pl-md{padding-left:var(--spacing-md, 1.25em) !important}.pr-md{padding-right:var(--spacing-md, 1.25em) !important}.p-lg{padding:var(--spacing-lg, 2em) !important}.px-lg{padding-right:var(--spacing-lg, 2em) !important;padding-left:var(--spacing-lg, 2em) !important}.py-lg{padding-top:var(--spacing-lg, 2em) !important;padding-bottom:var(--spacing-lg, 2em) !important}.pt-lg{padding-top:var(--spacing-lg, 2em) !important}.pb-lg{padding-bottom:var(--spacing-lg, 2em) !important}.pl-lg{padding-left:var(--spacing-lg, 2em) !important}.pr-lg{padding-right:var(--spacing-lg, 2em) !important}.p-xl{padding:var(--spacing-xl, 3.25em) !important}.px-xl{padding-right:var(--spacing-xl, 3.25em) !important;padding-left:var(--spacing-xl, 3.25em) !important}.py-xl{padding-top:var(--spacing-xl, 3.25em) !important;padding-bottom:var(--spacing-xl, 3.25em) !important}.pt-xl{padding-top:var(--spacing-xl, 3.25em) !important}.pb-xl{padding-bottom:var(--spacing-xl, 3.25em) !important}.pl-xl{padding-left:var(--spacing-xl, 3.25em) !important}.pr-xl{padding-right:var(--spacing-xl, 3.25em) !important}.p-2xl{padding:var(--spacing-2xl, 5.25em) !important}.px-2xl{padding-right:var(--spacing-2xl, 5.25em) !important;padding-left:var(--spacing-2xl, 5.25em) !important}.py-2xl{padding-top:var(--spacing-2xl, 5.25em) !important;padding-bottom:var(--spacing-2xl, 5.25em) !important}.pt-2xl{padding-top:var(--spacing-2xl, 5.25em) !important}.pb-2xl{padding-bottom:var(--spacing-2xl, 5.25em) !important}.pl-2xl{padding-left:var(--spacing-2xl, 5.25em) !important}.pr-2xl{padding-right:var(--spacing-2xl, 5.25em) !important}.p-3xl{padding:var(--spacing-3xl, 8.5em) !important}.px-3xl{padding-right:var(--spacing-3xl, 8.5em) !important;padding-left:var(--spacing-3xl, 8.5em) !important}.py-3xl{padding-top:var(--spacing-3xl, 8.5em) !important;padding-bottom:var(--spacing-3xl, 8.5em) !important}.pt-3xl{padding-top:var(--spacing-3xl, 8.5em) !important}.pb-3xl{padding-bottom:var(--spacing-3xl, 8.5em) !important}.pl-3xl{padding-left:var(--spacing-3xl, 8.5em) !important}.pr-3xl{padding-right:var(--spacing-3xl, 8.5em) !important}.p-4xl{padding:var(--spacing-4xl, 13.75em) !important}.px-4xl{padding-right:var(--spacing-4xl, 13.75em) !important;padding-left:var(--spacing-4xl, 13.75em) !important}.py-4xl{padding-top:var(--spacing-4xl, 13.75em) !important;padding-bottom:var(--spacing-4xl, 13.75em) !important}.pt-4xl{padding-top:var(--spacing-4xl, 13.75em) !important}.pb-4xl{padding-bottom:var(--spacing-4xl, 13.75em) !important}.pl-4xl{padding-left:var(--spacing-4xl, 13.75em) !important}.pr-4xl{padding-right:var(--spacing-4xl, 13.75em) !important}.p-0{padding:0 !important}.px-0{padding-right:0 !important;padding-left:0 !important}.py-0{padding-top:0 !important;padding-bottom:0 !important}.pt-0{padding-top:0 !important}.pb-0{padding-bottom:0 !important}.pl-0{padding-left:0 !important}.pr-0{padding-right:0 !important}@media not all and (min-width: 40rem){.p-sm\\@\\!sm{padding:var(--spacing-sm, 0.75em) !important}}.w-auto{width:auto !important}.container{width:calc(100% - 2 * var(--spacing-md, 1.25em));margin-right:auto;margin-left:auto}.max-w-none{max-width:var(--max-w-none, none)}.max-w-0{max-width:var(--max-w-0, 0)}.max-w-4xs{max-width:var(--max-w-4xs, 20rem)}.max-w-3xs{max-width:var(--max-w-3xs, 26rem)}.max-w-2xs{max-width:var(--max-w-2xs, 32rem)}.max-w-xs{max-width:var(--max-w-xs, 38rem)}.max-w-sm{max-width:var(--max-w-sm, 48rem)}.max-w-md{max-width:var(--max-w-md, 64rem)}.max-w-lg{max-width:var(--max-w-lg, 80rem)}.max-w-xl{max-width:var(--max-w-xl, 90rem)}.max-w-2xl{max-width:var(--max-w-2xl, 100rem)}.max-w-3xl{max-width:var(--max-w-3xl, 120rem)}.max-w-4xl{max-width:var(--max-w-4xl, 150rem)}.max-w-prose{max-width:var(--max-w-prose, 65ch)}.max-w-full{max-width:var(--max-w-full, 100%)}.max-w-screen-sm{max-width:40rem}.max-w-screen-md{max-width:48rem}.max-w-screen-lg{max-width:64rem}.max-w-screen-xl{max-width:80rem}.max-w-screen-2xl{max-width:96rem}@media(min-width: 40rem){.max-w-none\\@sm{max-width:var(--max-w-none, none)}}@media(min-width: 40rem){.max-w-0\\@sm{max-width:var(--max-w-0, 0)}}@media(min-width: 40rem){.max-w-4xs\\@sm{max-width:var(--max-w-4xs, 20rem)}}@media(min-width: 40rem){.max-w-3xs\\@sm{max-width:var(--max-w-3xs, 26rem)}}@media(min-width: 40rem){.max-w-2xs\\@sm{max-width:var(--max-w-2xs, 32rem)}}@media(min-width: 40rem){.max-w-xs\\@sm{max-width:var(--max-w-xs, 38rem)}}@media(min-width: 40rem){.max-w-sm\\@sm{max-width:var(--max-w-sm, 48rem)}}@media(min-width: 40rem){.max-w-md\\@sm{max-width:var(--max-w-md, 64rem)}}@media(min-width: 40rem){.max-w-lg\\@sm{max-width:var(--max-w-lg, 80rem)}}@media(min-width: 40rem){.max-w-xl\\@sm{max-width:var(--max-w-xl, 90rem)}}@media(min-width: 40rem){.max-w-2xl\\@sm{max-width:var(--max-w-2xl, 100rem)}}@media(min-width: 40rem){.max-w-3xl\\@sm{max-width:var(--max-w-3xl, 120rem)}}@media(min-width: 40rem){.max-w-4xl\\@sm{max-width:var(--max-w-4xl, 150rem)}}@media(min-width: 40rem){.max-w-prose\\@sm{max-width:var(--max-w-prose, 65ch)}}@media(min-width: 40rem){.max-w-full\\@sm{max-width:var(--max-w-full, 100%)}}@media(min-width: 48rem){.max-w-none\\@md{max-width:var(--max-w-none, none)}}@media(min-width: 48rem){.max-w-0\\@md{max-width:var(--max-w-0, 0)}}@media(min-width: 48rem){.max-w-4xs\\@md{max-width:var(--max-w-4xs, 20rem)}}@media(min-width: 48rem){.max-w-3xs\\@md{max-width:var(--max-w-3xs, 26rem)}}@media(min-width: 48rem){.max-w-2xs\\@md{max-width:var(--max-w-2xs, 32rem)}}@media(min-width: 48rem){.max-w-xs\\@md{max-width:var(--max-w-xs, 38rem)}}@media(min-width: 48rem){.max-w-sm\\@md{max-width:var(--max-w-sm, 48rem)}}@media(min-width: 48rem){.max-w-md\\@md{max-width:var(--max-w-md, 64rem)}}@media(min-width: 48rem){.max-w-lg\\@md{max-width:var(--max-w-lg, 80rem)}}@media(min-width: 48rem){.max-w-xl\\@md{max-width:var(--max-w-xl, 90rem)}}@media(min-width: 48rem){.max-w-2xl\\@md{max-width:var(--max-w-2xl, 100rem)}}@media(min-width: 48rem){.max-w-3xl\\@md{max-width:var(--max-w-3xl, 120rem)}}@media(min-width: 48rem){.max-w-4xl\\@md{max-width:var(--max-w-4xl, 150rem)}}@media(min-width: 48rem){.max-w-prose\\@md{max-width:var(--max-w-prose, 65ch)}}@media(min-width: 48rem){.max-w-full\\@md{max-width:var(--max-w-full, 100%)}}@media(min-width: 64rem){.max-w-none\\@lg{max-width:var(--max-w-none, none)}}@media(min-width: 64rem){.max-w-0\\@lg{max-width:var(--max-w-0, 0)}}@media(min-width: 64rem){.max-w-4xs\\@lg{max-width:var(--max-w-4xs, 20rem)}}@media(min-width: 64rem){.max-w-3xs\\@lg{max-width:var(--max-w-3xs, 26rem)}}@media(min-width: 64rem){.max-w-2xs\\@lg{max-width:var(--max-w-2xs, 32rem)}}@media(min-width: 64rem){.max-w-xs\\@lg{max-width:var(--max-w-xs, 38rem)}}@media(min-width: 64rem){.max-w-sm\\@lg{max-width:var(--max-w-sm, 48rem)}}@media(min-width: 64rem){.max-w-md\\@lg{max-width:var(--max-w-md, 64rem)}}@media(min-width: 64rem){.max-w-lg\\@lg{max-width:var(--max-w-lg, 80rem)}}@media(min-width: 64rem){.max-w-xl\\@lg{max-width:var(--max-w-xl, 90rem)}}@media(min-width: 64rem){.max-w-2xl\\@lg{max-width:var(--max-w-2xl, 100rem)}}@media(min-width: 64rem){.max-w-3xl\\@lg{max-width:var(--max-w-3xl, 120rem)}}@media(min-width: 64rem){.max-w-4xl\\@lg{max-width:var(--max-w-4xl, 150rem)}}@media(min-width: 64rem){.max-w-prose\\@lg{max-width:var(--max-w-prose, 65ch)}}@media(min-width: 64rem){.max-w-full\\@lg{max-width:var(--max-w-full, 100%)}}@media(min-width: 80rem){.max-w-none\\@xl{max-width:var(--max-w-none, none)}}@media(min-width: 80rem){.max-w-0\\@xl{max-width:var(--max-w-0, 0)}}@media(min-width: 80rem){.max-w-4xs\\@xl{max-width:var(--max-w-4xs, 20rem)}}@media(min-width: 80rem){.max-w-3xs\\@xl{max-width:var(--max-w-3xs, 26rem)}}@media(min-width: 80rem){.max-w-2xs\\@xl{max-width:var(--max-w-2xs, 32rem)}}@media(min-width: 80rem){.max-w-xs\\@xl{max-width:var(--max-w-xs, 38rem)}}@media(min-width: 80rem){.max-w-sm\\@xl{max-width:var(--max-w-sm, 48rem)}}@media(min-width: 80rem){.max-w-md\\@xl{max-width:var(--max-w-md, 64rem)}}@media(min-width: 80rem){.max-w-lg\\@xl{max-width:var(--max-w-lg, 80rem)}}@media(min-width: 80rem){.max-w-xl\\@xl{max-width:var(--max-w-xl, 90rem)}}@media(min-width: 80rem){.max-w-2xl\\@xl{max-width:var(--max-w-2xl, 100rem)}}@media(min-width: 80rem){.max-w-3xl\\@xl{max-width:var(--max-w-3xl, 120rem)}}@media(min-width: 80rem){.max-w-4xl\\@xl{max-width:var(--max-w-4xl, 150rem)}}@media(min-width: 80rem){.max-w-prose\\@xl{max-width:var(--max-w-prose, 65ch)}}@media(min-width: 80rem){.max-w-full\\@xl{max-width:var(--max-w-full, 100%)}}@media(min-width: 96rem){.max-w-none\\@2xl{max-width:var(--max-w-none, none)}}@media(min-width: 96rem){.max-w-0\\@2xl{max-width:var(--max-w-0, 0)}}@media(min-width: 96rem){.max-w-4xs\\@2xl{max-width:var(--max-w-4xs, 20rem)}}@media(min-width: 96rem){.max-w-3xs\\@2xl{max-width:var(--max-w-3xs, 26rem)}}@media(min-width: 96rem){.max-w-2xs\\@2xl{max-width:var(--max-w-2xs, 32rem)}}@media(min-width: 96rem){.max-w-xs\\@2xl{max-width:var(--max-w-xs, 38rem)}}@media(min-width: 96rem){.max-w-sm\\@2xl{max-width:var(--max-w-sm, 48rem)}}@media(min-width: 96rem){.max-w-md\\@2xl{max-width:var(--max-w-md, 64rem)}}@media(min-width: 96rem){.max-w-lg\\@2xl{max-width:var(--max-w-lg, 80rem)}}@media(min-width: 96rem){.max-w-xl\\@2xl{max-width:var(--max-w-xl, 90rem)}}@media(min-width: 96rem){.max-w-2xl\\@2xl{max-width:var(--max-w-2xl, 100rem)}}@media(min-width: 96rem){.max-w-3xl\\@2xl{max-width:var(--max-w-3xl, 120rem)}}@media(min-width: 96rem){.max-w-4xl\\@2xl{max-width:var(--max-w-4xl, 150rem)}}@media(min-width: 96rem){.max-w-prose\\@2xl{max-width:var(--max-w-prose, 65ch)}}@media(min-width: 96rem){.max-w-full\\@2xl{max-width:var(--max-w-full, 100%)}}[class^=max-w-adaptive],[class*=" max-w-adaptive"]{max-width:40rem}@media(min-width: 48rem){.max-w-adaptive-md,.max-w-adaptive-lg,.max-w-adaptive-xl,.max-w-adaptive-2xl,.max-w-adaptive{max-width:48rem}}@media(min-width: 64rem){.max-w-adaptive-lg,.max-w-adaptive-xl,.max-w-adaptive-2xl,.max-w-adaptive{max-width:64rem}}@media(min-width: 80rem){.max-w-adaptive-xl,.max-w-adaptive-2xl,.max-w-adaptive{max-width:80rem}}.flex{display:flex}.inline-flex{display:inline-flex}.inline-block{display:inline-block}.block{display:block}.inline{display:inline}.grid{display:grid}.inline-grid{display:inline-grid}@media(min-width: 40rem){.flex\\@sm{display:flex}}@media(min-width: 40rem){.inline-flex\\@sm{display:inline-flex}}@media(min-width: 40rem){.inline-block\\@sm{display:inline-block}}@media(min-width: 40rem){.block\\@sm{display:block}}@media(min-width: 40rem){.inline\\@sm{display:inline}}@media(min-width: 40rem){.grid\\@sm{display:grid}}@media(min-width: 40rem){.inline-grid\\@sm{display:inline-grid}}@media(min-width: 48rem){.flex\\@md{display:flex}}@media(min-width: 48rem){.inline-flex\\@md{display:inline-flex}}@media(min-width: 48rem){.inline-block\\@md{display:inline-block}}@media(min-width: 48rem){.block\\@md{display:block}}@media(min-width: 48rem){.inline\\@md{display:inline}}@media(min-width: 48rem){.grid\\@md{display:grid}}@media(min-width: 48rem){.inline-grid\\@md{display:inline-grid}}@media(min-width: 64rem){.flex\\@lg{display:flex}}@media(min-width: 64rem){.inline-flex\\@lg{display:inline-flex}}@media(min-width: 64rem){.inline-block\\@lg{display:inline-block}}@media(min-width: 64rem){.block\\@lg{display:block}}@media(min-width: 64rem){.inline\\@lg{display:inline}}@media(min-width: 64rem){.grid\\@lg{display:grid}}@media(min-width: 64rem){.inline-grid\\@lg{display:inline-grid}}@media(min-width: 80rem){.flex\\@xl{display:flex}}@media(min-width: 80rem){.inline-flex\\@xl{display:inline-flex}}@media(min-width: 80rem){.inline-block\\@xl{display:inline-block}}@media(min-width: 80rem){.block\\@xl{display:block}}@media(min-width: 80rem){.inline\\@xl{display:inline}}@media(min-width: 80rem){.grid\\@xl{display:grid}}@media(min-width: 80rem){.inline-grid\\@xl{display:inline-grid}}@media(min-width: 96rem){.flex\\@2xl{display:flex}}@media(min-width: 96rem){.inline-flex\\@2xl{display:inline-flex}}@media(min-width: 96rem){.inline-block\\@2xl{display:inline-block}}@media(min-width: 96rem){.block\\@2xl{display:block}}@media(min-width: 96rem){.inline\\@2xl{display:inline}}@media(min-width: 96rem){.grid\\@2xl{display:grid}}@media(min-width: 96rem){.inline-grid\\@2xl{display:inline-grid}}.relative{position:relative}.align-center{align-items:center}.text-right{text-align:right}.flex-wrap{flex-wrap:wrap}.space-between{justify-content:space-between}.w-full{width:100%}.blur{backdrop-filter:blur(10px)}@media not all and (min-width: 40rem){.flex-wrap\\@sm{flex-wrap:wrap}}.pointer{cursor:pointer}.flex-1{flex:1}.text-center{text-align:center}.rounded{border-radius:8px}@media not all and (min-width: 64rem){.display\\@lg{display:none}}body:not([class=no-gap]) .gap-4xs{gap:var(--spacing-4xs, 0.125em)}body:not([class=no-gap]) .gap-x-4xs{column-gap:var(--spacing-4xs, 0.125em)}body:not([class=no-gap]) .gap-y-4xs{row-gap:var(--spacing-4xs, 0.125em)}body.no-gap .gap-x-4xs>*{margin-left:var(--spacing-4xs, 0.125em)}body.no-gap .gap-x-4xs{margin-left:calc(var(--spacing-4xs, 0.125em) * -1)}body.no-gap .gap-y-4xs>*{margin-bottom:var(--spacing-4xs, 0.125em)}body.no-gap .gap-y-4xs{margin-bottom:calc(var(--spacing-4xs, 0.125em) * -1)}body.no-gap .gap-4xs>*{margin-bottom:var(--spacing-4xs, 0.125em);margin-left:var(--spacing-4xs, 0.125em)}body.no-gap .gap-4xs{margin-bottom:calc(var(--spacing-4xs, 0.125em) * -1);margin-left:calc(var(--spacing-4xs, 0.125em) * -1)}body:not([class=no-gap]) .gap-3xs{gap:var(--spacing-3xs, 0.25em)}body:not([class=no-gap]) .gap-x-3xs{column-gap:var(--spacing-3xs, 0.25em)}body:not([class=no-gap]) .gap-y-3xs{row-gap:var(--spacing-3xs, 0.25em)}body.no-gap .gap-x-3xs>*{margin-left:var(--spacing-3xs, 0.25em)}body.no-gap .gap-x-3xs{margin-left:calc(var(--spacing-3xs, 0.25em) * -1)}body.no-gap .gap-y-3xs>*{margin-bottom:var(--spacing-3xs, 0.25em)}body.no-gap .gap-y-3xs{margin-bottom:calc(var(--spacing-3xs, 0.25em) * -1)}body.no-gap .gap-3xs>*{margin-bottom:var(--spacing-3xs, 0.25em);margin-left:var(--spacing-3xs, 0.25em)}body.no-gap .gap-3xs{margin-bottom:calc(var(--spacing-3xs, 0.25em) * -1);margin-left:calc(var(--spacing-3xs, 0.25em) * -1)}body:not([class=no-gap]) .gap-2xs{gap:var(--spacing-2xs, 0.375em)}body:not([class=no-gap]) .gap-x-2xs{column-gap:var(--spacing-2xs, 0.375em)}body:not([class=no-gap]) .gap-y-2xs{row-gap:var(--spacing-2xs, 0.375em)}body.no-gap .gap-x-2xs>*{margin-left:var(--spacing-2xs, 0.375em)}body.no-gap .gap-x-2xs{margin-left:calc(var(--spacing-2xs, 0.375em) * -1)}body.no-gap .gap-y-2xs>*{margin-bottom:var(--spacing-2xs, 0.375em)}body.no-gap .gap-y-2xs{margin-bottom:calc(var(--spacing-2xs, 0.375em) * -1)}body.no-gap .gap-2xs>*{margin-bottom:var(--spacing-2xs, 0.375em);margin-left:var(--spacing-2xs, 0.375em)}body.no-gap .gap-2xs{margin-bottom:calc(var(--spacing-2xs, 0.375em) * -1);margin-left:calc(var(--spacing-2xs, 0.375em) * -1)}body:not([class=no-gap]) .gap-xs{gap:var(--spacing-xs, 0.5em)}body:not([class=no-gap]) .gap-x-xs{column-gap:var(--spacing-xs, 0.5em)}body:not([class=no-gap]) .gap-y-xs{row-gap:var(--spacing-xs, 0.5em)}body.no-gap .gap-x-xs>*{margin-left:var(--spacing-xs, 0.5em)}body.no-gap .gap-x-xs{margin-left:calc(var(--spacing-xs, 0.5em) * -1)}body.no-gap .gap-y-xs>*{margin-bottom:var(--spacing-xs, 0.5em)}body.no-gap .gap-y-xs{margin-bottom:calc(var(--spacing-xs, 0.5em) * -1)}body.no-gap .gap-xs>*{margin-bottom:var(--spacing-xs, 0.5em);margin-left:var(--spacing-xs, 0.5em)}body.no-gap .gap-xs{margin-bottom:calc(var(--spacing-xs, 0.5em) * -1);margin-left:calc(var(--spacing-xs, 0.5em) * -1)}body:not([class=no-gap]) .gap-sm{gap:var(--spacing-sm, 0.75em)}body:not([class=no-gap]) .gap-x-sm{column-gap:var(--spacing-sm, 0.75em)}body:not([class=no-gap]) .gap-y-sm{row-gap:var(--spacing-sm, 0.75em)}body.no-gap .gap-x-sm>*{margin-left:var(--spacing-sm, 0.75em)}body.no-gap .gap-x-sm{margin-left:calc(var(--spacing-sm, 0.75em) * -1)}body.no-gap .gap-y-sm>*{margin-bottom:var(--spacing-sm, 0.75em)}body.no-gap .gap-y-sm{margin-bottom:calc(var(--spacing-sm, 0.75em) * -1)}body.no-gap .gap-sm>*{margin-bottom:var(--spacing-sm, 0.75em);margin-left:var(--spacing-sm, 0.75em)}body.no-gap .gap-sm{margin-bottom:calc(var(--spacing-sm, 0.75em) * -1);margin-left:calc(var(--spacing-sm, 0.75em) * -1)}body:not([class=no-gap]) .gap-md{gap:var(--spacing-md, 1.25em)}body:not([class=no-gap]) .gap-x-md{column-gap:var(--spacing-md, 1.25em)}body:not([class=no-gap]) .gap-y-md{row-gap:var(--spacing-md, 1.25em)}body.no-gap .gap-x-md>*{margin-left:var(--spacing-md, 1.25em)}body.no-gap .gap-x-md{margin-left:calc(var(--spacing-md, 1.25em) * -1)}body.no-gap .gap-y-md>*{margin-bottom:var(--spacing-md, 1.25em)}body.no-gap .gap-y-md{margin-bottom:calc(var(--spacing-md, 1.25em) * -1)}body.no-gap .gap-md>*{margin-bottom:var(--spacing-md, 1.25em);margin-left:var(--spacing-md, 1.25em)}body.no-gap .gap-md{margin-bottom:calc(var(--spacing-md, 1.25em) * -1);margin-left:calc(var(--spacing-md, 1.25em) * -1)}body:not([class=no-gap]) .gap-lg{gap:var(--spacing-lg, 2em)}body:not([class=no-gap]) .gap-x-lg{column-gap:var(--spacing-lg, 2em)}body:not([class=no-gap]) .gap-y-lg{row-gap:var(--spacing-lg, 2em)}body.no-gap .gap-x-lg>*{margin-left:var(--spacing-lg, 2em)}body.no-gap .gap-x-lg{margin-left:calc(var(--spacing-lg, 2em) * -1)}body.no-gap .gap-y-lg>*{margin-bottom:var(--spacing-lg, 2em)}body.no-gap .gap-y-lg{margin-bottom:calc(var(--spacing-lg, 2em) * -1)}body.no-gap .gap-lg>*{margin-bottom:var(--spacing-lg, 2em);margin-left:var(--spacing-lg, 2em)}body.no-gap .gap-lg{margin-bottom:calc(var(--spacing-lg, 2em) * -1);margin-left:calc(var(--spacing-lg, 2em) * -1)}body:not([class=no-gap]) .gap-xl{gap:var(--spacing-xl, 3.25em)}body:not([class=no-gap]) .gap-x-xl{column-gap:var(--spacing-xl, 3.25em)}body:not([class=no-gap]) .gap-y-xl{row-gap:var(--spacing-xl, 3.25em)}body.no-gap .gap-x-xl>*{margin-left:var(--spacing-xl, 3.25em)}body.no-gap .gap-x-xl{margin-left:calc(var(--spacing-xl, 3.25em) * -1)}body.no-gap .gap-y-xl>*{margin-bottom:var(--spacing-xl, 3.25em)}body.no-gap .gap-y-xl{margin-bottom:calc(var(--spacing-xl, 3.25em) * -1)}body.no-gap .gap-xl>*{margin-bottom:var(--spacing-xl, 3.25em);margin-left:var(--spacing-xl, 3.25em)}body.no-gap .gap-xl{margin-bottom:calc(var(--spacing-xl, 3.25em) * -1);margin-left:calc(var(--spacing-xl, 3.25em) * -1)}body:not([class=no-gap]) .gap-2xl{gap:var(--spacing-2xl, 5.25em)}body:not([class=no-gap]) .gap-x-2xl{column-gap:var(--spacing-2xl, 5.25em)}body:not([class=no-gap]) .gap-y-2xl{row-gap:var(--spacing-2xl, 5.25em)}body.no-gap .gap-x-2xl>*{margin-left:var(--spacing-2xl, 5.25em)}body.no-gap .gap-x-2xl{margin-left:calc(var(--spacing-2xl, 5.25em) * -1)}body.no-gap .gap-y-2xl>*{margin-bottom:var(--spacing-2xl, 5.25em)}body.no-gap .gap-y-2xl{margin-bottom:calc(var(--spacing-2xl, 5.25em) * -1)}body.no-gap .gap-2xl>*{margin-bottom:var(--spacing-2xl, 5.25em);margin-left:var(--spacing-2xl, 5.25em)}body.no-gap .gap-2xl{margin-bottom:calc(var(--spacing-2xl, 5.25em) * -1);margin-left:calc(var(--spacing-2xl, 5.25em) * -1)}body:not([class=no-gap]) .gap-3xl{gap:var(--spacing-3xl, 8.5em)}body:not([class=no-gap]) .gap-x-3xl{column-gap:var(--spacing-3xl, 8.5em)}body:not([class=no-gap]) .gap-y-3xl{row-gap:var(--spacing-3xl, 8.5em)}body.no-gap .gap-x-3xl>*{margin-left:var(--spacing-3xl, 8.5em)}body.no-gap .gap-x-3xl{margin-left:calc(var(--spacing-3xl, 8.5em) * -1)}body.no-gap .gap-y-3xl>*{margin-bottom:var(--spacing-3xl, 8.5em)}body.no-gap .gap-y-3xl{margin-bottom:calc(var(--spacing-3xl, 8.5em) * -1)}body.no-gap .gap-3xl>*{margin-bottom:var(--spacing-3xl, 8.5em);margin-left:var(--spacing-3xl, 8.5em)}body.no-gap .gap-3xl{margin-bottom:calc(var(--spacing-3xl, 8.5em) * -1);margin-left:calc(var(--spacing-3xl, 8.5em) * -1)}body:not([class=no-gap]) .gap-4xl{gap:var(--spacing-4xl, 13.75em)}body:not([class=no-gap]) .gap-x-4xl{column-gap:var(--spacing-4xl, 13.75em)}body:not([class=no-gap]) .gap-y-4xl{row-gap:var(--spacing-4xl, 13.75em)}body.no-gap .gap-x-4xl>*{margin-left:var(--spacing-4xl, 13.75em)}body.no-gap .gap-x-4xl{margin-left:calc(var(--spacing-4xl, 13.75em) * -1)}body.no-gap .gap-y-4xl>*{margin-bottom:var(--spacing-4xl, 13.75em)}body.no-gap .gap-y-4xl{margin-bottom:calc(var(--spacing-4xl, 13.75em) * -1)}body.no-gap .gap-4xl>*{margin-bottom:var(--spacing-4xl, 13.75em);margin-left:var(--spacing-4xl, 13.75em)}body.no-gap .gap-4xl{margin-bottom:calc(var(--spacing-4xl, 13.75em) * -1);margin-left:calc(var(--spacing-4xl, 13.75em) * -1)}.text-scale-ratio{font-size:var(--text-scale-ratio)}.text-base-size{font-size:var(--text-base-size)}.text-xs{font-size:var(--text-xs)}.text-sm{font-size:var(--text-sm)}.text-md{font-size:var(--text-md)}.text-lg{font-size:var(--text-lg)}.text-xl{font-size:var(--text-xl)}.text-2xl{font-size:var(--text-2xl)}.text-3xl{font-size:var(--text-3xl)}.text-4xl{font-size:var(--text-4xl)}mark{background-color:transparent;background-image:linear-gradient(transparent 50%, var(--color-primary-200, #fecaca) 50%)}.font-italic{font-style:italic}.font-normal{font-weight:400}.font-bold{font-weight:500}.absolute{position:absolute !important}.static{position:static !important}.fixed{position:fixed !important}.relative{position:relative !important}.sticky{position:sticky !important}.top-4xs{top:var(--spacing-4xs)}.bottom-4xs{bottom:var(--spacing-4xs)}.left-4xs{left:var(--spacing-4xs)}.right-4xs{right:var(--spacing-4xs)}.top-3xs{top:var(--spacing-3xs)}.bottom-3xs{bottom:var(--spacing-3xs)}.left-3xs{left:var(--spacing-3xs)}.right-3xs{right:var(--spacing-3xs)}.top-2xs{top:var(--spacing-2xs)}.bottom-2xs{bottom:var(--spacing-2xs)}.left-2xs{left:var(--spacing-2xs)}.right-2xs{right:var(--spacing-2xs)}.top-xs{top:var(--spacing-xs)}.bottom-xs{bottom:var(--spacing-xs)}.left-xs{left:var(--spacing-xs)}.right-xs{right:var(--spacing-xs)}.top-sm{top:var(--spacing-sm)}.bottom-sm{bottom:var(--spacing-sm)}.left-sm{left:var(--spacing-sm)}.right-sm{right:var(--spacing-sm)}.top-md{top:var(--spacing-md)}.bottom-md{bottom:var(--spacing-md)}.left-md{left:var(--spacing-md)}.right-md{right:var(--spacing-md)}.top-lg{top:var(--spacing-lg)}.bottom-lg{bottom:var(--spacing-lg)}.left-lg{left:var(--spacing-lg)}.right-lg{right:var(--spacing-lg)}.top-xl{top:var(--spacing-xl)}.bottom-xl{bottom:var(--spacing-xl)}.left-xl{left:var(--spacing-xl)}.right-xl{right:var(--spacing-xl)}.top-2xl{top:var(--spacing-2xl)}.bottom-2xl{bottom:var(--spacing-2xl)}.left-2xl{left:var(--spacing-2xl)}.right-2xl{right:var(--spacing-2xl)}.top-3xl{top:var(--spacing-3xl)}.bottom-3xl{bottom:var(--spacing-3xl)}.left-3xl{left:var(--spacing-3xl)}.right-3xl{right:var(--spacing-3xl)}.top-4xl{top:var(--spacing-4xl)}.bottom-4xl{bottom:var(--spacing-4xl)}.left-4xl{left:var(--spacing-4xl)}.right-4xl{right:var(--spacing-4xl)}.top-0{top:0}.bottom-0{bottom:0}.left-0{left:0}.right-0{right:0}@media(min-width: 80rem){:root{--text-base-size: 1.075em;--text-scale-ratio: 1.25}}body{overflow-x:hidden;font-family:var(--base-font, -apple-system, blinkmacsystemfont, segoe ui, roboto, oxygen, ubuntu, cantarell, fira sans, droid sans, helvetica neue, sans-serif),sans-serif;font-size:var(--text-base-size);line-height:var(--base-line-height, 1.4);color:var(--base-color, var(--color-contrast-900))}h1,h2,h3,h4{font-weight:var(--heading-weight, 700);line-height:var(--heading-line-height, 1.5);color:var(--heading-color)}h1{font-size:var(--text-2xl)}h2{font-size:var(--text-xl)}h3{font-size:var(--text-lg)}h4{font-size:var(--text-md)}:root{--control-color-border: var(--color-contrast-300);--control-color-border-focus: var(--color-primary-500);--control-color-shadow-focus: var(--color-primary-200)}.form__group{display:flex;flex-wrap:wrap;column-gap:var(--spacing-md, 1.25em)}.form__control{width:100%;min-height:var(--spacing-xl, 3.25em);padding:var(--spacing-xs, 0.5em) var(--spacing-md, 1.25em);color:var(--base-color);vertical-align:bottom;background-color:var(--color-bg);border:1px solid var(--control-color-border);border-radius:4px;outline:none}.form__control:focus{border-color:var(--control-color-border-focus);box-shadow:0 0 0 2px var(--control-color-shadow-focus);transition:all .3s}:root{--ease-out: cubic-bezier(0.215, 0.61, 0.355, 1);--link-color: var(--color-primary-200)}.text-bg-fx{cursor:pointer;background-repeat:no-repeat;transition:background-size .3s;will-change:background-size;color:var(--base-color)}.text-bg-fx:hover{background-size:100% 100%}.text-bg-fx--scale-x{padding:var(--spacing-4xs) 0;background-image:linear-gradient(var(--link-color), var(--link-color));background-size:0% 100%}.text-bg-fx--scale-y{text-decoration:none;background-image:linear-gradient(var(--link-color), var(--link-color));background-position:center bottom;background-size:100% 2px}.text-bg-fx--underline,.text-bg-fx--underline-bold{text-decoration:none;background-size:0% 100%}.text-bg-fx--underline{background-image:linear-gradient(transparent calc(100% - 3px), currentColor calc(100% - 3px), currentColor calc(100% - 2px), transparent 2px)}.text-bg-fx--underline-bold{background-image:linear-gradient(transparent 50%, var(--color-primary-200, #fecaca) 50%)}.text-bg-fx--text-shadow{text-shadow:1.5px 1px var(--color-bg),-1.5px 1px var(--color-bg),0 1px var(--color-bg)}.link-fx-1{position:relative;display:inline-flex;align-items:center;height:32px;padding:0 6px;text-decoration:none}.link-fx-1 .icone{position:absolute;right:0;bottom:0;font-size:32px;transform:translateX(100%) rotate(90deg)}.link-fx-1 .icone circle{stroke-dasharray:100;stroke-dashoffset:100;transition:stroke-dashoffset .2s}.link-fx-1 .icone line{transition:transform .4s;transform-origin:13px 15px}.link-fx-1 .icone line:last-child{transform-origin:19px 15px}.link-fx-1::before{position:absolute;bottom:0;left:0;width:100%;height:1px;content:"";background-color:currentColor;transition:transform .2s .1s;transform-origin:right center}.link-fx-1:hover .icone circle{stroke-dashoffset:200;transition:stroke-dashoffset .2s .1s}.link-fx-1:hover .icone line{transform:rotate(-180deg)}.link-fx-1:hover .icone line:last-child{transform:rotate(180deg)}.link-fx-1:hover::before{transition:transform .2s;transform:translateX(17px) scaleX(0)}.link-fx-2{position:relative;display:inline-block;padding:4px 6px;color:var(--color-contrast-higher);text-decoration:none;background-image:linear-gradient(var(--color-contrast-900), var(--color-contrast-900));background-repeat:repeat-x;background-position:left bottom;background-size:100% 1px;transition:background-size .3s var(--ease-out);will-change:background-size}.link-fx-2::after{position:absolute;top:0;left:0;width:100%;height:100%;padding:inherit;clip-path:polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%);color:var(--color-bg);content:attr(data-link-fx-clone);transition:clip-path .3s,transform .3s;transition-timing-function:var(--ease-out);transform:translateY(4px);will-change:clip-path,transform}.link-fx-2:hover{background-size:100% 100%}.link-fx-2:hover::after{clip-path:polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);transform:translateY(0)}.link-fx-3{position:relative;display:inline-flex;align-items:center;padding:4px 6px;text-decoration:none}.link-fx-3 .icone{position:relative;display:block;margin-left:8px;font-size:12px;visibility:hidden;opacity:0;transition:opacity .3s,transform .3s var(--ease-out),visibility 0s .3s;transform:translateY(10px);will-change:transform}.link-fx-3 .icone line{transition:transform .3s var(--ease-out);transform-origin:9px 6px;will-change:transform}.link-fx-3 .icone line:first-child{transform:rotate(20deg)}.link-fx-3 .icone line:last-child{transform:rotate(-20deg)}@media not all and (min-width: 40rem){.link-fx-3 .icone{display:none}}.link-fx-3::before{position:absolute;bottom:0;left:0;width:calc(100% - 18px);height:2px;content:"";background-color:var(--color-primary-500);opacity:.5;transition:.3s var(--ease-out)}@media not all and (min-width: 40rem){.link-fx-3::before{width:100%;transform:translateX(0)}}.link-fx-3:hover{color:var(--color-primary-500)}.link-fx-3:hover .icone{color:var(--color-primary-500);visibility:visible;opacity:.5;transition:opacity .3s,transform .3s var(--ease-out);transform:translateY(0)}.link-fx-3:hover .icone line:first-child,.link-fx-3:hover .icone line:last-child{transform:rotate(0)}.link-fx-3:hover::before{width:100%}.link-fx-4{position:relative;display:inline-block;padding:6px 10px;color:var(--color-contrast-900);text-decoration:none;background-color:var(--color-contrast-50)}.link-fx-4::before{position:absolute;top:0;left:0;z-index:1;display:flex;align-items:center;justify-content:center;width:100%;height:100%;clip-path:polygon(0% 0%, 1px 0%, 1px 100%, 0% 100%);color:var(--color-bg);content:attr(data-link-fx-clone);background-color:var(--color-contrast-900);transition:clip-path .3s var(--ease-out);will-change:clip-path}.link-fx-4:hover::before{clip-path:polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)}.link-fx-5{display:inline-block;padding:4px 0;text-decoration:none;background-image:url(' +
            d +
            ');background-repeat:repeat-x;background-position:0 100%;background-size:0}.link-fx-5:hover{background-size:16px 4px;animation:link-fx-5-animation .4s linear infinite}@keyframes link-fx-5-animation{from{background-position:0 100%}to{background-position:16px 100%}}.reverse{transform:rotate(180deg)}.icone{width:12px;height:12px}.link-fx-3--inverse{position:relative;display:inline-flex;align-items:center;padding:4px 6px;text-decoration:none}.link-fx-3--inverse .icone{position:relative;display:block;margin-right:8px;font-size:12px;visibility:hidden;opacity:0;transition:opacity .3s,transform .3s var(--ease-out),visibility 0s .3s;transform:translateY(10px);will-change:transform}.link-fx-3--inverse .icone line{transition:transform .3s var(--ease-out);transform-origin:9px 6px;will-change:transform}.link-fx-3--inverse .icone line:first-child{transform:rotate(20deg)}.link-fx-3--inverse .icone line:last-child{transform:rotate(-20deg)}@media not all and (min-width: 40rem){.link-fx-3--inverse .icone{display:none}}.link-fx-3--inverse::before{position:absolute;bottom:0;left:0;width:calc(100% - 18px);height:2px;content:"";background-color:var(--color-primary-500);opacity:.5;transition:.3s var(--ease-out);transform:translateX(17px)}@media not all and (min-width: 40rem){.link-fx-3--inverse::before{width:100%;transform:translateX(0)}}.link-fx-3--inverse:hover{color:var(--color-primary-500)}.link-fx-3--inverse:hover .icone{color:var(--color-primary-500);visibility:visible;opacity:.5;transition:opacity .3s,transform .3s var(--ease-out);transform:translateY(0)}.link-fx-3--inverse:hover .icone line:first-child,.link-fx-3--inverse:hover .icone line:last-child{transform:rotate(0)}.link-fx-3--inverse:hover::before{width:100%;transform:translateX(0)}.space-around{flex-wrap:wrap;justify-content:space-around}.back-top-icon{color:var(--back-top-icon)}.back-top{position:fixed;right:var(--spacing-lg, 2em);bottom:var(--spacing-lg, 2em);z-index:9999;display:flex;align-items:center;justify-content:center;width:var(--spacing-lg, 2em);height:var(--spacing-lg, 2em);cursor:pointer;visibility:hidden;background-color:var(--back-top-bg);border-radius:50%;box-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -1px rgba(0,0,0,.06);opacity:0;transition:opacity .3s,visibility .3s,background-color .3s;transform:scale(1.3)}.back-top:hover{background-color:var(--back-top-bg-hover);opacity:1}.back-top--visible{visibility:visible;opacity:1}.modal{position:fixed;top:0;left:0;display:flex;align-items:center;justify-content:center;width:100vw;height:100vh;background-color:rgba(var(--color-contrast-900-rgb), 0.4)}.content{padding:var(--spacing-xl, 3.25em);background-color:var(--color-bg);border:1px solid var(--color-contrast-500)}::selection{color:#000;background-color:var(--color-primary-300)}.flex-column{flex-direction:column}.hero{height:150vh;grid-template-columns:1fr;grid-template-rows:.1fr 1fr .1fr .4fr}.hero__image{position:relative;grid-row:2;grid-column:span 2;background-image:url(' +
            p +
            ');background-size:cover;z-index:0}@media(min-width: 40rem){.hero__image{grid-row:span 2;grid-column:4}}.hero__titre{grid-column:span 2;align-self:end;text-align:center;transform:translateY(var(--scroll-y))}@media(min-width: 40rem){.hero__titre{text-align:left;grid-column:2}}@media(min-width: 40rem){.hero{height:100vh;grid-template-columns:.25fr .6fr .15fr .9fr .1fr;grid-template-rows:1fr 1fr}}.curtain{background-color:#331a1a;position:absolute;width:100%;height:100%;z-index:1;opacity:.6}.bars{position:absolute;width:100%;height:100%;background-image:url(' +
            m +
            ');background-size:cover}.player{position:absolute;width:100%;height:100%;background-image:url(' +
            b +
            ');image-rendering:pixelated;background-size:cover}.bg-white{background-color:#fff}.radius-md{border-radius:.5rem}.btn{background-color:var(--color-primary-800, #991b1b);transition:.3s background-color ease-in-out}.btn:hover{background-color:var(--color-primary-700, #b91c1c)}.clip{clip-path:polygon(0% 0%, 100% 75px, 100% 100%, 0% calc(100% - 75px));transform:translateY(var(--scroll-y-slow));z-index:10;padding-bottom:var(--spacing-4xl, 13.75em)}.z-max{z-index:999}.pill{--control-color: rgba(var(--color-primary-500-rgb), 0.2);height:4rem;display:flex;border-radius:2rem;overflow:hidden;align-items:center;justify-content:space-around;box-shadow:0 0 4px 2px var(--control-color)}.player-icon{background-image:url(' +
            b +
            ');image-rendering:pixelated;height:2rem;width:2rem;transform:scale(3);background-color:var(--color-contrast-700, #44403c);border-radius:50%}.player-score{justify-self:flex-end}#app.game{display:flex;align-content:center;align-items:center;justify-content:center;height:100vh;background-color:#1e1010}.justify-center{justify-content:center}',
          '',
          {
            version: 3,
            sources: [
              'webpack://./styles/config/utils/_reset.scss',
              'webpack://./styles/config/utils/_variables.scss',
              'webpack://./styles/config/utils/_text.scss',
              'webpack://./styles/config/utils/_background.scss',
              'webpack://./styles/config/colors/_colors.scss',
              'webpack://./styles/config/utils/_margin.scss',
              'webpack://./styles/config/_breakpoints.scss',
              'webpack://./styles/config/utils/_padding.scss',
              'webpack://./styles/config/utils/_container.scss',
              'webpack://./styles/config/utils/_max-width.scss',
              'webpack://./styles/config/utils/_display.scss',
              'webpack://./styles/config/_display.scss',
              'webpack://./styles/config/utils/_gap.scss',
              'webpack://./styles/config/utils/_typography.scss',
              'webpack://./styles/config/utils/_position.scss',
              'webpack://./styles/components/_typography.scss',
              'webpack://./styles/components/_form.scss',
              'webpack://./styles/components/_link.scss',
              'webpack://./styles/components/_back-top.scss',
              'webpack://./styles/components/_modal.scss',
              'webpack://./styles/main.scss',
            ],
            names: [],
            mappings:
              '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ADF,kBACE,uCAAA,CADF,kBACE,uCAAA,CADF,mBACE,wCAAA,CADF,mBACE,wCAAA,CADF,mBACE,wCAAA,CADF,mBACE,wCAAA,CADF,mBACE,wCAAA,CADF,mBACE,wCAAA,CADF,mBACE,wCAAA,CADF,mBACE,wCAAA,CADF,mBACE,wCAAA,CADF,eACE,oCAAA,CADF,gBACE,qCAAA,CADF,gBACE,qCAAA,CADF,gBACE,qCAAA,CADF,gBACE,qCAAA,CADF,gBACE,qCAAA,CADF,gBACE,qCAAA,CADF,gBACE,qCAAA,CADF,gBACE,qCAAA,CADF,gBACE,qCAAA,CADF,iBACE,sCAAA,CADF,kBACE,uCAAA,CADF,kBACE,uCAAA,CADF,kBACE,uCAAA,CADF,kBACE,uCAAA,CADF,kBACE,uCAAA,CADF,kBACE,uCAAA,CADF,kBACE,uCAAA,CADF,kBACE,uCAAA,CADF,kBACE,uCAAA,CADF,iBACE,sCAAA,CADF,kBACE,uCAAA,CADF,kBACE,uCAAA,CADF,kBACE,uCAAA,CADF,kBACE,uCAAA,CADF,kBACE,uCAAA,CADF,kBACE,uCAAA,CADF,kBACE,uCAAA,CADF,kBACE,uCAAA,CADF,kBACE,uCAAA,CADF,iBACE,sCAAA,CADF,kBACE,uCAAA,CADF,kBACE,uCAAA,CADF,kBACE,uCAAA,CADF,kBACE,uCAAA,CADF,kBACE,uCAAA,CADF,kBACE,uCAAA,CADF,kBACE,uCAAA,CADF,kBACE,uCAAA,CADF,kBACE,uCAAA,CAAA,eCCA,4DAAA,CADF,gBACE,6DAAA,CADF,gBACE,6DAAA,CADF,gBACE,6DAAA,CADF,gBACE,6DAAA,CADF,gBACE,6DAAA,CADF,gBACE,6DAAA,CADF,gBACE,6DAAA,CADF,gBACE,6DAAA,CADF,gBACE,6DAAA,CADF,gBACE,6DAAA,CADF,iBACE,8DAAA,CADF,iBACE,8DAAA,CADF,iBACE,8DAAA,CADF,iBACE,8DAAA,CADF,iBACE,8DAAA,CADF,iBACE,8DAAA,CADF,iBACE,8DAAA,CADF,iBACE,8DAAA,CADF,iBACE,8D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,yBGqCE,0EACE,eAAA,CAAA,CHtCJ,yBGqCE,uDACE,eAAA,CAAA,CCjDN,MACE,YCNO,CDKT,aACE,mBCNO,CDKT,cACE,oBCNO,CDKT,OACE,aCNO,CDKT,QACE,cCNO,CDKT,MACE,YCNO,CDKT,aACE,mBCNO,CLgBP,yBIJA,UAEI,YCdG,CAAA,CLgBP,yBIJA,iBAEI,mBCdG,CAAA,CLgBP,yBIJA,kBAEI,oBCdG,CAAA,CLgBP,yBIJA,WAEI,aCdG,CAAA,CLgBP,yBIJA,YAEI,cCdG,CAAA,CLgBP,yBIJA,UAEI,YCdG,CAAA,CLgBP,yBIJA,iBAEI,mBCdG,CAAA,CLgBP,yBIJA,UAEI,YCdG,CAAA,CLgBP,yBIJA,iBAEI,mBCdG,CAAA,CLgBP,yBIJA,kBAEI,oBCdG,CAAA,CLgBP,yBIJA,WAEI,aCdG,CAAA,CLgBP,yBIJA,YAEI,cCdG,CAAA,CLgBP,yBIJA,UAEI,YCdG,CAAA,CLgBP,yBIJA,iBAEI,mBCdG,CAAA,CLgBP,yBIJA,UAEI,YCdG,CAAA,CLgBP,yBIJA,iBAEI,mBCdG,CAAA,CLgBP,yBIJA,kBAEI,oBCdG,CAAA,CLgBP,yBIJA,WAEI,aCdG,CAAA,CLgBP,yBIJA,YAEI,cCdG,CAAA,CLgBP,yBIJA,UAEI,YCdG,CAAA,CLgBP,yBIJA,iBAEI,mBCdG,CAAA,CLgBP,yBIJA,UAEI,YCdG,CAAA,CLgBP,yBIJA,iBAEI,mBCdG,CAAA,CLgBP,yBIJA,kBAEI,oBCdG,CAAA,CLgBP,yBIJA,WAEI,aCdG,CAAA,CLgBP,yBIJA,YAEI,cCdG,CAAA,CLgBP,yBIJA,UAEI,YCdG,CAAA,CLgBP,yBIJA,iBAEI,mBCdG,CAAA,CLgBP,yBIJA,WAEI,YCdG,CAAA,CLgBP,yBIJA,kBAEI,mBCdG,CAAA,CLgBP,yBIJA,mBAEI,oBCdG,CAAA,CLgBP,yBIJA,YAEI,aCdG,CAAA,CLgBP,yBIJA,aAEI,cCdG,CAAA,CLgBP,yBIJA,WAEI,YCdG,CAAA,CLgBP,yBIJA,kBAEI,mBCdG,CAAA,CDoBX,UACE,iBAAA,CAGF,cACE,kBAAA,CAGF,YACE,gBAAA,CAGF,WACE,cAAA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AA,CADF,QACE,0BAAA,CAMA,SACE,sBAAA,CADF,YACE,yBAAA,CADF,UACE,uBAAA,CADF,WACE,wBAAA,CADF,SACE,sBAAA,CADF,YACE,yBAAA,CADF,UACE,uBAAA,CADF,WACE,wBAAA,CADF,SACE,sBAAA,CADF,YACE,yBAAA,CADF,UACE,uBAAA,CADF,WACE,wBAAA,CADF,QACE,qBAAA,CADF,WACE,wBAAA,CADF,SACE,sBAAA,CADF,UACE,uBAAA,CADF,QACE,qBAAA,CADF,WACE,wBAAA,CADF,SACE,sBAAA,CADF,UACE,uBAAA,CADF,QACE,qBAAA,CADF,WACE,wBAAA,CADF,SACE,sBAAA,CADF,UACE,uBAAA,CADF,QACE,qBAAA,CADF,WACE,wBAAA,CADF,SACE,sBAAA,CADF,UACE,uBAAA,CADF,QACE,qBAAA,CADF,WACE,wBAAA,CADF,SACE,sBAAA,CADF,UACE,uBAAA,CADF,SACE,sBAAA,CADF,YACE,yBAAA,CADF,UACE,uBAAA,CADF,WACE,wBAAA,CADF,SACE,sBAAA,CADF,YACE,yBAAA,CADF,UACE,uBAAA,CADF,WACE,wBAAA,CADF,SACE,sBAAA,CADF,YACE,yBAAA,CADF,UACE,uBAAA,CADF,WACE,wBAAA,CAMJ,OACE,KAAA,CADF,UACE,QAAA,CADF,QACE,MAAA,CADF,SACE,OAAA,CRHA,yBSXJ,MAEI,yBAAA,CACA,wBAAA,CAAA,CAIJ,KACE,iBAAA,CACA,0KAAA,CACA,+BAAA,CACA,wCAAA,CACA,kDAAA,CAGF,YAIE,sCAAA,CACA,2CAAA,CACA,0BAAA,CAGF,GACE,yBAAA,CAGF,GACE,wBAAA,CAGF,GACE,wBAAA,CAGF,GACE,wBAAA,CCvCF,MACE,iDAAA,CACA,sDAAA,CACA,sDAAA,CAGF,aACE,YAAA,CACA,cAAA,CACA,oCAAA,CAGF,eACE,UAAA,CACA,oCAAA,CACA,0DAAA,CACA,uBAAA,CACA,qBAAA,CACA,gCAAA,CACA,4CAAA,CACA,iBAAA,CACA,YAAA,CAEA,qBACE,8CAAA,CACA,sDAAA,CACA,kBAAA,C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',
            sourcesContent: [
              '*,\n*::after,\n*::before {\n  box-sizing: inherit;\n}\n\n* {\n  font: inherit;\n}\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo,\nhr {\n  padding: 0;\n  margin: 0;\n  border: 0;\n}\n\nhtml {\n  box-sizing: border-box;\n}\n\nbody {\n  background-color: var(--color-bg, white);\n}\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection,\nmain,\nform legend {\n  display: block;\n}\n\nol,\nul {\n  list-style: none;\n}\n\nblockquote,\nq {\n  quotes: none;\n}\n\nbutton,\ninput,\ntextarea,\nselect {\n  margin: 0;\n}\n\ntextarea {\n  overflow: auto;\n  vertical-align: top;\n  resize: vertical;\n}\n\ninput::-ms-clear {\n  display: none; // hide X icon in IE and Edge\n}\n\ntable {\n  border-spacing: 0;\n  border-collapse: collapse;\n}\n\nimg,\nvideo,\nsvg {\n  max-width: 100%;\n}\n\nbutton {\n  width: auto;\n  padding: 0;\n  margin: 0;\n  overflow: visible;\n  font: inherit;\n\n  /* Normalize `line-height`. Cannot be changed from `normal` in Firefox 4+. */\n  line-height: normal;\n\n  /* inherit font & color from ancestor */\n  color: inherit;\n  background: transparent;\n  border: none;\n\n  /* Corrects font smoothing for webkit */\n  -webkit-font-smoothing: inherit;\n  -moz-osx-font-smoothing: inherit;\n\n  /* Corrects inability to style clickable `input` types in iOS */\n  -webkit-appearance: none;\n}\n\n/* Remove excess padding and border in Firefox 4+ */\nbutton::-moz-focus-inner {\n  padding: 0;\n  border: 0;\n}\n',
              "@use '../colors' as *;\n@use '../colors/colors' as c;\n@use '../colors/violet' as *;\n@use '../spacing' as *;\n@use '../max-width' as *;\n@use '../typography' as *;\n\n@function to-rgb($color) {\n  @return red($color) + ', ' + green($color) + ', ' + blue($color);\n}\n\n:root {\n  @each $color-type, $color-map in $colors {\n    @each $color-intensity, $hsl in $color-map {\n      #{$color-prefix}#{$color-type}-#{$color-intensity}: #{$hsl};\n      #{$color-prefix}#{$color-type}-#{$color-intensity}-rgb: #{to-rgb($hsl)};\n    }\n  }\n\n  @each $spacing-size, $spacing-value in $spacing {\n    #{$spacing-prefix}#{$spacing-size}: #{$spacing-value};\n  }\n\n  @each $max-width-size, $max-width-value in $max-w {\n    #{$max-w-prefix}#{$max-width-size}: #{$max-width-value};\n  }\n\n  @each $base-key, $base-value in $base {\n    #{$base-prefix}#{$base-key}: #{$base-value};\n  }\n\n  @each $heading-key, $heading-value in $heading {\n    #{$heading-prefix}#{$heading-key}: #{$heading-value};\n  }\n\n  @each $text-size, $text-value in $typography-sizes {\n    #{$typography-size-prefix}#{$text-size}: #{$text-value};\n  }\n\n  --color-bg: var(--color-contrast-200);\n\n  --back-top-bg: var(--color-contrast-50);\n  --back-top-bg-hover: var(--color-contrast-200);\n  --back-top-icon: var(--color-contrast-900);\n}\n",
              "@use '../colors' as *;\n\n@each $color-type, $color-map in $colors {\n  @each $color-intensity, $hsl in $color-map {\n    .text-#{$color-type}-#{$color-intensity} {\n      color: color-get($color-type, $color-intensity);\n    }\n  }\n}\n",
              "@use '../colors' as *;\n@use '../colors/colors' as c;\n\n@each $color-type, $color-map in $colors {\n  @each $color-intensity, $hsl in $color-map {\n    .bg-#{$color-type}-#{$color-intensity} {\n      background-color: color-get($color-type, $color-intensity) !important;\n    }\n  }\n}\n\n@each $color-name, $color-map in c.$colors {\n  @each $value, $intensity in $color-map {\n    .bg-#{$color-name}-#{$value} {\n      background-color: $intensity;\n    }\n    .bg-hover-#{$color-name}-#{$value} {\n      background-color: $intensity;\n      transition: background-color 0.3s var(--ease-out);\n\n      &:hover {\n        @if $value == 50 {\n          background-color: map-get($color-map, $value + 50);\n        } @else if $value == 900 {\n          background-color: map-get($color-map, 800);\n        } @else {\n          background-color: map-get($color-map, $value + 100);\n        }\n      }\n    }\n  }\n}\n\n.color-icon {\n  color: var(--icon-contrast);\n}\n\n.color-info {\n  color: var(--color-text-info);\n}\n",
              "@use 'purple' as *;\n@use 'pink' as *;\n@use 'yellow' as *;\n@use 'cool-gray' as *;\n@use 'warm-gray' as *;\n@use 'true-gray' as *;\n@use 'blue-gray' as *;\n@use 'blue' as *;\n@use 'amber' as *;\n@use 'gray' as *;\n@use 'cyan' as *;\n@use 'emerald' as *;\n@use 'fuchsia' as *;\n@use 'green' as *;\n@use 'indigo' as *;\n@use 'orange' as *;\n@use 'lime' as *;\n@use 'red' as *;\n@use 'sky' as *;\n@use 'teal' as *;\n@use 'violet' as *;\n@use 'rose' as *;\n\n$colors: (\n  'purple': $purple,\n  'pink': $pink,\n  'yellow': $yellow,\n  'cool-gray': $cool-gray,\n  'warm-gray': $warm-gray,\n  'true-gray': $true-gray,\n  'blue-gray': $blue-gray,\n  'blue': $blue,\n  'amber': $amber,\n  'gray': $gray,\n  'cyan': $cyan,\n  'emerald': $emerald,\n  'fuchsia': $fuchsia,\n  'green': $green,\n  'indigo': $indigo,\n  'orange': $orange,\n  'lime': $lime,\n  'red': $red,\n  'sky': $sky,\n  'teal': $teal,\n  'violet': $violet,\n  'rose': $rose,\n) !default;\n",
              "@use '../spacing' as *;\n@use '../breakpoints' as *;\n@use '../position' as *;\n\n@each $spacing-key, $space-value in $spacing {\n  .m-#{$spacing-key} {\n    margin: spacing-get($spacing-key) !important;\n  }\n\n  .-m-#{$spacing-key} {\n    margin: calc(#{spacing-get($spacing-key)} * -1) !important;\n  }\n\n  .mx-#{$spacing-key} {\n    margin-right: spacing-get($spacing-key) !important;\n    margin-left: spacing-get($spacing-key) !important;\n  }\n\n  .-mx-#{$spacing-key} {\n    margin-right: calc(#{spacing-get($spacing-key)} * -1) !important;\n    margin-left: calc(#{spacing-get($spacing-key)} * -1) !important;\n  }\n\n  .my-#{$spacing-key} {\n    margin-top: spacing-get($spacing-key) !important;\n    margin-bottom: spacing-get($spacing-key) !important;\n  }\n\n  .-my-#{$spacing-key} {\n    margin-top: calc(#{spacing-get($spacing-key)} * -1) !important;\n    margin-bottom: calc(#{spacing-get($spacing-key)} * -1) !important;\n  }\n\n  @each $position-short, $position-long in $inset {\n    .m#{$position-short}-#{$spacing-key} {\n      margin-#{$position-long}: spacing-get($spacing-key) !important;\n    }\n\n    .-m#{$position-short}-#{$spacing-key} {\n      margin-#{$position-long}: calc(\n        #{spacing-get($spacing-key)} * -1\n      ) !important;\n    }\n  }\n}\n\n.m-auto {\n  margin: auto !important;\n}\n.m-0 {\n  margin: 0 !important;\n}\n\n.mx-auto {\n  margin-right: auto !important;\n  margin-left: auto !important;\n}\n\n.mx-0 {\n  margin-right: 0 !important;\n  margin-left: 0 !important;\n}\n\n.my-auto {\n  margin-top: auto !important;\n  margin-bottom: auto !important;\n}\n\n.my-0 {\n  margin-top: 0 !important;\n  margin-bottom: 0 !important;\n}\n\n@each $position-short, $position-long in $inset {\n  .m#{$position-short}-auto {\n    margin-#{$position-long}: auto !important;\n  }\n  .m#{$position-short}-0 {\n    margin-#{$position-long}: 0 !important;\n  }\n}\n\n.mt-xl\\@sm {\n  @include breakpoint(sm) {\n    margin-top: spacing-get('xl') !important;\n  }\n}\n",
              "@use 'sass:map';\n\n$breakpoints: (\n  sm: 40rem,\n  md: 48rem,\n  lg: 64rem,\n  xl: 80rem,\n  2xl: 96rem,\n) !default;\n\n@mixin breakpoint($breakpoint, $logic: false) {\n  @if ($logic) {\n    @media #{$logic} and (min-width: map.get($map: $breakpoints, $key: $breakpoint)) {\n      @content;\n    }\n  } @else {\n    @media (min-width: map.get($map: $breakpoints, $key: $breakpoint)) {\n      @content;\n    }\n  }\n}\n",
              "@use '../position' as *;\n@use '../spacing' as *;\n@use '../breakpoints' as *;\n\n@each $spacing-key, $space-value in $spacing {\n  .p-#{$spacing-key} {\n    padding: spacing-get($spacing-key) !important;\n  }\n\n  .px-#{$spacing-key} {\n    padding-right: spacing-get($spacing-key) !important;\n    padding-left: spacing-get($spacing-key) !important;\n  }\n\n  .py-#{$spacing-key} {\n    padding-top: spacing-get($spacing-key) !important;\n    padding-bottom: spacing-get($spacing-key) !important;\n  }\n\n  @each $position-short, $position-long in $inset {\n    .p#{$position-short}-#{$spacing-key} {\n      padding-#{$position-long}: spacing-get($spacing-key) !important;\n    }\n  }\n}\n\n.p-0 {\n  padding: 0 !important;\n}\n\n.px-0 {\n  padding-right: 0 !important;\n  padding-left: 0 !important;\n}\n\n.py-0 {\n  padding-top: 0 !important;\n  padding-bottom: 0 !important;\n}\n\n@each $position-short, $position-long in $inset {\n  .p#{$position-short}-0 {\n    padding-#{$position-long}: 0 !important;\n  }\n}\n\n.p-sm\\@\\!sm {\n  @include breakpoint(sm, 'not all') {\n    padding: spacing-get(sm) !important;\n  }\n}\n\n.w-auto {\n  width: auto !important;\n}\n",
              "@use '../spacing' as *;\n\n.container {\n  width: calc(100% - 2 * #{spacing-get(md)});\n  margin-right: auto;\n  margin-left: auto;\n}\n",
              "@use '../max-width' as *;\n@use '../breakpoints' as *;\n\n@each $max-width-key, $max-width-value in $max-w {\n  .max-w-#{$max-width-key} {\n    max-width: max-w-get($max-width-key);\n  }\n}\n\n@each $breakpoint-key, $breakpoint-value in $breakpoints {\n  .max-w-screen-#{$breakpoint-key} {\n    max-width: $breakpoint-value;\n  }\n}\n\n@each $breakpoint-key, $breakpoint-value in $breakpoints {\n  @each $max-width-key, $max-width-value in $max-w {\n    .max-w-#{$max-width-key}\\@#{$breakpoint-key} {\n      @include breakpoint($breakpoint-key) {\n        max-width: max-w-get($max-width-key);\n      }\n    }\n  }\n}\n\n$breakpointsNr: length($breakpoints);\n\n@each $breakpoint, $value in $breakpoints {\n  $i: index($breakpoints, $breakpoint $value);\n\n  @if $i == 1 {\n    [class^='max-w-adaptive'],\n    [class*=' max-w-adaptive'] {\n      max-width: map-get($map: $breakpoints, $key: #{$breakpoint});\n    }\n  } @else {\n    $classList: '';\n\n    @each $subBreakpoint, $subValue in $breakpoints {\n      $j: index($breakpoints, $subBreakpoint $subValue);\n\n      @if $j == $i {\n        $classList: '.max-w-adaptive-#{$subBreakpoint}';\n      } @else if $j > $i {\n        $classList: $classList + ', .max-w-adaptive-#{$subBreakpoint}';\n      }\n    }\n\n    @if $i < $breakpointsNr {\n      $classList: $classList + ', .max-w-adaptive';\n    }\n\n    @include breakpoint(#{$breakpoint}) {\n      #{$classList} {\n        max-width: map-get($map: $breakpoints, $key: #{$breakpoint});\n      }\n    }\n  }\n}\n",
              "@use '../display' as *;\n@use '../breakpoints' as *;\n@use '../spacing' as *;\n\n@each $display in $displays {\n  .#{$display} {\n    display: $display;\n  }\n}\n\n@each $breakpoint-key, $breakpoint-value in $breakpoints {\n  @each $display in $displays {\n    .#{$display}\\@#{$breakpoint-key} {\n      @include breakpoint($breakpoint-key) {\n        display: $display;\n      }\n    }\n  }\n}\n\n.relative {\n  position: relative;\n}\n\n.align-center {\n  align-items: center;\n}\n\n.text-right {\n  text-align: right;\n}\n\n.flex-wrap {\n  flex-wrap: wrap;\n}\n\n.space-between {\n  justify-content: space-between;\n}\n\n.w-full {\n  width: 100%;\n}\n\n.blur {\n  backdrop-filter: blur(10px);\n}\n\n.flex-wrap\\@sm {\n  @include breakpoint(sm, 'not all') {\n    flex-wrap: wrap;\n  }\n}\n\n.pointer {\n  cursor: pointer;\n}\n\n.flex-1 {\n  flex: 1;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.rounded {\n  border-radius: 8px;\n}\n\n.display\\@lg {\n  @include breakpoint(lg, 'not all') {\n    display: none;\n  }\n}\n",
              '$displays: (\n  flex,\n  inline-flex,\n  inline-block,\n  block,\n  inline,\n  grid,\n  inline-grid\n) !default;\n',
              "@use '../spacing' as *;\n\n@each $spacing-key, $spacing-value in $spacing {\n  body:not([class='no-gap']) .gap-#{$spacing-key} {\n    gap: spacing-get($spacing-key);\n  }\n  body:not([class='no-gap']) .gap-x-#{$spacing-key} {\n    column-gap: spacing-get($spacing-key);\n  }\n  body:not([class='no-gap']) .gap-y-#{$spacing-key} {\n    row-gap: spacing-get($spacing-key);\n  }\n\n  body.no-gap {\n    .gap-x-#{$spacing-key} > * {\n      margin-left: spacing-get($spacing-key);\n    }\n    .gap-x-#{$spacing-key} {\n      margin-left: calc(#{spacing-get($spacing-key)} * -1);\n    }\n    .gap-y-#{$spacing-key} > * {\n      margin-bottom: spacing-get($spacing-key);\n    }\n    .gap-y-#{$spacing-key} {\n      margin-bottom: calc(#{spacing-get($spacing-key)} * -1);\n    }\n    .gap-#{$spacing-key} > * {\n      margin-bottom: spacing-get($spacing-key);\n      margin-left: spacing-get($spacing-key);\n    }\n    .gap-#{$spacing-key} {\n      margin-bottom: calc(#{spacing-get($spacing-key)} * -1);\n      margin-left: calc(#{spacing-get($spacing-key)} * -1);\n    }\n  }\n}\n",
              "@use '../typography' as *;\n@use '../colors' as *;\n\n@each $typography-size-key, $typography-size-value in $typography-sizes {\n  .text-#{$typography-size-key} {\n    font-size: typography-size-get($typography-size-key);\n  }\n}\n\nmark {\n  background-color: transparent;\n  background-image: linear-gradient(\n    transparent 50%,\n    color-get(primary, 200) 50%\n  );\n}\n\n.font-italic {\n  font-style: italic;\n}\n\n.font-normal {\n  font-weight: 400;\n}\n\n.font-bold {\n  font-weight: 500;\n}\n",
              "@use '../spacing' as *;\n@use '../position' as *;\n\n@each $position-name, $position-value in $positions {\n  .#{$position-name} {\n    position: #{$position-value} !important;\n  }\n}\n\n@each $spacing-key, $spacing-value in $spacing {\n  @each $inset-abbr, $inset-full in $inset {\n    .#{$inset-full}-#{$spacing-key} {\n      #{$inset-full}: var(--spacing-#{$spacing-key});\n    }\n  }\n}\n\n@each $inset-abbr, $inset-full in $inset {\n  .#{$inset-full}-0 {\n    #{$inset-full}: 0;\n  }\n}\n",
              "@use '../config/typography' as *;\n@use '../config/breakpoints' as *;\n@use '../config/colors' as *;\n@use '../config/spacing' as *;\n\n:root {\n  @include breakpoint(xl) {\n    --text-base-size: 1.075em;\n    --text-scale-ratio: 1.25;\n  }\n}\n\nbody {\n  overflow-x: hidden;\n  font-family: base-get(font), sans-serif;\n  font-size: typography-size-get(base-size);\n  line-height: base-get(line-height);\n  color: base-get(color);\n}\n\nh1,\nh2,\nh3,\nh4 {\n  font-weight: heading-get(weight);\n  line-height: heading-get(line-height);\n  color: var(--heading-color);\n}\n\nh1 {\n  font-size: typography-size-get('2xl');\n}\n\nh2 {\n  font-size: typography-size-get('xl');\n}\n\nh3 {\n  font-size: typography-size-get('lg');\n}\n\nh4 {\n  font-size: typography-size-get('md');\n}\n",
              "@use '../config/spacing' as *;\n@use '../config/colors' as *;\n\n:root {\n  --control-color-border: var(--color-contrast-300);\n  --control-color-border-focus: var(--color-primary-500);\n  --control-color-shadow-focus: var(--color-primary-200);\n}\n\n.form__group {\n  display: flex;\n  flex-wrap: wrap;\n  column-gap: spacing-get(md);\n}\n\n.form__control {\n  width: 100%;\n  min-height: spacing-get(xl);\n  padding: spacing-get(xs) spacing-get(md);\n  color: var(--base-color);\n  vertical-align: bottom;\n  background-color: var(--color-bg);\n  border: 1px solid var(--control-color-border);\n  border-radius: 4px;\n  outline: none;\n\n  &:focus {\n    border-color: var(--control-color-border-focus);\n    box-shadow: 0 0 0 2px var(--control-color-shadow-focus);\n    transition: all 0.3s;\n  }\n}\n",
              "@use '../config/colors' as *;\n@use '../config/breakpoints' as *;\n@use '../config/spacing' as *;\n\n:root {\n  --ease-out: cubic-bezier(0.215, 0.61, 0.355, 1);\n  --link-color: var(--color-primary-200);\n}\n\n.text-bg-fx {\n  cursor: pointer;\n  background-repeat: no-repeat;\n  transition: background-size 0.3s;\n  will-change: background-size;\n  color: var(--base-color);\n\n  &:hover {\n    background-size: 100% 100%;\n  }\n}\n\n.text-bg-fx--scale-x {\n  padding: var(--spacing-4xs) 0;\n  background-image: linear-gradient(var(--link-color), var(--link-color));\n  background-size: 0% 100%;\n}\n\n.text-bg-fx--scale-y {\n  text-decoration: none;\n  background-image: linear-gradient(var(--link-color), var(--link-color));\n  background-position: center bottom;\n  background-size: 100% 2px;\n}\n\n.text-bg-fx--underline,\n.text-bg-fx--underline-bold {\n  text-decoration: none;\n  background-size: 0% 100%;\n}\n\n.text-bg-fx--underline {\n  // text underline size = 1px\n  background-image: linear-gradient(\n    transparent calc(100% - 3px),\n    currentColor calc(100% - 3px),\n    currentColor calc(100% - 2px),\n    transparent 2px\n  );\n}\n\n.text-bg-fx--underline-bold {\n  background-image: linear-gradient(\n    transparent 50%,\n    color-get(primary, 200) 50%\n  );\n}\n\n.text-bg-fx--text-shadow {\n  // you can use this with the .text-bg-fx--underline effect\n  text-shadow: 1.5px 1px var(--color-bg), -1.5px 1px var(--color-bg),\n    0 1px var(--color-bg);\n}\n\n.link-fx-1 {\n  position: relative;\n  display: inline-flex;\n  align-items: center;\n  height: 32px; // !important - set fixed height\n  padding: 0 6px;\n  text-decoration: none;\n\n  .icone {\n    position: absolute;\n    right: 0;\n    bottom: 0;\n    font-size: 32px; // icon size = link size 👆\n    transform: translateX(100%) rotate(90deg);\n\n    circle {\n      stroke-dasharray: 100;\n      stroke-dashoffset: 100;\n      transition: stroke-dashoffset 0.2s;\n    }\n\n    line {\n      transition: transform 0.4s;\n      transform-origin: 13px 15px;\n    }\n\n    line:last-child {\n      transform-origin: 19px 15px;\n    }\n  }\n\n  &::before {\n    // border bottom\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    height: 1px;\n    content: '';\n    background-color: currentColor;\n    transition: transform 0.2s 0.1s;\n    transform-origin: right center;\n  }\n\n  &:hover {\n    .icone {\n      circle {\n        stroke-dashoffset: 200;\n        transition: stroke-dashoffset 0.2s 0.1s;\n      }\n\n      line {\n        transform: rotate(-180deg);\n      }\n\n      line:last-child {\n        transform: rotate(180deg);\n      }\n    }\n\n    &::before {\n      transition: transform 0.2s;\n      transform: translateX(17px) scaleX(0);\n    }\n  }\n}\n\n// v2\n.link-fx-2 {\n  position: relative;\n  display: inline-block;\n  padding: 4px 6px;\n  color: var(--color-contrast-higher);\n  text-decoration: none;\n  background-image: linear-gradient(\n    var(--color-contrast-900),\n    var(--color-contrast-900)\n  );\n  background-repeat: repeat-x;\n  background-position: left bottom;\n  background-size: 100% 1px;\n  transition: background-size 0.3s var(--ease-out);\n  will-change: background-size;\n\n  &::after {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    padding: inherit;\n    clip-path: polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%);\n    color: var(--color-bg);\n    content: attr(data-link-fx-clone);\n    transition: clip-path 0.3s, transform 0.3s;\n    transition-timing-function: var(--ease-out);\n    transform: translateY(4px);\n    will-change: clip-path, transform;\n  }\n\n  &:hover {\n    background-size: 100% 100%;\n\n    &::after {\n      clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);\n      transform: translateY(0);\n    }\n  }\n}\n\n// v3\n.link-fx-3 {\n  position: relative;\n  display: inline-flex;\n  align-items: center;\n  padding: 4px 6px;\n  text-decoration: none;\n\n  .icone {\n    position: relative;\n    display: block;\n    margin-left: 8px;\n    font-size: 12px; // icon size\n    visibility: hidden;\n    opacity: 0;\n    transition: opacity 0.3s, transform 0.3s var(--ease-out), visibility 0s 0.3s;\n    transform: translateY(10px);\n    will-change: transform;\n\n    line {\n      transition: transform 0.3s var(--ease-out);\n      transform-origin: 9px 6px;\n      will-change: transform;\n    }\n\n    line:first-child {\n      transform: rotate(20deg);\n    }\n\n    line:last-child {\n      transform: rotate(-20deg);\n    }\n\n    @include breakpoint(sm, 'not all') {\n      display: none;\n    }\n  }\n\n  &::before {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    width: calc(100% - 18px); // 18px = icon size (12px) + padding right (6px)\n    height: 2px;\n    content: '';\n    background-color: var(--color-primary-500);\n    opacity: 0.5;\n    transition: 0.3s var(--ease-out);\n\n    @include breakpoint(sm, 'not all') {\n      width: 100%;\n      transform: translateX(0);\n    }\n  }\n\n  &:hover {\n    .icone {\n      color: var(--color-primary-500);\n      visibility: visible;\n      opacity: 0.5;\n      transition: opacity 0.3s, transform 0.3s var(--ease-out);\n      transform: translateY(0);\n\n      line:first-child,\n      line:last-child {\n        transform: rotate(0);\n      }\n    }\n\n    color: var(--color-primary-500);\n\n    &::before {\n      width: 100%;\n    }\n  }\n}\n\n// v4\n.link-fx-4 {\n  position: relative;\n  display: inline-block;\n  padding: 6px 10px;\n  color: var(--color-contrast-900);\n  text-decoration: none;\n  background-color: var(--color-contrast-50);\n  &::before {\n    position: absolute;\n    top: 0;\n    left: 0;\n    z-index: 1;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n    height: 100%;\n    clip-path: polygon(0% 0%, 1px 0%, 1px 100%, 0% 100%);\n    color: var(--color-bg);\n    content: attr(data-link-fx-clone);\n    background-color: var(--color-contrast-900);\n    transition: clip-path 0.3s var(--ease-out);\n    will-change: clip-path;\n  }\n\n  &:hover {\n    &::before {\n      clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);\n    }\n  }\n}\n\n.link-fx-5 {\n  display: inline-block;\n  padding: 4px 0;\n  text-decoration: none;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='4' viewBox='0 0 16 4'%3E%3Cpath d='M0,3.5c4,0,4-3,8-3s4,3,8,3' fill='none' stroke='%232a6df4' opacity='0.5' stroke-miterlimit='10'/%3E%3C/svg%3E\"); // 👈 edit stroke='%232a6df4' (last 6 digits - hexadecimal color) to change the color of the SVG decoration\n  background-repeat: repeat-x;\n  background-position: 0 100%;\n  background-size: 0;\n\n  &:hover {\n    background-size: 16px 4px;\n    animation: link-fx-5-animation 0.4s linear infinite;\n  }\n}\n\n@keyframes link-fx-5-animation {\n  from {\n    background-position: 0 100%;\n  }\n\n  to {\n    background-position: 16px 100%;\n  }\n}\n\n.reverse {\n  transform: rotate(180deg);\n}\n\n.icone {\n  width: 12px;\n  height: 12px;\n}\n\n// v3\n.link-fx-3--inverse {\n  position: relative;\n  display: inline-flex;\n  align-items: center;\n  padding: 4px 6px;\n  text-decoration: none;\n\n  .icone {\n    position: relative;\n    display: block;\n    margin-right: 8px;\n    font-size: 12px; // icon size\n    visibility: hidden;\n    opacity: 0;\n    transition: opacity 0.3s, transform 0.3s var(--ease-out), visibility 0s 0.3s;\n    transform: translateY(10px);\n    will-change: transform;\n\n    line {\n      transition: transform 0.3s var(--ease-out);\n      transform-origin: 9px 6px;\n      will-change: transform;\n    }\n\n    line:first-child {\n      transform: rotate(20deg);\n    }\n\n    line:last-child {\n      transform: rotate(-20deg);\n    }\n\n    @include breakpoint(sm, 'not all') {\n      display: none;\n    }\n  }\n\n  &::before {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    width: calc(100% - 18px);\n    height: 2px;\n    content: '';\n    background-color: var(--color-primary-500);\n    opacity: 0.5;\n    transition: 0.3s var(--ease-out);\n    transform: translateX(\n      17px\n    ); // 18px = icon size (12px) + padding right (6px)\n\n    @include breakpoint(sm, 'not all') {\n      width: 100%;\n      transform: translateX(0);\n    }\n  }\n\n  &:hover {\n    .icone {\n      color: var(--color-primary-500);\n      visibility: visible;\n      opacity: 0.5;\n      transition: opacity 0.3s, transform 0.3s var(--ease-out);\n      transform: translateY(0);\n\n      line:first-child,\n      line:last-child {\n        transform: rotate(0);\n      }\n    }\n\n    color: var(--color-primary-500);\n\n    &::before {\n      width: 100%;\n      transform: translateX(0);\n    }\n  }\n}\n\n.space-around {\n  flex-wrap: wrap;\n  justify-content: space-around;\n}\n",
              "@use '../config/spacing' as *;\n@use '../config/colors' as *;\n\n$back-top-size: spacing-get(lg) !default;\n$back-top-icon-size: 16px !default;\n$back-top-margins: spacing-get(lg) !default;\n$back-top-icon-url: '' !default;\n\n:root {\n}\n\n.back-top-icon {\n  color: var(--back-top-icon);\n}\n\n.back-top {\n  position: fixed;\n  right: $back-top-margins;\n  bottom: $back-top-margins;\n  z-index: 9999;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: $back-top-size;\n  height: $back-top-size;\n  cursor: pointer;\n  visibility: hidden;\n  background-color: var(--back-top-bg);\n  border-radius: 50%;\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),\n    0 2px 4px -1px rgba(0, 0, 0, 0.06);\n  opacity: 0;\n  transition: opacity 0.3s, visibility 0.3s, background-color 0.3s;\n  transform: scale(1.3);\n\n  &:hover {\n    background-color: var(--back-top-bg-hover);\n    opacity: 1;\n  }\n\n  &--visible {\n    visibility: visible;\n    opacity: 1;\n  }\n}\n",
              "@use '../config/spacing' as *;\n\n.modal {\n  position: fixed;\n  top: 0;\n  left: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(var(--color-contrast-900-rgb), 0.4);\n}\n\n.content {\n  padding: spacing-get(xl);\n  background-color: var(--color-bg);\n  border: 1px solid var(--color-contrast-500);\n}\n",
              "@use 'config';\n@use 'components';\n@use './config/breakpoints' as *;\n@use './config/spacing' as *;\n@use './config/colors' as *;\n\n::selection {\n  color: #000;\n  background-color: var(--color-primary-300);\n}\n\n.flex-column {\n  flex-direction: column;\n}\n\n.hero {\n  height: 150vh;\n  grid-template-columns: 1fr;\n  grid-template-rows: 0.1fr 1fr 0.1fr 0.4fr;\n\n  &__image {\n    position: relative;\n    grid-row: 2;\n    grid-column: span 2;\n    background-image: url('../assets/wall.png');\n    background-size: cover;\n\n    @include breakpoint(sm) {\n      grid-row: span 2;\n      grid-column: 4;\n    }\n    z-index: 0;\n  }\n\n  &__titre {\n    grid-column: span 2;\n    align-self: end;\n    text-align: center;\n    transform: translateY(var(--scroll-y));\n\n    @include breakpoint(sm) {\n      text-align: left;\n      grid-column: 2;\n    }\n  }\n\n  @include breakpoint(sm) {\n    height: 100vh;\n    grid-template-columns: 0.25fr 0.6fr 0.15fr 0.9fr 0.1fr;\n    grid-template-rows: 1fr 1fr;\n  }\n}\n\n.curtain {\n  background-color: #331a1a;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n  opacity: 0.6;\n}\n\n.bars {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background-image: url('../assets/cols.png');\n  background-size: cover;\n}\n\n.player {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background-image: url('../assets/player/player_idle.png');\n  image-rendering: pixelated;\n  background-size: cover;\n}\n\n.bg-white {\n  background-color: #fff;\n}\n\n.radius-md {\n  border-radius: 0.5rem;\n}\n\n.btn {\n  background-color: color-get(primary, 800);\n  transition: 0.3s background-color ease-in-out;\n  &:hover {\n    background-color: color-get(primary, 700);\n  }\n}\n\n.clip {\n  clip-path: polygon(0% 0%, 100% 75px, 100% 100%, 0% calc(100% - 75px));\n  transform: translateY(var(--scroll-y-slow));\n  z-index: 10;\n  padding-bottom: spacing-get(4xl);\n}\n\n.z-max {\n  z-index: 999;\n}\n\n.pill {\n  --control-color: rgba(var(--color-primary-500-rgb), 0.2);\n  height: 4rem;\n  display: flex;\n  border-radius: 2rem;\n  overflow: hidden;\n  align-items: center;\n  justify-content: space-around;\n  box-shadow: 0 0 4px 2px var(--control-color);\n}\n\n.player-icon {\n  background-image: url('../assets/player/player_idle.png');\n  image-rendering: pixelated;\n  height: 2rem;\n  width: 2rem;\n  transform: scale(3);\n  background-color: color-get(contrast, 700);\n  border-radius: 50%;\n}\n\n.player-score {\n  justify-self: flex-end;\n}\n\n#app.game {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  justify-content: center;\n  height: 100vh;\n  background-color: #1e1010;\n}\n\n.justify-center {\n  justify-content: center;\n}\n",
            ],
            sourceRoot: '',
          },
        ]);
        const f = u;
      },
      645: r => {
        'use strict';
        r.exports = function (r) {
          var e = [];
          return (
            (e.toString = function () {
              return this.map(function (e) {
                var n = '',
                  o = void 0 !== e[5];
                return (
                  e[4] && (n += '@supports ('.concat(e[4], ') {')),
                  e[2] && (n += '@media '.concat(e[2], ' {')),
                  o &&
                    (n += '@layer'.concat(
                      e[5].length > 0 ? ' '.concat(e[5]) : '',
                      ' {'
                    )),
                  (n += r(e)),
                  o && (n += '}'),
                  e[2] && (n += '}'),
                  e[4] && (n += '}'),
                  n
                );
              }).join('');
            }),
            (e.i = function (r, n, o, t, a) {
              'string' == typeof r && (r = [[null, r, void 0]]);
              var A = {};
              if (o)
                for (var i = 0; i < this.length; i++) {
                  var c = this[i][0];
                  null != c && (A[c] = !0);
                }
              for (var s = 0; s < r.length; s++) {
                var l = [].concat(r[s]);
                (o && A[l[0]]) ||
                  (void 0 !== a &&
                    (void 0 === l[5] ||
                      (l[1] = '@layer'
                        .concat(l[5].length > 0 ? ' '.concat(l[5]) : '', ' {')
                        .concat(l[1], '}')),
                    (l[5] = a)),
                  n &&
                    (l[2]
                      ? ((l[1] = '@media '
                          .concat(l[2], ' {')
                          .concat(l[1], '}')),
                        (l[2] = n))
                      : (l[2] = n)),
                  t &&
                    (l[4]
                      ? ((l[1] = '@supports ('
                          .concat(l[4], ') {')
                          .concat(l[1], '}')),
                        (l[4] = t))
                      : (l[4] = ''.concat(t))),
                  e.push(l));
              }
            }),
            e
          );
        };
      },
      667: r => {
        'use strict';
        r.exports = function (r, e) {
          return (
            e || (e = {}),
            r
              ? ((r = String(r.__esModule ? r.default : r)),
                /^['"].*['"]$/.test(r) && (r = r.slice(1, -1)),
                e.hash && (r += e.hash),
                /["'() \t\n]|(%20)/.test(r) || e.needQuotes
                  ? '"'.concat(
                      r.replace(/"/g, '\\"').replace(/\n/g, '\\n'),
                      '"'
                    )
                  : r)
              : r
          );
        };
      },
      537: r => {
        'use strict';
        r.exports = function (r) {
          var e = r[1],
            n = r[3];
          if (!n) return e;
          if ('function' == typeof btoa) {
            var o = btoa(unescape(encodeURIComponent(JSON.stringify(n)))),
              t =
                'sourceMappingURL=data:application/json;charset=utf-8;base64,'.concat(
                  o
                ),
              a = '/*# '.concat(t, ' */'),
              A = n.sources.map(function (r) {
                return '/*# sourceURL='
                  .concat(n.sourceRoot || '')
                  .concat(r, ' */');
              });
            return [e].concat(A).concat([a]).join('\n');
          }
          return [e].join('\n');
        };
      },
      755: function (r, e) {
        var n;
        !(function (e, n) {
          'use strict';
          'object' == typeof r.exports
            ? (r.exports = e.document
                ? n(e, !0)
                : function (r) {
                    if (!r.document)
                      throw new Error(
                        'jQuery requires a window with a document'
                      );
                    return n(r);
                  })
            : n(e);
        })('undefined' != typeof window ? window : this, function (o, t) {
          'use strict';
          var a = [],
            A = Object.getPrototypeOf,
            i = a.slice,
            c = a.flat
              ? function (r) {
                  return a.flat.call(r);
                }
              : function (r) {
                  return a.concat.apply([], r);
                },
            s = a.push,
            l = a.indexOf,
            g = {},
            C = g.toString,
            u = g.hasOwnProperty,
            d = u.toString,
            p = d.call(Object),
            m = {},
            b = function (r) {
              return (
                'function' == typeof r &&
                'number' != typeof r.nodeType &&
                'function' != typeof r.item
              );
            },
            f = function (r) {
              return null != r && r === r.window;
            },
            v = o.document,
            h = {type: !0, src: !0, nonce: !0, noModule: !0};
          function x(r, e, n) {
            var o,
              t,
              a = (n = n || v).createElement('script');
            if (((a.text = r), e))
              for (o in h)
                (t = e[o] || (e.getAttribute && e.getAttribute(o))) &&
                  a.setAttribute(o, t);
            n.head.appendChild(a).parentNode.removeChild(a);
          }
          function y(r) {
            return null == r
              ? r + ''
              : 'object' == typeof r || 'function' == typeof r
              ? g[C.call(r)] || 'object'
              : typeof r;
          }
          var B = '3.6.0',
            w = function (r, e) {
              return new w.fn.init(r, e);
            };
          function k(r) {
            var e = !!r && 'length' in r && r.length,
              n = y(r);
            return (
              !b(r) &&
              !f(r) &&
              ('array' === n ||
                0 === e ||
                ('number' == typeof e && e > 0 && e - 1 in r))
            );
          }
          (w.fn = w.prototype =
            {
              jquery: B,
              constructor: w,
              length: 0,
              toArray: function () {
                return i.call(this);
              },
              get: function (r) {
                return null == r
                  ? i.call(this)
                  : r < 0
                  ? this[r + this.length]
                  : this[r];
              },
              pushStack: function (r) {
                var e = w.merge(this.constructor(), r);
                return (e.prevObject = this), e;
              },
              each: function (r) {
                return w.each(this, r);
              },
              map: function (r) {
                return this.pushStack(
                  w.map(this, function (e, n) {
                    return r.call(e, n, e);
                  })
                );
              },
              slice: function () {
                return this.pushStack(i.apply(this, arguments));
              },
              first: function () {
                return this.eq(0);
              },
              last: function () {
                return this.eq(-1);
              },
              even: function () {
                return this.pushStack(
                  w.grep(this, function (r, e) {
                    return (e + 1) % 2;
                  })
                );
              },
              odd: function () {
                return this.pushStack(
                  w.grep(this, function (r, e) {
                    return e % 2;
                  })
                );
              },
              eq: function (r) {
                var e = this.length,
                  n = +r + (r < 0 ? e : 0);
                return this.pushStack(n >= 0 && n < e ? [this[n]] : []);
              },
              end: function () {
                return this.prevObject || this.constructor();
              },
              push: s,
              sort: a.sort,
              splice: a.splice,
            }),
            (w.extend = w.fn.extend =
              function () {
                var r,
                  e,
                  n,
                  o,
                  t,
                  a,
                  A = arguments[0] || {},
                  i = 1,
                  c = arguments.length,
                  s = !1;
                for (
                  'boolean' == typeof A &&
                    ((s = A), (A = arguments[i] || {}), i++),
                    'object' == typeof A || b(A) || (A = {}),
                    i === c && ((A = this), i--);
                  i < c;
                  i++
                )
                  if (null != (r = arguments[i]))
                    for (e in r)
                      (o = r[e]),
                        '__proto__' !== e &&
                          A !== o &&
                          (s &&
                          o &&
                          (w.isPlainObject(o) || (t = Array.isArray(o)))
                            ? ((n = A[e]),
                              (a =
                                t && !Array.isArray(n)
                                  ? []
                                  : t || w.isPlainObject(n)
                                  ? n
                                  : {}),
                              (t = !1),
                              (A[e] = w.extend(s, a, o)))
                            : void 0 !== o && (A[e] = o));
                return A;
              }),
            w.extend({
              expando: 'jQuery' + (B + Math.random()).replace(/\D/g, ''),
              isReady: !0,
              error: function (r) {
                throw new Error(r);
              },
              noop: function () {},
              isPlainObject: function (r) {
                var e, n;
                return !(
                  !r ||
                  '[object Object]' !== C.call(r) ||
                  ((e = A(r)) &&
                    ('function' !=
                      typeof (n = u.call(e, 'constructor') && e.constructor) ||
                      d.call(n) !== p))
                );
              },
              isEmptyObject: function (r) {
                var e;
                for (e in r) return !1;
                return !0;
              },
              globalEval: function (r, e, n) {
                x(r, {nonce: e && e.nonce}, n);
              },
              each: function (r, e) {
                var n,
                  o = 0;
                if (k(r))
                  for (
                    n = r.length;
                    o < n && !1 !== e.call(r[o], o, r[o]);
                    o++
                  );
                else for (o in r) if (!1 === e.call(r[o], o, r[o])) break;
                return r;
              },
              makeArray: function (r, e) {
                var n = e || [];
                return (
                  null != r &&
                    (k(Object(r))
                      ? w.merge(n, 'string' == typeof r ? [r] : r)
                      : s.call(n, r)),
                  n
                );
              },
              inArray: function (r, e, n) {
                return null == e ? -1 : l.call(e, r, n);
              },
              merge: function (r, e) {
                for (var n = +e.length, o = 0, t = r.length; o < n; o++)
                  r[t++] = e[o];
                return (r.length = t), r;
              },
              grep: function (r, e, n) {
                for (var o = [], t = 0, a = r.length, A = !n; t < a; t++)
                  !e(r[t], t) !== A && o.push(r[t]);
                return o;
              },
              map: function (r, e, n) {
                var o,
                  t,
                  a = 0,
                  A = [];
                if (k(r))
                  for (o = r.length; a < o; a++)
                    null != (t = e(r[a], a, n)) && A.push(t);
                else for (a in r) null != (t = e(r[a], a, n)) && A.push(t);
                return c(A);
              },
              guid: 1,
              support: m,
            }),
            'function' == typeof Symbol &&
              (w.fn[Symbol.iterator] = a[Symbol.iterator]),
            w.each(
              'Boolean Number String Function Array Date RegExp Object Error Symbol'.split(
                ' '
              ),
              function (r, e) {
                g['[object ' + e + ']'] = e.toLowerCase();
              }
            );
          var E = (function (r) {
            var e,
              n,
              o,
              t,
              a,
              A,
              i,
              c,
              s,
              l,
              g,
              C,
              u,
              d,
              p,
              m,
              b,
              f,
              v,
              h = 'sizzle' + 1 * new Date(),
              x = r.document,
              y = 0,
              B = 0,
              w = cr(),
              k = cr(),
              E = cr(),
              D = cr(),
              G = function (r, e) {
                return r === e && (g = !0), 0;
              },
              L = {}.hasOwnProperty,
              F = [],
              I = F.pop,
              S = F.push,
              M = F.push,
              H = F.slice,
              P = function (r, e) {
                for (var n = 0, o = r.length; n < o; n++)
                  if (r[n] === e) return n;
                return -1;
              },
              O =
                'checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped',
              j = '[\\x20\\t\\r\\n\\f]',
              N =
                '(?:\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+',
              $ =
                '\\[[\\x20\\t\\r\\n\\f]*(' +
                N +
                ')(?:' +
                j +
                '*([*^$|!~]?=)' +
                j +
                '*(?:\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)"|(' +
                N +
                '))|)' +
                j +
                '*\\]',
              T =
                ':(' +
                N +
                ')(?:\\(((\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|' +
                $ +
                ')*)|.*)\\)|)',
              q = new RegExp(j + '+', 'g'),
              J = new RegExp(
                '^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$',
                'g'
              ),
              z = new RegExp('^[\\x20\\t\\r\\n\\f]*,[\\x20\\t\\r\\n\\f]*'),
              Q = new RegExp(
                '^[\\x20\\t\\r\\n\\f]*([>+~]|[\\x20\\t\\r\\n\\f])[\\x20\\t\\r\\n\\f]*'
              ),
              U = new RegExp(j + '|>'),
              W = new RegExp(T),
              Y = new RegExp('^' + N + '$'),
              _ = {
                ID: new RegExp('^#(' + N + ')'),
                CLASS: new RegExp('^\\.(' + N + ')'),
                TAG: new RegExp('^(' + N + '|[*])'),
                ATTR: new RegExp('^' + $),
                PSEUDO: new RegExp('^' + T),
                CHILD: new RegExp(
                  '^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)',
                  'i'
                ),
                bool: new RegExp('^(?:' + O + ')$', 'i'),
                needsContext: new RegExp(
                  '^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)',
                  'i'
                ),
              },
              R = /HTML$/i,
              X = /^(?:input|select|textarea|button)$/i,
              K = /^h\d$/i,
              V = /^[^{]+\{\s*\[native \w/,
              Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
              rr = /[+~]/,
              er = new RegExp(
                '\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\([^\\r\\n\\f])',
                'g'
              ),
              nr = function (r, e) {
                var n = '0x' + r.slice(1) - 65536;
                return (
                  e ||
                  (n < 0
                    ? String.fromCharCode(n + 65536)
                    : String.fromCharCode(
                        (n >> 10) | 55296,
                        (1023 & n) | 56320
                      ))
                );
              },
              or = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
              tr = function (r, e) {
                return e
                  ? '\0' === r
                    ? '�'
                    : r.slice(0, -1) +
                      '\\' +
                      r.charCodeAt(r.length - 1).toString(16) +
                      ' '
                  : '\\' + r;
              },
              ar = function () {
                C();
              },
              Ar = hr(
                function (r) {
                  return (
                    !0 === r.disabled && 'fieldset' === r.nodeName.toLowerCase()
                  );
                },
                {dir: 'parentNode', next: 'legend'}
              );
            try {
              M.apply((F = H.call(x.childNodes)), x.childNodes),
                F[x.childNodes.length].nodeType;
            } catch (r) {
              M = {
                apply: F.length
                  ? function (r, e) {
                      S.apply(r, H.call(e));
                    }
                  : function (r, e) {
                      for (var n = r.length, o = 0; (r[n++] = e[o++]); );
                      r.length = n - 1;
                    },
              };
            }
            function ir(r, e, o, t) {
              var a,
                i,
                s,
                l,
                g,
                d,
                b,
                f = e && e.ownerDocument,
                x = e ? e.nodeType : 9;
              if (
                ((o = o || []),
                'string' != typeof r || !r || (1 !== x && 9 !== x && 11 !== x))
              )
                return o;
              if (!t && (C(e), (e = e || u), p)) {
                if (11 !== x && (g = Z.exec(r)))
                  if ((a = g[1])) {
                    if (9 === x) {
                      if (!(s = e.getElementById(a))) return o;
                      if (s.id === a) return o.push(s), o;
                    } else if (
                      f &&
                      (s = f.getElementById(a)) &&
                      v(e, s) &&
                      s.id === a
                    )
                      return o.push(s), o;
                  } else {
                    if (g[2]) return M.apply(o, e.getElementsByTagName(r)), o;
                    if (
                      (a = g[3]) &&
                      n.getElementsByClassName &&
                      e.getElementsByClassName
                    )
                      return M.apply(o, e.getElementsByClassName(a)), o;
                  }
                if (
                  n.qsa &&
                  !D[r + ' '] &&
                  (!m || !m.test(r)) &&
                  (1 !== x || 'object' !== e.nodeName.toLowerCase())
                ) {
                  if (((b = r), (f = e), 1 === x && (U.test(r) || Q.test(r)))) {
                    for (
                      ((f = (rr.test(r) && br(e.parentNode)) || e) === e &&
                        n.scope) ||
                        ((l = e.getAttribute('id'))
                          ? (l = l.replace(or, tr))
                          : e.setAttribute('id', (l = h))),
                        i = (d = A(r)).length;
                      i--;

                    )
                      d[i] = (l ? '#' + l : ':scope') + ' ' + vr(d[i]);
                    b = d.join(',');
                  }
                  try {
                    return M.apply(o, f.querySelectorAll(b)), o;
                  } catch (e) {
                    D(r, !0);
                  } finally {
                    l === h && e.removeAttribute('id');
                  }
                }
              }
              return c(r.replace(J, '$1'), e, o, t);
            }
            function cr() {
              var r = [];
              return function e(n, t) {
                return (
                  r.push(n + ' ') > o.cacheLength && delete e[r.shift()],
                  (e[n + ' '] = t)
                );
              };
            }
            function sr(r) {
              return (r[h] = !0), r;
            }
            function lr(r) {
              var e = u.createElement('fieldset');
              try {
                return !!r(e);
              } catch (r) {
                return !1;
              } finally {
                e.parentNode && e.parentNode.removeChild(e), (e = null);
              }
            }
            function gr(r, e) {
              for (var n = r.split('|'), t = n.length; t--; )
                o.attrHandle[n[t]] = e;
            }
            function Cr(r, e) {
              var n = e && r,
                o =
                  n &&
                  1 === r.nodeType &&
                  1 === e.nodeType &&
                  r.sourceIndex - e.sourceIndex;
              if (o) return o;
              if (n) for (; (n = n.nextSibling); ) if (n === e) return -1;
              return r ? 1 : -1;
            }
            function ur(r) {
              return function (e) {
                return 'input' === e.nodeName.toLowerCase() && e.type === r;
              };
            }
            function dr(r) {
              return function (e) {
                var n = e.nodeName.toLowerCase();
                return ('input' === n || 'button' === n) && e.type === r;
              };
            }
            function pr(r) {
              return function (e) {
                return 'form' in e
                  ? e.parentNode && !1 === e.disabled
                    ? 'label' in e
                      ? 'label' in e.parentNode
                        ? e.parentNode.disabled === r
                        : e.disabled === r
                      : e.isDisabled === r ||
                        (e.isDisabled !== !r && Ar(e) === r)
                    : e.disabled === r
                  : 'label' in e && e.disabled === r;
              };
            }
            function mr(r) {
              return sr(function (e) {
                return (
                  (e = +e),
                  sr(function (n, o) {
                    for (var t, a = r([], n.length, e), A = a.length; A--; )
                      n[(t = a[A])] && (n[t] = !(o[t] = n[t]));
                  })
                );
              });
            }
            function br(r) {
              return r && void 0 !== r.getElementsByTagName && r;
            }
            for (e in ((n = ir.support = {}),
            (a = ir.isXML =
              function (r) {
                var e = r && r.namespaceURI,
                  n = r && (r.ownerDocument || r).documentElement;
                return !R.test(e || (n && n.nodeName) || 'HTML');
              }),
            (C = ir.setDocument =
              function (r) {
                var e,
                  t,
                  A = r ? r.ownerDocument || r : x;
                return A != u && 9 === A.nodeType && A.documentElement
                  ? ((d = (u = A).documentElement),
                    (p = !a(u)),
                    x != u &&
                      (t = u.defaultView) &&
                      t.top !== t &&
                      (t.addEventListener
                        ? t.addEventListener('unload', ar, !1)
                        : t.attachEvent && t.attachEvent('onunload', ar)),
                    (n.scope = lr(function (r) {
                      return (
                        d.appendChild(r).appendChild(u.createElement('div')),
                        void 0 !== r.querySelectorAll &&
                          !r.querySelectorAll(':scope fieldset div').length
                      );
                    })),
                    (n.attributes = lr(function (r) {
                      return (r.className = 'i'), !r.getAttribute('className');
                    })),
                    (n.getElementsByTagName = lr(function (r) {
                      return (
                        r.appendChild(u.createComment('')),
                        !r.getElementsByTagName('*').length
                      );
                    })),
                    (n.getElementsByClassName = V.test(
                      u.getElementsByClassName
                    )),
                    (n.getById = lr(function (r) {
                      return (
                        (d.appendChild(r).id = h),
                        !u.getElementsByName || !u.getElementsByName(h).length
                      );
                    })),
                    n.getById
                      ? ((o.filter.ID = function (r) {
                          var e = r.replace(er, nr);
                          return function (r) {
                            return r.getAttribute('id') === e;
                          };
                        }),
                        (o.find.ID = function (r, e) {
                          if (void 0 !== e.getElementById && p) {
                            var n = e.getElementById(r);
                            return n ? [n] : [];
                          }
                        }))
                      : ((o.filter.ID = function (r) {
                          var e = r.replace(er, nr);
                          return function (r) {
                            var n =
                              void 0 !== r.getAttributeNode &&
                              r.getAttributeNode('id');
                            return n && n.value === e;
                          };
                        }),
                        (o.find.ID = function (r, e) {
                          if (void 0 !== e.getElementById && p) {
                            var n,
                              o,
                              t,
                              a = e.getElementById(r);
                            if (a) {
                              if (
                                (n = a.getAttributeNode('id')) &&
                                n.value === r
                              )
                                return [a];
                              for (
                                t = e.getElementsByName(r), o = 0;
                                (a = t[o++]);

                              )
                                if (
                                  (n = a.getAttributeNode('id')) &&
                                  n.value === r
                                )
                                  return [a];
                            }
                            return [];
                          }
                        })),
                    (o.find.TAG = n.getElementsByTagName
                      ? function (r, e) {
                          return void 0 !== e.getElementsByTagName
                            ? e.getElementsByTagName(r)
                            : n.qsa
                            ? e.querySelectorAll(r)
                            : void 0;
                        }
                      : function (r, e) {
                          var n,
                            o = [],
                            t = 0,
                            a = e.getElementsByTagName(r);
                          if ('*' === r) {
                            for (; (n = a[t++]); )
                              1 === n.nodeType && o.push(n);
                            return o;
                          }
                          return a;
                        }),
                    (o.find.CLASS =
                      n.getElementsByClassName &&
                      function (r, e) {
                        if (void 0 !== e.getElementsByClassName && p)
                          return e.getElementsByClassName(r);
                      }),
                    (b = []),
                    (m = []),
                    (n.qsa = V.test(u.querySelectorAll)) &&
                      (lr(function (r) {
                        var e;
                        (d.appendChild(r).innerHTML =
                          "<a id='" +
                          h +
                          "'></a><select id='" +
                          h +
                          "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                          r.querySelectorAll("[msallowcapture^='']").length &&
                            m.push('[*^$]=[\\x20\\t\\r\\n\\f]*(?:\'\'|"")'),
                          r.querySelectorAll('[selected]').length ||
                            m.push(
                              '\\[[\\x20\\t\\r\\n\\f]*(?:value|' + O + ')'
                            ),
                          r.querySelectorAll('[id~=' + h + '-]').length ||
                            m.push('~='),
                          (e = u.createElement('input')).setAttribute(
                            'name',
                            ''
                          ),
                          r.appendChild(e),
                          r.querySelectorAll("[name='']").length ||
                            m.push(
                              '\\[[\\x20\\t\\r\\n\\f]*name[\\x20\\t\\r\\n\\f]*=[\\x20\\t\\r\\n\\f]*(?:\'\'|"")'
                            ),
                          r.querySelectorAll(':checked').length ||
                            m.push(':checked'),
                          r.querySelectorAll('a#' + h + '+*').length ||
                            m.push('.#.+[+~]'),
                          r.querySelectorAll('\\\f'),
                          m.push('[\\r\\n\\f]');
                      }),
                      lr(function (r) {
                        r.innerHTML =
                          "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                        var e = u.createElement('input');
                        e.setAttribute('type', 'hidden'),
                          r.appendChild(e).setAttribute('name', 'D'),
                          r.querySelectorAll('[name=d]').length &&
                            m.push('name[\\x20\\t\\r\\n\\f]*[*^$|!~]?='),
                          2 !== r.querySelectorAll(':enabled').length &&
                            m.push(':enabled', ':disabled'),
                          (d.appendChild(r).disabled = !0),
                          2 !== r.querySelectorAll(':disabled').length &&
                            m.push(':enabled', ':disabled'),
                          r.querySelectorAll('*,:x'),
                          m.push(',.*:');
                      })),
                    (n.matchesSelector = V.test(
                      (f =
                        d.matches ||
                        d.webkitMatchesSelector ||
                        d.mozMatchesSelector ||
                        d.oMatchesSelector ||
                        d.msMatchesSelector)
                    )) &&
                      lr(function (r) {
                        (n.disconnectedMatch = f.call(r, '*')),
                          f.call(r, "[s!='']:x"),
                          b.push('!=', T);
                      }),
                    (m = m.length && new RegExp(m.join('|'))),
                    (b = b.length && new RegExp(b.join('|'))),
                    (e = V.test(d.compareDocumentPosition)),
                    (v =
                      e || V.test(d.contains)
                        ? function (r, e) {
                            var n = 9 === r.nodeType ? r.documentElement : r,
                              o = e && e.parentNode;
                            return (
                              r === o ||
                              !(
                                !o ||
                                1 !== o.nodeType ||
                                !(n.contains
                                  ? n.contains(o)
                                  : r.compareDocumentPosition &&
                                    16 & r.compareDocumentPosition(o))
                              )
                            );
                          }
                        : function (r, e) {
                            if (e)
                              for (; (e = e.parentNode); )
                                if (e === r) return !0;
                            return !1;
                          }),
                    (G = e
                      ? function (r, e) {
                          if (r === e) return (g = !0), 0;
                          var o =
                            !r.compareDocumentPosition -
                            !e.compareDocumentPosition;
                          return (
                            o ||
                            (1 &
                              (o =
                                (r.ownerDocument || r) == (e.ownerDocument || e)
                                  ? r.compareDocumentPosition(e)
                                  : 1) ||
                            (!n.sortDetached &&
                              e.compareDocumentPosition(r) === o)
                              ? r == u || (r.ownerDocument == x && v(x, r))
                                ? -1
                                : e == u || (e.ownerDocument == x && v(x, e))
                                ? 1
                                : l
                                ? P(l, r) - P(l, e)
                                : 0
                              : 4 & o
                              ? -1
                              : 1)
                          );
                        }
                      : function (r, e) {
                          if (r === e) return (g = !0), 0;
                          var n,
                            o = 0,
                            t = r.parentNode,
                            a = e.parentNode,
                            A = [r],
                            i = [e];
                          if (!t || !a)
                            return r == u
                              ? -1
                              : e == u
                              ? 1
                              : t
                              ? -1
                              : a
                              ? 1
                              : l
                              ? P(l, r) - P(l, e)
                              : 0;
                          if (t === a) return Cr(r, e);
                          for (n = r; (n = n.parentNode); ) A.unshift(n);
                          for (n = e; (n = n.parentNode); ) i.unshift(n);
                          for (; A[o] === i[o]; ) o++;
                          return o
                            ? Cr(A[o], i[o])
                            : A[o] == x
                            ? -1
                            : i[o] == x
                            ? 1
                            : 0;
                        }),
                    u)
                  : u;
              }),
            (ir.matches = function (r, e) {
              return ir(r, null, null, e);
            }),
            (ir.matchesSelector = function (r, e) {
              if (
                (C(r),
                n.matchesSelector &&
                  p &&
                  !D[e + ' '] &&
                  (!b || !b.test(e)) &&
                  (!m || !m.test(e)))
              )
                try {
                  var o = f.call(r, e);
                  if (
                    o ||
                    n.disconnectedMatch ||
                    (r.document && 11 !== r.document.nodeType)
                  )
                    return o;
                } catch (r) {
                  D(e, !0);
                }
              return ir(e, u, null, [r]).length > 0;
            }),
            (ir.contains = function (r, e) {
              return (r.ownerDocument || r) != u && C(r), v(r, e);
            }),
            (ir.attr = function (r, e) {
              (r.ownerDocument || r) != u && C(r);
              var t = o.attrHandle[e.toLowerCase()],
                a =
                  t && L.call(o.attrHandle, e.toLowerCase())
                    ? t(r, e, !p)
                    : void 0;
              return void 0 !== a
                ? a
                : n.attributes || !p
                ? r.getAttribute(e)
                : (a = r.getAttributeNode(e)) && a.specified
                ? a.value
                : null;
            }),
            (ir.escape = function (r) {
              return (r + '').replace(or, tr);
            }),
            (ir.error = function (r) {
              throw new Error('Syntax error, unrecognized expression: ' + r);
            }),
            (ir.uniqueSort = function (r) {
              var e,
                o = [],
                t = 0,
                a = 0;
              if (
                ((g = !n.detectDuplicates),
                (l = !n.sortStable && r.slice(0)),
                r.sort(G),
                g)
              ) {
                for (; (e = r[a++]); ) e === r[a] && (t = o.push(a));
                for (; t--; ) r.splice(o[t], 1);
              }
              return (l = null), r;
            }),
            (t = ir.getText =
              function (r) {
                var e,
                  n = '',
                  o = 0,
                  a = r.nodeType;
                if (a) {
                  if (1 === a || 9 === a || 11 === a) {
                    if ('string' == typeof r.textContent) return r.textContent;
                    for (r = r.firstChild; r; r = r.nextSibling) n += t(r);
                  } else if (3 === a || 4 === a) return r.nodeValue;
                } else for (; (e = r[o++]); ) n += t(e);
                return n;
              }),
            (o = ir.selectors =
              {
                cacheLength: 50,
                createPseudo: sr,
                match: _,
                attrHandle: {},
                find: {},
                relative: {
                  '>': {dir: 'parentNode', first: !0},
                  ' ': {dir: 'parentNode'},
                  '+': {dir: 'previousSibling', first: !0},
                  '~': {dir: 'previousSibling'},
                },
                preFilter: {
                  ATTR: function (r) {
                    return (
                      (r[1] = r[1].replace(er, nr)),
                      (r[3] = (r[3] || r[4] || r[5] || '').replace(er, nr)),
                      '~=' === r[2] && (r[3] = ' ' + r[3] + ' '),
                      r.slice(0, 4)
                    );
                  },
                  CHILD: function (r) {
                    return (
                      (r[1] = r[1].toLowerCase()),
                      'nth' === r[1].slice(0, 3)
                        ? (r[3] || ir.error(r[0]),
                          (r[4] = +(r[4]
                            ? r[5] + (r[6] || 1)
                            : 2 * ('even' === r[3] || 'odd' === r[3]))),
                          (r[5] = +(r[7] + r[8] || 'odd' === r[3])))
                        : r[3] && ir.error(r[0]),
                      r
                    );
                  },
                  PSEUDO: function (r) {
                    var e,
                      n = !r[6] && r[2];
                    return _.CHILD.test(r[0])
                      ? null
                      : (r[3]
                          ? (r[2] = r[4] || r[5] || '')
                          : n &&
                            W.test(n) &&
                            (e = A(n, !0)) &&
                            (e = n.indexOf(')', n.length - e) - n.length) &&
                            ((r[0] = r[0].slice(0, e)), (r[2] = n.slice(0, e))),
                        r.slice(0, 3));
                  },
                },
                filter: {
                  TAG: function (r) {
                    var e = r.replace(er, nr).toLowerCase();
                    return '*' === r
                      ? function () {
                          return !0;
                        }
                      : function (r) {
                          return r.nodeName && r.nodeName.toLowerCase() === e;
                        };
                  },
                  CLASS: function (r) {
                    var e = w[r + ' '];
                    return (
                      e ||
                      ((e = new RegExp(
                        '(^|[\\x20\\t\\r\\n\\f])' + r + '(' + j + '|$)'
                      )) &&
                        w(r, function (r) {
                          return e.test(
                            ('string' == typeof r.className && r.className) ||
                              (void 0 !== r.getAttribute &&
                                r.getAttribute('class')) ||
                              ''
                          );
                        }))
                    );
                  },
                  ATTR: function (r, e, n) {
                    return function (o) {
                      var t = ir.attr(o, r);
                      return null == t
                        ? '!=' === e
                        : !e ||
                            ((t += ''),
                            '=' === e
                              ? t === n
                              : '!=' === e
                              ? t !== n
                              : '^=' === e
                              ? n && 0 === t.indexOf(n)
                              : '*=' === e
                              ? n && t.indexOf(n) > -1
                              : '$=' === e
                              ? n && t.slice(-n.length) === n
                              : '~=' === e
                              ? (' ' + t.replace(q, ' ') + ' ').indexOf(n) > -1
                              : '|=' === e &&
                                (t === n ||
                                  t.slice(0, n.length + 1) === n + '-'));
                    };
                  },
                  CHILD: function (r, e, n, o, t) {
                    var a = 'nth' !== r.slice(0, 3),
                      A = 'last' !== r.slice(-4),
                      i = 'of-type' === e;
                    return 1 === o && 0 === t
                      ? function (r) {
                          return !!r.parentNode;
                        }
                      : function (e, n, c) {
                          var s,
                            l,
                            g,
                            C,
                            u,
                            d,
                            p = a !== A ? 'nextSibling' : 'previousSibling',
                            m = e.parentNode,
                            b = i && e.nodeName.toLowerCase(),
                            f = !c && !i,
                            v = !1;
                          if (m) {
                            if (a) {
                              for (; p; ) {
                                for (C = e; (C = C[p]); )
                                  if (
                                    i
                                      ? C.nodeName.toLowerCase() === b
                                      : 1 === C.nodeType
                                  )
                                    return !1;
                                d = p = 'only' === r && !d && 'nextSibling';
                              }
                              return !0;
                            }
                            if (
                              ((d = [A ? m.firstChild : m.lastChild]), A && f)
                            ) {
                              for (
                                v =
                                  (u =
                                    (s =
                                      (l =
                                        (g = (C = m)[h] || (C[h] = {}))[
                                          C.uniqueID
                                        ] || (g[C.uniqueID] = {}))[r] ||
                                      [])[0] === y && s[1]) && s[2],
                                  C = u && m.childNodes[u];
                                (C =
                                  (++u && C && C[p]) || (v = u = 0) || d.pop());

                              )
                                if (1 === C.nodeType && ++v && C === e) {
                                  l[r] = [y, u, v];
                                  break;
                                }
                            } else if (
                              (f &&
                                (v = u =
                                  (s =
                                    (l =
                                      (g = (C = e)[h] || (C[h] = {}))[
                                        C.uniqueID
                                      ] || (g[C.uniqueID] = {}))[r] ||
                                    [])[0] === y && s[1]),
                              !1 === v)
                            )
                              for (
                                ;
                                (C =
                                  (++u && C && C[p]) ||
                                  (v = u = 0) ||
                                  d.pop()) &&
                                ((i
                                  ? C.nodeName.toLowerCase() !== b
                                  : 1 !== C.nodeType) ||
                                  !++v ||
                                  (f &&
                                    ((l =
                                      (g = C[h] || (C[h] = {}))[C.uniqueID] ||
                                      (g[C.uniqueID] = {}))[r] = [y, v]),
                                  C !== e));

                              );
                            return (v -= t) === o || (v % o == 0 && v / o >= 0);
                          }
                        };
                  },
                  PSEUDO: function (r, e) {
                    var n,
                      t =
                        o.pseudos[r] ||
                        o.setFilters[r.toLowerCase()] ||
                        ir.error('unsupported pseudo: ' + r);
                    return t[h]
                      ? t(e)
                      : t.length > 1
                      ? ((n = [r, r, '', e]),
                        o.setFilters.hasOwnProperty(r.toLowerCase())
                          ? sr(function (r, n) {
                              for (var o, a = t(r, e), A = a.length; A--; )
                                r[(o = P(r, a[A]))] = !(n[o] = a[A]);
                            })
                          : function (r) {
                              return t(r, 0, n);
                            })
                      : t;
                  },
                },
                pseudos: {
                  not: sr(function (r) {
                    var e = [],
                      n = [],
                      o = i(r.replace(J, '$1'));
                    return o[h]
                      ? sr(function (r, e, n, t) {
                          for (
                            var a, A = o(r, null, t, []), i = r.length;
                            i--;

                          )
                            (a = A[i]) && (r[i] = !(e[i] = a));
                        })
                      : function (r, t, a) {
                          return (
                            (e[0] = r),
                            o(e, null, a, n),
                            (e[0] = null),
                            !n.pop()
                          );
                        };
                  }),
                  has: sr(function (r) {
                    return function (e) {
                      return ir(r, e).length > 0;
                    };
                  }),
                  contains: sr(function (r) {
                    return (
                      (r = r.replace(er, nr)),
                      function (e) {
                        return (e.textContent || t(e)).indexOf(r) > -1;
                      }
                    );
                  }),
                  lang: sr(function (r) {
                    return (
                      Y.test(r || '') || ir.error('unsupported lang: ' + r),
                      (r = r.replace(er, nr).toLowerCase()),
                      function (e) {
                        var n;
                        do {
                          if (
                            (n = p
                              ? e.lang
                              : e.getAttribute('xml:lang') ||
                                e.getAttribute('lang'))
                          )
                            return (
                              (n = n.toLowerCase()) === r ||
                              0 === n.indexOf(r + '-')
                            );
                        } while ((e = e.parentNode) && 1 === e.nodeType);
                        return !1;
                      }
                    );
                  }),
                  target: function (e) {
                    var n = r.location && r.location.hash;
                    return n && n.slice(1) === e.id;
                  },
                  root: function (r) {
                    return r === d;
                  },
                  focus: function (r) {
                    return (
                      r === u.activeElement &&
                      (!u.hasFocus || u.hasFocus()) &&
                      !!(r.type || r.href || ~r.tabIndex)
                    );
                  },
                  enabled: pr(!1),
                  disabled: pr(!0),
                  checked: function (r) {
                    var e = r.nodeName.toLowerCase();
                    return (
                      ('input' === e && !!r.checked) ||
                      ('option' === e && !!r.selected)
                    );
                  },
                  selected: function (r) {
                    return (
                      r.parentNode && r.parentNode.selectedIndex,
                      !0 === r.selected
                    );
                  },
                  empty: function (r) {
                    for (r = r.firstChild; r; r = r.nextSibling)
                      if (r.nodeType < 6) return !1;
                    return !0;
                  },
                  parent: function (r) {
                    return !o.pseudos.empty(r);
                  },
                  header: function (r) {
                    return K.test(r.nodeName);
                  },
                  input: function (r) {
                    return X.test(r.nodeName);
                  },
                  button: function (r) {
                    var e = r.nodeName.toLowerCase();
                    return (
                      ('input' === e && 'button' === r.type) || 'button' === e
                    );
                  },
                  text: function (r) {
                    var e;
                    return (
                      'input' === r.nodeName.toLowerCase() &&
                      'text' === r.type &&
                      (null == (e = r.getAttribute('type')) ||
                        'text' === e.toLowerCase())
                    );
                  },
                  first: mr(function () {
                    return [0];
                  }),
                  last: mr(function (r, e) {
                    return [e - 1];
                  }),
                  eq: mr(function (r, e, n) {
                    return [n < 0 ? n + e : n];
                  }),
                  even: mr(function (r, e) {
                    for (var n = 0; n < e; n += 2) r.push(n);
                    return r;
                  }),
                  odd: mr(function (r, e) {
                    for (var n = 1; n < e; n += 2) r.push(n);
                    return r;
                  }),
                  lt: mr(function (r, e, n) {
                    for (var o = n < 0 ? n + e : n > e ? e : n; --o >= 0; )
                      r.push(o);
                    return r;
                  }),
                  gt: mr(function (r, e, n) {
                    for (var o = n < 0 ? n + e : n; ++o < e; ) r.push(o);
                    return r;
                  }),
                },
              }),
            (o.pseudos.nth = o.pseudos.eq),
            {radio: !0, checkbox: !0, file: !0, password: !0, image: !0}))
              o.pseudos[e] = ur(e);
            for (e in {submit: !0, reset: !0}) o.pseudos[e] = dr(e);
            function fr() {}
            function vr(r) {
              for (var e = 0, n = r.length, o = ''; e < n; e++) o += r[e].value;
              return o;
            }
            function hr(r, e, n) {
              var o = e.dir,
                t = e.next,
                a = t || o,
                A = n && 'parentNode' === a,
                i = B++;
              return e.first
                ? function (e, n, t) {
                    for (; (e = e[o]); )
                      if (1 === e.nodeType || A) return r(e, n, t);
                    return !1;
                  }
                : function (e, n, c) {
                    var s,
                      l,
                      g,
                      C = [y, i];
                    if (c) {
                      for (; (e = e[o]); )
                        if ((1 === e.nodeType || A) && r(e, n, c)) return !0;
                    } else
                      for (; (e = e[o]); )
                        if (1 === e.nodeType || A)
                          if (
                            ((l =
                              (g = e[h] || (e[h] = {}))[e.uniqueID] ||
                              (g[e.uniqueID] = {})),
                            t && t === e.nodeName.toLowerCase())
                          )
                            e = e[o] || e;
                          else {
                            if ((s = l[a]) && s[0] === y && s[1] === i)
                              return (C[2] = s[2]);
                            if (((l[a] = C), (C[2] = r(e, n, c)))) return !0;
                          }
                    return !1;
                  };
            }
            function xr(r) {
              return r.length > 1
                ? function (e, n, o) {
                    for (var t = r.length; t--; ) if (!r[t](e, n, o)) return !1;
                    return !0;
                  }
                : r[0];
            }
            function yr(r, e, n, o, t) {
              for (
                var a, A = [], i = 0, c = r.length, s = null != e;
                i < c;
                i++
              )
                (a = r[i]) &&
                  ((n && !n(a, o, t)) || (A.push(a), s && e.push(i)));
              return A;
            }
            function Br(r, e, n, o, t, a) {
              return (
                o && !o[h] && (o = Br(o)),
                t && !t[h] && (t = Br(t, a)),
                sr(function (a, A, i, c) {
                  var s,
                    l,
                    g,
                    C = [],
                    u = [],
                    d = A.length,
                    p =
                      a ||
                      (function (r, e, n) {
                        for (var o = 0, t = e.length; o < t; o++)
                          ir(r, e[o], n);
                        return n;
                      })(e || '*', i.nodeType ? [i] : i, []),
                    m = !r || (!a && e) ? p : yr(p, C, r, i, c),
                    b = n ? (t || (a ? r : d || o) ? [] : A) : m;
                  if ((n && n(m, b, i, c), o))
                    for (s = yr(b, u), o(s, [], i, c), l = s.length; l--; )
                      (g = s[l]) && (b[u[l]] = !(m[u[l]] = g));
                  if (a) {
                    if (t || r) {
                      if (t) {
                        for (s = [], l = b.length; l--; )
                          (g = b[l]) && s.push((m[l] = g));
                        t(null, (b = []), s, c);
                      }
                      for (l = b.length; l--; )
                        (g = b[l]) &&
                          (s = t ? P(a, g) : C[l]) > -1 &&
                          (a[s] = !(A[s] = g));
                    }
                  } else (b = yr(b === A ? b.splice(d, b.length) : b)), t ? t(null, A, b, c) : M.apply(A, b);
                })
              );
            }
            function wr(r) {
              for (
                var e,
                  n,
                  t,
                  a = r.length,
                  A = o.relative[r[0].type],
                  i = A || o.relative[' '],
                  c = A ? 1 : 0,
                  l = hr(
                    function (r) {
                      return r === e;
                    },
                    i,
                    !0
                  ),
                  g = hr(
                    function (r) {
                      return P(e, r) > -1;
                    },
                    i,
                    !0
                  ),
                  C = [
                    function (r, n, o) {
                      var t =
                        (!A && (o || n !== s)) ||
                        ((e = n).nodeType ? l(r, n, o) : g(r, n, o));
                      return (e = null), t;
                    },
                  ];
                c < a;
                c++
              )
                if ((n = o.relative[r[c].type])) C = [hr(xr(C), n)];
                else {
                  if ((n = o.filter[r[c].type].apply(null, r[c].matches))[h]) {
                    for (t = ++c; t < a && !o.relative[r[t].type]; t++);
                    return Br(
                      c > 1 && xr(C),
                      c > 1 &&
                        vr(
                          r
                            .slice(0, c - 1)
                            .concat({value: ' ' === r[c - 2].type ? '*' : ''})
                        ).replace(J, '$1'),
                      n,
                      c < t && wr(r.slice(c, t)),
                      t < a && wr((r = r.slice(t))),
                      t < a && vr(r)
                    );
                  }
                  C.push(n);
                }
              return xr(C);
            }
            return (
              (fr.prototype = o.filters = o.pseudos),
              (o.setFilters = new fr()),
              (A = ir.tokenize =
                function (r, e) {
                  var n,
                    t,
                    a,
                    A,
                    i,
                    c,
                    s,
                    l = k[r + ' '];
                  if (l) return e ? 0 : l.slice(0);
                  for (i = r, c = [], s = o.preFilter; i; ) {
                    for (A in ((n && !(t = z.exec(i))) ||
                      (t && (i = i.slice(t[0].length) || i), c.push((a = []))),
                    (n = !1),
                    (t = Q.exec(i)) &&
                      ((n = t.shift()),
                      a.push({value: n, type: t[0].replace(J, ' ')}),
                      (i = i.slice(n.length))),
                    o.filter))
                      !(t = _[A].exec(i)) ||
                        (s[A] && !(t = s[A](t))) ||
                        ((n = t.shift()),
                        a.push({value: n, type: A, matches: t}),
                        (i = i.slice(n.length)));
                    if (!n) break;
                  }
                  return e ? i.length : i ? ir.error(r) : k(r, c).slice(0);
                }),
              (i = ir.compile =
                function (r, e) {
                  var n,
                    t = [],
                    a = [],
                    i = E[r + ' '];
                  if (!i) {
                    for (e || (e = A(r)), n = e.length; n--; )
                      (i = wr(e[n]))[h] ? t.push(i) : a.push(i);
                    (i = E(
                      r,
                      (function (r, e) {
                        var n = e.length > 0,
                          t = r.length > 0,
                          a = function (a, A, i, c, l) {
                            var g,
                              d,
                              m,
                              b = 0,
                              f = '0',
                              v = a && [],
                              h = [],
                              x = s,
                              B = a || (t && o.find.TAG('*', l)),
                              w = (y += null == x ? 1 : Math.random() || 0.1),
                              k = B.length;
                            for (
                              l && (s = A == u || A || l);
                              f !== k && null != (g = B[f]);
                              f++
                            ) {
                              if (t && g) {
                                for (
                                  d = 0,
                                    A ||
                                      g.ownerDocument == u ||
                                      (C(g), (i = !p));
                                  (m = r[d++]);

                                )
                                  if (m(g, A || u, i)) {
                                    c.push(g);
                                    break;
                                  }
                                l && (y = w);
                              }
                              n && ((g = !m && g) && b--, a && v.push(g));
                            }
                            if (((b += f), n && f !== b)) {
                              for (d = 0; (m = e[d++]); ) m(v, h, A, i);
                              if (a) {
                                if (b > 0)
                                  for (; f--; )
                                    v[f] || h[f] || (h[f] = I.call(c));
                                h = yr(h);
                              }
                              M.apply(c, h),
                                l &&
                                  !a &&
                                  h.length > 0 &&
                                  b + e.length > 1 &&
                                  ir.uniqueSort(c);
                            }
                            return l && ((y = w), (s = x)), v;
                          };
                        return n ? sr(a) : a;
                      })(a, t)
                    )),
                      (i.selector = r);
                  }
                  return i;
                }),
              (c = ir.select =
                function (r, e, n, t) {
                  var a,
                    c,
                    s,
                    l,
                    g,
                    C = 'function' == typeof r && r,
                    u = !t && A((r = C.selector || r));
                  if (((n = n || []), 1 === u.length)) {
                    if (
                      (c = u[0] = u[0].slice(0)).length > 2 &&
                      'ID' === (s = c[0]).type &&
                      9 === e.nodeType &&
                      p &&
                      o.relative[c[1].type]
                    ) {
                      if (
                        !(e = (o.find.ID(s.matches[0].replace(er, nr), e) ||
                          [])[0])
                      )
                        return n;
                      C && (e = e.parentNode),
                        (r = r.slice(c.shift().value.length));
                    }
                    for (
                      a = _.needsContext.test(r) ? 0 : c.length;
                      a-- && ((s = c[a]), !o.relative[(l = s.type)]);

                    )
                      if (
                        (g = o.find[l]) &&
                        (t = g(
                          s.matches[0].replace(er, nr),
                          (rr.test(c[0].type) && br(e.parentNode)) || e
                        ))
                      ) {
                        if ((c.splice(a, 1), !(r = t.length && vr(c))))
                          return M.apply(n, t), n;
                        break;
                      }
                  }
                  return (
                    (C || i(r, u))(
                      t,
                      e,
                      !p,
                      n,
                      !e || (rr.test(r) && br(e.parentNode)) || e
                    ),
                    n
                  );
                }),
              (n.sortStable = h.split('').sort(G).join('') === h),
              (n.detectDuplicates = !!g),
              C(),
              (n.sortDetached = lr(function (r) {
                return (
                  1 & r.compareDocumentPosition(u.createElement('fieldset'))
                );
              })),
              lr(function (r) {
                return (
                  (r.innerHTML = "<a href='#'></a>"),
                  '#' === r.firstChild.getAttribute('href')
                );
              }) ||
                gr('type|href|height|width', function (r, e, n) {
                  if (!n)
                    return r.getAttribute(
                      e,
                      'type' === e.toLowerCase() ? 1 : 2
                    );
                }),
              (n.attributes &&
                lr(function (r) {
                  return (
                    (r.innerHTML = '<input/>'),
                    r.firstChild.setAttribute('value', ''),
                    '' === r.firstChild.getAttribute('value')
                  );
                })) ||
                gr('value', function (r, e, n) {
                  if (!n && 'input' === r.nodeName.toLowerCase())
                    return r.defaultValue;
                }),
              lr(function (r) {
                return null == r.getAttribute('disabled');
              }) ||
                gr(O, function (r, e, n) {
                  var o;
                  if (!n)
                    return !0 === r[e]
                      ? e.toLowerCase()
                      : (o = r.getAttributeNode(e)) && o.specified
                      ? o.value
                      : null;
                }),
              ir
            );
          })(o);
          (w.find = E),
            (w.expr = E.selectors),
            (w.expr[':'] = w.expr.pseudos),
            (w.uniqueSort = w.unique = E.uniqueSort),
            (w.text = E.getText),
            (w.isXMLDoc = E.isXML),
            (w.contains = E.contains),
            (w.escapeSelector = E.escape);
          var D = function (r, e, n) {
              for (
                var o = [], t = void 0 !== n;
                (r = r[e]) && 9 !== r.nodeType;

              )
                if (1 === r.nodeType) {
                  if (t && w(r).is(n)) break;
                  o.push(r);
                }
              return o;
            },
            G = function (r, e) {
              for (var n = []; r; r = r.nextSibling)
                1 === r.nodeType && r !== e && n.push(r);
              return n;
            },
            L = w.expr.match.needsContext;
          function F(r, e) {
            return r.nodeName && r.nodeName.toLowerCase() === e.toLowerCase();
          }
          var I =
            /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
          function S(r, e, n) {
            return b(e)
              ? w.grep(r, function (r, o) {
                  return !!e.call(r, o, r) !== n;
                })
              : e.nodeType
              ? w.grep(r, function (r) {
                  return (r === e) !== n;
                })
              : 'string' != typeof e
              ? w.grep(r, function (r) {
                  return l.call(e, r) > -1 !== n;
                })
              : w.filter(e, r, n);
          }
          (w.filter = function (r, e, n) {
            var o = e[0];
            return (
              n && (r = ':not(' + r + ')'),
              1 === e.length && 1 === o.nodeType
                ? w.find.matchesSelector(o, r)
                  ? [o]
                  : []
                : w.find.matches(
                    r,
                    w.grep(e, function (r) {
                      return 1 === r.nodeType;
                    })
                  )
            );
          }),
            w.fn.extend({
              find: function (r) {
                var e,
                  n,
                  o = this.length,
                  t = this;
                if ('string' != typeof r)
                  return this.pushStack(
                    w(r).filter(function () {
                      for (e = 0; e < o; e++)
                        if (w.contains(t[e], this)) return !0;
                    })
                  );
                for (n = this.pushStack([]), e = 0; e < o; e++)
                  w.find(r, t[e], n);
                return o > 1 ? w.uniqueSort(n) : n;
              },
              filter: function (r) {
                return this.pushStack(S(this, r || [], !1));
              },
              not: function (r) {
                return this.pushStack(S(this, r || [], !0));
              },
              is: function (r) {
                return !!S(
                  this,
                  'string' == typeof r && L.test(r) ? w(r) : r || [],
                  !1
                ).length;
              },
            });
          var M,
            H = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
          ((w.fn.init = function (r, e, n) {
            var o, t;
            if (!r) return this;
            if (((n = n || M), 'string' == typeof r)) {
              if (
                !(o =
                  '<' === r[0] && '>' === r[r.length - 1] && r.length >= 3
                    ? [null, r, null]
                    : H.exec(r)) ||
                (!o[1] && e)
              )
                return !e || e.jquery
                  ? (e || n).find(r)
                  : this.constructor(e).find(r);
              if (o[1]) {
                if (
                  ((e = e instanceof w ? e[0] : e),
                  w.merge(
                    this,
                    w.parseHTML(
                      o[1],
                      e && e.nodeType ? e.ownerDocument || e : v,
                      !0
                    )
                  ),
                  I.test(o[1]) && w.isPlainObject(e))
                )
                  for (o in e) b(this[o]) ? this[o](e[o]) : this.attr(o, e[o]);
                return this;
              }
              return (
                (t = v.getElementById(o[2])) &&
                  ((this[0] = t), (this.length = 1)),
                this
              );
            }
            return r.nodeType
              ? ((this[0] = r), (this.length = 1), this)
              : b(r)
              ? void 0 !== n.ready
                ? n.ready(r)
                : r(w)
              : w.makeArray(r, this);
          }).prototype = w.fn),
            (M = w(v));
          var P = /^(?:parents|prev(?:Until|All))/,
            O = {children: !0, contents: !0, next: !0, prev: !0};
          function j(r, e) {
            for (; (r = r[e]) && 1 !== r.nodeType; );
            return r;
          }
          w.fn.extend({
            has: function (r) {
              var e = w(r, this),
                n = e.length;
              return this.filter(function () {
                for (var r = 0; r < n; r++)
                  if (w.contains(this, e[r])) return !0;
              });
            },
            closest: function (r, e) {
              var n,
                o = 0,
                t = this.length,
                a = [],
                A = 'string' != typeof r && w(r);
              if (!L.test(r))
                for (; o < t; o++)
                  for (n = this[o]; n && n !== e; n = n.parentNode)
                    if (
                      n.nodeType < 11 &&
                      (A
                        ? A.index(n) > -1
                        : 1 === n.nodeType && w.find.matchesSelector(n, r))
                    ) {
                      a.push(n);
                      break;
                    }
              return this.pushStack(a.length > 1 ? w.uniqueSort(a) : a);
            },
            index: function (r) {
              return r
                ? 'string' == typeof r
                  ? l.call(w(r), this[0])
                  : l.call(this, r.jquery ? r[0] : r)
                : this[0] && this[0].parentNode
                ? this.first().prevAll().length
                : -1;
            },
            add: function (r, e) {
              return this.pushStack(w.uniqueSort(w.merge(this.get(), w(r, e))));
            },
            addBack: function (r) {
              return this.add(
                null == r ? this.prevObject : this.prevObject.filter(r)
              );
            },
          }),
            w.each(
              {
                parent: function (r) {
                  var e = r.parentNode;
                  return e && 11 !== e.nodeType ? e : null;
                },
                parents: function (r) {
                  return D(r, 'parentNode');
                },
                parentsUntil: function (r, e, n) {
                  return D(r, 'parentNode', n);
                },
                next: function (r) {
                  return j(r, 'nextSibling');
                },
                prev: function (r) {
                  return j(r, 'previousSibling');
                },
                nextAll: function (r) {
                  return D(r, 'nextSibling');
                },
                prevAll: function (r) {
                  return D(r, 'previousSibling');
                },
                nextUntil: function (r, e, n) {
                  return D(r, 'nextSibling', n);
                },
                prevUntil: function (r, e, n) {
                  return D(r, 'previousSibling', n);
                },
                siblings: function (r) {
                  return G((r.parentNode || {}).firstChild, r);
                },
                children: function (r) {
                  return G(r.firstChild);
                },
                contents: function (r) {
                  return null != r.contentDocument && A(r.contentDocument)
                    ? r.contentDocument
                    : (F(r, 'template') && (r = r.content || r),
                      w.merge([], r.childNodes));
                },
              },
              function (r, e) {
                w.fn[r] = function (n, o) {
                  var t = w.map(this, e, n);
                  return (
                    'Until' !== r.slice(-5) && (o = n),
                    o && 'string' == typeof o && (t = w.filter(o, t)),
                    this.length > 1 &&
                      (O[r] || w.uniqueSort(t), P.test(r) && t.reverse()),
                    this.pushStack(t)
                  );
                };
              }
            );
          var N = /[^\x20\t\r\n\f]+/g;
          function $(r) {
            return r;
          }
          function T(r) {
            throw r;
          }
          function q(r, e, n, o) {
            var t;
            try {
              r && b((t = r.promise))
                ? t.call(r).done(e).fail(n)
                : r && b((t = r.then))
                ? t.call(r, e, n)
                : e.apply(void 0, [r].slice(o));
            } catch (r) {
              n.apply(void 0, [r]);
            }
          }
          (w.Callbacks = function (r) {
            r =
              'string' == typeof r
                ? (function (r) {
                    var e = {};
                    return (
                      w.each(r.match(N) || [], function (r, n) {
                        e[n] = !0;
                      }),
                      e
                    );
                  })(r)
                : w.extend({}, r);
            var e,
              n,
              o,
              t,
              a = [],
              A = [],
              i = -1,
              c = function () {
                for (t = t || r.once, o = e = !0; A.length; i = -1)
                  for (n = A.shift(); ++i < a.length; )
                    !1 === a[i].apply(n[0], n[1]) &&
                      r.stopOnFalse &&
                      ((i = a.length), (n = !1));
                r.memory || (n = !1), (e = !1), t && (a = n ? [] : '');
              },
              s = {
                add: function () {
                  return (
                    a &&
                      (n && !e && ((i = a.length - 1), A.push(n)),
                      (function e(n) {
                        w.each(n, function (n, o) {
                          b(o)
                            ? (r.unique && s.has(o)) || a.push(o)
                            : o && o.length && 'string' !== y(o) && e(o);
                        });
                      })(arguments),
                      n && !e && c()),
                    this
                  );
                },
                remove: function () {
                  return (
                    w.each(arguments, function (r, e) {
                      for (var n; (n = w.inArray(e, a, n)) > -1; )
                        a.splice(n, 1), n <= i && i--;
                    }),
                    this
                  );
                },
                has: function (r) {
                  return r ? w.inArray(r, a) > -1 : a.length > 0;
                },
                empty: function () {
                  return a && (a = []), this;
                },
                disable: function () {
                  return (t = A = []), (a = n = ''), this;
                },
                disabled: function () {
                  return !a;
                },
                lock: function () {
                  return (t = A = []), n || e || (a = n = ''), this;
                },
                locked: function () {
                  return !!t;
                },
                fireWith: function (r, n) {
                  return (
                    t ||
                      ((n = [r, (n = n || []).slice ? n.slice() : n]),
                      A.push(n),
                      e || c()),
                    this
                  );
                },
                fire: function () {
                  return s.fireWith(this, arguments), this;
                },
                fired: function () {
                  return !!o;
                },
              };
            return s;
          }),
            w.extend({
              Deferred: function (r) {
                var e = [
                    [
                      'notify',
                      'progress',
                      w.Callbacks('memory'),
                      w.Callbacks('memory'),
                      2,
                    ],
                    [
                      'resolve',
                      'done',
                      w.Callbacks('once memory'),
                      w.Callbacks('once memory'),
                      0,
                      'resolved',
                    ],
                    [
                      'reject',
                      'fail',
                      w.Callbacks('once memory'),
                      w.Callbacks('once memory'),
                      1,
                      'rejected',
                    ],
                  ],
                  n = 'pending',
                  t = {
                    state: function () {
                      return n;
                    },
                    always: function () {
                      return a.done(arguments).fail(arguments), this;
                    },
                    catch: function (r) {
                      return t.then(null, r);
                    },
                    pipe: function () {
                      var r = arguments;
                      return w
                        .Deferred(function (n) {
                          w.each(e, function (e, o) {
                            var t = b(r[o[4]]) && r[o[4]];
                            a[o[1]](function () {
                              var r = t && t.apply(this, arguments);
                              r && b(r.promise)
                                ? r
                                    .promise()
                                    .progress(n.notify)
                                    .done(n.resolve)
                                    .fail(n.reject)
                                : n[o[0] + 'With'](this, t ? [r] : arguments);
                            });
                          }),
                            (r = null);
                        })
                        .promise();
                    },
                    then: function (r, n, t) {
                      var a = 0;
                      function A(r, e, n, t) {
                        return function () {
                          var i = this,
                            c = arguments,
                            s = function () {
                              var o, s;
                              if (!(r < a)) {
                                if ((o = n.apply(i, c)) === e.promise())
                                  throw new TypeError(
                                    'Thenable self-resolution'
                                  );
                                (s =
                                  o &&
                                  ('object' == typeof o ||
                                    'function' == typeof o) &&
                                  o.then),
                                  b(s)
                                    ? t
                                      ? s.call(o, A(a, e, $, t), A(a, e, T, t))
                                      : (a++,
                                        s.call(
                                          o,
                                          A(a, e, $, t),
                                          A(a, e, T, t),
                                          A(a, e, $, e.notifyWith)
                                        ))
                                    : (n !== $ && ((i = void 0), (c = [o])),
                                      (t || e.resolveWith)(i, c));
                              }
                            },
                            l = t
                              ? s
                              : function () {
                                  try {
                                    s();
                                  } catch (o) {
                                    w.Deferred.exceptionHook &&
                                      w.Deferred.exceptionHook(o, l.stackTrace),
                                      r + 1 >= a &&
                                        (n !== T && ((i = void 0), (c = [o])),
                                        e.rejectWith(i, c));
                                  }
                                };
                          r
                            ? l()
                            : (w.Deferred.getStackHook &&
                                (l.stackTrace = w.Deferred.getStackHook()),
                              o.setTimeout(l));
                        };
                      }
                      return w
                        .Deferred(function (o) {
                          e[0][3].add(A(0, o, b(t) ? t : $, o.notifyWith)),
                            e[1][3].add(A(0, o, b(r) ? r : $)),
                            e[2][3].add(A(0, o, b(n) ? n : T));
                        })
                        .promise();
                    },
                    promise: function (r) {
                      return null != r ? w.extend(r, t) : t;
                    },
                  },
                  a = {};
                return (
                  w.each(e, function (r, o) {
                    var A = o[2],
                      i = o[5];
                    (t[o[1]] = A.add),
                      i &&
                        A.add(
                          function () {
                            n = i;
                          },
                          e[3 - r][2].disable,
                          e[3 - r][3].disable,
                          e[0][2].lock,
                          e[0][3].lock
                        ),
                      A.add(o[3].fire),
                      (a[o[0]] = function () {
                        return (
                          a[o[0] + 'With'](
                            this === a ? void 0 : this,
                            arguments
                          ),
                          this
                        );
                      }),
                      (a[o[0] + 'With'] = A.fireWith);
                  }),
                  t.promise(a),
                  r && r.call(a, a),
                  a
                );
              },
              when: function (r) {
                var e = arguments.length,
                  n = e,
                  o = Array(n),
                  t = i.call(arguments),
                  a = w.Deferred(),
                  A = function (r) {
                    return function (n) {
                      (o[r] = this),
                        (t[r] = arguments.length > 1 ? i.call(arguments) : n),
                        --e || a.resolveWith(o, t);
                    };
                  };
                if (
                  e <= 1 &&
                  (q(r, a.done(A(n)).resolve, a.reject, !e),
                  'pending' === a.state() || b(t[n] && t[n].then))
                )
                  return a.then();
                for (; n--; ) q(t[n], A(n), a.reject);
                return a.promise();
              },
            });
          var J = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
          (w.Deferred.exceptionHook = function (r, e) {
            o.console &&
              o.console.warn &&
              r &&
              J.test(r.name) &&
              o.console.warn(
                'jQuery.Deferred exception: ' + r.message,
                r.stack,
                e
              );
          }),
            (w.readyException = function (r) {
              o.setTimeout(function () {
                throw r;
              });
            });
          var z = w.Deferred();
          function Q() {
            v.removeEventListener('DOMContentLoaded', Q),
              o.removeEventListener('load', Q),
              w.ready();
          }
          (w.fn.ready = function (r) {
            return (
              z.then(r).catch(function (r) {
                w.readyException(r);
              }),
              this
            );
          }),
            w.extend({
              isReady: !1,
              readyWait: 1,
              ready: function (r) {
                (!0 === r ? --w.readyWait : w.isReady) ||
                  ((w.isReady = !0),
                  (!0 !== r && --w.readyWait > 0) || z.resolveWith(v, [w]));
              },
            }),
            (w.ready.then = z.then),
            'complete' === v.readyState ||
            ('loading' !== v.readyState && !v.documentElement.doScroll)
              ? o.setTimeout(w.ready)
              : (v.addEventListener('DOMContentLoaded', Q),
                o.addEventListener('load', Q));
          var U = function (r, e, n, o, t, a, A) {
              var i = 0,
                c = r.length,
                s = null == n;
              if ('object' === y(n))
                for (i in ((t = !0), n)) U(r, e, i, n[i], !0, a, A);
              else if (
                void 0 !== o &&
                ((t = !0),
                b(o) || (A = !0),
                s &&
                  (A
                    ? (e.call(r, o), (e = null))
                    : ((s = e),
                      (e = function (r, e, n) {
                        return s.call(w(r), n);
                      }))),
                e)
              )
                for (; i < c; i++)
                  e(r[i], n, A ? o : o.call(r[i], i, e(r[i], n)));
              return t ? r : s ? e.call(r) : c ? e(r[0], n) : a;
            },
            W = /^-ms-/,
            Y = /-([a-z])/g;
          function _(r, e) {
            return e.toUpperCase();
          }
          function R(r) {
            return r.replace(W, 'ms-').replace(Y, _);
          }
          var X = function (r) {
            return 1 === r.nodeType || 9 === r.nodeType || !+r.nodeType;
          };
          function K() {
            this.expando = w.expando + K.uid++;
          }
          (K.uid = 1),
            (K.prototype = {
              cache: function (r) {
                var e = r[this.expando];
                return (
                  e ||
                    ((e = {}),
                    X(r) &&
                      (r.nodeType
                        ? (r[this.expando] = e)
                        : Object.defineProperty(r, this.expando, {
                            value: e,
                            configurable: !0,
                          }))),
                  e
                );
              },
              set: function (r, e, n) {
                var o,
                  t = this.cache(r);
                if ('string' == typeof e) t[R(e)] = n;
                else for (o in e) t[R(o)] = e[o];
                return t;
              },
              get: function (r, e) {
                return void 0 === e
                  ? this.cache(r)
                  : r[this.expando] && r[this.expando][R(e)];
              },
              access: function (r, e, n) {
                return void 0 === e ||
                  (e && 'string' == typeof e && void 0 === n)
                  ? this.get(r, e)
                  : (this.set(r, e, n), void 0 !== n ? n : e);
              },
              remove: function (r, e) {
                var n,
                  o = r[this.expando];
                if (void 0 !== o) {
                  if (void 0 !== e) {
                    n = (e = Array.isArray(e)
                      ? e.map(R)
                      : (e = R(e)) in o
                      ? [e]
                      : e.match(N) || []).length;
                    for (; n--; ) delete o[e[n]];
                  }
                  (void 0 === e || w.isEmptyObject(o)) &&
                    (r.nodeType
                      ? (r[this.expando] = void 0)
                      : delete r[this.expando]);
                }
              },
              hasData: function (r) {
                var e = r[this.expando];
                return void 0 !== e && !w.isEmptyObject(e);
              },
            });
          var V = new K(),
            Z = new K(),
            rr = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            er = /[A-Z]/g;
          function nr(r, e, n) {
            var o;
            if (void 0 === n && 1 === r.nodeType)
              if (
                ((o = 'data-' + e.replace(er, '-$&').toLowerCase()),
                'string' == typeof (n = r.getAttribute(o)))
              ) {
                try {
                  n = (function (r) {
                    return (
                      'true' === r ||
                      ('false' !== r &&
                        ('null' === r
                          ? null
                          : r === +r + ''
                          ? +r
                          : rr.test(r)
                          ? JSON.parse(r)
                          : r))
                    );
                  })(n);
                } catch (r) {}
                Z.set(r, e, n);
              } else n = void 0;
            return n;
          }
          w.extend({
            hasData: function (r) {
              return Z.hasData(r) || V.hasData(r);
            },
            data: function (r, e, n) {
              return Z.access(r, e, n);
            },
            removeData: function (r, e) {
              Z.remove(r, e);
            },
            _data: function (r, e, n) {
              return V.access(r, e, n);
            },
            _removeData: function (r, e) {
              V.remove(r, e);
            },
          }),
            w.fn.extend({
              data: function (r, e) {
                var n,
                  o,
                  t,
                  a = this[0],
                  A = a && a.attributes;
                if (void 0 === r) {
                  if (
                    this.length &&
                    ((t = Z.get(a)),
                    1 === a.nodeType && !V.get(a, 'hasDataAttrs'))
                  ) {
                    for (n = A.length; n--; )
                      A[n] &&
                        0 === (o = A[n].name).indexOf('data-') &&
                        ((o = R(o.slice(5))), nr(a, o, t[o]));
                    V.set(a, 'hasDataAttrs', !0);
                  }
                  return t;
                }
                return 'object' == typeof r
                  ? this.each(function () {
                      Z.set(this, r);
                    })
                  : U(
                      this,
                      function (e) {
                        var n;
                        if (a && void 0 === e)
                          return void 0 !== (n = Z.get(a, r)) ||
                            void 0 !== (n = nr(a, r))
                            ? n
                            : void 0;
                        this.each(function () {
                          Z.set(this, r, e);
                        });
                      },
                      null,
                      e,
                      arguments.length > 1,
                      null,
                      !0
                    );
              },
              removeData: function (r) {
                return this.each(function () {
                  Z.remove(this, r);
                });
              },
            }),
            w.extend({
              queue: function (r, e, n) {
                var o;
                if (r)
                  return (
                    (e = (e || 'fx') + 'queue'),
                    (o = V.get(r, e)),
                    n &&
                      (!o || Array.isArray(n)
                        ? (o = V.access(r, e, w.makeArray(n)))
                        : o.push(n)),
                    o || []
                  );
              },
              dequeue: function (r, e) {
                e = e || 'fx';
                var n = w.queue(r, e),
                  o = n.length,
                  t = n.shift(),
                  a = w._queueHooks(r, e);
                'inprogress' === t && ((t = n.shift()), o--),
                  t &&
                    ('fx' === e && n.unshift('inprogress'),
                    delete a.stop,
                    t.call(
                      r,
                      function () {
                        w.dequeue(r, e);
                      },
                      a
                    )),
                  !o && a && a.empty.fire();
              },
              _queueHooks: function (r, e) {
                var n = e + 'queueHooks';
                return (
                  V.get(r, n) ||
                  V.access(r, n, {
                    empty: w.Callbacks('once memory').add(function () {
                      V.remove(r, [e + 'queue', n]);
                    }),
                  })
                );
              },
            }),
            w.fn.extend({
              queue: function (r, e) {
                var n = 2;
                return (
                  'string' != typeof r && ((e = r), (r = 'fx'), n--),
                  arguments.length < n
                    ? w.queue(this[0], r)
                    : void 0 === e
                    ? this
                    : this.each(function () {
                        var n = w.queue(this, r, e);
                        w._queueHooks(this, r),
                          'fx' === r &&
                            'inprogress' !== n[0] &&
                            w.dequeue(this, r);
                      })
                );
              },
              dequeue: function (r) {
                return this.each(function () {
                  w.dequeue(this, r);
                });
              },
              clearQueue: function (r) {
                return this.queue(r || 'fx', []);
              },
              promise: function (r, e) {
                var n,
                  o = 1,
                  t = w.Deferred(),
                  a = this,
                  A = this.length,
                  i = function () {
                    --o || t.resolveWith(a, [a]);
                  };
                for (
                  'string' != typeof r && ((e = r), (r = void 0)),
                    r = r || 'fx';
                  A--;

                )
                  (n = V.get(a[A], r + 'queueHooks')) &&
                    n.empty &&
                    (o++, n.empty.add(i));
                return i(), t.promise(e);
              },
            });
          var or = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            tr = new RegExp('^(?:([+-])=|)(' + or + ')([a-z%]*)$', 'i'),
            ar = ['Top', 'Right', 'Bottom', 'Left'],
            Ar = v.documentElement,
            ir = function (r) {
              return w.contains(r.ownerDocument, r);
            },
            cr = {composed: !0};
          Ar.getRootNode &&
            (ir = function (r) {
              return (
                w.contains(r.ownerDocument, r) ||
                r.getRootNode(cr) === r.ownerDocument
              );
            });
          var sr = function (r, e) {
            return (
              'none' === (r = e || r).style.display ||
              ('' === r.style.display &&
                ir(r) &&
                'none' === w.css(r, 'display'))
            );
          };
          function lr(r, e, n, o) {
            var t,
              a,
              A = 20,
              i = o
                ? function () {
                    return o.cur();
                  }
                : function () {
                    return w.css(r, e, '');
                  },
              c = i(),
              s = (n && n[3]) || (w.cssNumber[e] ? '' : 'px'),
              l =
                r.nodeType &&
                (w.cssNumber[e] || ('px' !== s && +c)) &&
                tr.exec(w.css(r, e));
            if (l && l[3] !== s) {
              for (c /= 2, s = s || l[3], l = +c || 1; A--; )
                w.style(r, e, l + s),
                  (1 - a) * (1 - (a = i() / c || 0.5)) <= 0 && (A = 0),
                  (l /= a);
              (l *= 2), w.style(r, e, l + s), (n = n || []);
            }
            return (
              n &&
                ((l = +l || +c || 0),
                (t = n[1] ? l + (n[1] + 1) * n[2] : +n[2]),
                o && ((o.unit = s), (o.start = l), (o.end = t))),
              t
            );
          }
          var gr = {};
          function Cr(r) {
            var e,
              n = r.ownerDocument,
              o = r.nodeName,
              t = gr[o];
            return (
              t ||
              ((e = n.body.appendChild(n.createElement(o))),
              (t = w.css(e, 'display')),
              e.parentNode.removeChild(e),
              'none' === t && (t = 'block'),
              (gr[o] = t),
              t)
            );
          }
          function ur(r, e) {
            for (var n, o, t = [], a = 0, A = r.length; a < A; a++)
              (o = r[a]).style &&
                ((n = o.style.display),
                e
                  ? ('none' === n &&
                      ((t[a] = V.get(o, 'display') || null),
                      t[a] || (o.style.display = '')),
                    '' === o.style.display && sr(o) && (t[a] = Cr(o)))
                  : 'none' !== n && ((t[a] = 'none'), V.set(o, 'display', n)));
            for (a = 0; a < A; a++) null != t[a] && (r[a].style.display = t[a]);
            return r;
          }
          w.fn.extend({
            show: function () {
              return ur(this, !0);
            },
            hide: function () {
              return ur(this);
            },
            toggle: function (r) {
              return 'boolean' == typeof r
                ? r
                  ? this.show()
                  : this.hide()
                : this.each(function () {
                    sr(this) ? w(this).show() : w(this).hide();
                  });
            },
          });
          var dr,
            pr,
            mr = /^(?:checkbox|radio)$/i,
            br = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
            fr = /^$|^module$|\/(?:java|ecma)script/i;
          (dr = v.createDocumentFragment().appendChild(v.createElement('div'))),
            (pr = v.createElement('input')).setAttribute('type', 'radio'),
            pr.setAttribute('checked', 'checked'),
            pr.setAttribute('name', 't'),
            dr.appendChild(pr),
            (m.checkClone = dr.cloneNode(!0).cloneNode(!0).lastChild.checked),
            (dr.innerHTML = '<textarea>x</textarea>'),
            (m.noCloneChecked = !!dr.cloneNode(!0).lastChild.defaultValue),
            (dr.innerHTML = '<option></option>'),
            (m.option = !!dr.lastChild);
          var vr = {
            thead: [1, '<table>', '</table>'],
            col: [2, '<table><colgroup>', '</colgroup></table>'],
            tr: [2, '<table><tbody>', '</tbody></table>'],
            td: [3, '<table><tbody><tr>', '</tr></tbody></table>'],
            _default: [0, '', ''],
          };
          function hr(r, e) {
            var n;
            return (
              (n =
                void 0 !== r.getElementsByTagName
                  ? r.getElementsByTagName(e || '*')
                  : void 0 !== r.querySelectorAll
                  ? r.querySelectorAll(e || '*')
                  : []),
              void 0 === e || (e && F(r, e)) ? w.merge([r], n) : n
            );
          }
          function xr(r, e) {
            for (var n = 0, o = r.length; n < o; n++)
              V.set(r[n], 'globalEval', !e || V.get(e[n], 'globalEval'));
          }
          (vr.tbody = vr.tfoot = vr.colgroup = vr.caption = vr.thead),
            (vr.th = vr.td),
            m.option ||
              (vr.optgroup = vr.option =
                [1, "<select multiple='multiple'>", '</select>']);
          var yr = /<|&#?\w+;/;
          function Br(r, e, n, o, t) {
            for (
              var a,
                A,
                i,
                c,
                s,
                l,
                g = e.createDocumentFragment(),
                C = [],
                u = 0,
                d = r.length;
              u < d;
              u++
            )
              if ((a = r[u]) || 0 === a)
                if ('object' === y(a)) w.merge(C, a.nodeType ? [a] : a);
                else if (yr.test(a)) {
                  for (
                    A = A || g.appendChild(e.createElement('div')),
                      i = (br.exec(a) || ['', ''])[1].toLowerCase(),
                      c = vr[i] || vr._default,
                      A.innerHTML = c[1] + w.htmlPrefilter(a) + c[2],
                      l = c[0];
                    l--;

                  )
                    A = A.lastChild;
                  w.merge(C, A.childNodes),
                    ((A = g.firstChild).textContent = '');
                } else C.push(e.createTextNode(a));
            for (g.textContent = '', u = 0; (a = C[u++]); )
              if (o && w.inArray(a, o) > -1) t && t.push(a);
              else if (
                ((s = ir(a)),
                (A = hr(g.appendChild(a), 'script')),
                s && xr(A),
                n)
              )
                for (l = 0; (a = A[l++]); ) fr.test(a.type || '') && n.push(a);
            return g;
          }
          var wr = /^([^.]*)(?:\.(.+)|)/;
          function kr() {
            return !0;
          }
          function Er() {
            return !1;
          }
          function Dr(r, e) {
            return (
              (r ===
                (function () {
                  try {
                    return v.activeElement;
                  } catch (r) {}
                })()) ==
              ('focus' === e)
            );
          }
          function Gr(r, e, n, o, t, a) {
            var A, i;
            if ('object' == typeof e) {
              for (i in ('string' != typeof n && ((o = o || n), (n = void 0)),
              e))
                Gr(r, i, n, o, e[i], a);
              return r;
            }
            if (
              (null == o && null == t
                ? ((t = n), (o = n = void 0))
                : null == t &&
                  ('string' == typeof n
                    ? ((t = o), (o = void 0))
                    : ((t = o), (o = n), (n = void 0))),
              !1 === t)
            )
              t = Er;
            else if (!t) return r;
            return (
              1 === a &&
                ((A = t),
                (t = function (r) {
                  return w().off(r), A.apply(this, arguments);
                }),
                (t.guid = A.guid || (A.guid = w.guid++))),
              r.each(function () {
                w.event.add(this, e, t, o, n);
              })
            );
          }
          function Lr(r, e, n) {
            n
              ? (V.set(r, e, !1),
                w.event.add(r, e, {
                  namespace: !1,
                  handler: function (r) {
                    var o,
                      t,
                      a = V.get(this, e);
                    if (1 & r.isTrigger && this[e]) {
                      if (a.length)
                        (w.event.special[e] || {}).delegateType &&
                          r.stopPropagation();
                      else if (
                        ((a = i.call(arguments)),
                        V.set(this, e, a),
                        (o = n(this, e)),
                        this[e](),
                        a !== (t = V.get(this, e)) || o
                          ? V.set(this, e, !1)
                          : (t = {}),
                        a !== t)
                      )
                        return (
                          r.stopImmediatePropagation(),
                          r.preventDefault(),
                          t && t.value
                        );
                    } else
                      a.length &&
                        (V.set(this, e, {
                          value: w.event.trigger(
                            w.extend(a[0], w.Event.prototype),
                            a.slice(1),
                            this
                          ),
                        }),
                        r.stopImmediatePropagation());
                  },
                }))
              : void 0 === V.get(r, e) && w.event.add(r, e, kr);
          }
          (w.event = {
            global: {},
            add: function (r, e, n, o, t) {
              var a,
                A,
                i,
                c,
                s,
                l,
                g,
                C,
                u,
                d,
                p,
                m = V.get(r);
              if (X(r))
                for (
                  n.handler && ((n = (a = n).handler), (t = a.selector)),
                    t && w.find.matchesSelector(Ar, t),
                    n.guid || (n.guid = w.guid++),
                    (c = m.events) || (c = m.events = Object.create(null)),
                    (A = m.handle) ||
                      (A = m.handle =
                        function (e) {
                          return void 0 !== w && w.event.triggered !== e.type
                            ? w.event.dispatch.apply(r, arguments)
                            : void 0;
                        }),
                    s = (e = (e || '').match(N) || ['']).length;
                  s--;

                )
                  (u = p = (i = wr.exec(e[s]) || [])[1]),
                    (d = (i[2] || '').split('.').sort()),
                    u &&
                      ((g = w.event.special[u] || {}),
                      (u = (t ? g.delegateType : g.bindType) || u),
                      (g = w.event.special[u] || {}),
                      (l = w.extend(
                        {
                          type: u,
                          origType: p,
                          data: o,
                          handler: n,
                          guid: n.guid,
                          selector: t,
                          needsContext: t && w.expr.match.needsContext.test(t),
                          namespace: d.join('.'),
                        },
                        a
                      )),
                      (C = c[u]) ||
                        (((C = c[u] = []).delegateCount = 0),
                        (g.setup && !1 !== g.setup.call(r, o, d, A)) ||
                          (r.addEventListener && r.addEventListener(u, A))),
                      g.add &&
                        (g.add.call(r, l),
                        l.handler.guid || (l.handler.guid = n.guid)),
                      t ? C.splice(C.delegateCount++, 0, l) : C.push(l),
                      (w.event.global[u] = !0));
            },
            remove: function (r, e, n, o, t) {
              var a,
                A,
                i,
                c,
                s,
                l,
                g,
                C,
                u,
                d,
                p,
                m = V.hasData(r) && V.get(r);
              if (m && (c = m.events)) {
                for (s = (e = (e || '').match(N) || ['']).length; s--; )
                  if (
                    ((u = p = (i = wr.exec(e[s]) || [])[1]),
                    (d = (i[2] || '').split('.').sort()),
                    u)
                  ) {
                    for (
                      g = w.event.special[u] || {},
                        C =
                          c[(u = (o ? g.delegateType : g.bindType) || u)] || [],
                        i =
                          i[2] &&
                          new RegExp(
                            '(^|\\.)' + d.join('\\.(?:.*\\.|)') + '(\\.|$)'
                          ),
                        A = a = C.length;
                      a--;

                    )
                      (l = C[a]),
                        (!t && p !== l.origType) ||
                          (n && n.guid !== l.guid) ||
                          (i && !i.test(l.namespace)) ||
                          (o &&
                            o !== l.selector &&
                            ('**' !== o || !l.selector)) ||
                          (C.splice(a, 1),
                          l.selector && C.delegateCount--,
                          g.remove && g.remove.call(r, l));
                    A &&
                      !C.length &&
                      ((g.teardown && !1 !== g.teardown.call(r, d, m.handle)) ||
                        w.removeEvent(r, u, m.handle),
                      delete c[u]);
                  } else for (u in c) w.event.remove(r, u + e[s], n, o, !0);
                w.isEmptyObject(c) && V.remove(r, 'handle events');
              }
            },
            dispatch: function (r) {
              var e,
                n,
                o,
                t,
                a,
                A,
                i = new Array(arguments.length),
                c = w.event.fix(r),
                s =
                  (V.get(this, 'events') || Object.create(null))[c.type] || [],
                l = w.event.special[c.type] || {};
              for (i[0] = c, e = 1; e < arguments.length; e++)
                i[e] = arguments[e];
              if (
                ((c.delegateTarget = this),
                !l.preDispatch || !1 !== l.preDispatch.call(this, c))
              ) {
                for (
                  A = w.event.handlers.call(this, c, s), e = 0;
                  (t = A[e++]) && !c.isPropagationStopped();

                )
                  for (
                    c.currentTarget = t.elem, n = 0;
                    (a = t.handlers[n++]) && !c.isImmediatePropagationStopped();

                  )
                    (c.rnamespace &&
                      !1 !== a.namespace &&
                      !c.rnamespace.test(a.namespace)) ||
                      ((c.handleObj = a),
                      (c.data = a.data),
                      void 0 !==
                        (o = (
                          (w.event.special[a.origType] || {}).handle ||
                          a.handler
                        ).apply(t.elem, i)) &&
                        !1 === (c.result = o) &&
                        (c.preventDefault(), c.stopPropagation()));
                return l.postDispatch && l.postDispatch.call(this, c), c.result;
              }
            },
            handlers: function (r, e) {
              var n,
                o,
                t,
                a,
                A,
                i = [],
                c = e.delegateCount,
                s = r.target;
              if (c && s.nodeType && !('click' === r.type && r.button >= 1))
                for (; s !== this; s = s.parentNode || this)
                  if (
                    1 === s.nodeType &&
                    ('click' !== r.type || !0 !== s.disabled)
                  ) {
                    for (a = [], A = {}, n = 0; n < c; n++)
                      void 0 === A[(t = (o = e[n]).selector + ' ')] &&
                        (A[t] = o.needsContext
                          ? w(t, this).index(s) > -1
                          : w.find(t, this, null, [s]).length),
                        A[t] && a.push(o);
                    a.length && i.push({elem: s, handlers: a});
                  }
              return (
                (s = this),
                c < e.length && i.push({elem: s, handlers: e.slice(c)}),
                i
              );
            },
            addProp: function (r, e) {
              Object.defineProperty(w.Event.prototype, r, {
                enumerable: !0,
                configurable: !0,
                get: b(e)
                  ? function () {
                      if (this.originalEvent) return e(this.originalEvent);
                    }
                  : function () {
                      if (this.originalEvent) return this.originalEvent[r];
                    },
                set: function (e) {
                  Object.defineProperty(this, r, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: e,
                  });
                },
              });
            },
            fix: function (r) {
              return r[w.expando] ? r : new w.Event(r);
            },
            special: {
              load: {noBubble: !0},
              click: {
                setup: function (r) {
                  var e = this || r;
                  return (
                    mr.test(e.type) &&
                      e.click &&
                      F(e, 'input') &&
                      Lr(e, 'click', kr),
                    !1
                  );
                },
                trigger: function (r) {
                  var e = this || r;
                  return (
                    mr.test(e.type) &&
                      e.click &&
                      F(e, 'input') &&
                      Lr(e, 'click'),
                    !0
                  );
                },
                _default: function (r) {
                  var e = r.target;
                  return (
                    (mr.test(e.type) &&
                      e.click &&
                      F(e, 'input') &&
                      V.get(e, 'click')) ||
                    F(e, 'a')
                  );
                },
              },
              beforeunload: {
                postDispatch: function (r) {
                  void 0 !== r.result &&
                    r.originalEvent &&
                    (r.originalEvent.returnValue = r.result);
                },
              },
            },
          }),
            (w.removeEvent = function (r, e, n) {
              r.removeEventListener && r.removeEventListener(e, n);
            }),
            (w.Event = function (r, e) {
              if (!(this instanceof w.Event)) return new w.Event(r, e);
              r && r.type
                ? ((this.originalEvent = r),
                  (this.type = r.type),
                  (this.isDefaultPrevented =
                    r.defaultPrevented ||
                    (void 0 === r.defaultPrevented && !1 === r.returnValue)
                      ? kr
                      : Er),
                  (this.target =
                    r.target && 3 === r.target.nodeType
                      ? r.target.parentNode
                      : r.target),
                  (this.currentTarget = r.currentTarget),
                  (this.relatedTarget = r.relatedTarget))
                : (this.type = r),
                e && w.extend(this, e),
                (this.timeStamp = (r && r.timeStamp) || Date.now()),
                (this[w.expando] = !0);
            }),
            (w.Event.prototype = {
              constructor: w.Event,
              isDefaultPrevented: Er,
              isPropagationStopped: Er,
              isImmediatePropagationStopped: Er,
              isSimulated: !1,
              preventDefault: function () {
                var r = this.originalEvent;
                (this.isDefaultPrevented = kr),
                  r && !this.isSimulated && r.preventDefault();
              },
              stopPropagation: function () {
                var r = this.originalEvent;
                (this.isPropagationStopped = kr),
                  r && !this.isSimulated && r.stopPropagation();
              },
              stopImmediatePropagation: function () {
                var r = this.originalEvent;
                (this.isImmediatePropagationStopped = kr),
                  r && !this.isSimulated && r.stopImmediatePropagation(),
                  this.stopPropagation();
              },
            }),
            w.each(
              {
                altKey: !0,
                bubbles: !0,
                cancelable: !0,
                changedTouches: !0,
                ctrlKey: !0,
                detail: !0,
                eventPhase: !0,
                metaKey: !0,
                pageX: !0,
                pageY: !0,
                shiftKey: !0,
                view: !0,
                char: !0,
                code: !0,
                charCode: !0,
                key: !0,
                keyCode: !0,
                button: !0,
                buttons: !0,
                clientX: !0,
                clientY: !0,
                offsetX: !0,
                offsetY: !0,
                pointerId: !0,
                pointerType: !0,
                screenX: !0,
                screenY: !0,
                targetTouches: !0,
                toElement: !0,
                touches: !0,
                which: !0,
              },
              w.event.addProp
            ),
            w.each({focus: 'focusin', blur: 'focusout'}, function (r, e) {
              w.event.special[r] = {
                setup: function () {
                  return Lr(this, r, Dr), !1;
                },
                trigger: function () {
                  return Lr(this, r), !0;
                },
                _default: function () {
                  return !0;
                },
                delegateType: e,
              };
            }),
            w.each(
              {
                mouseenter: 'mouseover',
                mouseleave: 'mouseout',
                pointerenter: 'pointerover',
                pointerleave: 'pointerout',
              },
              function (r, e) {
                w.event.special[r] = {
                  delegateType: e,
                  bindType: e,
                  handle: function (r) {
                    var n,
                      o = this,
                      t = r.relatedTarget,
                      a = r.handleObj;
                    return (
                      (t && (t === o || w.contains(o, t))) ||
                        ((r.type = a.origType),
                        (n = a.handler.apply(this, arguments)),
                        (r.type = e)),
                      n
                    );
                  },
                };
              }
            ),
            w.fn.extend({
              on: function (r, e, n, o) {
                return Gr(this, r, e, n, o);
              },
              one: function (r, e, n, o) {
                return Gr(this, r, e, n, o, 1);
              },
              off: function (r, e, n) {
                var o, t;
                if (r && r.preventDefault && r.handleObj)
                  return (
                    (o = r.handleObj),
                    w(r.delegateTarget).off(
                      o.namespace ? o.origType + '.' + o.namespace : o.origType,
                      o.selector,
                      o.handler
                    ),
                    this
                  );
                if ('object' == typeof r) {
                  for (t in r) this.off(t, e, r[t]);
                  return this;
                }
                return (
                  (!1 !== e && 'function' != typeof e) ||
                    ((n = e), (e = void 0)),
                  !1 === n && (n = Er),
                  this.each(function () {
                    w.event.remove(this, r, n, e);
                  })
                );
              },
            });
          var Fr = /<script|<style|<link/i,
            Ir = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Sr = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
          function Mr(r, e) {
            return (
              (F(r, 'table') &&
                F(11 !== e.nodeType ? e : e.firstChild, 'tr') &&
                w(r).children('tbody')[0]) ||
              r
            );
          }
          function Hr(r) {
            return (
              (r.type = (null !== r.getAttribute('type')) + '/' + r.type), r
            );
          }
          function Pr(r) {
            return (
              'true/' === (r.type || '').slice(0, 5)
                ? (r.type = r.type.slice(5))
                : r.removeAttribute('type'),
              r
            );
          }
          function Or(r, e) {
            var n, o, t, a, A, i;
            if (1 === e.nodeType) {
              if (V.hasData(r) && (i = V.get(r).events))
                for (t in (V.remove(e, 'handle events'), i))
                  for (n = 0, o = i[t].length; n < o; n++)
                    w.event.add(e, t, i[t][n]);
              Z.hasData(r) &&
                ((a = Z.access(r)), (A = w.extend({}, a)), Z.set(e, A));
            }
          }
          function jr(r, e) {
            var n = e.nodeName.toLowerCase();
            'input' === n && mr.test(r.type)
              ? (e.checked = r.checked)
              : ('input' !== n && 'textarea' !== n) ||
                (e.defaultValue = r.defaultValue);
          }
          function Nr(r, e, n, o) {
            e = c(e);
            var t,
              a,
              A,
              i,
              s,
              l,
              g = 0,
              C = r.length,
              u = C - 1,
              d = e[0],
              p = b(d);
            if (
              p ||
              (C > 1 && 'string' == typeof d && !m.checkClone && Ir.test(d))
            )
              return r.each(function (t) {
                var a = r.eq(t);
                p && (e[0] = d.call(this, t, a.html())), Nr(a, e, n, o);
              });
            if (
              C &&
              ((a = (t = Br(e, r[0].ownerDocument, !1, r, o)).firstChild),
              1 === t.childNodes.length && (t = a),
              a || o)
            ) {
              for (i = (A = w.map(hr(t, 'script'), Hr)).length; g < C; g++)
                (s = t),
                  g !== u &&
                    ((s = w.clone(s, !0, !0)),
                    i && w.merge(A, hr(s, 'script'))),
                  n.call(r[g], s, g);
              if (i)
                for (
                  l = A[A.length - 1].ownerDocument, w.map(A, Pr), g = 0;
                  g < i;
                  g++
                )
                  (s = A[g]),
                    fr.test(s.type || '') &&
                      !V.access(s, 'globalEval') &&
                      w.contains(l, s) &&
                      (s.src && 'module' !== (s.type || '').toLowerCase()
                        ? w._evalUrl &&
                          !s.noModule &&
                          w._evalUrl(
                            s.src,
                            {nonce: s.nonce || s.getAttribute('nonce')},
                            l
                          )
                        : x(s.textContent.replace(Sr, ''), s, l));
            }
            return r;
          }
          function $r(r, e, n) {
            for (
              var o, t = e ? w.filter(e, r) : r, a = 0;
              null != (o = t[a]);
              a++
            )
              n || 1 !== o.nodeType || w.cleanData(hr(o)),
                o.parentNode &&
                  (n && ir(o) && xr(hr(o, 'script')),
                  o.parentNode.removeChild(o));
            return r;
          }
          w.extend({
            htmlPrefilter: function (r) {
              return r;
            },
            clone: function (r, e, n) {
              var o,
                t,
                a,
                A,
                i = r.cloneNode(!0),
                c = ir(r);
              if (
                !(
                  m.noCloneChecked ||
                  (1 !== r.nodeType && 11 !== r.nodeType) ||
                  w.isXMLDoc(r)
                )
              )
                for (A = hr(i), o = 0, t = (a = hr(r)).length; o < t; o++)
                  jr(a[o], A[o]);
              if (e)
                if (n)
                  for (
                    a = a || hr(r), A = A || hr(i), o = 0, t = a.length;
                    o < t;
                    o++
                  )
                    Or(a[o], A[o]);
                else Or(r, i);
              return (
                (A = hr(i, 'script')).length > 0 &&
                  xr(A, !c && hr(r, 'script')),
                i
              );
            },
            cleanData: function (r) {
              for (
                var e, n, o, t = w.event.special, a = 0;
                void 0 !== (n = r[a]);
                a++
              )
                if (X(n)) {
                  if ((e = n[V.expando])) {
                    if (e.events)
                      for (o in e.events)
                        t[o]
                          ? w.event.remove(n, o)
                          : w.removeEvent(n, o, e.handle);
                    n[V.expando] = void 0;
                  }
                  n[Z.expando] && (n[Z.expando] = void 0);
                }
            },
          }),
            w.fn.extend({
              detach: function (r) {
                return $r(this, r, !0);
              },
              remove: function (r) {
                return $r(this, r);
              },
              text: function (r) {
                return U(
                  this,
                  function (r) {
                    return void 0 === r
                      ? w.text(this)
                      : this.empty().each(function () {
                          (1 !== this.nodeType &&
                            11 !== this.nodeType &&
                            9 !== this.nodeType) ||
                            (this.textContent = r);
                        });
                  },
                  null,
                  r,
                  arguments.length
                );
              },
              append: function () {
                return Nr(this, arguments, function (r) {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    Mr(this, r).appendChild(r);
                });
              },
              prepend: function () {
                return Nr(this, arguments, function (r) {
                  if (
                    1 === this.nodeType ||
                    11 === this.nodeType ||
                    9 === this.nodeType
                  ) {
                    var e = Mr(this, r);
                    e.insertBefore(r, e.firstChild);
                  }
                });
              },
              before: function () {
                return Nr(this, arguments, function (r) {
                  this.parentNode && this.parentNode.insertBefore(r, this);
                });
              },
              after: function () {
                return Nr(this, arguments, function (r) {
                  this.parentNode &&
                    this.parentNode.insertBefore(r, this.nextSibling);
                });
              },
              empty: function () {
                for (var r, e = 0; null != (r = this[e]); e++)
                  1 === r.nodeType &&
                    (w.cleanData(hr(r, !1)), (r.textContent = ''));
                return this;
              },
              clone: function (r, e) {
                return (
                  (r = null != r && r),
                  (e = null == e ? r : e),
                  this.map(function () {
                    return w.clone(this, r, e);
                  })
                );
              },
              html: function (r) {
                return U(
                  this,
                  function (r) {
                    var e = this[0] || {},
                      n = 0,
                      o = this.length;
                    if (void 0 === r && 1 === e.nodeType) return e.innerHTML;
                    if (
                      'string' == typeof r &&
                      !Fr.test(r) &&
                      !vr[(br.exec(r) || ['', ''])[1].toLowerCase()]
                    ) {
                      r = w.htmlPrefilter(r);
                      try {
                        for (; n < o; n++)
                          1 === (e = this[n] || {}).nodeType &&
                            (w.cleanData(hr(e, !1)), (e.innerHTML = r));
                        e = 0;
                      } catch (r) {}
                    }
                    e && this.empty().append(r);
                  },
                  null,
                  r,
                  arguments.length
                );
              },
              replaceWith: function () {
                var r = [];
                return Nr(
                  this,
                  arguments,
                  function (e) {
                    var n = this.parentNode;
                    w.inArray(this, r) < 0 &&
                      (w.cleanData(hr(this)), n && n.replaceChild(e, this));
                  },
                  r
                );
              },
            }),
            w.each(
              {
                appendTo: 'append',
                prependTo: 'prepend',
                insertBefore: 'before',
                insertAfter: 'after',
                replaceAll: 'replaceWith',
              },
              function (r, e) {
                w.fn[r] = function (r) {
                  for (
                    var n, o = [], t = w(r), a = t.length - 1, A = 0;
                    A <= a;
                    A++
                  )
                    (n = A === a ? this : this.clone(!0)),
                      w(t[A])[e](n),
                      s.apply(o, n.get());
                  return this.pushStack(o);
                };
              }
            );
          var Tr = new RegExp('^(' + or + ')(?!px)[a-z%]+$', 'i'),
            qr = function (r) {
              var e = r.ownerDocument.defaultView;
              return (e && e.opener) || (e = o), e.getComputedStyle(r);
            },
            Jr = function (r, e, n) {
              var o,
                t,
                a = {};
              for (t in e) (a[t] = r.style[t]), (r.style[t] = e[t]);
              for (t in ((o = n.call(r)), e)) r.style[t] = a[t];
              return o;
            },
            zr = new RegExp(ar.join('|'), 'i');
          function Qr(r, e, n) {
            var o,
              t,
              a,
              A,
              i = r.style;
            return (
              (n = n || qr(r)) &&
                ('' !== (A = n.getPropertyValue(e) || n[e]) ||
                  ir(r) ||
                  (A = w.style(r, e)),
                !m.pixelBoxStyles() &&
                  Tr.test(A) &&
                  zr.test(e) &&
                  ((o = i.width),
                  (t = i.minWidth),
                  (a = i.maxWidth),
                  (i.minWidth = i.maxWidth = i.width = A),
                  (A = n.width),
                  (i.width = o),
                  (i.minWidth = t),
                  (i.maxWidth = a))),
              void 0 !== A ? A + '' : A
            );
          }
          function Ur(r, e) {
            return {
              get: function () {
                if (!r()) return (this.get = e).apply(this, arguments);
                delete this.get;
              },
            };
          }
          !(function () {
            function r() {
              if (l) {
                (s.style.cssText =
                  'position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0'),
                  (l.style.cssText =
                    'position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%'),
                  Ar.appendChild(s).appendChild(l);
                var r = o.getComputedStyle(l);
                (n = '1%' !== r.top),
                  (c = 12 === e(r.marginLeft)),
                  (l.style.right = '60%'),
                  (A = 36 === e(r.right)),
                  (t = 36 === e(r.width)),
                  (l.style.position = 'absolute'),
                  (a = 12 === e(l.offsetWidth / 3)),
                  Ar.removeChild(s),
                  (l = null);
              }
            }
            function e(r) {
              return Math.round(parseFloat(r));
            }
            var n,
              t,
              a,
              A,
              i,
              c,
              s = v.createElement('div'),
              l = v.createElement('div');
            l.style &&
              ((l.style.backgroundClip = 'content-box'),
              (l.cloneNode(!0).style.backgroundClip = ''),
              (m.clearCloneStyle = 'content-box' === l.style.backgroundClip),
              w.extend(m, {
                boxSizingReliable: function () {
                  return r(), t;
                },
                pixelBoxStyles: function () {
                  return r(), A;
                },
                pixelPosition: function () {
                  return r(), n;
                },
                reliableMarginLeft: function () {
                  return r(), c;
                },
                scrollboxSize: function () {
                  return r(), a;
                },
                reliableTrDimensions: function () {
                  var r, e, n, t;
                  return (
                    null == i &&
                      ((r = v.createElement('table')),
                      (e = v.createElement('tr')),
                      (n = v.createElement('div')),
                      (r.style.cssText =
                        'position:absolute;left:-11111px;border-collapse:separate'),
                      (e.style.cssText = 'border:1px solid'),
                      (e.style.height = '1px'),
                      (n.style.height = '9px'),
                      (n.style.display = 'block'),
                      Ar.appendChild(r).appendChild(e).appendChild(n),
                      (t = o.getComputedStyle(e)),
                      (i =
                        parseInt(t.height, 10) +
                          parseInt(t.borderTopWidth, 10) +
                          parseInt(t.borderBottomWidth, 10) ===
                        e.offsetHeight),
                      Ar.removeChild(r)),
                    i
                  );
                },
              }));
          })();
          var Wr = ['Webkit', 'Moz', 'ms'],
            Yr = v.createElement('div').style,
            _r = {};
          function Rr(r) {
            return (
              w.cssProps[r] ||
              _r[r] ||
              (r in Yr
                ? r
                : (_r[r] =
                    (function (r) {
                      for (
                        var e = r[0].toUpperCase() + r.slice(1), n = Wr.length;
                        n--;

                      )
                        if ((r = Wr[n] + e) in Yr) return r;
                    })(r) || r))
            );
          }
          var Xr = /^(none|table(?!-c[ea]).+)/,
            Kr = /^--/,
            Vr = {position: 'absolute', visibility: 'hidden', display: 'block'},
            Zr = {letterSpacing: '0', fontWeight: '400'};
          function re(r, e, n) {
            var o = tr.exec(e);
            return o ? Math.max(0, o[2] - (n || 0)) + (o[3] || 'px') : e;
          }
          function ee(r, e, n, o, t, a) {
            var A = 'width' === e ? 1 : 0,
              i = 0,
              c = 0;
            if (n === (o ? 'border' : 'content')) return 0;
            for (; A < 4; A += 2)
              'margin' === n && (c += w.css(r, n + ar[A], !0, t)),
                o
                  ? ('content' === n &&
                      (c -= w.css(r, 'padding' + ar[A], !0, t)),
                    'margin' !== n &&
                      (c -= w.css(r, 'border' + ar[A] + 'Width', !0, t)))
                  : ((c += w.css(r, 'padding' + ar[A], !0, t)),
                    'padding' !== n
                      ? (c += w.css(r, 'border' + ar[A] + 'Width', !0, t))
                      : (i += w.css(r, 'border' + ar[A] + 'Width', !0, t)));
            return (
              !o &&
                a >= 0 &&
                (c +=
                  Math.max(
                    0,
                    Math.ceil(
                      r['offset' + e[0].toUpperCase() + e.slice(1)] -
                        a -
                        c -
                        i -
                        0.5
                    )
                  ) || 0),
              c
            );
          }
          function ne(r, e, n) {
            var o = qr(r),
              t =
                (!m.boxSizingReliable() || n) &&
                'border-box' === w.css(r, 'boxSizing', !1, o),
              a = t,
              A = Qr(r, e, o),
              i = 'offset' + e[0].toUpperCase() + e.slice(1);
            if (Tr.test(A)) {
              if (!n) return A;
              A = 'auto';
            }
            return (
              ((!m.boxSizingReliable() && t) ||
                (!m.reliableTrDimensions() && F(r, 'tr')) ||
                'auto' === A ||
                (!parseFloat(A) && 'inline' === w.css(r, 'display', !1, o))) &&
                r.getClientRects().length &&
                ((t = 'border-box' === w.css(r, 'boxSizing', !1, o)),
                (a = i in r) && (A = r[i])),
              (A = parseFloat(A) || 0) +
                ee(r, e, n || (t ? 'border' : 'content'), a, o, A) +
                'px'
            );
          }
          function oe(r, e, n, o, t) {
            return new oe.prototype.init(r, e, n, o, t);
          }
          w.extend({
            cssHooks: {
              opacity: {
                get: function (r, e) {
                  if (e) {
                    var n = Qr(r, 'opacity');
                    return '' === n ? '1' : n;
                  }
                },
              },
            },
            cssNumber: {
              animationIterationCount: !0,
              columnCount: !0,
              fillOpacity: !0,
              flexGrow: !0,
              flexShrink: !0,
              fontWeight: !0,
              gridArea: !0,
              gridColumn: !0,
              gridColumnEnd: !0,
              gridColumnStart: !0,
              gridRow: !0,
              gridRowEnd: !0,
              gridRowStart: !0,
              lineHeight: !0,
              opacity: !0,
              order: !0,
              orphans: !0,
              widows: !0,
              zIndex: !0,
              zoom: !0,
            },
            cssProps: {},
            style: function (r, e, n, o) {
              if (r && 3 !== r.nodeType && 8 !== r.nodeType && r.style) {
                var t,
                  a,
                  A,
                  i = R(e),
                  c = Kr.test(e),
                  s = r.style;
                if (
                  (c || (e = Rr(i)),
                  (A = w.cssHooks[e] || w.cssHooks[i]),
                  void 0 === n)
                )
                  return A && 'get' in A && void 0 !== (t = A.get(r, !1, o))
                    ? t
                    : s[e];
                'string' == (a = typeof n) &&
                  (t = tr.exec(n)) &&
                  t[1] &&
                  ((n = lr(r, e, t)), (a = 'number')),
                  null != n &&
                    n == n &&
                    ('number' !== a ||
                      c ||
                      (n += (t && t[3]) || (w.cssNumber[i] ? '' : 'px')),
                    m.clearCloneStyle ||
                      '' !== n ||
                      0 !== e.indexOf('background') ||
                      (s[e] = 'inherit'),
                    (A && 'set' in A && void 0 === (n = A.set(r, n, o))) ||
                      (c ? s.setProperty(e, n) : (s[e] = n)));
              }
            },
            css: function (r, e, n, o) {
              var t,
                a,
                A,
                i = R(e);
              return (
                Kr.test(e) || (e = Rr(i)),
                (A = w.cssHooks[e] || w.cssHooks[i]) &&
                  'get' in A &&
                  (t = A.get(r, !0, n)),
                void 0 === t && (t = Qr(r, e, o)),
                'normal' === t && e in Zr && (t = Zr[e]),
                '' === n || n
                  ? ((a = parseFloat(t)), !0 === n || isFinite(a) ? a || 0 : t)
                  : t
              );
            },
          }),
            w.each(['height', 'width'], function (r, e) {
              w.cssHooks[e] = {
                get: function (r, n, o) {
                  if (n)
                    return !Xr.test(w.css(r, 'display')) ||
                      (r.getClientRects().length &&
                        r.getBoundingClientRect().width)
                      ? ne(r, e, o)
                      : Jr(r, Vr, function () {
                          return ne(r, e, o);
                        });
                },
                set: function (r, n, o) {
                  var t,
                    a = qr(r),
                    A = !m.scrollboxSize() && 'absolute' === a.position,
                    i =
                      (A || o) && 'border-box' === w.css(r, 'boxSizing', !1, a),
                    c = o ? ee(r, e, o, i, a) : 0;
                  return (
                    i &&
                      A &&
                      (c -= Math.ceil(
                        r['offset' + e[0].toUpperCase() + e.slice(1)] -
                          parseFloat(a[e]) -
                          ee(r, e, 'border', !1, a) -
                          0.5
                      )),
                    c &&
                      (t = tr.exec(n)) &&
                      'px' !== (t[3] || 'px') &&
                      ((r.style[e] = n), (n = w.css(r, e))),
                    re(0, n, c)
                  );
                },
              };
            }),
            (w.cssHooks.marginLeft = Ur(m.reliableMarginLeft, function (r, e) {
              if (e)
                return (
                  (parseFloat(Qr(r, 'marginLeft')) ||
                    r.getBoundingClientRect().left -
                      Jr(r, {marginLeft: 0}, function () {
                        return r.getBoundingClientRect().left;
                      })) + 'px'
                );
            })),
            w.each({margin: '', padding: '', border: 'Width'}, function (r, e) {
              (w.cssHooks[r + e] = {
                expand: function (n) {
                  for (
                    var o = 0,
                      t = {},
                      a = 'string' == typeof n ? n.split(' ') : [n];
                    o < 4;
                    o++
                  )
                    t[r + ar[o] + e] = a[o] || a[o - 2] || a[0];
                  return t;
                },
              }),
                'margin' !== r && (w.cssHooks[r + e].set = re);
            }),
            w.fn.extend({
              css: function (r, e) {
                return U(
                  this,
                  function (r, e, n) {
                    var o,
                      t,
                      a = {},
                      A = 0;
                    if (Array.isArray(e)) {
                      for (o = qr(r), t = e.length; A < t; A++)
                        a[e[A]] = w.css(r, e[A], !1, o);
                      return a;
                    }
                    return void 0 !== n ? w.style(r, e, n) : w.css(r, e);
                  },
                  r,
                  e,
                  arguments.length > 1
                );
              },
            }),
            (w.Tween = oe),
            (oe.prototype = {
              constructor: oe,
              init: function (r, e, n, o, t, a) {
                (this.elem = r),
                  (this.prop = n),
                  (this.easing = t || w.easing._default),
                  (this.options = e),
                  (this.start = this.now = this.cur()),
                  (this.end = o),
                  (this.unit = a || (w.cssNumber[n] ? '' : 'px'));
              },
              cur: function () {
                var r = oe.propHooks[this.prop];
                return r && r.get
                  ? r.get(this)
                  : oe.propHooks._default.get(this);
              },
              run: function (r) {
                var e,
                  n = oe.propHooks[this.prop];
                return (
                  this.options.duration
                    ? (this.pos = e =
                        w.easing[this.easing](
                          r,
                          this.options.duration * r,
                          0,
                          1,
                          this.options.duration
                        ))
                    : (this.pos = e = r),
                  (this.now = (this.end - this.start) * e + this.start),
                  this.options.step &&
                    this.options.step.call(this.elem, this.now, this),
                  n && n.set ? n.set(this) : oe.propHooks._default.set(this),
                  this
                );
              },
            }),
            (oe.prototype.init.prototype = oe.prototype),
            (oe.propHooks = {
              _default: {
                get: function (r) {
                  var e;
                  return 1 !== r.elem.nodeType ||
                    (null != r.elem[r.prop] && null == r.elem.style[r.prop])
                    ? r.elem[r.prop]
                    : (e = w.css(r.elem, r.prop, '')) && 'auto' !== e
                    ? e
                    : 0;
                },
                set: function (r) {
                  w.fx.step[r.prop]
                    ? w.fx.step[r.prop](r)
                    : 1 !== r.elem.nodeType ||
                      (!w.cssHooks[r.prop] && null == r.elem.style[Rr(r.prop)])
                    ? (r.elem[r.prop] = r.now)
                    : w.style(r.elem, r.prop, r.now + r.unit);
                },
              },
            }),
            (oe.propHooks.scrollTop = oe.propHooks.scrollLeft =
              {
                set: function (r) {
                  r.elem.nodeType &&
                    r.elem.parentNode &&
                    (r.elem[r.prop] = r.now);
                },
              }),
            (w.easing = {
              linear: function (r) {
                return r;
              },
              swing: function (r) {
                return 0.5 - Math.cos(r * Math.PI) / 2;
              },
              _default: 'swing',
            }),
            (w.fx = oe.prototype.init),
            (w.fx.step = {});
          var te,
            ae,
            Ae = /^(?:toggle|show|hide)$/,
            ie = /queueHooks$/;
          function ce() {
            ae &&
              (!1 === v.hidden && o.requestAnimationFrame
                ? o.requestAnimationFrame(ce)
                : o.setTimeout(ce, w.fx.interval),
              w.fx.tick());
          }
          function se() {
            return (
              o.setTimeout(function () {
                te = void 0;
              }),
              (te = Date.now())
            );
          }
          function le(r, e) {
            var n,
              o = 0,
              t = {height: r};
            for (e = e ? 1 : 0; o < 4; o += 2 - e)
              t['margin' + (n = ar[o])] = t['padding' + n] = r;
            return e && (t.opacity = t.width = r), t;
          }
          function ge(r, e, n) {
            for (
              var o,
                t = (Ce.tweeners[e] || []).concat(Ce.tweeners['*']),
                a = 0,
                A = t.length;
              a < A;
              a++
            )
              if ((o = t[a].call(n, e, r))) return o;
          }
          function Ce(r, e, n) {
            var o,
              t,
              a = 0,
              A = Ce.prefilters.length,
              i = w.Deferred().always(function () {
                delete c.elem;
              }),
              c = function () {
                if (t) return !1;
                for (
                  var e = te || se(),
                    n = Math.max(0, s.startTime + s.duration - e),
                    o = 1 - (n / s.duration || 0),
                    a = 0,
                    A = s.tweens.length;
                  a < A;
                  a++
                )
                  s.tweens[a].run(o);
                return (
                  i.notifyWith(r, [s, o, n]),
                  o < 1 && A
                    ? n
                    : (A || i.notifyWith(r, [s, 1, 0]),
                      i.resolveWith(r, [s]),
                      !1)
                );
              },
              s = i.promise({
                elem: r,
                props: w.extend({}, e),
                opts: w.extend(
                  !0,
                  {specialEasing: {}, easing: w.easing._default},
                  n
                ),
                originalProperties: e,
                originalOptions: n,
                startTime: te || se(),
                duration: n.duration,
                tweens: [],
                createTween: function (e, n) {
                  var o = w.Tween(
                    r,
                    s.opts,
                    e,
                    n,
                    s.opts.specialEasing[e] || s.opts.easing
                  );
                  return s.tweens.push(o), o;
                },
                stop: function (e) {
                  var n = 0,
                    o = e ? s.tweens.length : 0;
                  if (t) return this;
                  for (t = !0; n < o; n++) s.tweens[n].run(1);
                  return (
                    e
                      ? (i.notifyWith(r, [s, 1, 0]), i.resolveWith(r, [s, e]))
                      : i.rejectWith(r, [s, e]),
                    this
                  );
                },
              }),
              l = s.props;
            for (
              (function (r, e) {
                var n, o, t, a, A;
                for (n in r)
                  if (
                    ((t = e[(o = R(n))]),
                    (a = r[n]),
                    Array.isArray(a) && ((t = a[1]), (a = r[n] = a[0])),
                    n !== o && ((r[o] = a), delete r[n]),
                    (A = w.cssHooks[o]) && ('expand' in A))
                  )
                    for (n in ((a = A.expand(a)), delete r[o], a))
                      (n in r) || ((r[n] = a[n]), (e[n] = t));
                  else e[o] = t;
              })(l, s.opts.specialEasing);
              a < A;
              a++
            )
              if ((o = Ce.prefilters[a].call(s, r, l, s.opts)))
                return (
                  b(o.stop) &&
                    (w._queueHooks(s.elem, s.opts.queue).stop = o.stop.bind(o)),
                  o
                );
            return (
              w.map(l, ge, s),
              b(s.opts.start) && s.opts.start.call(r, s),
              s
                .progress(s.opts.progress)
                .done(s.opts.done, s.opts.complete)
                .fail(s.opts.fail)
                .always(s.opts.always),
              w.fx.timer(w.extend(c, {elem: r, anim: s, queue: s.opts.queue})),
              s
            );
          }
          (w.Animation = w.extend(Ce, {
            tweeners: {
              '*': [
                function (r, e) {
                  var n = this.createTween(r, e);
                  return lr(n.elem, r, tr.exec(e), n), n;
                },
              ],
            },
            tweener: function (r, e) {
              b(r) ? ((e = r), (r = ['*'])) : (r = r.match(N));
              for (var n, o = 0, t = r.length; o < t; o++)
                (n = r[o]),
                  (Ce.tweeners[n] = Ce.tweeners[n] || []),
                  Ce.tweeners[n].unshift(e);
            },
            prefilters: [
              function (r, e, n) {
                var o,
                  t,
                  a,
                  A,
                  i,
                  c,
                  s,
                  l,
                  g = 'width' in e || 'height' in e,
                  C = this,
                  u = {},
                  d = r.style,
                  p = r.nodeType && sr(r),
                  m = V.get(r, 'fxshow');
                for (o in (n.queue ||
                  (null == (A = w._queueHooks(r, 'fx')).unqueued &&
                    ((A.unqueued = 0),
                    (i = A.empty.fire),
                    (A.empty.fire = function () {
                      A.unqueued || i();
                    })),
                  A.unqueued++,
                  C.always(function () {
                    C.always(function () {
                      A.unqueued--, w.queue(r, 'fx').length || A.empty.fire();
                    });
                  })),
                e))
                  if (((t = e[o]), Ae.test(t))) {
                    if (
                      (delete e[o],
                      (a = a || 'toggle' === t),
                      t === (p ? 'hide' : 'show'))
                    ) {
                      if ('show' !== t || !m || void 0 === m[o]) continue;
                      p = !0;
                    }
                    u[o] = (m && m[o]) || w.style(r, o);
                  }
                if ((c = !w.isEmptyObject(e)) || !w.isEmptyObject(u))
                  for (o in (g &&
                    1 === r.nodeType &&
                    ((n.overflow = [d.overflow, d.overflowX, d.overflowY]),
                    null == (s = m && m.display) && (s = V.get(r, 'display')),
                    'none' === (l = w.css(r, 'display')) &&
                      (s
                        ? (l = s)
                        : (ur([r], !0),
                          (s = r.style.display || s),
                          (l = w.css(r, 'display')),
                          ur([r]))),
                    ('inline' === l || ('inline-block' === l && null != s)) &&
                      'none' === w.css(r, 'float') &&
                      (c ||
                        (C.done(function () {
                          d.display = s;
                        }),
                        null == s &&
                          ((l = d.display), (s = 'none' === l ? '' : l))),
                      (d.display = 'inline-block'))),
                  n.overflow &&
                    ((d.overflow = 'hidden'),
                    C.always(function () {
                      (d.overflow = n.overflow[0]),
                        (d.overflowX = n.overflow[1]),
                        (d.overflowY = n.overflow[2]);
                    })),
                  (c = !1),
                  u))
                    c ||
                      (m
                        ? 'hidden' in m && (p = m.hidden)
                        : (m = V.access(r, 'fxshow', {display: s})),
                      a && (m.hidden = !p),
                      p && ur([r], !0),
                      C.done(function () {
                        for (o in (p || ur([r]), V.remove(r, 'fxshow'), u))
                          w.style(r, o, u[o]);
                      })),
                      (c = ge(p ? m[o] : 0, o, C)),
                      o in m ||
                        ((m[o] = c.start),
                        p && ((c.end = c.start), (c.start = 0)));
              },
            ],
            prefilter: function (r, e) {
              e ? Ce.prefilters.unshift(r) : Ce.prefilters.push(r);
            },
          })),
            (w.speed = function (r, e, n) {
              var o =
                r && 'object' == typeof r
                  ? w.extend({}, r)
                  : {
                      complete: n || (!n && e) || (b(r) && r),
                      duration: r,
                      easing: (n && e) || (e && !b(e) && e),
                    };
              return (
                w.fx.off
                  ? (o.duration = 0)
                  : 'number' != typeof o.duration &&
                    (o.duration in w.fx.speeds
                      ? (o.duration = w.fx.speeds[o.duration])
                      : (o.duration = w.fx.speeds._default)),
                (null != o.queue && !0 !== o.queue) || (o.queue = 'fx'),
                (o.old = o.complete),
                (o.complete = function () {
                  b(o.old) && o.old.call(this),
                    o.queue && w.dequeue(this, o.queue);
                }),
                o
              );
            }),
            w.fn.extend({
              fadeTo: function (r, e, n, o) {
                return this.filter(sr)
                  .css('opacity', 0)
                  .show()
                  .end()
                  .animate({opacity: e}, r, n, o);
              },
              animate: function (r, e, n, o) {
                var t = w.isEmptyObject(r),
                  a = w.speed(e, n, o),
                  A = function () {
                    var e = Ce(this, w.extend({}, r), a);
                    (t || V.get(this, 'finish')) && e.stop(!0);
                  };
                return (
                  (A.finish = A),
                  t || !1 === a.queue ? this.each(A) : this.queue(a.queue, A)
                );
              },
              stop: function (r, e, n) {
                var o = function (r) {
                  var e = r.stop;
                  delete r.stop, e(n);
                };
                return (
                  'string' != typeof r && ((n = e), (e = r), (r = void 0)),
                  e && this.queue(r || 'fx', []),
                  this.each(function () {
                    var e = !0,
                      t = null != r && r + 'queueHooks',
                      a = w.timers,
                      A = V.get(this);
                    if (t) A[t] && A[t].stop && o(A[t]);
                    else
                      for (t in A) A[t] && A[t].stop && ie.test(t) && o(A[t]);
                    for (t = a.length; t--; )
                      a[t].elem !== this ||
                        (null != r && a[t].queue !== r) ||
                        (a[t].anim.stop(n), (e = !1), a.splice(t, 1));
                    (!e && n) || w.dequeue(this, r);
                  })
                );
              },
              finish: function (r) {
                return (
                  !1 !== r && (r = r || 'fx'),
                  this.each(function () {
                    var e,
                      n = V.get(this),
                      o = n[r + 'queue'],
                      t = n[r + 'queueHooks'],
                      a = w.timers,
                      A = o ? o.length : 0;
                    for (
                      n.finish = !0,
                        w.queue(this, r, []),
                        t && t.stop && t.stop.call(this, !0),
                        e = a.length;
                      e--;

                    )
                      a[e].elem === this &&
                        a[e].queue === r &&
                        (a[e].anim.stop(!0), a.splice(e, 1));
                    for (e = 0; e < A; e++)
                      o[e] && o[e].finish && o[e].finish.call(this);
                    delete n.finish;
                  })
                );
              },
            }),
            w.each(['toggle', 'show', 'hide'], function (r, e) {
              var n = w.fn[e];
              w.fn[e] = function (r, o, t) {
                return null == r || 'boolean' == typeof r
                  ? n.apply(this, arguments)
                  : this.animate(le(e, !0), r, o, t);
              };
            }),
            w.each(
              {
                slideDown: le('show'),
                slideUp: le('hide'),
                slideToggle: le('toggle'),
                fadeIn: {opacity: 'show'},
                fadeOut: {opacity: 'hide'},
                fadeToggle: {opacity: 'toggle'},
              },
              function (r, e) {
                w.fn[r] = function (r, n, o) {
                  return this.animate(e, r, n, o);
                };
              }
            ),
            (w.timers = []),
            (w.fx.tick = function () {
              var r,
                e = 0,
                n = w.timers;
              for (te = Date.now(); e < n.length; e++)
                (r = n[e])() || n[e] !== r || n.splice(e--, 1);
              n.length || w.fx.stop(), (te = void 0);
            }),
            (w.fx.timer = function (r) {
              w.timers.push(r), w.fx.start();
            }),
            (w.fx.interval = 13),
            (w.fx.start = function () {
              ae || ((ae = !0), ce());
            }),
            (w.fx.stop = function () {
              ae = null;
            }),
            (w.fx.speeds = {slow: 600, fast: 200, _default: 400}),
            (w.fn.delay = function (r, e) {
              return (
                (r = (w.fx && w.fx.speeds[r]) || r),
                (e = e || 'fx'),
                this.queue(e, function (e, n) {
                  var t = o.setTimeout(e, r);
                  n.stop = function () {
                    o.clearTimeout(t);
                  };
                })
              );
            }),
            (function () {
              var r = v.createElement('input'),
                e = v
                  .createElement('select')
                  .appendChild(v.createElement('option'));
              (r.type = 'checkbox'),
                (m.checkOn = '' !== r.value),
                (m.optSelected = e.selected),
                ((r = v.createElement('input')).value = 't'),
                (r.type = 'radio'),
                (m.radioValue = 't' === r.value);
            })();
          var ue,
            de = w.expr.attrHandle;
          w.fn.extend({
            attr: function (r, e) {
              return U(this, w.attr, r, e, arguments.length > 1);
            },
            removeAttr: function (r) {
              return this.each(function () {
                w.removeAttr(this, r);
              });
            },
          }),
            w.extend({
              attr: function (r, e, n) {
                var o,
                  t,
                  a = r.nodeType;
                if (3 !== a && 8 !== a && 2 !== a)
                  return void 0 === r.getAttribute
                    ? w.prop(r, e, n)
                    : ((1 === a && w.isXMLDoc(r)) ||
                        (t =
                          w.attrHooks[e.toLowerCase()] ||
                          (w.expr.match.bool.test(e) ? ue : void 0)),
                      void 0 !== n
                        ? null === n
                          ? void w.removeAttr(r, e)
                          : t && 'set' in t && void 0 !== (o = t.set(r, n, e))
                          ? o
                          : (r.setAttribute(e, n + ''), n)
                        : t && 'get' in t && null !== (o = t.get(r, e))
                        ? o
                        : null == (o = w.find.attr(r, e))
                        ? void 0
                        : o);
              },
              attrHooks: {
                type: {
                  set: function (r, e) {
                    if (!m.radioValue && 'radio' === e && F(r, 'input')) {
                      var n = r.value;
                      return r.setAttribute('type', e), n && (r.value = n), e;
                    }
                  },
                },
              },
              removeAttr: function (r, e) {
                var n,
                  o = 0,
                  t = e && e.match(N);
                if (t && 1 === r.nodeType)
                  for (; (n = t[o++]); ) r.removeAttribute(n);
              },
            }),
            (ue = {
              set: function (r, e, n) {
                return !1 === e ? w.removeAttr(r, n) : r.setAttribute(n, n), n;
              },
            }),
            w.each(w.expr.match.bool.source.match(/\w+/g), function (r, e) {
              var n = de[e] || w.find.attr;
              de[e] = function (r, e, o) {
                var t,
                  a,
                  A = e.toLowerCase();
                return (
                  o ||
                    ((a = de[A]),
                    (de[A] = t),
                    (t = null != n(r, e, o) ? A : null),
                    (de[A] = a)),
                  t
                );
              };
            });
          var pe = /^(?:input|select|textarea|button)$/i,
            me = /^(?:a|area)$/i;
          function be(r) {
            return (r.match(N) || []).join(' ');
          }
          function fe(r) {
            return (r.getAttribute && r.getAttribute('class')) || '';
          }
          function ve(r) {
            return Array.isArray(r)
              ? r
              : ('string' == typeof r && r.match(N)) || [];
          }
          w.fn.extend({
            prop: function (r, e) {
              return U(this, w.prop, r, e, arguments.length > 1);
            },
            removeProp: function (r) {
              return this.each(function () {
                delete this[w.propFix[r] || r];
              });
            },
          }),
            w.extend({
              prop: function (r, e, n) {
                var o,
                  t,
                  a = r.nodeType;
                if (3 !== a && 8 !== a && 2 !== a)
                  return (
                    (1 === a && w.isXMLDoc(r)) ||
                      ((e = w.propFix[e] || e), (t = w.propHooks[e])),
                    void 0 !== n
                      ? t && 'set' in t && void 0 !== (o = t.set(r, n, e))
                        ? o
                        : (r[e] = n)
                      : t && 'get' in t && null !== (o = t.get(r, e))
                      ? o
                      : r[e]
                  );
              },
              propHooks: {
                tabIndex: {
                  get: function (r) {
                    var e = w.find.attr(r, 'tabindex');
                    return e
                      ? parseInt(e, 10)
                      : pe.test(r.nodeName) || (me.test(r.nodeName) && r.href)
                      ? 0
                      : -1;
                  },
                },
              },
              propFix: {for: 'htmlFor', class: 'className'},
            }),
            m.optSelected ||
              (w.propHooks.selected = {
                get: function (r) {
                  var e = r.parentNode;
                  return e && e.parentNode && e.parentNode.selectedIndex, null;
                },
                set: function (r) {
                  var e = r.parentNode;
                  e &&
                    (e.selectedIndex,
                    e.parentNode && e.parentNode.selectedIndex);
                },
              }),
            w.each(
              [
                'tabIndex',
                'readOnly',
                'maxLength',
                'cellSpacing',
                'cellPadding',
                'rowSpan',
                'colSpan',
                'useMap',
                'frameBorder',
                'contentEditable',
              ],
              function () {
                w.propFix[this.toLowerCase()] = this;
              }
            ),
            w.fn.extend({
              addClass: function (r) {
                var e,
                  n,
                  o,
                  t,
                  a,
                  A,
                  i,
                  c = 0;
                if (b(r))
                  return this.each(function (e) {
                    w(this).addClass(r.call(this, e, fe(this)));
                  });
                if ((e = ve(r)).length)
                  for (; (n = this[c++]); )
                    if (
                      ((t = fe(n)), (o = 1 === n.nodeType && ' ' + be(t) + ' '))
                    ) {
                      for (A = 0; (a = e[A++]); )
                        o.indexOf(' ' + a + ' ') < 0 && (o += a + ' ');
                      t !== (i = be(o)) && n.setAttribute('class', i);
                    }
                return this;
              },
              removeClass: function (r) {
                var e,
                  n,
                  o,
                  t,
                  a,
                  A,
                  i,
                  c = 0;
                if (b(r))
                  return this.each(function (e) {
                    w(this).removeClass(r.call(this, e, fe(this)));
                  });
                if (!arguments.length) return this.attr('class', '');
                if ((e = ve(r)).length)
                  for (; (n = this[c++]); )
                    if (
                      ((t = fe(n)), (o = 1 === n.nodeType && ' ' + be(t) + ' '))
                    ) {
                      for (A = 0; (a = e[A++]); )
                        for (; o.indexOf(' ' + a + ' ') > -1; )
                          o = o.replace(' ' + a + ' ', ' ');
                      t !== (i = be(o)) && n.setAttribute('class', i);
                    }
                return this;
              },
              toggleClass: function (r, e) {
                var n = typeof r,
                  o = 'string' === n || Array.isArray(r);
                return 'boolean' == typeof e && o
                  ? e
                    ? this.addClass(r)
                    : this.removeClass(r)
                  : b(r)
                  ? this.each(function (n) {
                      w(this).toggleClass(r.call(this, n, fe(this), e), e);
                    })
                  : this.each(function () {
                      var e, t, a, A;
                      if (o)
                        for (t = 0, a = w(this), A = ve(r); (e = A[t++]); )
                          a.hasClass(e) ? a.removeClass(e) : a.addClass(e);
                      else
                        (void 0 !== r && 'boolean' !== n) ||
                          ((e = fe(this)) && V.set(this, '__className__', e),
                          this.setAttribute &&
                            this.setAttribute(
                              'class',
                              e || !1 === r
                                ? ''
                                : V.get(this, '__className__') || ''
                            ));
                    });
              },
              hasClass: function (r) {
                var e,
                  n,
                  o = 0;
                for (e = ' ' + r + ' '; (n = this[o++]); )
                  if (
                    1 === n.nodeType &&
                    (' ' + be(fe(n)) + ' ').indexOf(e) > -1
                  )
                    return !0;
                return !1;
              },
            });
          var he = /\r/g;
          w.fn.extend({
            val: function (r) {
              var e,
                n,
                o,
                t = this[0];
              return arguments.length
                ? ((o = b(r)),
                  this.each(function (n) {
                    var t;
                    1 === this.nodeType &&
                      (null == (t = o ? r.call(this, n, w(this).val()) : r)
                        ? (t = '')
                        : 'number' == typeof t
                        ? (t += '')
                        : Array.isArray(t) &&
                          (t = w.map(t, function (r) {
                            return null == r ? '' : r + '';
                          })),
                      ((e =
                        w.valHooks[this.type] ||
                        w.valHooks[this.nodeName.toLowerCase()]) &&
                        'set' in e &&
                        void 0 !== e.set(this, t, 'value')) ||
                        (this.value = t));
                  }))
                : t
                ? (e =
                    w.valHooks[t.type] ||
                    w.valHooks[t.nodeName.toLowerCase()]) &&
                  'get' in e &&
                  void 0 !== (n = e.get(t, 'value'))
                  ? n
                  : 'string' == typeof (n = t.value)
                  ? n.replace(he, '')
                  : null == n
                  ? ''
                  : n
                : void 0;
            },
          }),
            w.extend({
              valHooks: {
                option: {
                  get: function (r) {
                    var e = w.find.attr(r, 'value');
                    return null != e ? e : be(w.text(r));
                  },
                },
                select: {
                  get: function (r) {
                    var e,
                      n,
                      o,
                      t = r.options,
                      a = r.selectedIndex,
                      A = 'select-one' === r.type,
                      i = A ? null : [],
                      c = A ? a + 1 : t.length;
                    for (o = a < 0 ? c : A ? a : 0; o < c; o++)
                      if (
                        ((n = t[o]).selected || o === a) &&
                        !n.disabled &&
                        (!n.parentNode.disabled || !F(n.parentNode, 'optgroup'))
                      ) {
                        if (((e = w(n).val()), A)) return e;
                        i.push(e);
                      }
                    return i;
                  },
                  set: function (r, e) {
                    for (
                      var n, o, t = r.options, a = w.makeArray(e), A = t.length;
                      A--;

                    )
                      ((o = t[A]).selected =
                        w.inArray(w.valHooks.option.get(o), a) > -1) &&
                        (n = !0);
                    return n || (r.selectedIndex = -1), a;
                  },
                },
              },
            }),
            w.each(['radio', 'checkbox'], function () {
              (w.valHooks[this] = {
                set: function (r, e) {
                  if (Array.isArray(e))
                    return (r.checked = w.inArray(w(r).val(), e) > -1);
                },
              }),
                m.checkOn ||
                  (w.valHooks[this].get = function (r) {
                    return null === r.getAttribute('value') ? 'on' : r.value;
                  });
            }),
            (m.focusin = 'onfocusin' in o);
          var xe = /^(?:focusinfocus|focusoutblur)$/,
            ye = function (r) {
              r.stopPropagation();
            };
          w.extend(w.event, {
            trigger: function (r, e, n, t) {
              var a,
                A,
                i,
                c,
                s,
                l,
                g,
                C,
                d = [n || v],
                p = u.call(r, 'type') ? r.type : r,
                m = u.call(r, 'namespace') ? r.namespace.split('.') : [];
              if (
                ((A = C = i = n = n || v),
                3 !== n.nodeType &&
                  8 !== n.nodeType &&
                  !xe.test(p + w.event.triggered) &&
                  (p.indexOf('.') > -1 &&
                    ((m = p.split('.')), (p = m.shift()), m.sort()),
                  (s = p.indexOf(':') < 0 && 'on' + p),
                  ((r = r[w.expando]
                    ? r
                    : new w.Event(p, 'object' == typeof r && r)).isTrigger = t
                    ? 2
                    : 3),
                  (r.namespace = m.join('.')),
                  (r.rnamespace = r.namespace
                    ? new RegExp(
                        '(^|\\.)' + m.join('\\.(?:.*\\.|)') + '(\\.|$)'
                      )
                    : null),
                  (r.result = void 0),
                  r.target || (r.target = n),
                  (e = null == e ? [r] : w.makeArray(e, [r])),
                  (g = w.event.special[p] || {}),
                  t || !g.trigger || !1 !== g.trigger.apply(n, e)))
              ) {
                if (!t && !g.noBubble && !f(n)) {
                  for (
                    c = g.delegateType || p,
                      xe.test(c + p) || (A = A.parentNode);
                    A;
                    A = A.parentNode
                  )
                    d.push(A), (i = A);
                  i === (n.ownerDocument || v) &&
                    d.push(i.defaultView || i.parentWindow || o);
                }
                for (a = 0; (A = d[a++]) && !r.isPropagationStopped(); )
                  (C = A),
                    (r.type = a > 1 ? c : g.bindType || p),
                    (l =
                      (V.get(A, 'events') || Object.create(null))[r.type] &&
                      V.get(A, 'handle')) && l.apply(A, e),
                    (l = s && A[s]) &&
                      l.apply &&
                      X(A) &&
                      ((r.result = l.apply(A, e)),
                      !1 === r.result && r.preventDefault());
                return (
                  (r.type = p),
                  t ||
                    r.isDefaultPrevented() ||
                    (g._default && !1 !== g._default.apply(d.pop(), e)) ||
                    !X(n) ||
                    (s &&
                      b(n[p]) &&
                      !f(n) &&
                      ((i = n[s]) && (n[s] = null),
                      (w.event.triggered = p),
                      r.isPropagationStopped() && C.addEventListener(p, ye),
                      n[p](),
                      r.isPropagationStopped() && C.removeEventListener(p, ye),
                      (w.event.triggered = void 0),
                      i && (n[s] = i))),
                  r.result
                );
              }
            },
            simulate: function (r, e, n) {
              var o = w.extend(new w.Event(), n, {type: r, isSimulated: !0});
              w.event.trigger(o, null, e);
            },
          }),
            w.fn.extend({
              trigger: function (r, e) {
                return this.each(function () {
                  w.event.trigger(r, e, this);
                });
              },
              triggerHandler: function (r, e) {
                var n = this[0];
                if (n) return w.event.trigger(r, e, n, !0);
              },
            }),
            m.focusin ||
              w.each({focus: 'focusin', blur: 'focusout'}, function (r, e) {
                var n = function (r) {
                  w.event.simulate(e, r.target, w.event.fix(r));
                };
                w.event.special[e] = {
                  setup: function () {
                    var o = this.ownerDocument || this.document || this,
                      t = V.access(o, e);
                    t || o.addEventListener(r, n, !0),
                      V.access(o, e, (t || 0) + 1);
                  },
                  teardown: function () {
                    var o = this.ownerDocument || this.document || this,
                      t = V.access(o, e) - 1;
                    t
                      ? V.access(o, e, t)
                      : (o.removeEventListener(r, n, !0), V.remove(o, e));
                  },
                };
              });
          var Be = o.location,
            we = {guid: Date.now()},
            ke = /\?/;
          w.parseXML = function (r) {
            var e, n;
            if (!r || 'string' != typeof r) return null;
            try {
              e = new o.DOMParser().parseFromString(r, 'text/xml');
            } catch (r) {}
            return (
              (n = e && e.getElementsByTagName('parsererror')[0]),
              (e && !n) ||
                w.error(
                  'Invalid XML: ' +
                    (n
                      ? w
                          .map(n.childNodes, function (r) {
                            return r.textContent;
                          })
                          .join('\n')
                      : r)
                ),
              e
            );
          };
          var Ee = /\[\]$/,
            De = /\r?\n/g,
            Ge = /^(?:submit|button|image|reset|file)$/i,
            Le = /^(?:input|select|textarea|keygen)/i;
          function Fe(r, e, n, o) {
            var t;
            if (Array.isArray(e))
              w.each(e, function (e, t) {
                n || Ee.test(r)
                  ? o(r, t)
                  : Fe(
                      r +
                        '[' +
                        ('object' == typeof t && null != t ? e : '') +
                        ']',
                      t,
                      n,
                      o
                    );
              });
            else if (n || 'object' !== y(e)) o(r, e);
            else for (t in e) Fe(r + '[' + t + ']', e[t], n, o);
          }
          (w.param = function (r, e) {
            var n,
              o = [],
              t = function (r, e) {
                var n = b(e) ? e() : e;
                o[o.length] =
                  encodeURIComponent(r) +
                  '=' +
                  encodeURIComponent(null == n ? '' : n);
              };
            if (null == r) return '';
            if (Array.isArray(r) || (r.jquery && !w.isPlainObject(r)))
              w.each(r, function () {
                t(this.name, this.value);
              });
            else for (n in r) Fe(n, r[n], e, t);
            return o.join('&');
          }),
            w.fn.extend({
              serialize: function () {
                return w.param(this.serializeArray());
              },
              serializeArray: function () {
                return this.map(function () {
                  var r = w.prop(this, 'elements');
                  return r ? w.makeArray(r) : this;
                })
                  .filter(function () {
                    var r = this.type;
                    return (
                      this.name &&
                      !w(this).is(':disabled') &&
                      Le.test(this.nodeName) &&
                      !Ge.test(r) &&
                      (this.checked || !mr.test(r))
                    );
                  })
                  .map(function (r, e) {
                    var n = w(this).val();
                    return null == n
                      ? null
                      : Array.isArray(n)
                      ? w.map(n, function (r) {
                          return {name: e.name, value: r.replace(De, '\r\n')};
                        })
                      : {name: e.name, value: n.replace(De, '\r\n')};
                  })
                  .get();
              },
            });
          var Ie = /%20/g,
            Se = /#.*$/,
            Me = /([?&])_=[^&]*/,
            He = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            Pe = /^(?:GET|HEAD)$/,
            Oe = /^\/\//,
            je = {},
            Ne = {},
            $e = '*/'.concat('*'),
            Te = v.createElement('a');
          function qe(r) {
            return function (e, n) {
              'string' != typeof e && ((n = e), (e = '*'));
              var o,
                t = 0,
                a = e.toLowerCase().match(N) || [];
              if (b(n))
                for (; (o = a[t++]); )
                  '+' === o[0]
                    ? ((o = o.slice(1) || '*'), (r[o] = r[o] || []).unshift(n))
                    : (r[o] = r[o] || []).push(n);
            };
          }
          function Je(r, e, n, o) {
            var t = {},
              a = r === Ne;
            function A(i) {
              var c;
              return (
                (t[i] = !0),
                w.each(r[i] || [], function (r, i) {
                  var s = i(e, n, o);
                  return 'string' != typeof s || a || t[s]
                    ? a
                      ? !(c = s)
                      : void 0
                    : (e.dataTypes.unshift(s), A(s), !1);
                }),
                c
              );
            }
            return A(e.dataTypes[0]) || (!t['*'] && A('*'));
          }
          function ze(r, e) {
            var n,
              o,
              t = w.ajaxSettings.flatOptions || {};
            for (n in e)
              void 0 !== e[n] && ((t[n] ? r : o || (o = {}))[n] = e[n]);
            return o && w.extend(!0, r, o), r;
          }
          (Te.href = Be.href),
            w.extend({
              active: 0,
              lastModified: {},
              etag: {},
              ajaxSettings: {
                url: Be.href,
                type: 'GET',
                isLocal:
                  /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
                    Be.protocol
                  ),
                global: !0,
                processData: !0,
                async: !0,
                contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
                accepts: {
                  '*': $e,
                  text: 'text/plain',
                  html: 'text/html',
                  xml: 'application/xml, text/xml',
                  json: 'application/json, text/javascript',
                },
                contents: {xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/},
                responseFields: {
                  xml: 'responseXML',
                  text: 'responseText',
                  json: 'responseJSON',
                },
                converters: {
                  '* text': String,
                  'text html': !0,
                  'text json': JSON.parse,
                  'text xml': w.parseXML,
                },
                flatOptions: {url: !0, context: !0},
              },
              ajaxSetup: function (r, e) {
                return e ? ze(ze(r, w.ajaxSettings), e) : ze(w.ajaxSettings, r);
              },
              ajaxPrefilter: qe(je),
              ajaxTransport: qe(Ne),
              ajax: function (r, e) {
                'object' == typeof r && ((e = r), (r = void 0)), (e = e || {});
                var n,
                  t,
                  a,
                  A,
                  i,
                  c,
                  s,
                  l,
                  g,
                  C,
                  u = w.ajaxSetup({}, e),
                  d = u.context || u,
                  p = u.context && (d.nodeType || d.jquery) ? w(d) : w.event,
                  m = w.Deferred(),
                  b = w.Callbacks('once memory'),
                  f = u.statusCode || {},
                  h = {},
                  x = {},
                  y = 'canceled',
                  B = {
                    readyState: 0,
                    getResponseHeader: function (r) {
                      var e;
                      if (s) {
                        if (!A)
                          for (A = {}; (e = He.exec(a)); )
                            A[e[1].toLowerCase() + ' '] = (
                              A[e[1].toLowerCase() + ' '] || []
                            ).concat(e[2]);
                        e = A[r.toLowerCase() + ' '];
                      }
                      return null == e ? null : e.join(', ');
                    },
                    getAllResponseHeaders: function () {
                      return s ? a : null;
                    },
                    setRequestHeader: function (r, e) {
                      return (
                        null == s &&
                          ((r = x[r.toLowerCase()] = x[r.toLowerCase()] || r),
                          (h[r] = e)),
                        this
                      );
                    },
                    overrideMimeType: function (r) {
                      return null == s && (u.mimeType = r), this;
                    },
                    statusCode: function (r) {
                      var e;
                      if (r)
                        if (s) B.always(r[B.status]);
                        else for (e in r) f[e] = [f[e], r[e]];
                      return this;
                    },
                    abort: function (r) {
                      var e = r || y;
                      return n && n.abort(e), k(0, e), this;
                    },
                  };
                if (
                  (m.promise(B),
                  (u.url = ((r || u.url || Be.href) + '').replace(
                    Oe,
                    Be.protocol + '//'
                  )),
                  (u.type = e.method || e.type || u.method || u.type),
                  (u.dataTypes = (u.dataType || '*').toLowerCase().match(N) || [
                    '',
                  ]),
                  null == u.crossDomain)
                ) {
                  c = v.createElement('a');
                  try {
                    (c.href = u.url),
                      (c.href = c.href),
                      (u.crossDomain =
                        Te.protocol + '//' + Te.host !=
                        c.protocol + '//' + c.host);
                  } catch (r) {
                    u.crossDomain = !0;
                  }
                }
                if (
                  (u.data &&
                    u.processData &&
                    'string' != typeof u.data &&
                    (u.data = w.param(u.data, u.traditional)),
                  Je(je, u, e, B),
                  s)
                )
                  return B;
                for (g in ((l = w.event && u.global) &&
                  0 == w.active++ &&
                  w.event.trigger('ajaxStart'),
                (u.type = u.type.toUpperCase()),
                (u.hasContent = !Pe.test(u.type)),
                (t = u.url.replace(Se, '')),
                u.hasContent
                  ? u.data &&
                    u.processData &&
                    0 ===
                      (u.contentType || '').indexOf(
                        'application/x-www-form-urlencoded'
                      ) &&
                    (u.data = u.data.replace(Ie, '+'))
                  : ((C = u.url.slice(t.length)),
                    u.data &&
                      (u.processData || 'string' == typeof u.data) &&
                      ((t += (ke.test(t) ? '&' : '?') + u.data), delete u.data),
                    !1 === u.cache &&
                      ((t = t.replace(Me, '$1')),
                      (C = (ke.test(t) ? '&' : '?') + '_=' + we.guid++ + C)),
                    (u.url = t + C)),
                u.ifModified &&
                  (w.lastModified[t] &&
                    B.setRequestHeader('If-Modified-Since', w.lastModified[t]),
                  w.etag[t] && B.setRequestHeader('If-None-Match', w.etag[t])),
                ((u.data && u.hasContent && !1 !== u.contentType) ||
                  e.contentType) &&
                  B.setRequestHeader('Content-Type', u.contentType),
                B.setRequestHeader(
                  'Accept',
                  u.dataTypes[0] && u.accepts[u.dataTypes[0]]
                    ? u.accepts[u.dataTypes[0]] +
                        ('*' !== u.dataTypes[0] ? ', ' + $e + '; q=0.01' : '')
                    : u.accepts['*']
                ),
                u.headers))
                  B.setRequestHeader(g, u.headers[g]);
                if (u.beforeSend && (!1 === u.beforeSend.call(d, B, u) || s))
                  return B.abort();
                if (
                  ((y = 'abort'),
                  b.add(u.complete),
                  B.done(u.success),
                  B.fail(u.error),
                  (n = Je(Ne, u, e, B)))
                ) {
                  if (
                    ((B.readyState = 1), l && p.trigger('ajaxSend', [B, u]), s)
                  )
                    return B;
                  u.async &&
                    u.timeout > 0 &&
                    (i = o.setTimeout(function () {
                      B.abort('timeout');
                    }, u.timeout));
                  try {
                    (s = !1), n.send(h, k);
                  } catch (r) {
                    if (s) throw r;
                    k(-1, r);
                  }
                } else k(-1, 'No Transport');
                function k(r, e, A, c) {
                  var g,
                    C,
                    v,
                    h,
                    x,
                    y = e;
                  s ||
                    ((s = !0),
                    i && o.clearTimeout(i),
                    (n = void 0),
                    (a = c || ''),
                    (B.readyState = r > 0 ? 4 : 0),
                    (g = (r >= 200 && r < 300) || 304 === r),
                    A &&
                      (h = (function (r, e, n) {
                        for (
                          var o, t, a, A, i = r.contents, c = r.dataTypes;
                          '*' === c[0];

                        )
                          c.shift(),
                            void 0 === o &&
                              (o =
                                r.mimeType ||
                                e.getResponseHeader('Content-Type'));
                        if (o)
                          for (t in i)
                            if (i[t] && i[t].test(o)) {
                              c.unshift(t);
                              break;
                            }
                        if (c[0] in n) a = c[0];
                        else {
                          for (t in n) {
                            if (!c[0] || r.converters[t + ' ' + c[0]]) {
                              a = t;
                              break;
                            }
                            A || (A = t);
                          }
                          a = a || A;
                        }
                        if (a) return a !== c[0] && c.unshift(a), n[a];
                      })(u, B, A)),
                    !g &&
                      w.inArray('script', u.dataTypes) > -1 &&
                      w.inArray('json', u.dataTypes) < 0 &&
                      (u.converters['text script'] = function () {}),
                    (h = (function (r, e, n, o) {
                      var t,
                        a,
                        A,
                        i,
                        c,
                        s = {},
                        l = r.dataTypes.slice();
                      if (l[1])
                        for (A in r.converters)
                          s[A.toLowerCase()] = r.converters[A];
                      for (a = l.shift(); a; )
                        if (
                          (r.responseFields[a] && (n[r.responseFields[a]] = e),
                          !c &&
                            o &&
                            r.dataFilter &&
                            (e = r.dataFilter(e, r.dataType)),
                          (c = a),
                          (a = l.shift()))
                        )
                          if ('*' === a) a = c;
                          else if ('*' !== c && c !== a) {
                            if (!(A = s[c + ' ' + a] || s['* ' + a]))
                              for (t in s)
                                if (
                                  (i = t.split(' '))[1] === a &&
                                  (A = s[c + ' ' + i[0]] || s['* ' + i[0]])
                                ) {
                                  !0 === A
                                    ? (A = s[t])
                                    : !0 !== s[t] &&
                                      ((a = i[0]), l.unshift(i[1]));
                                  break;
                                }
                            if (!0 !== A)
                              if (A && r.throws) e = A(e);
                              else
                                try {
                                  e = A(e);
                                } catch (r) {
                                  return {
                                    state: 'parsererror',
                                    error: A
                                      ? r
                                      : 'No conversion from ' + c + ' to ' + a,
                                  };
                                }
                          }
                      return {state: 'success', data: e};
                    })(u, h, B, g)),
                    g
                      ? (u.ifModified &&
                          ((x = B.getResponseHeader('Last-Modified')) &&
                            (w.lastModified[t] = x),
                          (x = B.getResponseHeader('etag')) && (w.etag[t] = x)),
                        204 === r || 'HEAD' === u.type
                          ? (y = 'nocontent')
                          : 304 === r
                          ? (y = 'notmodified')
                          : ((y = h.state), (C = h.data), (g = !(v = h.error))))
                      : ((v = y),
                        (!r && y) || ((y = 'error'), r < 0 && (r = 0))),
                    (B.status = r),
                    (B.statusText = (e || y) + ''),
                    g
                      ? m.resolveWith(d, [C, y, B])
                      : m.rejectWith(d, [B, y, v]),
                    B.statusCode(f),
                    (f = void 0),
                    l &&
                      p.trigger(g ? 'ajaxSuccess' : 'ajaxError', [
                        B,
                        u,
                        g ? C : v,
                      ]),
                    b.fireWith(d, [B, y]),
                    l &&
                      (p.trigger('ajaxComplete', [B, u]),
                      --w.active || w.event.trigger('ajaxStop')));
                }
                return B;
              },
              getJSON: function (r, e, n) {
                return w.get(r, e, n, 'json');
              },
              getScript: function (r, e) {
                return w.get(r, void 0, e, 'script');
              },
            }),
            w.each(['get', 'post'], function (r, e) {
              w[e] = function (r, n, o, t) {
                return (
                  b(n) && ((t = t || o), (o = n), (n = void 0)),
                  w.ajax(
                    w.extend(
                      {url: r, type: e, dataType: t, data: n, success: o},
                      w.isPlainObject(r) && r
                    )
                  )
                );
              };
            }),
            w.ajaxPrefilter(function (r) {
              var e;
              for (e in r.headers)
                'content-type' === e.toLowerCase() &&
                  (r.contentType = r.headers[e] || '');
            }),
            (w._evalUrl = function (r, e, n) {
              return w.ajax({
                url: r,
                type: 'GET',
                dataType: 'script',
                cache: !0,
                async: !1,
                global: !1,
                converters: {'text script': function () {}},
                dataFilter: function (r) {
                  w.globalEval(r, e, n);
                },
              });
            }),
            w.fn.extend({
              wrapAll: function (r) {
                var e;
                return (
                  this[0] &&
                    (b(r) && (r = r.call(this[0])),
                    (e = w(r, this[0].ownerDocument).eq(0).clone(!0)),
                    this[0].parentNode && e.insertBefore(this[0]),
                    e
                      .map(function () {
                        for (var r = this; r.firstElementChild; )
                          r = r.firstElementChild;
                        return r;
                      })
                      .append(this)),
                  this
                );
              },
              wrapInner: function (r) {
                return b(r)
                  ? this.each(function (e) {
                      w(this).wrapInner(r.call(this, e));
                    })
                  : this.each(function () {
                      var e = w(this),
                        n = e.contents();
                      n.length ? n.wrapAll(r) : e.append(r);
                    });
              },
              wrap: function (r) {
                var e = b(r);
                return this.each(function (n) {
                  w(this).wrapAll(e ? r.call(this, n) : r);
                });
              },
              unwrap: function (r) {
                return (
                  this.parent(r)
                    .not('body')
                    .each(function () {
                      w(this).replaceWith(this.childNodes);
                    }),
                  this
                );
              },
            }),
            (w.expr.pseudos.hidden = function (r) {
              return !w.expr.pseudos.visible(r);
            }),
            (w.expr.pseudos.visible = function (r) {
              return !!(
                r.offsetWidth ||
                r.offsetHeight ||
                r.getClientRects().length
              );
            }),
            (w.ajaxSettings.xhr = function () {
              try {
                return new o.XMLHttpRequest();
              } catch (r) {}
            });
          var Qe = {0: 200, 1223: 204},
            Ue = w.ajaxSettings.xhr();
          (m.cors = !!Ue && 'withCredentials' in Ue),
            (m.ajax = Ue = !!Ue),
            w.ajaxTransport(function (r) {
              var e, n;
              if (m.cors || (Ue && !r.crossDomain))
                return {
                  send: function (t, a) {
                    var A,
                      i = r.xhr();
                    if (
                      (i.open(r.type, r.url, r.async, r.username, r.password),
                      r.xhrFields)
                    )
                      for (A in r.xhrFields) i[A] = r.xhrFields[A];
                    for (A in (r.mimeType &&
                      i.overrideMimeType &&
                      i.overrideMimeType(r.mimeType),
                    r.crossDomain ||
                      t['X-Requested-With'] ||
                      (t['X-Requested-With'] = 'XMLHttpRequest'),
                    t))
                      i.setRequestHeader(A, t[A]);
                    (e = function (r) {
                      return function () {
                        e &&
                          ((e =
                            n =
                            i.onload =
                            i.onerror =
                            i.onabort =
                            i.ontimeout =
                            i.onreadystatechange =
                              null),
                          'abort' === r
                            ? i.abort()
                            : 'error' === r
                            ? 'number' != typeof i.status
                              ? a(0, 'error')
                              : a(i.status, i.statusText)
                            : a(
                                Qe[i.status] || i.status,
                                i.statusText,
                                'text' !== (i.responseType || 'text') ||
                                  'string' != typeof i.responseText
                                  ? {binary: i.response}
                                  : {text: i.responseText},
                                i.getAllResponseHeaders()
                              ));
                      };
                    }),
                      (i.onload = e()),
                      (n = i.onerror = i.ontimeout = e('error')),
                      void 0 !== i.onabort
                        ? (i.onabort = n)
                        : (i.onreadystatechange = function () {
                            4 === i.readyState &&
                              o.setTimeout(function () {
                                e && n();
                              });
                          }),
                      (e = e('abort'));
                    try {
                      i.send((r.hasContent && r.data) || null);
                    } catch (r) {
                      if (e) throw r;
                    }
                  },
                  abort: function () {
                    e && e();
                  },
                };
            }),
            w.ajaxPrefilter(function (r) {
              r.crossDomain && (r.contents.script = !1);
            }),
            w.ajaxSetup({
              accepts: {
                script:
                  'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript',
              },
              contents: {script: /\b(?:java|ecma)script\b/},
              converters: {
                'text script': function (r) {
                  return w.globalEval(r), r;
                },
              },
            }),
            w.ajaxPrefilter('script', function (r) {
              void 0 === r.cache && (r.cache = !1),
                r.crossDomain && (r.type = 'GET');
            }),
            w.ajaxTransport('script', function (r) {
              var e, n;
              if (r.crossDomain || r.scriptAttrs)
                return {
                  send: function (o, t) {
                    (e = w('<script>')
                      .attr(r.scriptAttrs || {})
                      .prop({charset: r.scriptCharset, src: r.url})
                      .on(
                        'load error',
                        (n = function (r) {
                          e.remove(),
                            (n = null),
                            r && t('error' === r.type ? 404 : 200, r.type);
                        })
                      )),
                      v.head.appendChild(e[0]);
                  },
                  abort: function () {
                    n && n();
                  },
                };
            });
          var We,
            Ye = [],
            _e = /(=)\?(?=&|$)|\?\?/;
          w.ajaxSetup({
            jsonp: 'callback',
            jsonpCallback: function () {
              var r = Ye.pop() || w.expando + '_' + we.guid++;
              return (this[r] = !0), r;
            },
          }),
            w.ajaxPrefilter('json jsonp', function (r, e, n) {
              var t,
                a,
                A,
                i =
                  !1 !== r.jsonp &&
                  (_e.test(r.url)
                    ? 'url'
                    : 'string' == typeof r.data &&
                      0 ===
                        (r.contentType || '').indexOf(
                          'application/x-www-form-urlencoded'
                        ) &&
                      _e.test(r.data) &&
                      'data');
              if (i || 'jsonp' === r.dataTypes[0])
                return (
                  (t = r.jsonpCallback =
                    b(r.jsonpCallback) ? r.jsonpCallback() : r.jsonpCallback),
                  i
                    ? (r[i] = r[i].replace(_e, '$1' + t))
                    : !1 !== r.jsonp &&
                      (r.url +=
                        (ke.test(r.url) ? '&' : '?') + r.jsonp + '=' + t),
                  (r.converters['script json'] = function () {
                    return A || w.error(t + ' was not called'), A[0];
                  }),
                  (r.dataTypes[0] = 'json'),
                  (a = o[t]),
                  (o[t] = function () {
                    A = arguments;
                  }),
                  n.always(function () {
                    void 0 === a ? w(o).removeProp(t) : (o[t] = a),
                      r[t] && ((r.jsonpCallback = e.jsonpCallback), Ye.push(t)),
                      A && b(a) && a(A[0]),
                      (A = a = void 0);
                  }),
                  'script'
                );
            }),
            (m.createHTMLDocument =
              (((We = v.implementation.createHTMLDocument('').body).innerHTML =
                '<form></form><form></form>'),
              2 === We.childNodes.length)),
            (w.parseHTML = function (r, e, n) {
              return 'string' != typeof r
                ? []
                : ('boolean' == typeof e && ((n = e), (e = !1)),
                  e ||
                    (m.createHTMLDocument
                      ? (((o = (e =
                          v.implementation.createHTMLDocument(
                            ''
                          )).createElement('base')).href = v.location.href),
                        e.head.appendChild(o))
                      : (e = v)),
                  (a = !n && []),
                  (t = I.exec(r))
                    ? [e.createElement(t[1])]
                    : ((t = Br([r], e, a)),
                      a && a.length && w(a).remove(),
                      w.merge([], t.childNodes)));
              var o, t, a;
            }),
            (w.fn.load = function (r, e, n) {
              var o,
                t,
                a,
                A = this,
                i = r.indexOf(' ');
              return (
                i > -1 && ((o = be(r.slice(i))), (r = r.slice(0, i))),
                b(e)
                  ? ((n = e), (e = void 0))
                  : e && 'object' == typeof e && (t = 'POST'),
                A.length > 0 &&
                  w
                    .ajax({url: r, type: t || 'GET', dataType: 'html', data: e})
                    .done(function (r) {
                      (a = arguments),
                        A.html(
                          o ? w('<div>').append(w.parseHTML(r)).find(o) : r
                        );
                    })
                    .always(
                      n &&
                        function (r, e) {
                          A.each(function () {
                            n.apply(this, a || [r.responseText, e, r]);
                          });
                        }
                    ),
                this
              );
            }),
            (w.expr.pseudos.animated = function (r) {
              return w.grep(w.timers, function (e) {
                return r === e.elem;
              }).length;
            }),
            (w.offset = {
              setOffset: function (r, e, n) {
                var o,
                  t,
                  a,
                  A,
                  i,
                  c,
                  s = w.css(r, 'position'),
                  l = w(r),
                  g = {};
                'static' === s && (r.style.position = 'relative'),
                  (i = l.offset()),
                  (a = w.css(r, 'top')),
                  (c = w.css(r, 'left')),
                  ('absolute' === s || 'fixed' === s) &&
                  (a + c).indexOf('auto') > -1
                    ? ((A = (o = l.position()).top), (t = o.left))
                    : ((A = parseFloat(a) || 0), (t = parseFloat(c) || 0)),
                  b(e) && (e = e.call(r, n, w.extend({}, i))),
                  null != e.top && (g.top = e.top - i.top + A),
                  null != e.left && (g.left = e.left - i.left + t),
                  'using' in e ? e.using.call(r, g) : l.css(g);
              },
            }),
            w.fn.extend({
              offset: function (r) {
                if (arguments.length)
                  return void 0 === r
                    ? this
                    : this.each(function (e) {
                        w.offset.setOffset(this, r, e);
                      });
                var e,
                  n,
                  o = this[0];
                return o
                  ? o.getClientRects().length
                    ? ((e = o.getBoundingClientRect()),
                      (n = o.ownerDocument.defaultView),
                      {
                        top: e.top + n.pageYOffset,
                        left: e.left + n.pageXOffset,
                      })
                    : {top: 0, left: 0}
                  : void 0;
              },
              position: function () {
                if (this[0]) {
                  var r,
                    e,
                    n,
                    o = this[0],
                    t = {top: 0, left: 0};
                  if ('fixed' === w.css(o, 'position'))
                    e = o.getBoundingClientRect();
                  else {
                    for (
                      e = this.offset(),
                        n = o.ownerDocument,
                        r = o.offsetParent || n.documentElement;
                      r &&
                      (r === n.body || r === n.documentElement) &&
                      'static' === w.css(r, 'position');

                    )
                      r = r.parentNode;
                    r &&
                      r !== o &&
                      1 === r.nodeType &&
                      (((t = w(r).offset()).top += w.css(
                        r,
                        'borderTopWidth',
                        !0
                      )),
                      (t.left += w.css(r, 'borderLeftWidth', !0)));
                  }
                  return {
                    top: e.top - t.top - w.css(o, 'marginTop', !0),
                    left: e.left - t.left - w.css(o, 'marginLeft', !0),
                  };
                }
              },
              offsetParent: function () {
                return this.map(function () {
                  for (
                    var r = this.offsetParent;
                    r && 'static' === w.css(r, 'position');

                  )
                    r = r.offsetParent;
                  return r || Ar;
                });
              },
            }),
            w.each(
              {scrollLeft: 'pageXOffset', scrollTop: 'pageYOffset'},
              function (r, e) {
                var n = 'pageYOffset' === e;
                w.fn[r] = function (o) {
                  return U(
                    this,
                    function (r, o, t) {
                      var a;
                      if (
                        (f(r)
                          ? (a = r)
                          : 9 === r.nodeType && (a = r.defaultView),
                        void 0 === t)
                      )
                        return a ? a[e] : r[o];
                      a
                        ? a.scrollTo(
                            n ? a.pageXOffset : t,
                            n ? t : a.pageYOffset
                          )
                        : (r[o] = t);
                    },
                    r,
                    o,
                    arguments.length
                  );
                };
              }
            ),
            w.each(['top', 'left'], function (r, e) {
              w.cssHooks[e] = Ur(m.pixelPosition, function (r, n) {
                if (n)
                  return (
                    (n = Qr(r, e)), Tr.test(n) ? w(r).position()[e] + 'px' : n
                  );
              });
            }),
            w.each({Height: 'height', Width: 'width'}, function (r, e) {
              w.each(
                {padding: 'inner' + r, content: e, '': 'outer' + r},
                function (n, o) {
                  w.fn[o] = function (t, a) {
                    var A = arguments.length && (n || 'boolean' != typeof t),
                      i = n || (!0 === t || !0 === a ? 'margin' : 'border');
                    return U(
                      this,
                      function (e, n, t) {
                        var a;
                        return f(e)
                          ? 0 === o.indexOf('outer')
                            ? e['inner' + r]
                            : e.document.documentElement['client' + r]
                          : 9 === e.nodeType
                          ? ((a = e.documentElement),
                            Math.max(
                              e.body['scroll' + r],
                              a['scroll' + r],
                              e.body['offset' + r],
                              a['offset' + r],
                              a['client' + r]
                            ))
                          : void 0 === t
                          ? w.css(e, n, i)
                          : w.style(e, n, t, i);
                      },
                      e,
                      A ? t : void 0,
                      A
                    );
                  };
                }
              );
            }),
            w.each(
              [
                'ajaxStart',
                'ajaxStop',
                'ajaxComplete',
                'ajaxError',
                'ajaxSuccess',
                'ajaxSend',
              ],
              function (r, e) {
                w.fn[e] = function (r) {
                  return this.on(e, r);
                };
              }
            ),
            w.fn.extend({
              bind: function (r, e, n) {
                return this.on(r, null, e, n);
              },
              unbind: function (r, e) {
                return this.off(r, null, e);
              },
              delegate: function (r, e, n, o) {
                return this.on(e, r, n, o);
              },
              undelegate: function (r, e, n) {
                return 1 === arguments.length
                  ? this.off(r, '**')
                  : this.off(e, r || '**', n);
              },
              hover: function (r, e) {
                return this.mouseenter(r).mouseleave(e || r);
              },
            }),
            w.each(
              'blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu'.split(
                ' '
              ),
              function (r, e) {
                w.fn[e] = function (r, n) {
                  return arguments.length > 0
                    ? this.on(e, null, r, n)
                    : this.trigger(e);
                };
              }
            );
          var Re = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
          (w.proxy = function (r, e) {
            var n, o, t;
            if (('string' == typeof e && ((n = r[e]), (e = r), (r = n)), b(r)))
              return (
                (o = i.call(arguments, 2)),
                (t = function () {
                  return r.apply(e || this, o.concat(i.call(arguments)));
                }),
                (t.guid = r.guid = r.guid || w.guid++),
                t
              );
          }),
            (w.holdReady = function (r) {
              r ? w.readyWait++ : w.ready(!0);
            }),
            (w.isArray = Array.isArray),
            (w.parseJSON = JSON.parse),
            (w.nodeName = F),
            (w.isFunction = b),
            (w.isWindow = f),
            (w.camelCase = R),
            (w.type = y),
            (w.now = Date.now),
            (w.isNumeric = function (r) {
              var e = w.type(r);
              return (
                ('number' === e || 'string' === e) && !isNaN(r - parseFloat(r))
              );
            }),
            (w.trim = function (r) {
              return null == r ? '' : (r + '').replace(Re, '');
            }),
            void 0 ===
              (n = function () {
                return w;
              }.apply(e, [])) || (r.exports = n);
          var Xe = o.jQuery,
            Ke = o.$;
          return (
            (w.noConflict = function (r) {
              return (
                o.$ === w && (o.$ = Ke),
                r && o.jQuery === w && (o.jQuery = Xe),
                w
              );
            }),
            void 0 === t && (o.jQuery = o.$ = w),
            w
          );
        });
      },
      379: r => {
        'use strict';
        var e = [];
        function n(r) {
          for (var n = -1, o = 0; o < e.length; o++)
            if (e[o].identifier === r) {
              n = o;
              break;
            }
          return n;
        }
        function o(r, o) {
          for (var a = {}, A = [], i = 0; i < r.length; i++) {
            var c = r[i],
              s = o.base ? c[0] + o.base : c[0],
              l = a[s] || 0,
              g = ''.concat(s, ' ').concat(l);
            a[s] = l + 1;
            var C = n(g),
              u = {
                css: c[1],
                media: c[2],
                sourceMap: c[3],
                supports: c[4],
                layer: c[5],
              };
            if (-1 !== C) e[C].references++, e[C].updater(u);
            else {
              var d = t(u, o);
              (o.byIndex = i),
                e.splice(i, 0, {identifier: g, updater: d, references: 1});
            }
            A.push(g);
          }
          return A;
        }
        function t(r, e) {
          var n = e.domAPI(e);
          return (
            n.update(r),
            function (e) {
              if (e) {
                if (
                  e.css === r.css &&
                  e.media === r.media &&
                  e.sourceMap === r.sourceMap &&
                  e.supports === r.supports &&
                  e.layer === r.layer
                )
                  return;
                n.update((r = e));
              } else n.remove();
            }
          );
        }
        r.exports = function (r, t) {
          var a = o((r = r || []), (t = t || {}));
          return function (r) {
            r = r || [];
            for (var A = 0; A < a.length; A++) {
              var i = n(a[A]);
              e[i].references--;
            }
            for (var c = o(r, t), s = 0; s < a.length; s++) {
              var l = n(a[s]);
              0 === e[l].references && (e[l].updater(), e.splice(l, 1));
            }
            a = c;
          };
        };
      },
      569: r => {
        'use strict';
        var e = {};
        r.exports = function (r, n) {
          var o = (function (r) {
            if (void 0 === e[r]) {
              var n = document.querySelector(r);
              if (
                window.HTMLIFrameElement &&
                n instanceof window.HTMLIFrameElement
              )
                try {
                  n = n.contentDocument.head;
                } catch (r) {
                  n = null;
                }
              e[r] = n;
            }
            return e[r];
          })(r);
          if (!o)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          o.appendChild(n);
        };
      },
      216: r => {
        'use strict';
        r.exports = function (r) {
          var e = document.createElement('style');
          return r.setAttributes(e, r.attributes), r.insert(e, r.options), e;
        };
      },
      565: (r, e, n) => {
        'use strict';
        r.exports = function (r) {
          var e = n.nc;
          e && r.setAttribute('nonce', e);
        };
      },
      795: r => {
        'use strict';
        r.exports = function (r) {
          var e = r.insertStyleElement(r);
          return {
            update: function (n) {
              !(function (r, e, n) {
                var o = '';
                n.supports && (o += '@supports ('.concat(n.supports, ') {')),
                  n.media && (o += '@media '.concat(n.media, ' {'));
                var t = void 0 !== n.layer;
                t &&
                  (o += '@layer'.concat(
                    n.layer.length > 0 ? ' '.concat(n.layer) : '',
                    ' {'
                  )),
                  (o += n.css),
                  t && (o += '}'),
                  n.media && (o += '}'),
                  n.supports && (o += '}');
                var a = n.sourceMap;
                a &&
                  'undefined' != typeof btoa &&
                  (o +=
                    '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
                      ' */'
                    )),
                  e.styleTagTransform(o, r, e.options);
              })(e, r, n);
            },
            remove: function () {
              !(function (r) {
                if (null === r.parentNode) return !1;
                r.parentNode.removeChild(r);
              })(e);
            },
          };
        };
      },
      589: r => {
        'use strict';
        r.exports = function (r, e) {
          if (e.styleSheet) e.styleSheet.cssText = r;
          else {
            for (; e.firstChild; ) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(r));
          }
        };
      },
      494: r => {
        'use strict';
        r.exports =
          'data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2716%27 height=%274%27 viewBox=%270 0 16 4%27%3E%3Cpath d=%27M0,3.5c4,0,4-3,8-3s4,3,8,3%27 fill=%27none%27 stroke=%27%232a6df4%27 opacity=%270.5%27 stroke-miterlimit=%2710%27/%3E%3C/svg%3E';
      },
      297: (r, e, n) => {
        'use strict';
        r.exports = n.p + '4c0096b05db1d36d3ce1.png';
      },
      503: (r, e, n) => {
        'use strict';
        r.exports = n.p + 'e06b24f3248a95414257.png';
      },
      458: (r, e, n) => {
        'use strict';
        r.exports = n.p + '872063769fce667ea7d9.png';
      },
    },
    e = {};
  function n(o) {
    var t = e[o];
    if (void 0 !== t) return t.exports;
    var a = (e[o] = {id: o, exports: {}});
    return r[o].call(a.exports, a, a.exports, n), a.exports;
  }
  (n.m = r),
    (n.n = r => {
      var e = r && r.__esModule ? () => r.default : () => r;
      return n.d(e, {a: e}), e;
    }),
    (n.d = (r, e) => {
      for (var o in e)
        n.o(e, o) &&
          !n.o(r, o) &&
          Object.defineProperty(r, o, {enumerable: !0, get: e[o]});
    }),
    (n.g = (function () {
      if ('object' == typeof globalThis) return globalThis;
      try {
        return this || new Function('return this')();
      } catch (r) {
        if ('object' == typeof window) return window;
      }
    })()),
    (n.o = (r, e) => Object.prototype.hasOwnProperty.call(r, e)),
    (() => {
      var r;
      n.g.importScripts && (r = n.g.location + '');
      var e = n.g.document;
      if (!r && e && (e.currentScript && (r = e.currentScript.src), !r)) {
        var o = e.getElementsByTagName('script');
        o.length && (r = o[o.length - 1].src);
      }
      if (!r)
        throw new Error(
          'Automatic publicPath is not supported in this browser'
        );
      (r = r
        .replace(/#.*$/, '')
        .replace(/\?.*$/, '')
        .replace(/\/[^\/]+$/, '/')),
        (n.p = r);
    })(),
    (n.b = document.baseURI || self.location.href),
    (() => {
      'use strict';
      var r = n(755),
        e = n.n(r);
      function o(r, e) {
        return '\n<div class="pill bg-contrast-800 max-w-sm container relative mb-md">\n  <div class="number absolute left-md text-primary-800">\n    '
          .concat(
            e + 1,
            '\n  </div>\n  <div class="player-icon"></div>\n  <div class="player-name text-contrast-200">'
          )
          .concat(
            r.name,
            '</div>\n  <div class="player-score text-primary-500 font-bold">'
          )
          .concat(r.score, '</div>\n</div>\n');
      }
      function t(r) {
        return (
          (function (r) {
            if (Array.isArray(r)) return a(r);
          })(r) ||
          (function (r) {
            if (
              ('undefined' != typeof Symbol && null != r[Symbol.iterator]) ||
              null != r['@@iterator']
            )
              return Array.from(r);
          })(r) ||
          (function (r, e) {
            if (r) {
              if ('string' == typeof r) return a(r, e);
              var n = Object.prototype.toString.call(r).slice(8, -1);
              return (
                'Object' === n && r.constructor && (n = r.constructor.name),
                'Map' === n || 'Set' === n
                  ? Array.from(r)
                  : 'Arguments' === n ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                  ? a(r, e)
                  : void 0
              );
            }
          })(r) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function a(r, e) {
        (null == e || e > r.length) && (e = r.length);
        for (var n = 0, o = new Array(e); n < e; n++) o[n] = r[n];
        return o;
      }
      function A(r, e) {
        return function n() {
          for (var o = arguments.length, a = new Array(o), A = 0; A < o; A++)
            a[A] = arguments[A];
          return a.length >= r
            ? e.apply(void 0, a)
            : function () {
                for (
                  var r = arguments.length, e = new Array(r), o = 0;
                  o < r;
                  o++
                )
                  e[o] = arguments[o];
                return n.apply(void 0, t(a.concat(e)));
              };
        };
      }
      function i(r) {
        return A(r.length, r);
      }
      function c() {
        for (var r = arguments.length, e = new Array(r), n = 0; n < r; n++)
          e[n] = arguments[n];
        return function (r) {
          return e.reduce(function (r, e) {
            return e(r);
          }, r);
        };
      }
      var s = A(2, function (r) {
        for (
          var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), o = 1;
          o < e;
          o++
        )
          n[o - 1] = arguments[o];
        return c.apply(void 0, n)(r);
      });
      function l(r, e) {
        return Math.floor(Math.random() * (e - r + 1) + r);
      }
      function g(r) {
        return void 0 !== r;
      }
      function C() {
        var r =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : new Map();
        return {
          events: r,
          on: function (e, n) {
            var o = r.get(e);
            g(o) ? o.push(n) : r.set(e, [n]);
          },
          off: function (e) {
            var n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : void 0,
              o = r.get(e);
            o && n ? o.splice(o.indexOf(n) >>> 0, 1) : r.set(e, []);
          },
          emit: function (e) {
            var n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : void 0,
              o = r.get(e);
            g(o) &&
              o.slice().map(function (r) {
                return r(n);
              });
          },
          clear: function () {
            r.clear();
          },
        };
      }
      var u = C(),
        d = C(),
        p = 0;
      function m(r, e) {
        (null == e || e > r.length) && (e = r.length);
        for (var n = 0, o = new Array(e); n < e; n++) o[n] = r[n];
        return o;
      }
      function b() {
        var r;
        return null !== (r = JSON.parse(localStorage.getItem('leaderboard'))) &&
          void 0 !== r
          ? r
          : [];
      }
      function f(r) {
        localStorage.setItem('leaderboard', JSON.stringify(r));
      }
      function v(r) {
        var e = r.entities.player,
          n = b();
        n || f([]);
        var o = (function (r, e) {
          var n,
            o,
            t =
              null !==
                (n =
                  null ===
                    (o = r.filter(function (r) {
                      return r.name === e.info;
                    })[0]) || void 0 === o
                    ? void 0
                    : o.score) && void 0 !== n
                ? n
                : -1;
          return (
            p > t &&
            (r.some(function (r) {
              return p > r.score;
            }) ||
              10 != r.length)
          );
        })(n, e);
        if (!o) return !1;
        var t,
          a = {name: e.info, score: p};
        return (
          f(
            []
              .concat(
                ((t = n.filter(function (r) {
                  return r.name !== e.info;
                })),
                (function (r) {
                  if (Array.isArray(r)) return m(r);
                })(t) ||
                  (function (r) {
                    if (
                      ('undefined' != typeof Symbol &&
                        null != r[Symbol.iterator]) ||
                      null != r['@@iterator']
                    )
                      return Array.from(r);
                  })(t) ||
                  (function (r, e) {
                    if (r) {
                      if ('string' == typeof r) return m(r, e);
                      var n = Object.prototype.toString.call(r).slice(8, -1);
                      return (
                        'Object' === n &&
                          r.constructor &&
                          (n = r.constructor.name),
                        'Map' === n || 'Set' === n
                          ? Array.from(r)
                          : 'Arguments' === n ||
                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                          ? m(r, e)
                          : void 0
                      );
                    }
                  })(t) ||
                  (function () {
                    throw new TypeError(
                      'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                    );
                  })()),
                [a]
              )
              .sort(function (r, e) {
                return r.score - e.score;
              })
              .reverse()
              .slice(0, 10)
          ),
          !0
        );
      }
      function h() {
        e()('#start').on('click', function () {
          d.emit('modalstart');
        });
      }
      function x() {
        e()('#close').on('click', function () {
          d.emit('modalclose');
        });
      }
      function y(r, e) {
        return (
          (function (r) {
            if (Array.isArray(r)) return r;
          })(r) ||
          (function (r, e) {
            var n =
              null == r
                ? null
                : ('undefined' != typeof Symbol && r[Symbol.iterator]) ||
                  r['@@iterator'];
            if (null != n) {
              var o,
                t,
                a = [],
                A = !0,
                i = !1;
              try {
                for (
                  n = n.call(r);
                  !(A = (o = n.next()).done) &&
                  (a.push(o.value), !e || a.length !== e);
                  A = !0
                );
              } catch (r) {
                (i = !0), (t = r);
              } finally {
                try {
                  A || null == n.return || n.return();
                } finally {
                  if (i) throw t;
                }
              }
              return a;
            }
          })(r, e) ||
          (function (r, e) {
            if (r) {
              if ('string' == typeof r) return B(r, e);
              var n = Object.prototype.toString.call(r).slice(8, -1);
              return (
                'Object' === n && r.constructor && (n = r.constructor.name),
                'Map' === n || 'Set' === n
                  ? Array.from(r)
                  : 'Arguments' === n ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                  ? B(r, e)
                  : void 0
              );
            }
          })(r, e) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function B(r, e) {
        (null == e || e > r.length) && (e = r.length);
        for (var n = 0, o = new Array(e); n < e; n++) o[n] = r[n];
        return o;
      }
      function w(r, e) {
        return [r, e];
      }
      var k = w(0, 0),
        E = w(0, 1),
        D = w(0, -1),
        G = w(-1, 0),
        L = w(1, 0);
      function F(r, e) {
        var n = y(r, 2);
        return w(e * n[0], e * n[1]);
      }
      function I() {
        for (var r = arguments.length, e = new Array(r), n = 0; n < r; n++)
          e[n] = arguments[n];
        return e.reduce(function (r, e) {
          var n = y(r, 2),
            o = n[0],
            t = n[1],
            a = y(e, 2);
          return w(o + a[0], t + a[1]);
        }, w(0, 0));
      }
      function S() {
        for (var r = arguments.length, e = new Array(r), n = 0; n < r; n++)
          e[n] = arguments[n];
        return e.reduce(function (r, e) {
          var n = y(r, 2),
            o = n[0],
            t = n[1],
            a = y(e, 2);
          return w(o * a[0], t * a[1]);
        }, w(1, 1));
      }
      const M = {
        vector: w,
        zero: k,
        left: G,
        right: L,
        up: E,
        down: D,
        scale: F,
        add: I,
        sub: function () {
          for (var r = arguments.length, e = new Array(r), n = 0; n < r; n++)
            e[n] = arguments[n];
          return e.reduce(function (r, e) {
            var n = y(r, 2),
              o = n[0],
              t = n[1],
              a = y(e, 2);
            return w(o - a[0], t - a[1]);
          });
        },
      };
      function H(r, e) {
        (null == e || e > r.length) && (e = r.length);
        for (var n = 0, o = new Array(e); n < e; n++) o[n] = r[n];
        return o;
      }
      var P = function (r, n) {
        var o =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 330;
        if (!(0.3 * window.scrollY >= o)) {
          var t = e()(document.documentElement),
            a = ''.concat(window.scrollY * n, 'px');
          t.get(0).style.setProperty(r, a);
        }
      };
      function O() {
        e()(window).on(
          'mousemove',
          ('.parallax',
          function (r) {
            var n,
              o,
              t = e()('.parallax'),
              a = innerWidth / 2,
              A = innerWidth / 2,
              i =
                ((n = w(r.clientX, r.clientY)),
                (o = 2),
                (function (r) {
                  if (Array.isArray(r)) return r;
                })(n) ||
                  (function (r, e) {
                    var n =
                      null == r
                        ? null
                        : ('undefined' != typeof Symbol &&
                            r[Symbol.iterator]) ||
                          r['@@iterator'];
                    if (null != n) {
                      var o,
                        t,
                        a = [],
                        A = !0,
                        i = !1;
                      try {
                        for (
                          n = n.call(r);
                          !(A = (o = n.next()).done) &&
                          (a.push(o.value), !e || a.length !== e);
                          A = !0
                        );
                      } catch (r) {
                        (i = !0), (t = r);
                      } finally {
                        try {
                          A || null == n.return || n.return();
                        } finally {
                          if (i) throw t;
                        }
                      }
                      return a;
                    }
                  })(n, o) ||
                  (function (r, e) {
                    if (r) {
                      if ('string' == typeof r) return H(r, e);
                      var n = Object.prototype.toString.call(r).slice(8, -1);
                      return (
                        'Object' === n &&
                          r.constructor &&
                          (n = r.constructor.name),
                        'Map' === n || 'Set' === n
                          ? Array.from(r)
                          : 'Arguments' === n ||
                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                          ? H(r, e)
                          : void 0
                      );
                    }
                  })(n, o) ||
                  (function () {
                    throw new TypeError(
                      'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                    );
                  })()),
              c = i[0],
              s = i[1],
              l = ''
                .concat(50 - 0.01 * (c - a), '% ')
                .concat(50 - 0.01 * (s - A), '%');
            t.css({backgroundPosition: l});
          })
        ),
          e()(window).on('scroll', function () {
            P('--scroll-y', -0.4), P('--scroll-y-slow', -0.2);
          });
      }
      var j = e()('#app');
      function N(r, e, n, o) {
        return (r /= o / 2) < 1
          ? (n / 2) * r * r + e
          : (-n / 2) * (--r * (r - 2) - 1) + e;
      }
      function $(r, e) {
        var n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : void 0,
          o = window.scrollY || document.documentElement.scrollTop,
          t = null,
          a = function a(A) {
            t || (t = A);
            var i = A - t;
            i > e && (i = e);
            var c = N(i, o, r - o, e);
            window.scrollTo(0, c), i < e ? requestAnimationFrame(a) : n && n();
          };
        requestAnimationFrame(a);
      }
      function T() {
        j.removeClass('game');
        var r,
          n,
          t,
          a,
          A,
          i,
          c =
            ((n = b()),
            (t = e()(
              '\n<section class="hero max-w-xl container grid">\n  <div class="hero__titre fade">\n    <h1 class="text-4xl mt-xl@sm mt-md">ctf{s3cr3t-35st3r-3gg}</h1>\n    <p class="mt-md mb-lg">\n  Le but du jeu est de collecter le\n      plus de jetons possible en\n      <mark>90 secondes</mark>. Bouger la souris pour voir un effet parallaxe. Créé par\n      Ovior.\n    </p>\n    <button class="link-fx-4 px-md pointer mb-lg" id="play">Jouer une partie</button>\n  </div>\n  <div class="hero__image parallax anim" role="img" id="hero">\n    <div class="curtain parallax"></div>\n    <div class="bars parallax"></div>\n    <div class="player parallax"></div>\n  </div>\n</section>'
            )),
            (a = (function (r) {
              return e()(
                '\n<section class="clip bg-contrast-900">\n  <h2 class="text-contrast-50 pt-xl text-center mb-xs">Classement</h2>\n  <p class="text-contrast-300 text-center mb-2xl">\n    Le classement des '
                  .concat(
                    r.length,
                    ' meilleurs performances pour le jeu de Collecteur\n  </p>\n  '
                  )
                  .concat(
                    0 === r.length
                      ? '\n<p class="text-contrast-500 text-center">\n  Désolé Aucune partie joué pour l\'instant 😞\n</p>\n'
                      : r.map(o).reduce(function (r, e) {
                          return r + e;
                        }),
                    '\n</section>\n'
                  )
              );
            })(n)),
            (A = e()(
              '\n<a href="javascript:void(0)" class="back-top">\n  <svg\n    width="16"\n    height="16"\n    focusable="false"\n    class="back-top-icon"\n    color="#609d4e"\n    xmlns="http://www.w3.org/2000/svg"\n    viewBox="0 0 448 512"\n  >\n    <path\n      fill="currentColor"\n      d="M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z"\n    ></path>\n  </svg>\n</a>\n'
            )),
            t.add(a).add(A));
        j.html(c),
          e()('#play').on('click', function () {
            d.emit('modalopen', {
              title: 'Commencer la partie',
              subtitle: 'Essayer de battre votre top-score de Collecteur.',
              button: 'Commencer',
              emoji: '⭐',
            });
          }),
          O(),
          (r = e()('.fade')).css({display: 'none'}),
          r.fadeIn(),
          (i = e()('.anim')).css({left: '300px'}),
          i.animate({left: '0'}),
          (function (r) {
            var n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              o = n.offset,
              t = void 0 === o ? 300 : o,
              a = n.scrollDuration,
              A = void 0 === a ? 700 : a,
              i = e()(r),
              c = !1;
            function s() {
              (window.scrollY || document.documentElement.scrollTop) > t
                ? i.addClass('back-top--visible')
                : i.removeClass('back-top--visible'),
                (c = !1);
            }
            i &&
              (e()(window).on('scroll', function () {
                c || ((c = !0), requestAnimationFrame(s));
              }),
              i.on('click', function (r) {
                r.preventDefault(), $(0, A);
              }));
          })('.back-top');
      }
      var q = n(379),
        J = n.n(q),
        z = n(795),
        Q = n.n(z),
        U = n(569),
        W = n.n(U),
        Y = n(565),
        _ = n.n(Y),
        R = n(216),
        X = n.n(R),
        K = n(589),
        V = n.n(K),
        Z = n(892),
        rr = {};
      function er(r, e) {
        var n = Object.keys(r);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(r);
          e &&
            (o = o.filter(function (e) {
              return Object.getOwnPropertyDescriptor(r, e).enumerable;
            })),
            n.push.apply(n, o);
        }
        return n;
      }
      function nr(r) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? er(Object(n), !0).forEach(function (e) {
                or(r, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(n))
            : er(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  r,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return r;
      }
      function or(r, e, n) {
        return (
          e in r
            ? Object.defineProperty(r, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (r[e] = n),
          r
        );
      }
      function tr(r, e) {
        return function (n) {
          return nr(nr({}, n), {}, {width: r, height: e});
        };
      }
      function ar(r, e) {
        var n = Object.keys(r);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(r);
          e &&
            (o = o.filter(function (e) {
              return Object.getOwnPropertyDescriptor(r, e).enumerable;
            })),
            n.push.apply(n, o);
        }
        return n;
      }
      function Ar(r) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? ar(Object(n), !0).forEach(function (e) {
                ir(r, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(n))
            : ar(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  r,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return r;
      }
      function ir(r, e, n) {
        return (
          e in r
            ? Object.defineProperty(r, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (r[e] = n),
          r
        );
      }
      function cr(r) {
        return g(r.state);
      }
      (rr.styleTagTransform = V()),
        (rr.setAttributes = _()),
        (rr.insert = W().bind(null, 'head')),
        (rr.domAPI = Q()),
        (rr.insertStyleElement = X()),
        J()(Z.Z, rr),
        Z.Z && Z.Z.locals && Z.Z.locals;
      var sr = i(function (r, e, n) {
        return Ar(
          Ar({}, n),
          {},
          {state: e ? r : cr(n) ? n.state : 'stateless'}
        );
      });
      function lr(r) {
        var e = new Image();
        return (e.src = r), e;
      }
      function gr(r, e) {
        var n = Object.keys(r);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(r);
          e &&
            (o = o.filter(function (e) {
              return Object.getOwnPropertyDescriptor(r, e).enumerable;
            })),
            n.push.apply(n, o);
        }
        return n;
      }
      function Cr(r) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? gr(Object(n), !0).forEach(function (e) {
                ur(r, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(n))
            : gr(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  r,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return r;
      }
      function ur(r, e, n) {
        return (
          e in r
            ? Object.defineProperty(r, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (r[e] = n),
          r
        );
      }
      function dr(r) {
        return function (e) {
          if (!cr(e)) throw new Error('Objects is missing the state property');
          var n = r.map(function (r) {
            var e = lr(r.src);
            return Cr(
              Cr({}, r),
              {},
              {
                image: e,
                localSize: S(r.size, r.scale),
                newOffset: S(r.offset, r.scale),
              }
            );
          });
          return Cr(Cr({}, e), {}, {current: 0, animations: n});
        };
      }
      function pr(r) {
        return function (e) {
          var n,
            o =
              null !==
                (n = e.animations.filter(function (r) {
                  return r.state === e.state;
                })[0]) && void 0 !== n
                ? n
                : {};
          return (
            r % o.steps == 0 &&
              (e.current = e.current < o.steps - 1 ? e.current + 1 : 0),
            Cr(
              Cr({}, e),
              {},
              {
                animation: Cr(
                  Cr({}, o),
                  {},
                  {position: I(e.position, o.newOffset)}
                ),
              }
            )
          );
        };
      }
      function mr(r, e) {
        var n;
        r.drawImage(
          e.animation.image,
          e.current * e.animation.size[0],
          null !== (n = e.animation.yoffset) && void 0 !== n ? n : 0,
          e.animation.size[0],
          e.animation.size[1],
          e.animation.position[0],
          e.animation.position[1],
          e.animation.localSize[0],
          e.animation.localSize[1]
        );
      }
      var br = [
        {
          state: 'timer',
          src: 'ui.png',
          steps: 1,
          offset: w(0, 0),
          current: 1,
          size: w(8, 8),
          scale: w(3, 3),
        },
        {
          state: 'coin',
          src: 'ui.png',
          steps: 1,
          offset: w(0, 0),
          current: 1,
          size: w(8, 8),
          scale: w(3, 3),
          yoffset: 8,
        },
      ];
      function fr(r) {
        var e = 0;
        return function n() {
          requestAnimationFrame(n), r(~~e), e++;
        };
      }
      function vr(r) {
        return function (e) {
          r(e);
        };
      }
      function hr(r, e) {
        return (
          (function (r) {
            if (Array.isArray(r)) return r;
          })(r) ||
          (function (r, e) {
            var n =
              null == r
                ? null
                : ('undefined' != typeof Symbol && r[Symbol.iterator]) ||
                  r['@@iterator'];
            if (null != n) {
              var o,
                t,
                a = [],
                A = !0,
                i = !1;
              try {
                for (
                  n = n.call(r);
                  !(A = (o = n.next()).done) &&
                  (a.push(o.value), !e || a.length !== e);
                  A = !0
                );
              } catch (r) {
                (i = !0), (t = r);
              } finally {
                try {
                  A || null == n.return || n.return();
                } finally {
                  if (i) throw t;
                }
              }
              return a;
            }
          })(r, e) ||
          (function (r, e) {
            if (r) {
              if ('string' == typeof r) return xr(r, e);
              var n = Object.prototype.toString.call(r).slice(8, -1);
              return (
                'Object' === n && r.constructor && (n = r.constructor.name),
                'Map' === n || 'Set' === n
                  ? Array.from(r)
                  : 'Arguments' === n ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                  ? xr(r, e)
                  : void 0
              );
            }
          })(r, e) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function xr(r, e) {
        (null == e || e > r.length) && (e = r.length);
        for (var n = 0, o = new Array(e); n < e; n++) o[n] = r[n];
        return o;
      }
      function yr(r, e) {
        var n = Object.keys(r);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(r);
          e &&
            (o = o.filter(function (e) {
              return Object.getOwnPropertyDescriptor(r, e).enumerable;
            })),
            n.push.apply(n, o);
        }
        return n;
      }
      function Br(r) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? yr(Object(n), !0).forEach(function (e) {
                wr(r, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(n))
            : yr(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  r,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return r;
      }
      function wr(r, e, n) {
        return (
          e in r
            ? Object.defineProperty(r, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (r[e] = n),
          r
        );
      }
      function kr(r) {
        return [r.mass, r.position, r.velocity, r.acceleration, r.oldpos].every(
          g
        );
      }
      function Er() {
        var r =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          e = r.mass,
          n = void 0 === e ? 1 : e,
          o = r.velocity,
          t = void 0 === o ? M.zero : o,
          a = r.acceleration,
          A = void 0 === a ? M.zero : a;
        return function () {
          var r =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return Br(Br({}, r), {}, {mass: n, velocity: t, acceleration: A});
        };
      }
      function Dr() {
        var r =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : M.zero,
          e =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : M.zero;
        return function (n) {
          return Br(Br({}, n), {}, {position: r, oldpos: e});
        };
      }
      function Gr() {
        var r =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0.1;
        return function (e) {
          if (!kr(e)) throw new Error('object must have physics properties');
          var n = [e.position, e.velocity, e.acceleration],
            o = hr(n[0], 2),
            t = o[0],
            a = o[1],
            A = hr(n[1], 2),
            i = A[0],
            c = A[1],
            s = hr(n[2], 2),
            l = s[0],
            g = s[1],
            C = w(t, a),
            u = hr(w((i + l) * (1 - r), (c + g) * (1 - r)), 2),
            d = u[0],
            p = u[1];
          return Br(
            Br({}, e),
            {},
            {
              position: w(t + d, a + p),
              velocity: w(d, p),
              acceleration: M.zero,
              oldpos: C,
            }
          );
        };
      }
      var Lr = i(function (r, e) {
        if (!kr(e) || 2 !== r.length)
          throw new Error(
            'the object needs to have the physics properties and force needs to be a vector'
          );
        return Br(
          Br({}, e),
          {},
          {acceleration: I(F(r, e.mass), e.acceleration)}
        );
      });
      function Fr(r) {
        return function (e) {
          if (!kr(e))
            throw new Error('the object must have the physics properties');
          return Lr(w(0, r), e);
        };
      }
      var Ir = 0,
        Sr = vr(function (r) {
          var e = r.game,
            n = r.frames;
          (e.entities.timerUi = s(e.entities.timerUi, pr(~~n))),
            (e.entities.coinUi = s(e.entities.coinUi, pr(~~n)));
        }),
        Mr = (function () {
          var r = {};
          return (
            document.addEventListener('keydown', function (e) {
              var n = e.code;
              return (r[n] = !0);
            }),
            document.addEventListener('keyup', function (e) {
              var n = e.code;
              return delete r[n];
            }),
            r
          );
        })(),
        Hr = function (r) {
          return function (e) {
            return !!Mr[r[e]];
          };
        },
        Pr = {jump: 'Space', left: 'KeyA', right: 'KeyD'},
        Or =
          (Hr(Pr),
          function () {
            return ((r = Pr),
            function (e, n, o) {
              var t = Hr(r),
                a = t(e),
                A = t(n);
              return w(a && A ? 0 : a ? -1 : A ? 1 : 0, t(o) ? -1 : 0);
            })('left', 'right', 'jump');
            var r;
          });
      function jr(r, e) {
        var n = Object.keys(r);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(r);
          e &&
            (o = o.filter(function (e) {
              return Object.getOwnPropertyDescriptor(r, e).enumerable;
            })),
            n.push.apply(n, o);
        }
        return n;
      }
      function Nr(r) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? jr(Object(n), !0).forEach(function (e) {
                $r(r, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(n))
            : jr(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  r,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return r;
      }
      function $r(r, e, n) {
        return (
          e in r
            ? Object.defineProperty(r, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (r[e] = n),
          r
        );
      }
      function Tr(r, e) {
        return (
          (function (r) {
            if (Array.isArray(r)) return r;
          })(r) ||
          (function (r, e) {
            var n =
              null == r
                ? null
                : ('undefined' != typeof Symbol && r[Symbol.iterator]) ||
                  r['@@iterator'];
            if (null != n) {
              var o,
                t,
                a = [],
                A = !0,
                i = !1;
              try {
                for (
                  n = n.call(r);
                  !(A = (o = n.next()).done) &&
                  (a.push(o.value), !e || a.length !== e);
                  A = !0
                );
              } catch (r) {
                (i = !0), (t = r);
              } finally {
                try {
                  A || null == n.return || n.return();
                } finally {
                  if (i) throw t;
                }
              }
              return a;
            }
          })(r, e) ||
          (function (r, e) {
            if (r) {
              if ('string' == typeof r) return qr(r, e);
              var n = Object.prototype.toString.call(r).slice(8, -1);
              return (
                'Object' === n && r.constructor && (n = r.constructor.name),
                'Map' === n || 'Set' === n
                  ? Array.from(r)
                  : 'Arguments' === n ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                  ? qr(r, e)
                  : void 0
              );
            }
          })(r, e) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function qr(r, e) {
        (null == e || e > r.length) && (e = r.length);
        for (var n = 0, o = new Array(e); n < e; n++) o[n] = r[n];
        return o;
      }
      function Jr(r) {
        return [
          r.top,
          r.bottom,
          r.left,
          r.right,
          r.oldtop,
          r.oldbottom,
          r.oldleft,
          r.oldright,
        ].every(g);
      }
      function zr(r) {
        var e = Tr(r.position, 2),
          n = e[0],
          o = e[1],
          t = Tr(r.oldpos, 2),
          a = t[0],
          A = t[1],
          i = r.width,
          c = r.height;
        return Nr(
          Nr({}, r),
          {},
          {
            top: o,
            bottom: o + c,
            left: n,
            right: n + i,
            oldtop: A,
            oldbottom: A + c,
            oldleft: a,
            oldright: a + i,
          }
        );
      }
      function Qr(r, e) {
        var n = Object.keys(r);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(r);
          e &&
            (o = o.filter(function (e) {
              return Object.getOwnPropertyDescriptor(r, e).enumerable;
            })),
            n.push.apply(n, o);
        }
        return n;
      }
      function Ur(r) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? Qr(Object(n), !0).forEach(function (e) {
                Wr(r, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(n))
            : Qr(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  r,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return r;
      }
      function Wr(r, e, n) {
        return (
          e in r
            ? Object.defineProperty(r, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (r[e] = n),
          r
        );
      }
      function Yr(r, e) {
        return (
          (function (r) {
            if (Array.isArray(r)) return r;
          })(r) ||
          (function (r, e) {
            var n =
              null == r
                ? null
                : ('undefined' != typeof Symbol && r[Symbol.iterator]) ||
                  r['@@iterator'];
            if (null != n) {
              var o,
                t,
                a = [],
                A = !0,
                i = !1;
              try {
                for (
                  n = n.call(r);
                  !(A = (o = n.next()).done) &&
                  (a.push(o.value), !e || a.length !== e);
                  A = !0
                );
              } catch (r) {
                (i = !0), (t = r);
              } finally {
                try {
                  A || null == n.return || n.return();
                } finally {
                  if (i) throw t;
                }
              }
              return a;
            }
          })(r, e) ||
          (function (r, e) {
            if (r) {
              if ('string' == typeof r) return _r(r, e);
              var n = Object.prototype.toString.call(r).slice(8, -1);
              return (
                'Object' === n && r.constructor && (n = r.constructor.name),
                'Map' === n || 'Set' === n
                  ? Array.from(r)
                  : 'Arguments' === n ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                  ? _r(r, e)
                  : void 0
              );
            }
          })(r, e) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function _r(r, e) {
        (null == e || e > r.length) && (e = r.length);
        for (var n = 0, o = new Array(e); n < e; n++) o[n] = r[n];
        return o;
      }
      function Rr(r, e) {
        return !(
          r.bottom < e.top ||
          r.top > e.bottom ||
          r.left > e.right ||
          r.right < e.left
        );
      }
      function Xr(r) {
        return function (e) {
          return Rr(e, r) && u.emit('trigger', {collider: r, obj: e}), e;
        };
      }
      function Kr(r) {
        return function (e) {
          if (!Jr(e) || !Jr(r))
            throw new Error('objects must have the rectangle properties');
          if (!Rr(e, r)) return e;
          var n,
            o,
            t = e.width,
            a = e.height,
            A = [e.position, e.velocity, r.velocity],
            i = Yr(A[0], 2),
            c = i[0],
            s = i[1],
            l = Yr(A[1], 2),
            g = l[0],
            C = l[1],
            u = Yr(A[2], 2),
            d = u[0],
            p = u[1];
          return (
            (o = r),
            (n = e).bottom >= o.top && n.oldbottom < o.oldtop
              ? Ur(
                  Ur({}, e),
                  {},
                  {
                    position: w(c, r.top - 0.1 - a),
                    velocity: w(g, p),
                    isGrounded: !0,
                  }
                )
              : (function (r, e) {
                  return r.top <= e.bottom && r.oldtop > e.oldbottom;
                })(e, r)
              ? Ur(
                  Ur({}, e),
                  {},
                  {position: w(c, r.bottom + 0.1), velocity: w(g, p)}
                )
              : (function (r, e) {
                  return r.right >= e.left && r.oldright < e.oldleft;
                })(e, r)
              ? Ur(
                  Ur({}, e),
                  {},
                  {position: w(r.left - 0.1 - t, s), velocity: w(d, C)}
                )
              : (function (r, e) {
                  return r.left <= e.right && r.oldleft > e.oldright;
                })(e, r)
              ? Ur(
                  Ur({}, e),
                  {},
                  {position: w(r.right + 0.1, s), velocity: w(d, C)}
                )
              : e
          );
        };
      }
      function Vr(r, e) {
        var n = Object.keys(r);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(r);
          e &&
            (o = o.filter(function (e) {
              return Object.getOwnPropertyDescriptor(r, e).enumerable;
            })),
            n.push.apply(n, o);
        }
        return n;
      }
      function Zr(r) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? Vr(Object(n), !0).forEach(function (e) {
                re(r, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(n))
            : Vr(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  r,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return r;
      }
      function re(r, e, n) {
        return (
          e in r
            ? Object.defineProperty(r, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (r[e] = n),
          r
        );
      }
      function ee(r, e) {
        return (
          (function (r) {
            if (Array.isArray(r)) return r;
          })(r) ||
          (function (r, e) {
            var n =
              null == r
                ? null
                : ('undefined' != typeof Symbol && r[Symbol.iterator]) ||
                  r['@@iterator'];
            if (null != n) {
              var o,
                t,
                a = [],
                A = !0,
                i = !1;
              try {
                for (
                  n = n.call(r);
                  !(A = (o = n.next()).done) &&
                  (a.push(o.value), !e || a.length !== e);
                  A = !0
                );
              } catch (r) {
                (i = !0), (t = r);
              } finally {
                try {
                  A || null == n.return || n.return();
                } finally {
                  if (i) throw t;
                }
              }
              return a;
            }
          })(r, e) ||
          (function (r, e) {
            if (r) {
              if ('string' == typeof r) return ne(r, e);
              var n = Object.prototype.toString.call(r).slice(8, -1);
              return (
                'Object' === n && r.constructor && (n = r.constructor.name),
                'Map' === n || 'Set' === n
                  ? Array.from(r)
                  : 'Arguments' === n ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                  ? ne(r, e)
                  : void 0
              );
            }
          })(r, e) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function ne(r, e) {
        (null == e || e > r.length) && (e = r.length);
        for (var n = 0, o = new Array(e); n < e; n++) o[n] = r[n];
        return o;
      }
      var oe = sr('idle', !0);
      function te(r, e) {
        var n = Object.keys(r);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(r);
          e &&
            (o = o.filter(function (e) {
              return Object.getOwnPropertyDescriptor(r, e).enumerable;
            })),
            n.push.apply(n, o);
        }
        return n;
      }
      function ae(r) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? te(Object(n), !0).forEach(function (e) {
                Ae(r, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(n))
            : te(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  r,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return r;
      }
      function Ae(r, e, n) {
        return (
          e in r
            ? Object.defineProperty(r, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (r[e] = n),
          r
        );
      }
      function ie(r) {
        var e,
          n,
          o = new Audio(r.src);
        return (
          (o.volume = null !== (e = r.volume) && void 0 !== e ? e : 0),
          (o.loop = null !== (n = r.loop) && void 0 !== n && n),
          ae(ae({}, r), {}, {audio: o})
        );
      }
      function ce(r) {
        return function (e) {
          var n = r.map(ie);
          return ae(ae({}, e), {}, {sounds: n});
        };
      }
      function se(r) {
        null == r || r.audio.play().catch(function (r) {});
      }
      function le(r, e) {
        var n = Object.keys(r);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(r);
          e &&
            (o = o.filter(function (e) {
              return Object.getOwnPropertyDescriptor(r, e).enumerable;
            })),
            n.push.apply(n, o);
        }
        return n;
      }
      function ge(r) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? le(Object(n), !0).forEach(function (e) {
                Ce(r, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(n))
            : le(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  r,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return r;
      }
      function Ce(r, e, n) {
        return (
          e in r
            ? Object.defineProperty(r, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (r[e] = n),
          r
        );
      }
      function ue(r) {
        return function (e) {
          return ge(ge({}, e), {}, {tag: r});
        };
      }
      var de = [
          {
            state: 'idle',
            src: 'player/player_idle.png',
            steps: 5,
            current: 1,
            size: w(32, 32),
            scale: w(2, 2),
            offset: [-8, -7],
          },
          {
            state: 'running',
            src: 'player/player_running.png',
            steps: 6,
            current: 1,
            size: w(32, 32),
            scale: w(2, 2),
            offset: [-8, -7],
          },
          {
            state: 'falling',
            src: 'player/player_falling.png',
            steps: 1,
            current: 1,
            size: w(32, 32),
            scale: w(2, 2),
            offset: [-8, -7],
          },
          {
            state: 'jumping',
            src: 'player/player_jumping.png',
            steps: 1,
            current: 1,
            size: w(32, 32),
            scale: w(2, 2),
            offset: [-8, -7],
          },
        ],
        pe = [
          {name: 'walk', state: 'running', src: 'player/walk.wav', volume: 0.4},
          {name: 'jump', state: 'jumping', src: 'player/jump.wav', volume: 0.8},
        ];
      function me(r, e) {
        var n = Object.keys(r);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(r);
          e &&
            (o = o.filter(function (e) {
              return Object.getOwnPropertyDescriptor(r, e).enumerable;
            })),
            n.push.apply(n, o);
        }
        return n;
      }
      function be(r) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? me(Object(n), !0).forEach(function (e) {
                fe(r, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(n))
            : me(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  r,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return r;
      }
      function fe(r, e, n) {
        return (
          e in r
            ? Object.defineProperty(r, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (r[e] = n),
          r
        );
      }
      function ve(r) {
        return [r.isGrounded, r.jumpForce].every(g);
      }
      function he(r, e) {
        var n = Object.keys(r);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(r);
          e &&
            (o = o.filter(function (e) {
              return Object.getOwnPropertyDescriptor(r, e).enumerable;
            })),
            n.push.apply(n, o);
        }
        return n;
      }
      function xe(r) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? he(Object(n), !0).forEach(function (e) {
                ye(r, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(n))
            : he(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  r,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return r;
      }
      function ye(r, e, n) {
        return (
          e in r
            ? Object.defineProperty(r, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (r[e] = n),
          r
        );
      }
      function Be(r, e) {
        return (
          (function (r) {
            if (Array.isArray(r)) return r;
          })(r) ||
          (function (r, e) {
            var n =
              null == r
                ? null
                : ('undefined' != typeof Symbol && r[Symbol.iterator]) ||
                  r['@@iterator'];
            if (null != n) {
              var o,
                t,
                a = [],
                A = !0,
                i = !1;
              try {
                for (
                  n = n.call(r);
                  !(A = (o = n.next()).done) &&
                  (a.push(o.value), !e || a.length !== e);
                  A = !0
                );
              } catch (r) {
                (i = !0), (t = r);
              } finally {
                try {
                  A || null == n.return || n.return();
                } finally {
                  if (i) throw t;
                }
              }
              return a;
            }
          })(r, e) ||
          ke(r, e) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function we(r) {
        return (
          (function (r) {
            if (Array.isArray(r)) return Ee(r);
          })(r) ||
          (function (r) {
            if (
              ('undefined' != typeof Symbol && null != r[Symbol.iterator]) ||
              null != r['@@iterator']
            )
              return Array.from(r);
          })(r) ||
          ke(r) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function ke(r, e) {
        if (r) {
          if ('string' == typeof r) return Ee(r, e);
          var n = Object.prototype.toString.call(r).slice(8, -1);
          return (
            'Object' === n && r.constructor && (n = r.constructor.name),
            'Map' === n || 'Set' === n
              ? Array.from(r)
              : 'Arguments' === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? Ee(r, e)
              : void 0
          );
        }
      }
      function Ee(r, e) {
        (null == e || e > r.length) && (e = r.length);
        for (var n = 0, o = new Array(e); n < e; n++) o[n] = r[n];
        return o;
      }
      var De = vr(function (r) {
        var e,
          n,
          o,
          t = r.game,
          a = r.frames;
        return (t.entities.player = s(
          t.entities.player,
          Gr(0.1),
          ((o = Or()[0]),
          function (r) {
            if (
              !(function (r) {
                return g(r.speed);
              })(r) ||
              !kr(r)
            )
              throw new Error(
                'object needs to have the movable and physics properties'
              );
            return Lr(w(o * r.speed, 0), r);
          }),
          ((n = Or()[1]),
          function (r) {
            if (
              ![ve, kr].every(function (e) {
                return e(r);
              })
            )
              throw new Error(
                'the object needs to have the jumpable and physics properties'
              );
            return (
              r.isGrounded && n && u.emit('jump', r),
              r.isGrounded
                ? be(be({}, Lr(w(0, n * r.jumpForce), r)), {}, {isGrounded: !1})
                : r
            );
          }),
          Fr(1),
          zr,
          c.apply(void 0, we(t.entities.platforms.map(Kr))),
          Kr(t.entities.floor),
          c.apply(void 0, we(t.entities.coins.map(Xr))),
          ((e = t.canvas),
          function (r) {
            return r.right >= e.width
              ? Lr(w(-10, 0), r)
              : r.left <= 0
              ? Lr(w(10, 0), r)
              : r.top <= 0
              ? Zr(
                  Zr({}, r),
                  {},
                  {
                    position: [l(0, e.width - r.width - 20), e.height - 100],
                    velocity: [0, 0],
                    acceleration: [0, 0],
                  }
                )
              : r;
          }),
          oe,
          (2,
          function (r) {
            var e = ee(r.velocity, 1)[0],
              n = e < -2 || (e > 2 && r.isGrounded);
            return sr('running', n, r);
          }),
          (-10,
          function (r) {
            var e = ee(r.velocity, 2)[1],
              n = !r.isGrounded && e < 10;
            return sr('jumping', n, r);
          }),
          (5,
          function (r) {
            var e = ee(r.velocity, 2)[1],
              n = !r.isGrounded && e > 5;
            return sr('falling', n, r);
          }),
          pr(~~a),
          (function (r) {
            return function (e) {
              return (
                se(
                  e.sounds.filter(function (n) {
                    return n.state === r && e.state === r;
                  })[0]
                ),
                e
              );
            };
          })('running')
        ));
      });
      u.on('jump', function (r) {
        (function (r, e) {
          return 'player' === e.tag;
        })(0, r) &&
          r.sounds
            .filter(function (r) {
              return 'jumping' === r.state;
            })[0]
            .audio.play();
      });
      var Ge = [
        {
          state: 'idle',
          src: 'coin/coin.png',
          steps: 4,
          current: 1,
          size: w(16, 16),
          scale: w(1, 1),
          offset: [0, 0],
        },
        {
          state: 'idle_alt',
          src: 'coin/coin_alt.png',
          steps: 4,
          current: 1,
          size: w(16, 16),
          scale: w(2, 2),
          offset: [-4, -8],
        },
      ];
      function Le(r) {
        return !r.destroyed;
      }
      var Fe = [{name: 'coin', src: 'coin/collectible.wav', volume: 0.8}];
      function Ie(r) {
        return (
          (function (r) {
            if (Array.isArray(r)) return Se(r);
          })(r) ||
          (function (r) {
            if (
              ('undefined' != typeof Symbol && null != r[Symbol.iterator]) ||
              null != r['@@iterator']
            )
              return Array.from(r);
          })(r) ||
          (function (r, e) {
            if (r) {
              if ('string' == typeof r) return Se(r, e);
              var n = Object.prototype.toString.call(r).slice(8, -1);
              return (
                'Object' === n && r.constructor && (n = r.constructor.name),
                'Map' === n || 'Set' === n
                  ? Array.from(r)
                  : 'Arguments' === n ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                  ? Se(r, e)
                  : void 0
              );
            }
          })(r) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function Se(r, e) {
        (null == e || e > r.length) && (e = r.length);
        for (var n = 0, o = new Array(e); n < e; n++) o[n] = r[n];
        return o;
      }
      var Me = vr(function (r) {
        var e = r.game,
          n = c(pr(~~r.frames / 1.5));
        e.entities.coins = e.entities.coins.map(n).filter(Le);
      });
      var He = vr(function (r) {
          var e = r.game;
          e.entities.floor = s(e.entities.floor, Gr(), zr);
        }),
        Pe = [
          {
            state: 'idle',
            src: 'platform/platform.png',
            steps: 1,
            current: 1,
            size: w(64, 16),
            scale: w(1, 1),
            offset: [0, 0],
          },
          {
            state: 'idle_alt',
            src: 'platform/platform_alt.png',
            steps: 1,
            current: 1,
            size: w(64, 16),
            scale: w(1, 1),
            offset: [0, 0],
          },
        ],
        Oe = vr(function (r) {
          var e,
            n = r.game,
            o = r.frames,
            t = c(
              Gr(0.1),
              Fr(-0.2),
              zr,
              ((e = n.canvas),
              function (r) {
                return r.bottom <= 0
                  ? Zr(
                      Zr({}, r),
                      {},
                      {position: [l(0, e.width - r.width), e.height]}
                    )
                  : r;
              }),
              pr(~~o)
            );
          n.entities.platforms = n.entities.platforms.map(t);
        });
      function je(r) {
        var e,
          n = s(
            {
              info:
                null !== (e = localStorage.getItem('player')) && void 0 !== e
                  ? e
                  : '',
            },
            ue('player'),
            Dr([48, 48]),
            Er(),
            tr(32, 50),
            sr('idle', !0),
            function (r) {
              return be(be({}, r), {}, {isGrounded: !1, jumpForce: 14});
            },
            (function () {
              var r =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : 1;
              return function (e) {
                return xe(xe({}, e), {}, {speed: r});
              };
            })(1),
            zr,
            dr(de),
            ce(pe)
          ),
          o = s({}, Dr([48, 48]), tr(24, 24), sr('timer', !0), dr(br)),
          t = s({}, Dr([48, 100]), tr(24, 24), sr('coin', !0), dr(br)),
          a = (function (r) {
            return s(
              {},
              ue('floor'),
              Dr([0, r.height - 20]),
              Er(),
              tr(r.width, 20),
              zr
            );
          })(r),
          A = function () {
            return (function (r) {
              return s(
                {},
                ue('coin'),
                Dr(w(l(10, r.width - 30), l(10, r.height - 50))),
                tr(16, 16),
                sr(1 == l(1, 2) ? 'idle' : 'idle_alt', !0),
                zr,
                dr(Ge),
                ce(Fe)
              );
            })(r);
          },
          i = function () {
            return (function (r) {
              return s(
                {},
                ue('platform'),
                Dr([l(0, r.width), l(0, r.height)]),
                Er(),
                tr(64, 16),
                zr,
                sr(1 === l(1, 2) ? 'idle' : 'idle_alt')(!0),
                dr(Pe)
              );
            })(r);
          };
        return {
          player: n,
          timerUi: o,
          coinUi: t,
          floor: a,
          coin: A,
          platform: i,
          coins: Array(1).fill(!0).map(A),
          platforms: Array(10).fill(!0).map(i),
        };
      }
      function Ne(r, e) {
        var n = Object.keys(r);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(r);
          e &&
            (o = o.filter(function (e) {
              return Object.getOwnPropertyDescriptor(r, e).enumerable;
            })),
            n.push.apply(n, o);
        }
        return n;
      }
      function $e(r) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? Ne(Object(n), !0).forEach(function (e) {
                Te(r, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(n))
            : Ne(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  r,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return r;
      }
      function Te(r, e, n) {
        return (
          e in r
            ? Object.defineProperty(r, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (r[e] = n),
          r
        );
      }
      var qe = (function (r) {
          return r.map(function (r) {
            return $e(
              $e({}, r),
              {},
              {image: lr(r.src), localSize: S(r.size, r.scale)}
            );
          });
        })([
          {
            src: 'wall.png',
            position: w(0, 0),
            scale: w(3, 3),
            size: w(288, 208),
          },
          {
            src: 'cols.png',
            position: w(0, 0),
            scale: w(3, 3),
            size: w(288, 208),
          },
        ]),
        Je = function (r) {
          return 1 === r
            ? 'premier'
            : '<span class="text-md">'.concat(r, '</span><sup>ième</sup>');
        };
      var ze = ie({name: 'music', src: 'music.ogg', volume: 0.5, loop: !0});
      function Qe(r) {
        var n = e()(r).get(0),
          o = n.getContext('2d'),
          t = je(n),
          a = setInterval(function () {
            u.emit('timer');
          }, 1e3),
          A = {canvas: n, context: o, entities: t, maxTime: 90, handle: a};
        return (
          (function (r) {
            u.on('trigger', function (e) {
              var n,
                o,
                t = e.collider,
                a = e.obj;
              if ('coin' === t.tag && 'player' === a.tag) {
                u.emit('score', 1),
                  null ===
                    (n = t.sounds.filter(function (r) {
                      return 'coin' === r.name;
                    })[0]) ||
                    void 0 === n ||
                    null === (o = n.audio) ||
                    void 0 === o ||
                    o.play().catch(function (r) {
                      return r;
                    }),
                  (function (r) {
                    r.destroyed = !0;
                  })(t);
                var A,
                  i = r.entities.coins.filter(Le),
                  c = ((A = i.length < 50 ? 2 : 0), Array(A).fill(!0)).map(
                    r.entities.coin
                  );
                r.entities.coins = [].concat(Ie(i), Ie(c));
              }
            });
          })(A),
          u.on('timer', function () {
            1 === Ir && u.emit('gameover');
          }),
          (function (r) {
            u.on('gameover', function () {
              !(function (r) {
                var e;
                clearInterval(r.handle),
                  (function () {
                    for (
                      var r = window.requestAnimationFrame(function () {});
                      r--;

                    )
                      window.cancelAnimationFrame(r);
                  })(),
                  null == (e = ze) || e.audio.pause();
              })(r),
                u.clear(),
                r.context.fillRect(0, 0, r.canvas.width, r.canvas.height);
              var e = v(r),
                n =
                  b().findIndex(function (e) {
                    return e.name === r.entities.player.info;
                  }) + 1;
              d.emit('modalopen', {
                name: r.entities.player.info,
                title: e ? 'Félicitation !' : 'Recommencer la partie',
                subtitle: e
                  ? 'Vous êtes le <mark>'.concat(
                      Je(n),
                      '</mark> dans le classement'
                    )
                  : "Désolé, votre score n'est <mark>pas assez haut</mark>",
                button: 'Recommencer',
                emoji: e ? '🔥' : '❄️',
                info: e
                  ? 'Score de <span class="text-primary-500">'.concat(
                      p,
                      '</span>'
                    )
                  : 'Score de '.concat(p),
              }),
                (p = 0);
            });
          })(A),
          (function (r) {
            (Ir = r.maxTime),
              u.on('timer', function () {
                Ir--;
              });
          })(A),
          u.on('score', function (r) {
            p += r;
          }),
          se(ze),
          fr(function (r) {
            var e = {game: A, frames: r};
            De(e), Me(e), He(e), Oe(e), Sr(e);
          })(),
          fr(function () {
            !(function (r) {
              var e = r.context,
                n = r.canvas;
              (e.globalAlpha = 1),
                (e.imageSmoothingEnabled = !1),
                (e.fillStyle = '#000000'),
                e.fillRect(0, 0, n.width, n.height);
            })(A),
              (function (r) {
                var e = r.context,
                  n = r.entities.player;
                (e.globalAlpha = 0.3),
                  qe.forEach(function (r) {
                    e.drawImage(
                      r.image,
                      n.position[0] / 40,
                      0,
                      r.size[0],
                      r.size[1],
                      r.position[0],
                      r.position[1],
                      r.localSize[0],
                      r.localSize[1]
                    );
                  }),
                  (e.globalAlpha = 1);
              })(A),
              (function (r) {
                var e = r.context,
                  n = r.entities.player,
                  o = Be(n.velocity, 1)[0],
                  t = Be(n.animation.localSize, 2),
                  a = t[0],
                  A = t[1],
                  i = Be(n.animation.position, 2),
                  c = i[0],
                  s = i[1];
                o < 0 &&
                  (e.save(),
                  e.translate(c + a / 2, s + A / 2),
                  e.scale(-1, 1),
                  e.translate(-(c + a / 2), -(s + A / 2))),
                  (e.strokeStyle = '#4e62e0'),
                  mr(e, n),
                  e.restore(),
                  (window.player = n);
              })(A),
              (function (r) {
                var e = r.context;
                r.entities.coins.forEach(function (r) {
                  return mr(e, r);
                });
              })(A),
              (function (r) {
                var e = r.context;
                r.entities.platforms.forEach(function (r) {
                  return mr(e, r);
                });
              })(A),
              (function (r) {
                var e = r.context,
                  n = r.canvas,
                  o = r.entities,
                  t = o.timerUi,
                  a = o.coinUi,
                  A = o.player;
                (e.globalAlpha = 1),
                  mr(e, t),
                  mr(e, a),
                  (e.fillStyle = '#676670'),
                  (e.font = '24px system-ui'),
                  e.fillText(''.concat(Ir), 88, 68),
                  e.fillText(''.concat(p), 88, 120),
                  e.fillText(''.concat(A.info), n.width / 2 - 24, 30);
              })(A),
              (function (r) {
                var e = r.context,
                  n = r.canvas;
                (e.fillStyle = '#381010'),
                  (e.globalAlpha = 0.3),
                  e.fillRect(0, 0, n.width, n.height),
                  (e.globalAlpha = 1);
              })(A);
          })(),
          {game: A, handle: a}
        );
      }
      function Ue(r, n, o, t, a, A) {
        return e()(
          '\n  <div class="modal z-max" id="modal">\n  <form class="content rounded relative p-sm@!sm">\n    <h3 class="mt-sm text-center">\n      <span role="img" aria-label="emoji"> '
            .concat(a, ' </span>\n      ')
            .concat(
              n,
              '\n    </h3>\n    <p class="text-md text-center text-contrast-500 mt-sm font-bold">'
            )
            .concat(A, '</p>\n    <p class="mt-sm text-center">')
            .concat(
              o,
              '</p>\n    <span class="block mt-lg">\n      <label for="nom" class="form__label"> Votre nom </label>\n      <input type="text" id="nom" class="form__control" value="'
            )
            .concat(
              r,
              '" />\n      <p class="text-sm text-contrast-500 mt-xs">\n        Un maximum de 20 caractères\n      </p>\n      <p class="text-sm text-error-500 mt-xs" id="error"></p>\n    </span>\n    <div\n      class="\n        flex\n        mt-md\n        mb-sm\n        align-center\n        justify-center\n        flex-wrap\n        gap-y-md\n      "\n    >\n      <button\n        type="button"\n        class="button-reset text-bg-fx text-bg-fx&#45;&#45;scale-y mr-lg"\n        id="close"\n      >\n        Annuler\n      </button>\n      <button\n        type="submit"\n        class="\n          button-reset\n          text-bg-fx text-bg-fx&#45;&#45;scale-y\n          button-bg\n          px-md\n          py-sm\n          rounded\n          h-50\n        "\n        id="start"\n      >\n        '
            )
            .concat(t, '\n      </button>\n    </div>\n  </form>\n</div>\n')
        );
      }
      function We() {
        d.on('modalopen', function () {
          var r =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            n = r.name,
            o = void 0 === n ? '' : n,
            t = r.title,
            a = void 0 === t ? '' : t,
            A = r.subtitle,
            i = void 0 === A ? '' : A,
            c = r.button,
            s = void 0 === c ? '' : c,
            l = r.emoji,
            g = void 0 === l ? '' : l,
            C = r.info,
            u = Ue(o, a, i, s, g, void 0 === C ? '' : C);
          e()('#modal').length > 0 ||
            (j.append(u.hide().fadeIn(200)), x(), h());
        }),
          d.on('modalclose', function () {
            e()('#modal').remove(), e()('#game').length > 0 && T();
          }),
          d.on('modalstart', function () {
            var r = e()('#nom').val();
            '' === ''.concat(r).trim()
              ? d.emit('modalerror', 'Le nom ne peut pas être vide')
              : (d.emit('modalclose'),
                (function (r) {
                  var n;
                  j.addClass('game'),
                    (n = r),
                    localStorage.setItem('player', n);
                  var o = (function () {
                    var r = e()('#game');
                    r.length > 0 && r.remove();
                    var n = e()(
                      "<canvas id='game' width='800' height='600' />"
                    );
                    return Qe(n), n;
                  })();
                  j.html(o);
                })(r));
          }),
          d.on('modalerror', function (r) {
            e()('#error').text(r);
          });
      }
      e()(function () {
        T(), We();
      });
    })();
})();
//# sourceMappingURL=main.js.map
