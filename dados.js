// Banco de Dados Estruturado - ArchBook Hub
// Estrutura de dados escalável e tipada.

const notebooks = [
    {
        id: "lenovo-loq-15irx9",
        marca: "Lenovo",
        modelo: "LOQ 15IRX9",
        precoPromo: 4874.00,
        precoMedio: 5600.00,
        imagemUrl: "https://p2-ofp.static.pub/fes/cms/2023/04/07/y52mrtnnyx3x4t9lmt0k648lchw0r4309325.png",
        descricao: "A nova geração focada em alta eficiência térmica. Um equipamento extremamente sólido para quem precisa de performance sem atingir o estrangulamento térmico (thermal throttling) em renders longos.",
        specs: {
            tela: {
                painel: "IPS",
                resolucao: "Full HD (1920x1080)",
                atualizacao: "144Hz",
                brilho: "300 nits",
                tamanho: "15,6''"
            },
            performance: {
                cpu: "Core i5 12450HX",
                gpu: "RTX 3050 (TGP Alto)",
                ram: "16GB (Máx de 32GB)",
                armazenamento: "SSD NVMe (512GB)"
            },
            construcao: {
                material: "Principalmente em plástico",
                peso: "1,77 kg",
                teclado: "Retroiluminado (Sim)",
                webcam: "720p"
            },
            energiaConectividade: {
                bateria: "57Wh",
                carregador: "135W",
                wifi: "Wi-Fi 6.0",
                bluetooth: "5.2"
            },
            portas: [
                "1x USB-C Thunderbolt",
                "2x USB-A 3.2",
                "1x HDMI",
                "1x RJ-45",
                "1x Leitor de cartão SD"
            ]
        },
        pros: [
            "O processador HX garante muita potência para cálculos e AutoCAD.",
            "Possui porta Thunderbolt (excelente para múltiplos monitores no escritório).",
            "Peso excelente para a categoria (1,77 kg facilita muito a mobilidade).",
            "Brilho de 300 nits permite usar confortavelmente em salas de aula bem iluminadas."
        ],
        contras: [
            "A RTX 3050 já está ficando datada para quem pretende focar massivamente em Unreal Engine 5 ou Lumion 2024.",
            "Webcam 720p é básica para reuniões de apresentação de projeto.",
            "A bateria de 57Wh vai acabar rápido renderizando fora da tomada."
        ],
        redFlags: "Atenção ao carregador de 135W. Em estresse máximo, a bateria pode descarregar levemente mesmo na tomada dependendo da configuração de energia usada, pois o processador HX consome bastante."
    },
    {
        id: "acer-nitro-5-rtx4050",
        marca: "Acer",
        modelo: "Nitro 5 (AN515-58)",
        precoPromo: 5500.00,
        precoMedio: 6200.00,
        imagemUrl: "https://images.acer.com/is/image/acer/Nitro-5-AN515-58-Backliton-RGB-Black-01a-1?$Product-Cards-XL$",
        descricao: "Uma das máquinas mais procuradas pela presença da RTX 4050, que traz o Frame Generation, essencial para navegação suave em maquetes eletrônicas pesadas em tempo real.",
        specs: {
            tela: {
                painel: "IPS",
                resolucao: "Full HD (1920x1080)",
                atualizacao: "144Hz",
                brilho: "250 nits",
                tamanho: "15,6''"
            },
            performance: {
                cpu: "Core i5 12450H",
                gpu: "RTX 4050 (140W)",
                ram: "16GB DDR4 (Máx de 32GB)",
                armazenamento: "SSD NVMe (512GB)"
            },
            construcao: {
                material: "Plástico com tampa reforçada",
                peso: "2,6 kg",
                teclado: "Retroiluminado RGB (Sim)",
                webcam: "720p"
            },
            energiaConectividade: {
                bateria: "57.5Wh",
                carregador: "230W",
                wifi: "Wi-Fi 6.0",
                bluetooth: "5.1"
            },
            portas: [
                "1x USB-C Thunderbolt 4",
                "3x USB-A 3.2",
                "1x HDMI 2.1",
                "1x RJ-45 Gigabit"
            ]
        },
        pros: [
            "A RTX 4050 com 140W é absurdamente superior à RTX 3050 em renderização por hardware (Ray Tracing).",
            "Fonte de 230W garante energia de sobra, o notebook não capenga sob estresse.",
            "Muitas portas USB tipo A, ideal para ligar mouse, teclado e mesa digitalizadora."
        ],
        contras: [
            "Muito pesado (2,6 kg). Carregar para a universidade todos os dias cansa.",
            "Brilho da tela é de apenas 250 nits; usar perto de janelas será frustrante.",
            "Usa memória RAM DDR4, um pouco defasada perante a concorrência DDR5."
        ],
        redFlags: "Fidelidade de cores da tela. Arquitetura exige precisão de cor para aprovação de materiais (madeiras, tintas); com 250 nits e sRGB baixo, ela precisará de um monitor externo profissional."
    }
];
