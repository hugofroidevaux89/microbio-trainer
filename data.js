/* 
   BASE DE DATOS DE MICROBIOLOGÍA
   Basada en PDFs de Virus, Hongos, Bacterias y Parásitos de la UNR.
*/

const microbiosData = [
    // --- VIRUS (PDF 1) ---
    {
        nombre: "Virus Junín (Fiebre Hemorrágica Argentina)",
        familia: "Arenavirus",
        genoma: "ARN envuelto",
        vector: "Ratón maicero (Calomys musculinus)",
        zona_endemica: "Pampa húmeda (Noroeste Bs As, Sur Santa Fe, Sureste Córdoba, Noreste La Pampa).",
        incubacion: "4 a 21 días.",
        clinica: "Inicio insidioso: decaimiento, cefalea, dolor retroocular. Hemorragias severas (hematemesis, melena). Signos neurológicos: ataxia, irritabilidad. Ausencia de tos productiva.",
        diagnostico: "Células redondas en orina (cilindros hialinos). Leucopenia (<2000) y Plaquetopenia (<100.000). PCR.",
        casos: [
            "Trabajador rural en mayo con fiebre, gingivorragia y temblores.",
            "Paciente con proteinuria, hipotensión y facies abotagada.",
            "Brote estacional en otoño/invierno en zona rural de Buenos Aires."
        ]
    },
    {
        nombre: "Hantavirus (Sde Pulmonar)",
        familia: "Bunyavirus",
        genoma: "ARN envuelto",
        vector: "Ratón colilargo (Oligoryzomys longicaudatus)",
        zona_endemica: "Cordillera, Cuyo, Litoral, Norte (No exclusivo pampa).",
        patogenia: "Linfocitos T actúan sobre endotelio pulmonar aumentando permeabilidad vascular (edema no cardiogénico).",
        clinica: "Fase prodrómica viral seguida de distrés respiratorio brusco, tos no productiva y shock.",
        diagnostico: "Hemoconcentración (Hto alto), trombocitopenia, inmunoblastos. IgM ELISA.",
        casos: [
            "Joven que limpió galpón en el sur, disnea súbita grave.",
            "Paciente con fiebre, mialgias y plaquetas bajas sin hemorragias evidentes.",
            "Cuadro de insuficiencia respiratoria aguda tras contacto con roedores silvestres."
        ]
    },
    {
        nombre: "Dengue",
        familia: "Flavivirus",
        vector: "Aedes aegypti",
        incubacion: "4-6 días.",
        clinica: "Fiebre 'quebrantahuesos', dolor retroocular, exantema 'islas blancas en mar rojo'.",
        complicacion: "Shock por fuga plasmática (reinfección con otro serotipo).",
        diagnostico: "NS1 (Ag) primeros días. PCR. IgM (tardía). Leucopenia y trombocitopenia.",
        casos: [
            "Paciente con fiebre de 40°C y dolor intenso detrás de los ojos.",
            "Brote epidémico en verano, paciente con petequias y prueba del lazo positiva.",
            "Dolor abdominal intenso y vómitos persistentes (Signos de alarma)."
        ]
    },
    {
        nombre: "Zika",
        familia: "Flavivirus",
        vector: "Aedes aegypti / Sexual / Vertical",
        clinica: "Fiebre baja, conjuntivitis no purulenta, exantema pruriginoso, artralgias.",
        complicacion: "Microcefalia fetal (embarazadas), Guillain-Barré.",
        casos: [
            "Embarazada con rash y feto con calcificaciones cerebrales.",
            "Paciente con conjuntivitis seca y dolor articular leve.",
            "Recién nacido con perímetro cefálico disminuido."
        ]
    },
    {
        nombre: "Chikungunya",
        familia: "Togaviridae",
        vector: "Aedes aegypti",
        clinica: "Fiebre alta y poliartralgias severas e incapacitantes (el paciente camina doblado).",
        casos: [
            "Paciente que 'camina doblado' por dolor articular intenso.",
            "Fiebre alta y dolor en muñecas y tobillos que persiste meses.",
            "Brote con muchos pacientes con artritis aguda febril."
        ]
    },
    {
        nombre: "Fiebre Amarilla",
        familia: "Flavivirus",
        vector: "Aedes aegypti (Urbano) / Haemagogus (Selvático)",
        clinica: "Periodo rojo (congestión) y Periodo de intoxicación: Ictericia, hemorragias (vómito negro), falla renal, bradicardia relativa (Faget).",
        zona_endemica: "Zonas tropicales (Misiones, Brasil).",
        casos: [
            "Viajero a Brasil sin vacuna, presenta ictericia y hematemesis.",
            "Paciente con fiebre, bradicardia (Faget) y albuminuria.",
            "Falla hepatorrenal aguda en zona endémica."
        ]
    },
    {
        nombre: "Influenza (Gripe)",
        familia: "Orthomyxoviridae",
        genoma: "ARN segmentado (permite mutaciones)",
        antigenos: "Hemaglutinina (H) y Neuraminidasa (N).",
        clinica: "Fiebre alta brusca, cefalea, mialgias, tos seca traqueal.",
        complicacion: "Neumonía bacteriana secundaria (S. aureus, Neumococo).",
        casos: [
            "Anciano con fiebre de 39°C, tos seca y postración en invierno.",
            "Brote en geriátrico de cuadro respiratorio febril.",
            "Neumonía sobreagregada tras una semana de gripe."
        ]
    },
    {
        nombre: "Virus Sincicial Respiratorio (VSR)",
        familia: "Paramyxoviridae",
        poblacion: "Lactantes.",
        clinica: "Bronquiolitis (primer episodio de sibilancias), neumonía.",
        diagnostico: "Aspirado nasofaríngeo (IFD / PCR). No genera viremia.",
        casos: [
            "Bebé de 4 meses con taquipnea, tiraje y sibilancias en invierno.",
            "Lactante con dificultad respiratoria y aleteo nasal.",
            "Causa más frecuente de internación respiratoria en pediatría en época fría."
        ]
    },
    {
        nombre: "Sarampión",
        familia: "Paramyxoviridae",
        transmision: "Aerosoles (muy contagioso).",
        clinica: "Triple catarro, Manchas de Koplik, Exantema morbiliforme cefalocaudal.",
        diagnostico: "IgM. Notificación obligatoria inmediata.",
        casos: [
            "Niño no vacunado con conjuntivitis, tos y manchas blancas en carrillos.",
            "Exantema que empieza en la cara y baja al tronco, con fiebre alta.",
            "Complicación tardía: Panencefalitis Esclerosante Subaguda."
        ]
    },
    {
        nombre: "Rubéola",
        familia: "Togaviridae",
        transmision: "Respiratoria / Vertical.",
        clinica: "Exantema leve, adenopatías retroauriculares y suboccipitales.",
        complicacion: "Sde de Rubéola Congénita (Cataratas, Sordera, Ductus).",
        casos: [
            "Embarazada con rash leve y feto con cardiopatía y catarata.",
            "Niño con ganglios dolorosos detrás de la oreja y exantema rosado.",
            "Recién nacido con 'blueberry muffin rash' (púrpura) y sordera."
        ]
    },
    {
        nombre: "Parotiditis (Paperas)",
        familia: "Paramyxoviridae",
        clinica: "Tumefacción glándulas parótidas (uni o bilateral), fiebre.",
        complicacion: "Orquiepididimitis (riesgo esterilidad), Meningitis, Pancreatitis.",
        casos: [
            "Niño con dolor al masticar y bulto en el ángulo de la mandíbula.",
            "Adolescente con fiebre y dolor testicular intenso tras cuadro viral.",
            "Meningitis urliana (LCR claro) post inflamación parotídea."
        ]
    },
    {
        nombre: "Rotavirus",
        familia: "Reoviridae",
        genoma: "ARN doble cadena segmentado.",
        clinica: "Gastroenteritis aguda en < 2 años. Vómitos, fiebre, diarrea acuosa, deshidratación.",
        diagnostico: "Detección de Ag en materia fecal (ELISA/Látex).",
        casos: [
            "Bebé de 8 meses con vómitos incoercibles y diarrea líquida en invierno.",
            "Deshidratación grave en lactante por diarrea sin sangre.",
            "Brote de diarrea en guardería."
        ]
    },
    {
        nombre: "HPV (Papilomavirus)",
        familia: "Papovaviridae",
        genoma: "ADN circular.",
        serotipos: "16 y 18 (Oncogénicos), 6 y 11 (Verrugas/Condilomas).",
        clinica: "Verrugas genitales, Cáncer de cuello uterino, Papilomatosis laríngea.",
        diagnostico: "PAP (Coilocitos), Biología Molecular (PCR), Colposcopía.",
        casos: [
            "Mujer con lesión en cérvix acetoblanca a la colposcopía.",
            "Paciente con verrugas tipo 'coliflor' en genitales externos.",
            "Células con halo perinuclear (Coilocitos) en el Papanicolau."
        ]
    },
    {
        nombre: "Hepatitis A",
        familia: "Picornaviridae",
        transmision: "Fecal-oral.",
        clinica: "Aguda, Ictericia, Acolia, Coluria. No cronifica.",
        diagnostico: "IgM anti-HAV.",
        casos: [
            "Brote de ictericia en escuela primaria.",
            "Niño con orina oscura y heces blancas.",
            "Hepatitis fulminante (raro, 0.1%)."
        ]
    },
    {
        nombre: "Hepatitis B",
        familia: "Hepadnaviridae",
        genoma: "ADN (Transcriptasa inversa).",
        antigenos: "HBsAg (Superficie), HBeAg (Replicación), HBcAg (Core).",
        clinica: "Puede ser crónica (cirrosis/cáncer). Manifestaciones extrahepáticas.",
        diagnostico: "HBsAg > 6 meses = Crónico. Anti-HBs = Inmunidad.",
        casos: [
            "Personal de salud con accidente punzante.",
            "Paciente con HBsAg positivo persistente.",
            "Coinfección necesaria para Hepatitis D."
        ]
    },
    {
        nombre: "Virus Epstein Barr (VEB)",
        familia: "Herpesviridae (Gamma)",
        transmision: "Saliva (Enf del beso).",
        clinica: "Mononucleosis: Fiebre, Faringitis, Adenopatías, Esplenomegalia.",
        diagnostico: "Monotest (Ac heterófilos), IgM VCA. Linfocitos atípicos.",
        asociacion: "Linfoma de Burkitt, Carcinoma nasofaríngeo.",
        casos: [
            "Adolescente con fatiga extrema, ganglios cervicales y bazo palpable.",
            "Rash tras tomar amoxicilina por faringitis (errónea).",
            "Faringitis exudativa con test de Paul-Bunnell positivo."
        ]
    },

    // --- BACTERIAS (PDF 4) ---
    {
        nombre: "Staphylococcus aureus",
        caracteristicas: "Coco Gram+, Racimos, Catalasa+, Coagulasa+.",
        clinica: "Forúnculos, Impétigo ampollar, Neumonía, Osteomielitis, Sde Piel Escaldada.",
        patogenia: "Toxinas (TSST-1, exfoliativas), Proteína A, Enzimas.",
        casos: [
            "Absceso cutáneo caliente y doloroso.",
            "Endocarditis en adicto a drogas IV.",
            "Neumonía necrotizante post-gripe."
        ]
    },
    {
        nombre: "Staphylococcus epidermidis",
        caracteristicas: "Coco Gram+, Coagulasa Negativo.",
        patogenia: "Biofilm (Slime) en plásticos.",
        clinica: "Infección de catéteres, prótesis, shunts.",
        casos: [
            "Fiebre persistente en paciente con vía central.",
            "Infección de prótesis de cadera.",
            "Hemocultivos positivos en paciente hospitalizado."
        ]
    },
    {
        nombre: "Streptococcus pyogenes (Grupo A)",
        caracteristicas: "Coco Gram+, Cadenas, Beta-hemolítico, Catalasa-.",
        clinica: "Faringitis, Escarlatina, Erisipela. Secuelas: Fiebre Reumática, Glomerulonefritis.",
        diagnostico: "Cultivo, Test rápido Ag, ASTO.",
        casos: [
            "Faringitis pultácea con fiebre alta y ganglios.",
            "Placa roja brillante en pierna (Erisipela).",
            "Orina oscura e hipertensión tras infección de piel."
        ]
    },
    {
        nombre: "Streptococcus pneumoniae (Neumococo)",
        caracteristicas: "Diplococo Gram+ lanceolado, Alfa-hemolítico, Capsulado.",
        clinica: "Neumonía típica (lobar), Meningitis, Otitis media.",
        diagnostico: "Soluble en bilis, Sensible a Optoquina.",
        casos: [
            "Neumonía con puntada de costado y esputo herrumbroso.",
            "Meningitis en adulto con Gram+ en LCR.",
            "Otitis media aguda supurada."
        ]
    },
    {
        nombre: "Listeria monocytogenes",
        caracteristicas: "Bacilo Gram+ corto, Móvil a 25°C, Psicrófilo (crece en heladera).",
        clinica: "Meningitis en neonatos/ancianos/inmunodeprimidos. Sepsis en embarazo.",
        transmision: "Alimentos refrigerados (quesos blandos, fiambres).",
        casos: [
            "Recién nacido con sepsis granulomatosa.",
            "Anciano con meningitis y bacilos gram positivos en LCR.",
            "Embarazada con cuadro febril tras comer queso no pasteurizado."
        ]
    },
    {
        nombre: "Corynebacterium diphtheriae",
        caracteristicas: "Bacilo Gram+ (Palillo de tambor/Letras chinas).",
        patogenia: "Toxina diftérica (inhibe síntesis proteica).",
        clinica: "Pseudomembrana gris en faringe (sangra al desprender), Cuello de toro, Miocarditis.",
        casos: [
            "Niño no vacunado con membrana gris en garganta y dificultad respiratoria.",
            "Muerte por miocarditis tóxica.",
            "Cultivo en medio Loeffler/Telurito."
        ]
    },
    {
        nombre: "Bacillus anthracis",
        caracteristicas: "Bacilo Gram+, Esporulado, Inmóvil, Cabeza de medusa (colonias).",
        clinica: "Carbunco cutáneo (Escara negra indolora), Pulmonar (Mortal), Digestivo.",
        casos: [
            "Trabajador del cuero con úlcera negra indolora en brazo.",
            "Neumonía hemorrágica fulminante por inhalación de esporas.",
            "Bacilo grande en cadenas (caña de bambú)."
        ]
    },
    {
        nombre: "Clostridium perfringens",
        caracteristicas: "Bacilo Gram+, Esporulado, Anaerobio.",
        clinica: "Gangrena gaseosa (Mionecrosis), Intoxicación alimentaria.",
        patogenia: "Toxina Alfa (Lecitinasa/Fosfolipasa).",
        casos: [
            "Herida traumática con crepitación (gas) y dolor desproporcionado.",
            "Diarrea acuosa tras comer carne recalentada.",
            "Doble halo de hemólisis en agar sangre."
        ]
    },
    {
        nombre: "Clostridium tetani",
        caracteristicas: "Bacilo Gram+, Anaerobio estricto, Espora terminal (Palillo tambor).",
        patogenia: "Tetanospasmina (bloquea GABA/Glicina).",
        clinica: "Parálisis espástica: Trismo, Risa sardónica, Opistótonos.",
        casos: [
            "Herida con clavo oxidado, luego contractura mandibular.",
            "Recién nacido con espasmos (tétanos neonatal por cordón).",
            "Espasmos ante estímulos mínimos."
        ]
    },
    {
        nombre: "Clostridium botulinum",
        caracteristicas: "Bacilo Gram+, Anaerobio estricto.",
        patogenia: "Toxina botulínica (bloquea Acetilcolina en placa motora).",
        clinica: "Parálisis flácida descendente, diplopía, midriasis. Botulismo del lactante.",
        casos: [
            "Visión doble y dificultad para tragar tras comer conserva casera.",
            "Bebé que comió miel: constipado y 'muñeco de trapo'.",
            "Fallo respiratorio por parálisis muscular."
        ]
    },
    {
        nombre: "Neisseria meningitidis",
        caracteristicas: "Diplococo Gram- (granos de café), Ox+, Cat+, Capsulado.",
        clinica: "Meningitis, Meningococemia (púrpura fulminante).",
        complicacion: "Sde Waterhouse-Friderichsen (Hemorragia suprarrenal).",
        casos: [
            "Fiebre alta, rigidez de nuca y petequias en piel.",
            "Shock séptico fulminante en adolescente.",
            "Profilaxis a contactos con Rifampicina."
        ]
    },
    {
        nombre: "Neisseria gonorrhoeae",
        caracteristicas: "Diplococo Gram- intracelular (en PMN).",
        transmision: "Sexual.",
        clinica: "Uretritis (secreción purulenta), Cervicitis, Artritis séptica, Oftalmia neonatal.",
        diagnostico: "Gram, Cultivo Thayer-Martin.",
        casos: [
            "Hombre con disuria y 'gota matinal' de pus.",
            "Mujer con EPI (Enfermedad Pélvica Inflamatoria).",
            "Artritis en rodilla y pústulas en piel en joven sexualmente activo."
        ]
    },
    {
        nombre: "Escherichia coli",
        caracteristicas: "Bacilo Gram-, Lactosa+, Indol+.",
        cepas: "Uropatógena (ITU), Enterotoxigénica (Viajero), Enterohemorrágica (SUH), Enteroinvasiva (Disentería).",
        casos: [
            "Mujer con cistitis (disuria, polaquiuria).",
            "Niño con diarrea sanguinolenta y falla renal (SUH por toxina Shiga).",
            "Diarrea acuosa en viajero al caribe."
        ]
    },
    {
        nombre: "Salmonella",
        caracteristicas: "Bacilo Gram-, Lactosa-, Móvil, H2S+.",
        clinica: "Enterocolitis (autolimitada), Fiebre Tifoidea (S. typhi).",
        transmision: "Huevos, pollo, fecal-oral.",
        casos: [
            "Diarrea, fiebre y dolor tras comer mayonesa casera.",
            "Fiebre prolongada, bradicardia y roseola tífica (Fiebre Tifoidea).",
            "Osteomielitis en pacientes con drepanocitosis."
        ]
    },
    {
        nombre: "Shigella",
        caracteristicas: "Bacilo Gram-, Inmóvil, Lactosa-, H2S-.",
        clinica: "Disentería bacilar (sangre, moco, pus), pujo y tenesmo.",
        patogenia: "Invasión mucosa colónica. Toxina Shiga.",
        casos: [
            "Niño con diarrea con sangre y convulsiones (neurotoxina).",
            "Brote de disentería en guardería.",
            "Coprocultivo positivo."
        ]
    },
    {
        nombre: "Klebsiella pneumoniae",
        caracteristicas: "Bacilo Gram-, Inmóvil, Cápsula grande, Lactosa+.",
        clinica: "Neumonía pesada (lóbulo superior), ITU, Sepsis.",
        casos: [
            "Alcohólico con neumonía y esputo 'jalea de grosella'.",
            "Neumonía con abombamiento de cisura en Rx.",
            "Infección urinaria en paciente con sonda."
        ]
    },
    {
        nombre: "Proteus mirabilis",
        caracteristicas: "Bacilo Gram-, Ureasa+ (Litos coraliformes), Swarming (en placa).",
        clinica: "ITU asociada a cálculos de estruvita.",
        casos: [
            "Orina con olor amoniacal fuerte.",
            "Cálculo renal coraliforme e infección recurrente.",
            "Cultivo muestra crecimiento en ondas (swarming)."
        ]
    },
    {
        nombre: "Yersinia enterocolitica",
        caracteristicas: "Bacilo Gram-, crece en frío.",
        clinica: "Pseudoapendicitis (adenitis mesentérica), diarrea.",
        casos: [
            "Niño con dolor en fosa ilíaca derecha y diarrea (simula apendicitis).",
            "Consumo de carne de cerdo.",
            "Eritema nodoso post-infeccioso."
        ]
    },
    {
        nombre: "Vibrio cholerae",
        caracteristicas: "Bacilo Gram- curvo, Oxidasa+, Halófilo.",
        clinica: "Cólera: diarrea masiva 'agua de arroz', sin fiebre.",
        patogenia: "Toxina colérica (ADP-ribosilación -> aumenta AMPc).",
        casos: [
            "Deshidratación severa en horas tras comer mariscos.",
            "Heces líquidas blancas sin leucocitos.",
            "Pandemias."
        ]
    },
    {
        nombre: "Campylobacter jejuni",
        caracteristicas: "Bacilo Gram- curvo (gaviota), Microaerófilo, Termófilo (42°C).",
        clinica: "Diarrea inflamatoria/sanguinolenta.",
        asociacion: "Síndrome de Guillain-Barré.",
        casos: [
            "Diarrea tras comer pollo mal cocido.",
            "Parálisis flácida ascendente post-diarrea.",
            "Dolor abdominal que simula apendicitis."
        ]
    },
    {
        nombre: "Helicobacter pylori",
        caracteristicas: "Gram- espiralado, Ureasa potente, Microaerófilo.",
        clinica: "Gastritis, Úlcera péptica, Adenocarcinoma gástrico, MALT.",
        diagnostico: "Test del aire espirado (Urea C13), Biopsia, Antígeno en heces.",
        casos: [
            "Dispepsia crónica y dolor epigástrico.",
            "Úlcera duodenal recidivante.",
            "Bacteria asociada a cáncer gástrico."
        ]
    },
    {
        nombre: "Pseudomonas aeruginosa",
        caracteristicas: "Gram- no fermentador, Oxidasa+, Pigmentos (verde/azul).",
        habitat: "Agua, humedad, hospital.",
        clinica: "Neumonía en FQ, Otitis maligna, Ectima gangrenoso, Quemados.",
        casos: [
            "Herida de quemado con pus verde y olor a frutas.",
            "Otitis externa severa en diabético.",
            "Neumonía en paciente con respirador."
        ]
    },
    {
        nombre: "Haemophilus influenzae",
        caracteristicas: "Cocobacilo Gram-, Exigente (Agar Chocolate, Factores X y V).",
        clinica: "Tipo b: Meningitis, Epiglotitis. No tipificable: Otitis, Sinusitis.",
        casos: [
            "Niño no vacunado con epiglotitis (babeo, trípode).",
            "Meningitis en lactante.",
            "Fenómeno de satelitismo alrededor de S. aureus."
        ]
    },
    {
        nombre: "Bordetella pertussis",
        caracteristicas: "Cocobacilo Gram-.",
        clinica: "Tos convulsa (paroxística, emetizante, gallo).",
        diagnostico: "PCR, Cultivo Bordet-Gengou.",
        casos: [
            "Bebé con apneas y tos cianozante.",
            "Linfocitosis absoluta en sangre.",
            "Tos de 1 mes de evolución en adolescente."
        ]
    },
    {
        nombre: "Brucella spp.",
        caracteristicas: "Cocobacilo Gram-, Aerobio, Intracelular.",
        clinica: "Fiebre ondulante, sudoración, sacroileítis, orquitis.",
        diagnostico: "Hemocultivo (lento), Huddleson, Wright, 2-mercaptoetanol.",
        casos: [
            "Veterinario con fiebre vespertina y dolor de espalda.",
            "Consumo de queso de cabra casero.",
            "Fiebre de origen desconocido."
        ]
    },
    {
        nombre: "Legionella pneumophila",
        caracteristicas: "Gram- difícil de teñir (Plata), Intracelular, Hídrico.",
        clinica: "Enfermedad de los Legionarios (Neumonía grave + diarrea + hiponatremia).",
        diagnostico: "Antígeno urinario.",
        casos: [
            "Neumonía tras estancia en hotel con aire acondicionado central.",
            "Fiebre de Pontiac (gripal).",
            "Neumonía con confusión y sodio bajo."
        ]
    },
    {
        nombre: "Treponema pallidum",
        caracteristicas: "Espiroqueta (no tiñe Gram, sí Campo Oscuro/Plata).",
        clinica: "Sífilis. 1°: Chancro. 2°: Rash. 3°: Gomas, Tabes dorsal.",
        diagnostico: "VDRL/RPR (No treponémicas), FTA-abs (Treponémicas).",
        casos: [
            "Úlcera genital dura indolora.",
            "Rash palmoplantar.",
            "Neurosífilis (pupila de Argyll Robertson)."
        ]
    },
    {
        nombre: "Leptospira interrogans",
        caracteristicas: "Espiroqueta con ganchos.",
        transmision: "Orina animales (ratas), agua estancada.",
        clinica: "Fiebre, mialgias (pantorrillas), inyección conjuntival. Sde Weil.",
        casos: [
            "Paciente tras inundación con fiebre y dolor muscular.",
            "Falla renal, ictericia y hemorragias (Weil).",
            "Microaglutinación (MAT)."
        ]
    },
    {
        nombre: "Chlamydia trachomatis",
        caracteristicas: "Intracelular obligado. Cuerpos elementales/reticulares.",
        clinica: "Uretritis, Cervicitis, LGV, Tracoma, Neumonía neonatal.",
        diagnostico: "PCR (Primer chorro orina), IFD.",
        casos: [
            "Uretritis mucosa con Gram negativo.",
            "Ganglio inguinal supurativo (Bubón).",
            "Conjuntivitis y neumonía en RN."
        ]
    },
    {
        nombre: "Mycoplasma pneumoniae",
        caracteristicas: "Sin pared celular (no tiñe Gram, resistente a beta-lactámicos).",
        clinica: "Neumonía atípica ('walking pneumonia').",
        diagnostico: "Crioaglutininas, Serología.",
        casos: [
            "Joven con tos seca persistente y Rx con infiltrados difusos.",
            "Neumonía en edad escolar.",
            "Otitis bullosa asociada."
        ]
    },
    {
        nombre: "Mycobacterium tuberculosis",
        caracteristicas: "BAAR (Ziehl-Neelsen), Aerobio, Pared rica en lípidos (ácidos micólicos).",
        clinica: "Tos >15 días, hemoptisis, pérdida peso, sudoración nocturna.",
        diagnostico: "Baciloscopía, Cultivo (Lowenstein-Jensen), PPD, PCR.",
        casos: [
            "Caverna apical en Rx tórax.",
            "Meningitis basal en inmunodeprimido.",
            "Mal de Pott (columna)."
        ]
    },
    {
        nombre: "Mycobacterium leprae",
        caracteristicas: "BAAR, No cultivable.",
        clinica: "Lepra Tuberculoide (pocas lesiones, anestesia) o Lepromatosa (muchas lesiones, facies leonina).",
        diagnostico: "Baciloscopía de lóbulo oreja/lesión. Clínica (anestesia).",
        casos: [
            "Mancha hipopigmentada con pérdida de sensibilidad.",
            "Engrosamiento de nervios periféricos.",
            "Facies leonina y pérdida de cola de cejas."
        ]
    },

    // --- HONGOS (PDF 2) ---
    {
        nombre: "Histoplasma capsulatum",
        tipo: "Dimórfico (Micelio ambiental / Levadura tisular).",
        habitat: "Guano de aves/murciélagos.",
        zona_endemica: "Pampa Húmeda, Litoral.",
        clinica: "Neumonía aguda. Diseminada (SIDA): Piel, MO, Hígado.",
        casos: [
            "Limpiador de gallinero con fiebre y neumonía.",
            "Paciente VIH con pancitopenia y úlceras orales.",
            "Levaduras intracelulares en macrófagos."
        ]
    },
    {
        nombre: "Paracoccidioides brasiliensis",
        tipo: "Dimórfico.",
        diagnostico: "Levadura multigemante 'Rueda de timón'.",
        zona_endemica: "Noreste (Subtropical).",
        clinica: "Estomatitis moriforme, Adenopatías, Pulmón.",
        casos: [
            "Hachero de Chaco con úlceras en boca y tos.",
            "Infiltrados pulmonares 'alas de mariposa'.",
            "Varón >40 años (mujeres protegidas por estrógenos)."
        ]
    },
    {
        nombre: "Coccidioides posadasii",
        tipo: "Dimórfico.",
        diagnostico: "Esférula con endosporas.",
        zona_endemica: "Precordillera (Zona seca, Catamarca, La Rioja).",
        clinica: "Fiebre del valle, Eritema nodoso, Meningitis.",
        casos: [
            "Viaje a zona desértica con viento Zonda.",
            "Neumonía con nódulos dolorosos en piernas.",
            "Meningitis crónica."
        ]
    },
    {
        nombre: "Candida albicans",
        tipo: "Levadura (Pseudohifas). Oportunista endógeno.",
        clinica: "Muguet, Esofagitis, Vaginitis, Balanitis, Intertrigo, Fungemia.",
        casos: [
            "Placas blancas en lengua que sangran.",
            "Flujo vaginal 'leche cortada'.",
            "Endoftalmitis en paciente con catéter."
        ]
    },
    {
        nombre: "Cryptococcus neoformans",
        tipo: "Levadura capsulada.",
        habitat: "Guano de paloma.",
        clinica: "Meningitis en SIDA.",
        diagnostico: "Tinta china (halo claro), Ag capsular.",
        casos: [
            "Cefalea progresiva en paciente VIH.",
            "LCR con presión elevada y levaduras.",
            "Tinta china positiva."
        ]
    },
    {
        nombre: "Aspergillus",
        tipo: "Moho (Hifas tabicadas 45°).",
        clinica: "Alergia (ABPA), Aspergiloma (bola fúngica), Invasiva (neutropénicos).",
        casos: [
            "Asmático con tos y eosinofilia.",
            "Hemoptisis en paciente con caverna TBC antigua (Aspergiloma).",
            "Neumonía necrotizante en paciente con leucemia."
        ]
    },
    {
        nombre: "Dermatofitos (Microsporum, Trichophyton, Epidermophyton)",
        tipo: "Filamentosos.",
        nutricion: "Queratinofílicos.",
        clinica: "Tiñas (Piel, Pelo, Uñas).",
        diagnostico: "Examen directo (KOH) y Cultivo.",
        casos: [
            "Lesión circular con borde activo y centro sano.",
            "Querion de Celso en cabeza de niño.",
            "Pie de atleta."
        ]
    },
    {
        nombre: "Malassezia furfur",
        tipo: "Levadura lipofílica.",
        clinica: "Pitiriasis versicolor (manchas hipo/hiperpigmentadas).",
        diagnostico: "Luz de Wood, Directo 'Espagueti y albóndigas'.",
        casos: [
            "Manchas blancas en espalda que no broncean.",
            "Foliculitis en espalda.",
            "Paciente con caspa (Dermatitis seborreica)."
        ]
    },
    {
        nombre: "Mucor / Rhizopus",
        tipo: "Moho (Hifas no tabicadas 90°).",
        clinica: "Mucormicosis rinocerebral (invasiva grave).",
        factor_riesgo: "Cetoacidosis diabética, Neutropenia.",
        casos: [
            "Diabético descompensado con escara negra en paladar.",
            "Sinusitis invasiva destructiva.",
            "Hifas anchas no septadas invadiendo vasos."
        ]
    },

    // --- PARASITOS (PDF 3) ---
    {
        nombre: "Trypanosoma cruzi",
        vector: "Vinchuca.",
        clinica: "Chagas. Agudo: Romaña. Crónico: Cardiomiopatía, Megavísceras.",
        diagnostico: "Agudo: Strout/Gota gruesa. Crónico: Serología (par de pruebas).",
        casos: [
            "Edema bipalpebral unilateral (Romaña).",
            "Bloqueo completo de rama derecha.",
            "Megaesófago."
        ]
    },
    {
        nombre: "Toxoplasma gondii",
        huesped_definitivo: "Gato.",
        transmision: "Carne cruda, heces gato, transplacentaria.",
        clinica: "Congénita (Sabin). SIDA (Masa cerebral).",
        diagnostico: "Serología (IgM/IgG, Avidez).",
        casos: [
            "Embarazada con seroconversión.",
            "RN con calcificaciones cerebrales difusas.",
            "Masa cerebral en anillo en VIH."
        ]
    },
    {
        nombre: "Leishmania",
        vector: "Flebótomo (Lutzomyia).",
        clinica: "Cutánea (Úlcera), Mucocutánea (Nariz de tapir), Visceral (Kala-azar).",
        diagnostico: "Frotis, Biopsia, Montenegro.",
        casos: [
            "Úlcera indolora en zona expuesta que no cura.",
            "Destrucción de tabique nasal.",
            "Fiebre, hepatoesplenomegalia y pancitopenia."
        ]
    },
    {
        nombre: "Giardia lamblia",
        localizacion: "Duodeno.",
        clinica: "Diarrea esteatorreica, malabsorción, meteorismo.",
        diagnostico: "Coproparasitológico (Quistes).",
        casos: [
            "Diarrea crónica intermitente en niño.",
            "Heces grasosas que flotan.",
            "Trofozoito 'cara de viejo'."
        ]
    },
    {
        nombre: "Entamoeba histolytica",
        clinica: "Disentería amebiana, Absceso hepático.",
        diagnostico: "Trofozoitos con GR fagocitados.",
        casos: [
            "Diarrea con sangre y moco.",
            "Absceso en hígado 'pasta de anchoas'.",
            "Viajero a zona tropical."
        ]
    },
    {
        nombre: "Cryptosporidium",
        tipo: "Coccidio (Apicomplexa).",
        clinica: "Diarrea acuosa grave en SIDA.",
        diagnostico: "Kinyoun (Ácido alcohol resistente) en heces.",
        casos: [
            "Diarrea crónica en paciente VIH.",
            "Brote en natatorios (resistente al cloro).",
            "Ooquistes rojos en Kinyoun."
        ]
    },
    {
        nombre: "Trichinella spiralis",
        transmision: "Carne de cerdo (quistes).",
        clinica: "Edema palpebral, mialgias, fiebre.",
        diagnostico: "Eosinofilia, Enzimas, Serología.",
        casos: [
            "Comida con chacinados caseros.",
            "Dolor muscular intenso.",
            "Larva en biopsia muscular."
        ]
    },
    {
        nombre: "Enterobius vermicularis",
        clinica: "Prurito anal nocturno.",
        diagnostico: "Test de Graham.",
        casos: [
            "Niño irritable de noche.",
            "Gusanos blancos en ano.",
            "Familiares afectados."
        ]
    },
    {
        nombre: "Ascaris lumbricoides",
        clinica: "Sde Loeffler (Pulmón), Obstrucción intestinal.",
        ciclo: "Hemático-Pulmonar (Loeffler).",
        casos: [
            "Expulsión de gusano grande (lombriz) por boca/ano.",
            "Neumonitis eosinofílica.",
            "Oclusión intestinal por ovillo."
        ]
    },
    {
        nombre: "Taenia saginata",
        transmision: "Carne vacuna (Cisticerco).",
        clinica: "Teniasis (Salida de proglótides).",
        casos: [
            "Proglótides móviles en ropa interior.",
            "Ingesta de carne cruda.",
            "Escólex inerme."
        ]
    },
    {
        nombre: "Taenia solium",
        transmision: "Cerdo. Huevo (Cisticercosis) / Cisticerco (Teniasis).",
        clinica: "Neurocisticercosis (Convulsiones).",
        casos: [
            "Convulsiones de inicio tardío.",
            "Quistes calcificados en cerebro.",
            "Escólex con ganchos."
        ]
    },
    {
        nombre: "Echinococcus granulosus",
        clinica: "Quiste Hidatídico (Hígado, Pulmón).",
        huesped: "Definitivo: Perro. Interm: Oveja. Accidental: Hombre.",
        casos: [
            "Quiste hepático con arenilla hidatídica.",
            "Vómica de líquido salado (membranas).",
            "Zona rural con perros y ovejas."
        ]
    },
    {
        nombre: "Fasciola hepatica",
        transmision: "Berros (plantas acuáticas).",
        clinica: "Hepatomegalia, dolor HD, eosinofilia.",
        ciclo: "Caracol (Lymnaea).",
        casos: [
            "Ingesta de berros silvestres.",
            "Dolor biliar y fiebre.",
            "Huevos operculados en heces."
        ]
    },
    {
        nombre: "Strongyloides stercoralis",
        clinica: "Larva currens, Hiperinfección en inmunodeprimidos.",
        ciclo: "Penetración piel (pies). Ciclo de Loeffler.",
        casos: [
            "Eosinofilia crónica sin causa aparente.",
            "Sepsis por Gram negativos en paciente con corticoides (arrastre).",
            "Lesión serpiginosa en piel."
        ]
    }
];
