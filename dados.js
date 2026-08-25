// Banco de Dados dos Notebooks
// Você pode editar este arquivo facilmente para adicionar ou remover modelos.

const notebooks = [
    {
        id: "lenovo-loq-15irh8",
        marca: "Lenovo",
        modelo: "LOQ (Core i5 12a Gen)",
        precoMedio: "R$ 4.700 - R$ 5.300",
        gpuModel: "3050 6GB",
        processadorResumo: "i5-12450H",
        peso: "2.4 kg",
        imagemUrl: "https://p2-ofp.static.pub/fes/cms/2023/04/07/y52mrtnnyx3x4t9lmt0k648lchw0r4309325.png",
        descricao: "O sucessor do Ideapad Gaming 3i. É um notebook honesto e com excelente sistema de refrigeração, compartilhando o chassi da linha Legion.",
        specs: {
            cpu: "Intel Core i5-12450H (8 Núcleos, 12 Threads)",
            gpu: "NVIDIA GeForce RTX 3050 (6GB GDDR6)",
            tgp: "95W (Excelente para a 3050)",
            tgpBaixo: false,
            tela: "15.6 polegadas FHD (1920x1080) WVA",
            telaCores: "Aprox. 60% sRGB",
            brilho: "250 nits (Baixo)",
            telaRuim: true,
            ram: "16GB DDR5 4800MHz",
            expansivel: "Sim, 2 slots SODIMM (Até 32GB)",
        },
        pros: [
            "Sistema de refrigeração excelente, muito difícil dar thermal throttling.",
            "Placa de vídeo bem alimentada (TGP de 95W).",
            "Usa memória DDR5, que é mais rápida para o Revit e AutoCAD.",
            "Construção robusta e design sóbrio (não parece uma nave espacial)."
        ],
        contras: [
            "A tela de 250 nits e baixo sRGB vai deixar as cores lavadas. Péssimo para render final e design de interiores.",
            "Bateria drena muito rápido (arquitetura do processador consome muito).",
            "Um pouco pesado para levar todo dia na mochila."
        ],
        redFlags: "Fique de olho na tela. Se ela for trabalhar com edição de imagem final no Photoshop após o render, vai precisar de um monitor externo urgente porque as cores no LOQ estarão imprecisas."
    },
    {
        id: "dell-g15-5530",
        marca: "Dell",
        modelo: "G15 5530",
        precoMedio: "R$ 5.200 - R$ 5.800",
        gpuModel: "3050 6GB",
        processadorResumo: "i5-13450HX",
        peso: "2.81 kg",
        imagemUrl: "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/g-series/g15-5530/media-gallery/dark-shadow-gray/notebook-g15-5530-nt-dark-shadow-gray-gallery-1.png",
        descricao: "Um tanque de guerra. O processador da linha HX é nível desktop, entregando uma performance bruta insana para programas que dependem de CPU (como processos do AutoCAD).",
        specs: {
            cpu: "Intel Core i5-13450HX (10 Núcleos, 16 Threads) - Muito Forte",
            gpu: "NVIDIA GeForce RTX 3050 (6GB GDDR6)",
            tgp: "95W",
            tgpBaixo: false,
            tela: "15.6 polegadas FHD 120Hz WVA",
            telaCores: "Aprox. 60% sRGB",
            brilho: "250 nits",
            telaRuim: true,
            ram: "16GB DDR5 4800MHz",
            expansivel: "Sim, até 32GB",
        },
        pros: [
            "Processador poderosíssimo (HX). Para cálculos estruturais ou modelagem complexa, ele voa.",
            "Garantia Dell costuma ser uma das melhores (atendimento em domicílio).",
            "TGP da placa de vídeo alto."
        ],
        contras: [
            "MUITO pesado. Quase 3kg o notebook + a fonte gigante de 330W. Carregar isso no campus de arquitetura vai quebrar as costas dela.",
            "A tela tem a mesma deficiência de cores (baixo sRGB).",
            "Ele esquenta bastante devido ao processador de altíssima performance, as ventoinhas fazem barulho alto sob estresse."
        ],
        redFlags: "A fonte de energia é um tijolo enorme e o peso total passa fácil dos 3.5kg. Se mobilidade for essencial, pule fora do G15."
    },
    {
        id: "acer-nitro-5-rtx4050",
        marca: "Acer",
        modelo: "Nitro 5 (AN515-58)",
        precoMedio: "R$ 5.500 - R$ 6.200",
        gpuModel: "4050 6GB",
        processadorResumo: "i5-12450H ou i7",
        peso: "2.6 kg",
        imagemUrl: "https://images.acer.com/is/image/acer/Nitro-5-AN515-58-Backliton-RGB-Black-01a-1?$Product-Cards-XL$",
        descricao: "A nova geração do campeão de vendas. Traz a nova RTX 4050 que tem suporte ao Frame Generation, o que ajuda muito em navegação de maquete em tempo real.",
        specs: {
            cpu: "Intel Core i5-12450H",
            gpu: "NVIDIA GeForce RTX 4050 (6GB GDDR6)",
            tgp: "140W (Performance Máxima)",
            tgpBaixo: false,
            tela: "15.6 polegadas FHD 144Hz IPS",
            telaCores: "Aprox. 65% sRGB",
            brilho: "250 nits",
            telaRuim: true,
            ram: "16GB DDR4 3200MHz",
            expansivel: "Sim",
        },
        pros: [
            "A RTX 4050 com 140W de TGP vai triturar renders no Lumion ou D5 Render.",
            "Fácil acesso para upgrade (adicionar SSD ou RAM é simples).",
            "Excelente custo-benefício para levar uma RTX série 4000."
        ],
        contras: [
            "Memória ainda é DDR4 (um pouco mais lenta que os concorrentes novos).",
            "Design muito 'Gamer' (cheio de detalhes vermelhos, teclado RGB forte), o que pode não agradar no ambiente profissional.",
            "Tela ainda deixa a desejar na fidelidade de cor."
        ],
        redFlags: "Cuidado com algumas versões do Nitro V15 (uma versão inferior que estão vendendo com tela pior e refrigeração mais fraca). Foque no Nitro 5 (chassi mais gordinho) se quiser boa refrigeração."
    }
];
