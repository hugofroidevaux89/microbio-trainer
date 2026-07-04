/* Datos del módulo: Bacterias — fuente: BACTERIAS.pdf */
window.MODULE = {
  title: 'Bacterias',
  source: 'BACTERIAS.pdf',
  storageKey: 'bacterias',
  categoryColors: {
    positivo: { label: 'Gram +', color: '#a97ce0' },
    negativo: { label: 'Gram −', color: '#e0568e' },
    atipica: { label: 'Atípica', color: '#d8a53d' }
  },
  cards: [
    // --- Bacilos Gram(-) nutritivamente exigentes ---
    {
      id: 'b1', grupo: 'Bacilos Gram(-) exigentes', org: 'Legionella pneumophila', cat: 'Características', tincion: 'negativo',
      q: '¿Qué características morfológicas y tintoriales tiene Legionella pneumophila?',
      a: 'Cocobacilo gram negativo, aerobio estricto, no forma esporas y no se tiñe bien con la técnica de Gram.'
    },
    {
      id: 'b2', grupo: 'Bacilos Gram(-) exigentes', org: 'Legionella pneumophila', cat: 'Características', tincion: 'negativo',
      q: '¿Qué nutrientes exige Legionella para crecer y en qué medio se cultiva?',
      a: 'Exige L-cisteína, hierro y cetoácidos; se cultiva en medios enriquecidos como el agar BCYEα.'
    },
    {
      id: 'b120', grupo: 'Bacilos Gram(-) exigentes', org: 'Legionella pneumophila', cat: 'Virulencia', tincion: 'negativo',
      q: '¿Qué factores de virulencia posee Legionella pneumophila?',
      a: 'Proteasas, nucleasas, lipasas, hemolisinas, endonucleasas, aminopeptidasas y una exotoxina que lesiona la membrana celular.'
    },
    {
      id: 'b3', grupo: 'Bacilos Gram(-) exigentes', org: 'Legionella pneumophila', cat: 'Hábitat', tincion: 'negativo',
      q: '¿Cuál es el hábitat natural de Legionella y de qué es parásito intracelular obligado?',
      a: 'Se distribuye en ambientes acuáticos (ríos, lagos, aguas termales); es parásito intracelular obligado de protozoos de vida libre.'
    },
    {
      id: 'b4', grupo: 'Bacilos Gram(-) exigentes', org: 'Legionella pneumophila', cat: 'Transmisión', tincion: 'negativo',
      q: '¿Cómo se contagia la legionelosis?',
      a: 'Por inhalación de vapor de agua o aerosoles contaminados (aires acondicionados, piletas de spa, nebulizadores). No hay transmisión persona a persona.'
    },
    {
      id: 'b5', grupo: 'Bacilos Gram(-) exigentes', org: 'Legionella pneumophila', cat: 'Patogenia', tincion: 'negativo',
      q: '¿Qué mecanismo usa Legionella para sobrevivir dentro del macrófago?',
      a: 'Bloquea la fusión del fagosoma con el lisosoma; su exotoxina lesiona la membrana celular y rompe el epitelio alveolar.'
    },
    {
      id: 'b6', grupo: 'Bacilos Gram(-) exigentes', org: 'Legionella pneumophila', cat: 'Clínica', tincion: 'negativo',
      q: '¿Qué dos cuadros clínicos produce Legionella y en qué se diferencian?',
      a: 'Legionelosis: neumonía multilobar grave, fiebre >40°C, hiponatremia, alta mortalidad. Fiebre de Pontiac: cuadro pseudogripal leve de 3-5 días, sin neumonía, mortalidad nula.'
    },
    {
      id: 'b7', grupo: 'Bacilos Gram(-) exigentes', org: 'Legionella pneumophila', cat: 'Diagnóstico', tincion: 'negativo', tipoDx: 'ambos',
      q: '¿Cómo se diagnostica la infección por Legionella? (directo e indirecto)',
      a: 'Directo: cultivo en medio enriquecido BCYEα y detección de antígeno urinario (no se tiñe bien con Gram). Indirecto: búsqueda de inmunoglobulinas (Ig).'
    },

    {
      id: 'b8', grupo: 'Bacilos Gram(-) exigentes', org: 'Brucella spp.', cat: 'Características', tincion: 'negativo',
      q: '¿Qué características tiene Brucella?',
      a: 'Cocobacilo gram negativo, aerobio estricto, inmóvil, oxidasa y ureasa positivas; exigente en magnesio y nitrógeno.'
    },
    {
      id: 'b9', grupo: 'Bacilos Gram(-) exigentes', org: 'Brucella spp.', cat: 'Transmisión', tincion: 'negativo',
      q: '¿Cómo se transmite la brucelosis y cuál es la vía más frecuente?',
      a: 'Contacto, inhalación, vía perinatal y sobre todo por consumo de leche o quesos no pasteurizados; típica de zonas rurales.'
    },
    {
      id: 'b10', grupo: 'Bacilos Gram(-) exigentes', org: 'Brucella spp.', cat: 'Patogenia', tincion: 'negativo',
      q: '¿Cómo progresa la infección por Brucella dentro del organismo?',
      a: 'Atraviesa la barrera gástrica o intestinal, se multiplica en los linfáticos y produce bacteriemia persistente, localizándose en bazo, hígado, ganglios, articulaciones, huesos y riñón.'
    },
    {
      id: 'b11', grupo: 'Bacilos Gram(-) exigentes', org: 'Brucella spp.', cat: 'Clínica', tincion: 'negativo',
      q: '¿Cuál es el cuadro clínico típico de la brucelosis y sus principales complicaciones?',
      a: 'Fiebre ondulante (de malta), fatiga, artralgia, mialgia, pérdida de peso y adenomegalia. Complicaciones: osteomielitis, hepatoesplenomegalia, orquitis, aborto, meningitis, endocarditis.'
    },
    {
      id: 'b12', grupo: 'Bacilos Gram(-) exigentes', org: 'Brucella spp.', cat: 'Diagnóstico', tincion: 'negativo', tipoDx: 'ambos',
      q: '¿Cómo se diagnostica la brucelosis y qué hallazgo hematológico es característico? (directo e indirecto)',
      a: 'Directo: hemocultivo, Gram, búsqueda de antígeno. Indirecto: búsqueda de inmunoglobulinas. Se observa linfocitosis moderada con VSG normal o levemente aumentada.'
    },

    {
      id: 'b13', grupo: 'Bacilos Gram(-) exigentes', org: 'Pasteurella multocida', cat: 'General', tincion: 'negativo',
      q: '¿Dónde habita Pasteurella multocida y cómo se transmite?',
      a: 'Habita en la cavidad oral de muchos animales; se transmite por mordedura, causando infección de piel con formación de abscesos (rara vez sistémica).'
    },
    {
      id: 'b121', grupo: 'Bacilos Gram(-) exigentes', org: 'Pasteurella multocida', cat: 'Diagnóstico', tincion: 'negativo', tipoDx: 'directo',
      q: '¿Cómo se diagnostica la infección por Pasteurella multocida? (diagnóstico directo)',
      a: 'Tinción de Gram y búsqueda de antígeno (Ag) — diagnóstico directo; no se realiza serología.'
    },

    {
      id: 'b14', grupo: 'Bacilos Gram(-) exigentes', org: 'Francisella tularensis', cat: 'General', tincion: 'negativo',
      q: '¿Cuál es el reservorio de Francisella tularensis y qué cuadros clínicos produce?',
      a: 'Reservorio: conejos, gatos, garrapatas (carnes mal cocidas, agua o polvo contaminado). Produce fiebre, cefalea, pápula cutánea que ulcera con adenopatía, conjuntivitis con adenopatía preauricular, o cuadro neumónico si se inhala.'
    },
    {
      id: 'b122', grupo: 'Bacilos Gram(-) exigentes', org: 'Francisella tularensis', cat: 'Diagnóstico', tincion: 'negativo', tipoDx: 'directo',
      q: '¿Cómo se diagnostica la tularemia? (diagnóstico directo)',
      a: 'Por cultivo del microorganismo — diagnóstico directo.'
    },

    {
      id: 'b15', grupo: 'Bacilos Gram(-) exigentes', org: 'Bordetella pertussis', cat: 'Características', tincion: 'negativo',
      q: '¿Qué características tiene Bordetella pertussis?',
      a: 'Cocobacilo gram negativo, aerobio estricto, sin esporas, oxidasa positiva; exigente en nicotinamida, nitrógeno y cisteína.'
    },
    {
      id: 'b16', grupo: 'Bacilos Gram(-) exigentes', org: 'Bordetella pertussis', cat: 'Virulencia', tincion: 'negativo',
      q: '¿Qué factores de virulencia posee Bordetella pertussis?',
      a: 'Fimbrias, adhesinas, hemaglutinina filamentosa, pertactina, la toxina pertussis (causante de la tos convulsa), adenilato ciclasa hemolisina, citotoxina traqueal y LPS.'
    },
    {
      id: 'b17', grupo: 'Bacilos Gram(-) exigentes', org: 'Bordetella pertussis', cat: 'Clínica', tincion: 'negativo',
      q: '¿Cuáles son las tres fases clínicas de la tos ferina?',
      a: 'Catarral (1-2 semanas, muy contagiosa), paroxística (accesos de tos seguidos de vómitos, puede haber apnea) y convalecencia (4-6 semanas, disminuyen los síntomas).'
    },
    {
      id: 'b18', grupo: 'Bacilos Gram(-) exigentes', org: 'Bordetella pertussis', cat: 'Diagnóstico', tincion: 'negativo', tipoDx: 'ambos',
      q: '¿Cómo se diagnostica la tos ferina? (directo e indirecto)',
      a: 'Directo: hisopado/aspirado nasofaríngeo, cultivo, PCR, Gram. Indirecto: cultivo con seroconversión y búsqueda de Ig o anticuerpos por ELISA.'
    },

    // --- Haemophilus ---
    {
      id: 'b19', grupo: 'Haemophilus', org: 'Haemophilus influenzae', cat: 'Características', tincion: 'negativo',
      q: '¿Qué exigencia nutricional distingue al género Haemophilus?',
      a: 'Son cocobacilos gram negativos exigentes de factores presentes en la sangre (derivados de la hemoglobina), aerobios y anaerobios facultativos.'
    },
    {
      id: 'b20', grupo: 'Haemophilus', org: 'Haemophilus influenzae', cat: 'Clínica', tincion: 'negativo',
      q: '¿Qué dos tipos de infección produce H. influenzae y cuál es su importancia en meningitis?',
      a: 'Sistémica/invasiva (meningitis, neumonía, falso crup) y no invasiva (otitis, sinusitis, epiglotitis, conjuntivitis, bronquitis). Es agente principal de meningitis en niños de 3 meses a 7 años, con líquido purulento sin petequias.'
    },
    {
      id: 'b21', grupo: 'Haemophilus', org: 'Haemophilus influenzae', cat: 'Diagnóstico', tincion: 'negativo', tipoDx: 'directo',
      q: '¿Cómo se confirma en el laboratorio que un aislamiento es H. influenzae? (diagnóstico directo)',
      a: 'Cultivo en agar chocolate o sangre; pruebas bioquímicas que demuestran su requerimiento de los factores V y X para crecer, y ausencia de hemólisis.'
    },
    {
      id: 'b22', grupo: 'Haemophilus', org: 'Haemophilus ducreyi', cat: 'Clínica', tincion: 'negativo',
      q: '¿Qué enfermedad produce Haemophilus ducreyi?',
      a: 'El chancroide o chancro blando (ETS): pápula eritematosa dolorosa que ulcera, con adenopatía satélite; frecuente en países cálidos con falta de higiene.'
    },
    {
      id: 'b22b', grupo: 'Haemophilus', org: 'Haemophilus ducreyi', cat: 'Diagnóstico', tincion: 'negativo', tipoDx: 'directo',
      q: '¿Cómo se diagnostica el chancroide?',
      a: 'PCR de la muestra tomada del borde de la úlcera — diagnóstico directo.'
    },
    {
      id: 'b23', grupo: 'Haemophilus', org: 'Haemophilus aegyptius', cat: 'Clínica', tincion: 'negativo',
      q: '¿Qué cuadros produce Haemophilus aegyptius?',
      a: 'Conjuntivitis purulenta, enfermedades genitales, y la fiebre púrpura brasileña (dolor abdominal, lesiones hemorrágicas en piel, colapso vascular y muerte).'
    },
    {
      id: 'b24', grupo: 'Haemophilus', org: 'Bacterias HACEK', cat: 'General', tincion: 'negativo',
      q: '¿Qué son las bacterias HACEK y qué producen?',
      a: 'Cinco géneros de cocobacilos de crecimiento lento, microbiota habitual de boca y orofaringe, que causan enfermedad en inmunodeprimidos, similar a las patologías de Haemophilus.'
    },
    {
      id: 'b123', grupo: 'Haemophilus', org: 'Bacterias HACEK', cat: 'General', tincion: 'negativo',
      q: '¿Qué tienen en común los 5 géneros que forman el grupo HACEK más allá de su hábitat?',
      a: 'Son cocobacilos gram negativos exigentes, de crecimiento lento, agrupados por producir cuadros clínicos similares en pacientes inmunodeprimidos (ej. endocarditis de crecimiento lento).'
    },

    // --- Enterobacterias patógenas primarias ---
    {
      id: 'b25', grupo: 'Enterobacterias', org: 'Generalidades', cat: 'Características', tincion: 'negativo',
      q: '¿Qué antígenos caracterizan a las enterobacterias patógenas primarias?',
      a: 'Antígeno somático (O), flagelar (H) y capsular (K o Vi); poseen LPS (endotoxina) y son capsuladas.'
    },
    {
      id: 'b26', grupo: 'Enterobacterias', org: 'Salmonella (gastroentérica)', cat: 'Clínica', tincion: 'negativo',
      q: '¿Cómo se presenta clínicamente la salmonelosis gastroentérica?',
      a: 'Náuseas, vómitos, diarrea acuosa autolimitada, dolor cólico abdominal y fiebre, a veces con sangre en heces; incubación de 12-72 hs. Bacteriemia posible en lactantes y ancianos.'
    },
    {
      id: 'b27', grupo: 'Enterobacterias', org: 'Salmonella (gastroentérica)', cat: 'Diagnóstico', tincion: 'negativo', tipoDx: 'directo',
      q: '¿Cómo se diagnostica la Salmonella gastroentérica? (diagnóstico directo)',
      a: 'Coprocultivo; test de Sereny negativo.'
    },
    {
      id: 'b28', grupo: 'Enterobacterias', org: 'Salmonella typhi', cat: 'Características', tincion: 'negativo',
      q: '¿Qué distingue a Salmonella typhi/paratyphi de la Salmonella gastroentérica?',
      a: 'El hombre es el único reservorio, ingresa por el epitelio transicional (no invade la mucosa localmente) y causa bacteriemia grave y persistente en vez de gastroenteritis local.'
    },
    {
      id: 'b29', grupo: 'Enterobacterias', org: 'Salmonella typhi', cat: 'Clínica', tincion: 'negativo',
      q: '¿Cuál es el cuadro clínico de la fiebre tifoidea y qué síntoma NO es característico?',
      a: 'Fiebre alta, obnubilación, bradicardia relativa, leucopenia, adenopatía, hepatoesplenomegalia, cefalea y constipación. La diarrea NO es característica de esta forma.'
    },
    {
      id: 'b30', grupo: 'Enterobacterias', org: 'Salmonella typhi', cat: 'Diagnóstico', tincion: 'negativo', tipoDx: 'ambos',
      q: '¿Cómo cambia la muestra diagnóstica de la fiebre tifoidea según la semana de evolución? (directo e indirecto)',
      a: 'Primera semana: hemocultivo (directo). Segunda semana: coprocultivo (directo). Tercera semana: urocultivo (directo) y diagnóstico indirecto por serología.'
    },
    {
      id: 'b31', grupo: 'Enterobacterias', org: 'Shigella', cat: 'Patogenia', tincion: 'negativo',
      q: '¿Cómo produce enfermedad Shigella y qué tipo de toxina posee?',
      a: 'Invade la mucosa del colon, se multiplica y disemina intra y extracelularmente, causando lisis celular y necrosis; su toxina inhibe la síntesis de proteínas (acción citotóxica, enterotóxica y neurotóxica).'
    },
    {
      id: 'b32', grupo: 'Enterobacterias', org: 'Shigella', cat: 'Clínica', tincion: 'negativo',
      q: '¿Cuál es el cuadro clínico típico de la shigelosis y en qué grupo etario predomina?',
      a: 'Disentería (moco, pus y sangre), dolor abdominal y fiebre; es la 2ª-3ª causa de diarrea tras E. coli y rotavirus. Predomina en niños (60% menores de 10 años); puede haber letargo, confusión y convulsiones.'
    },
    {
      id: 'b33', grupo: 'Enterobacterias', org: 'Shigella', cat: 'Diagnóstico', tincion: 'negativo', tipoDx: 'ambos',
      q: '¿Qué distingue el diagnóstico de Shigella respecto al test de Sereny? (directo e indirecto)',
      a: 'El test de Sereny es positivo (a diferencia de Salmonella). Directo: coprocultivo, PCR, ELISA. Indirecto: búsqueda de Ig.'
    },
    {
      id: 'b34', grupo: 'Enterobacterias', org: 'Yersinia enterocolitica', cat: 'General', tincion: 'negativo',
      q: '¿Cuál es el reservorio y la clínica de Yersinia enterocolitica?',
      a: 'Reservorio animal (principalmente el cerdo); invade la mucosa ileocecal causando necrosis de las placas de Peyer. Produce enteritis invasiva que puede evolucionar a enterocolitis fulminante.'
    },
    {
      id: 'b124', grupo: 'Enterobacterias', org: 'Yersinia enterocolitica', cat: 'Diagnóstico', tincion: 'negativo', tipoDx: 'directo',
      q: '¿Cómo se diagnostica Yersinia enterocolitica? (diagnóstico directo)',
      a: 'Coprocultivo en medios selectivos (agar sangre, agar McConkey).'
    },
    {
      id: 'b35', grupo: 'Enterobacterias', org: 'Yersinia pseudotuberculosis', cat: 'General', tincion: 'negativo',
      q: '¿Qué cuadro característico produce Yersinia pseudotuberculosis?',
      a: 'Adenitis mesentérica que simula apendicitis (dolor en zona apendicular), junto con diarrea y septicemia; reservorio en aves y roedores.'
    },
    {
      id: 'b125', grupo: 'Enterobacterias', org: 'Yersinia pseudotuberculosis', cat: 'Diagnóstico', tincion: 'negativo', tipoDx: 'ambos',
      q: '¿Qué métodos se usan para diagnosticar Yersinia pseudotuberculosis? (directo e indirecto)',
      a: 'Análisis de muestra (sangre, ganglios), búsqueda de antígeno y cultivo (directo), y búsqueda de Ig y PCR (indirecto/molecular).'
    },
    {
      id: 'b36', grupo: 'Enterobacterias', org: 'Yersinia pestis', cat: 'Transmisión', tincion: 'negativo',
      q: '¿Cómo se transmite Yersinia pestis?',
      a: 'Entre roedores por pulgas (vector); al hombre por la picadura de pulgas, manipulación de tejidos infectados o vía aérea (forma neumónica).'
    },
    {
      id: 'b37', grupo: 'Enterobacterias', org: 'Yersinia pestis', cat: 'Clínica', tincion: 'negativo',
      q: '¿Cuáles son las tres formas clínicas de la peste y cuál es la más grave?',
      a: 'Bubónica (adenitis con bubones), septicémica (shock, CID, necrosis y cianosis cutánea: "peste negra") y neumónica, que es la más grave, con esputo sanguinolento e insuficiencia respiratoria.'
    },
    {
      id: 'b126', grupo: 'Enterobacterias', org: 'Yersinia pestis', cat: 'Diagnóstico', tincion: 'negativo', tipoDx: 'directo',
      q: '¿Cómo se diagnostica la peste? (diagnóstico directo)',
      a: 'Análisis de muestra (pus, esputo, sangre), hemocultivo y aglutinación.'
    },

    // --- E. coli patotipos ---
    {
      id: 'b38', grupo: 'E. coli patógena', org: 'E. coli enterohemorrágica (EHEC)', cat: 'Características', tincion: 'negativo',
      q: '¿Qué serotipo y toxinas caracterizan a la E. coli enterohemorrágica?',
      a: 'Serotipo O157:H7; produce toxinas Shiga STX1 y STX2 (citotóxicas necrotizantes); reservorio bovino/porcino y dosis infectante muy baja.'
    },
    {
      id: 'b39', grupo: 'E. coli patógena', org: 'E. coli enterohemorrágica (EHEC)', cat: 'Clínica', tincion: 'negativo',
      q: '¿Qué complicaciones sistémicas produce EHEC?',
      a: 'Diarrea con sangre sin leucocitos, síndrome urémico hemolítico (en ancianos y bebés) y púrpura trombocitopénica trombótica.'
    },
    {
      id: 'b127', grupo: 'E. coli patógena', org: 'E. coli enterohemorrágica (EHEC)', cat: 'Diagnóstico', tincion: 'negativo', tipoDx: 'ambos',
      q: '¿Qué métodos diagnósticos se usan para E. coli enterohemorrágica? (directo e indirecto)',
      a: 'Directo: cultivo en agar McConkey, búsqueda de antígeno, PCR. Indirecto: búsqueda de anticuerpos.'
    },
    {
      id: 'b40', grupo: 'E. coli patógena', org: 'E. coli enterotoxigénica (ETEC)', cat: 'General', tincion: 'negativo', tipoDx: 'ambos',
      q: '¿Cómo produce diarrea la E. coli enterotoxigénica y cómo se diagnostica?',
      a: 'Sus toxinas LT y LS aumentan el AMPc causando salida de agua e iones; produce la clásica "diarrea del viajero" acuosa, sin fiebre ni inflamación. Diagnóstico por Ag (directo) o Ac (indirecto) mediante ELISA; NO se usa hemocultivo.'
    },
    {
      id: 'b41', grupo: 'E. coli patógena', org: 'E. coli enteropatógena (EPEC)', cat: 'General', tincion: 'negativo',
      q: '¿Cuál es el mecanismo de daño de la E. coli enteropatógena?',
      a: 'Se adhiere al epitelio intestinal y achata las microvellosidades, disminuyendo la absorción y generando diarrea osmótica.'
    },
    {
      id: 'b128', grupo: 'E. coli patógena', org: 'E. coli enteropatógena (EPEC)', cat: 'Diagnóstico', tincion: 'negativo', tipoDx: 'directo',
      q: '¿Cuál es el método diagnóstico específico para E. coli enteropatógena? (diagnóstico directo)',
      a: 'PCR.'
    },
    {
      id: 'b42', grupo: 'E. coli patógena', org: 'E. coli enteroinvasiva (EIEC)', cat: 'General', tincion: 'negativo', tipoDx: 'directo',
      q: '¿Cómo se comporta y cómo se diagnostica la E. coli enteroinvasiva?',
      a: 'Invade y prolifera dentro de la célula epitelial del colon, produciendo disentería con fiebre mayor a 38°C y dolor abdominal. Diagnóstico directo: coprocultivo, test de Sereny y ELISA.'
    },
    {
      id: 'b43', grupo: 'E. coli patógena', org: 'E. coli enteroagregativa (EAEC)', cat: 'General', tincion: 'negativo',
      q: '¿Qué caracteriza a la E. coli enteroagregativa?',
      a: 'No elabora toxinas ni invade células; produce diarrea del viajero y diarrea crónica en países en desarrollo por un mecanismo poco conocido.'
    },
    {
      id: 'b44', grupo: 'E. coli patógena', org: 'E. coli uropatógena (UPEC)', cat: 'Clínica', tincion: 'negativo', tipoDx: 'directo',
      q: '¿Cómo se manifiesta clínicamente y cómo se diagnostica la infección por E. coli uropatógena?',
      a: 'Cistitis (disuria, polaquiuria); si asciende al riñón produce pielonefritis con dolor lumbar y fiebre. Posee fimbrias, adhesinas y hemolisina. Diagnóstico directo: examen microscópico y urocultivo.'
    },
    {
      id: 'b45', grupo: 'E. coli patógena', org: 'Enterobacterias oportunistas', cat: 'General', tincion: 'negativo',
      q: '¿Qué géneros forman las enterobacterias comensales/oportunistas y qué las distingue?',
      a: 'Proteus mirabilis (ureasa +, favorece cálculos de estruvita), Klebsiella pneumoniae/oxytoca, Enterobacter cloacae, Serratia marcescens y Morganella morganii; son microbiota normal del intestino pero patógenas oportunistas fuera de él.'
    },

    // --- Bacilos gram- curvados ---
    {
      id: 'b46', grupo: 'Bacilos Gram(-) curvados', org: 'Campylobacter jejuni', cat: 'Características', tincion: 'negativo',
      q: '¿Qué características de crecimiento tiene Campylobacter jejuni?',
      a: 'Microaerófila, capnófila y termófila (crece por encima de 37°C); su reservorio principal son aves y pollos.'
    },
    {
      id: 'b130', grupo: 'Bacilos Gram(-) curvados', org: 'Campylobacter jejuni', cat: 'Virulencia', tincion: 'negativo',
      q: '¿Qué factores de virulencia posee Campylobacter jejuni?',
      a: 'LPS, adhesinas, flagelos y citotoxinas.'
    },
    {
      id: 'b47', grupo: 'Bacilos Gram(-) curvados', org: 'Campylobacter jejuni', cat: 'Clínica', tincion: 'negativo',
      q: '¿Qué complicación neurológica se asocia a Campylobacter jejuni?',
      a: 'El síndrome de Guillain-Barré, por reacción cruzada, produciendo parálisis flácida por desmielinización; además causa enteritis invasiva con diarrea, fiebre y a veces sangre.'
    },
    {
      id: 'b131', grupo: 'Bacilos Gram(-) curvados', org: 'Campylobacter jejuni', cat: 'Diagnóstico', tincion: 'negativo', tipoDx: 'directo',
      q: '¿Cómo se diagnostica la infección por Campylobacter jejuni? (diagnóstico directo)',
      a: 'Tinción de Gram, cultivo en medios exigentes, pruebas metabólicas, PCR y búsqueda de antígeno, en muestra de heces.'
    },
    {
      id: 'b48', grupo: 'Bacilos Gram(-) curvados', org: 'Campylobacter fetus', cat: 'General', tincion: 'negativo', tipoDx: 'directo',
      q: '¿En qué se diferencia Campylobacter fetus de C. jejuni y cómo se diagnostica?',
      a: 'No es termófilo (crece a menos de 37°C), su reservorio es ganado bovino/caprino, causa bacteriemia e infecciones sistémicas en inmunodeprimidos (meningitis, endocarditis) pero NO causa enteritis. Diagnóstico directo: hemocultivo.'
    },
    {
      id: 'b49', grupo: 'Bacilos Gram(-) curvados', org: 'Helicobacter pylori', cat: 'Características', tincion: 'negativo',
      q: '¿Qué le permite a Helicobacter pylori sobrevivir en el estómago?',
      a: 'Es microaerófilo, móvil (4 flagelos) y produce ureasa, que hidroliza la urea generando amoníaco alcalino que neutraliza la acidez gástrica.'
    },
    {
      id: 'b50', grupo: 'Bacilos Gram(-) curvados', org: 'Helicobacter pylori', cat: 'Clínica', tincion: 'negativo',
      q: '¿Qué patologías gástricas produce H. pylori y qué potencial tiene?',
      a: 'Gastritis crónica, úlcera duodenal, adenocarcinoma gástrico y linfoma gástrico de células B; tiene potencial oncogénico.'
    },
    {
      id: 'b51', grupo: 'Bacilos Gram(-) curvados', org: 'Helicobacter pylori', cat: 'Diagnóstico', tincion: 'negativo', tipoDx: 'directo',
      q: '¿Qué métodos diagnósticos invasivos y no invasivos existen para H. pylori? (diagnóstico directo)',
      a: 'Invasivo: biopsia de tejido gástrico con Giemsa y cultivo (lento, 48hs). No invasivo: búsqueda de antígeno en heces y test del aliento (ureasa). Ambos son métodos directos.'
    },

    // --- Vibrio ---
    {
      id: 'b52', grupo: 'Vibrio', org: 'Vibrio cholerae', cat: 'Características', tincion: 'negativo',
      q: '¿Qué serogrupos de Vibrio cholerae causan epidemias de cólera?',
      a: 'Los serogrupos O1 y O139; es halotolerante (crece sin necesidad de sal) y habita en estuarios y el mar.'
    },
    {
      id: 'b53', grupo: 'Vibrio', org: 'Vibrio cholerae', cat: 'Patogenia', tincion: 'negativo',
      q: '¿Cómo actúa la toxina colérica?',
      a: 'Se une a los enterocitos e induce AMPc, que inhibe la absorción de Na+ y favorece la salida de Cl-, generando salida osmótica de agua hacia la luz intestinal.'
    },
    {
      id: 'b54', grupo: 'Vibrio', org: 'Vibrio cholerae', cat: 'Clínica', tincion: 'negativo',
      q: '¿Cómo son las heces características del cólera y qué ausencia clínica llama la atención?',
      a: 'Diarrea acuosa con aspecto de "agua de arroz", sin fiebre ni dolor abdominal, con deshidratación rápida que puede llevar al shock.'
    },
    {
      id: 'b132', grupo: 'Vibrio', org: 'Vibrio cholerae', cat: 'Diagnóstico', tincion: 'negativo', tipoDx: 'directo',
      q: '¿Se realiza diagnóstico serológico (indirecto, por anticuerpos) para el cólera?',
      a: 'No. El diagnóstico es directo: cultivo de heces en medio TCBS, identificación antigénica del germen y búsqueda de antígeno; explícitamente NO se busca inmunoglobulina.'
    },
    {
      id: 'b55', grupo: 'Vibrio', org: 'Vibrio parahaemolyticus', cat: 'General', tincion: 'negativo', tipoDx: 'directo',
      q: '¿Qué caracteriza a Vibrio parahaemolyticus y cómo se diagnostica?',
      a: 'Es halófilo (necesita altas concentraciones de sal), se asocia a mariscos y pescados de agua salada, produce hemolisina de Kanagawa y causa enteritis esporádica. Diagnóstico directo: cultivo en medio TCBS.'
    },

    // --- No fermentadores ---
    {
      id: 'b56', grupo: 'No fermentadores', org: 'Pseudomonas aeruginosa', cat: 'Características', tincion: 'negativo',
      q: '¿Qué pigmentos produce Pseudomonas aeruginosa y qué otras características tiene?',
      a: 'Pioverdina y piocianina (color azul-verdoso, bactericidas), olor a frutas en sus colonias; multirresistente a antibióticos, típica de ambientes húmedos hospitalarios.'
    },
    {
      id: 'b57', grupo: 'No fermentadores', org: 'Pseudomonas aeruginosa', cat: 'Clínica', tincion: 'negativo',
      q: '¿Qué infecciones nosocomiales produce Pseudomonas aeruginosa según la vía de exposición?',
      a: 'Respiradores/nebulizadores → neumonía; catéteres → septicemia; sondaje vesical → ITU; piscinas → otitis externa; lentes de contacto → queratitis; depilación → foliculitis.'
    },
    {
      id: 'b133', grupo: 'No fermentadores', org: 'Pseudomonas aeruginosa', cat: 'Diagnóstico', tincion: 'negativo', tipoDx: 'directo',
      q: '¿Cómo se diagnostica la infección por Pseudomonas aeruginosa? (diagnóstico directo)',
      a: 'Gram, cultivo, PCR e identificación bioquímica, según la muestra (orina, sangre, secreciones).'
    },
    {
      id: 'b58', grupo: 'No fermentadores', org: 'Acinetobacter baumannii', cat: 'General', tincion: 'negativo',
      q: '¿Qué característica ambiental facilita la transmisión hospitalaria de Acinetobacter baumannii?',
      a: 'Resiste la desecación y persiste en superficies secas (colchones, mesas de luz); causa infecciones de heridas quirúrgicas, bacteriemia y meningitis postquirúrgica, siendo la neumonía asociada a asistencia respiratoria la más frecuente.'
    },
    {
      id: 'b59', grupo: 'No fermentadores', org: 'Stenotrophomonas maltophilia', cat: 'General', tincion: 'negativo',
      q: '¿Qué tipo de paciente afecta Stenotrophomonas maltophilia?',
      a: 'Tiene bajo poder patógeno y afecta solo a huéspedes debilitados; produce infecciones nosocomiales (bacteriemia, endocarditis, meningitis postquirúrgica) con alta mortalidad por complicaciones.'
    },

    // --- Anaerobios no esporulados ---
    {
      id: 'b60', grupo: 'Anaerobios no esporulados', org: 'Veillonella', cat: 'General', tincion: 'negativo', tipoDx: 'directo',
      q: '¿Por qué se considera a Veillonella una bacteria "benéfica", qué infecciones puede causar y cómo se diagnostica?',
      a: 'Neutraliza los ácidos producidos por bacterias cariogénicas. Puede causar infecciones dentales, pulmonares (por aspiración), abdominales y del SNC cuando se disemina. Diagnóstico directo: cultivo en agar sangre suplementado con vitamina K y hemina (crecimiento lento, 2-3 días).'
    },
    {
      id: 'b61', grupo: 'Anaerobios no esporulados', org: 'Fusobacterium', cat: 'General', tincion: 'negativo', tipoDx: 'directo',
      q: '¿Qué asociación oncogénica tiene Fusobacterium, qué infecciones produce y cómo se diagnostica?',
      a: 'Sus adhesinas generan inflamación crónica ligada a cáncer colorrectal; produce lesiones periodontales, infecciones pleuropulmonares por broncoaspiración, abscesos cerebrales/hepáticos y endocarditis. Diagnóstico directo: igual que Veillonella, cultivo lento en agar sangre enriquecido.'
    },
    {
      id: 'b62', grupo: 'Anaerobios no esporulados', org: 'Peptococcus / Peptostreptococcus', cat: 'General', tincion: 'positivo', tipoDx: 'directo',
      q: '¿Qué características tienen Peptococcus y Peptostreptococcus, qué infecciones producen y cómo se diagnostican?',
      a: 'Son cocos gram positivos anaerobios, catalasa negativa, microbiota de boca e intestino; causan abscesos (cerebral, hepático), sinusitis, otitis, apendicitis, peritonitis y neumonía necrotizante. Diagnóstico directo: cultivo en agar sangre.'
    },

    // --- Clostridium ---
    {
      id: 'b63', grupo: 'Clostridium', org: 'Generalidades', cat: 'Características', tincion: 'positivo',
      q: '¿Qué caracteriza al género Clostridium en general?',
      a: 'Bacilos gram positivos, anaerobios estrictos, no exigentes, que forman esporas en su forma vegetativa; distribuidos en ambiente, animales, agua y alimentos.'
    },
    {
      id: 'b64', grupo: 'Clostridium', org: 'Clostridium perfringens', cat: 'Toxinas', tincion: 'positivo',
      q: '¿Qué producen las toxinas alfa y beta de Clostridium perfringens?',
      a: 'Alfa: fosfolipasa que causa hemólisis y necrosis tisular (principal factor de la gangrena gaseosa). Beta: lesiones necrotizantes del yeyuno con diarrea sanguinolenta, mortalidad del 50%.'
    },
    {
      id: 'b65', grupo: 'Clostridium', org: 'Clostridium perfringens', cat: 'Clínica', tincion: 'positivo',
      q: '¿Qué es la gangrena gaseosa y qué signo característico produce?',
      a: 'Infección monomicrobiana por falta de irrigación que alcanza fascias y músculo, generando abundante gas y una crepitación característica al palpar la zona.'
    },
    {
      id: 'b135', grupo: 'Clostridium', org: 'Clostridium perfringens', cat: 'Diagnóstico', tincion: 'positivo', tipoDx: 'directo',
      q: '¿Cómo se diagnostica Clostridium perfringens? (diagnóstico directo)',
      a: 'Agar sangre (doble halo de hemólisis), EIA para enterotoxina en heces, PCR y ELISA.'
    },
    {
      id: 'b66', grupo: 'Clostridium', org: 'Clostridium tetani', cat: 'Patogenia', tincion: 'positivo',
      q: '¿Cómo actúa la toxina tetanospasmina?',
      a: 'Asciende por los axones hasta la sinapsis, penetra las neuronas inhibitorias y bloquea la liberación de GABA, dejando a las neuronas motoras activadas de forma permanente (contracción generalizada).'
    },
    {
      id: 'b67', grupo: 'Clostridium', org: 'Clostridium tetani', cat: 'Clínica', tincion: 'positivo',
      q: '¿Cuáles son las manifestaciones clínicas tempranas y el riesgo mortal del tétanos?',
      a: 'Risa sardónica y trismus (contracción del masetero indica generalización sistémica); el riesgo mayor es el paro respiratorio por contracción de los músculos respiratorios.'
    },
    {
      id: 'b136', grupo: 'Clostridium', org: 'Clostridium tetani', cat: 'Diagnóstico', tincion: 'positivo', tipoDx: 'directo',
      q: '¿Cómo se diagnostica el tétanos y por qué es principalmente clínico?',
      a: 'El diagnóstico es fundamentalmente clínico; el cultivo es difícil (se puede usar Gram como apoyo). Dato clave: la toxina NO se detecta en el laboratorio.'
    },
    {
      id: 'b68', grupo: 'Clostridium', org: 'Clostridium botulinum', cat: 'Patogenia', tincion: 'positivo',
      q: '¿Cómo actúa la toxina botulínica?',
      a: 'Actúa a nivel presináptico en la placa motora, bloqueando la liberación de acetilcolina, lo que produce parálisis flácida (a diferencia del tétanos, que hiperactiva).'
    },
    {
      id: 'b69', grupo: 'Clostridium', org: 'Clostridium botulinum', cat: 'Clínica', tincion: 'positivo',
      q: '¿Cuáles son los primeros síntomas del botulismo?',
      a: 'Náuseas y vómitos, seguidos de visión borrosa, fotofobia, midriasis, disfagia, disfonía, disartria y ptosis palpebral; complicación grave: paro respiratorio.'
    },
    {
      id: 'b137', grupo: 'Clostridium', org: 'Clostridium botulinum', cat: 'Diagnóstico', tincion: 'positivo', tipoDx: 'directo',
      q: '¿Cómo se diagnostica el botulismo y cómo se toma la muestra?',
      a: 'Búsqueda de la toxina en heces y sangre, Gram y cultivo; la muestra siempre se obtiene por punción-aspiración.'
    },
    {
      id: 'b70', grupo: 'Clostridium', org: 'Clostridium difficile', cat: 'Patogenia', tincion: 'positivo',
      q: '¿Cómo se desencadena la enfermedad por Clostridium difficile?',
      a: 'Tras el uso de antibióticos, sobrecrece en el colon y libera la enterotoxina A y la citotoxina B, que aumentan la permeabilidad vascular y dañan las microvellosidades.'
    },
    {
      id: 'b71', grupo: 'Clostridium', org: 'Clostridium difficile', cat: 'Clínica', tincion: 'positivo',
      q: '¿Qué es la colitis pseudomembranosa?',
      a: 'Complicación grave de C. difficile con 15-20 deposiciones diarias, úlceras que pueden sangrar y riesgo de estallido colónico.'
    },
    {
      id: 'b138', grupo: 'Clostridium', org: 'Clostridium difficile', cat: 'Diagnóstico', tincion: 'positivo', tipoDx: 'directo',
      q: '¿Cómo se diagnostica la infección por Clostridium difficile? (diagnóstico directo)',
      a: 'Búsqueda de toxinas, cultivo, PCR y Gram, en muestra de heces.'
    },

    // --- Corineformes no esporulados ---
    {
      id: 'b139', grupo: 'Corineformes', org: 'Corynebacterium (oportunista)', cat: 'General', tincion: 'positivo',
      q: '¿Qué infecciones produce el género Corynebacterium como oportunista (distinto de C. diphtheriae)?',
      a: 'Otitis externas, infecciones urinarias, cistitis y formación de cálculos urinarios; es microbiota de piel y mucosas, resistente a antimicrobianos.'
    },
    {
      id: 'b72', grupo: 'Corineformes', org: 'Listeria monocytogenes', cat: 'Características', tincion: 'positivo',
      q: '¿Qué característica de crecimiento distingue a Listeria monocytogenes y cómo evade al sistema inmune?',
      a: 'Crece a altas y bajas temperaturas (incluso en heladera); vive dentro de los macrófagos y los destruye mediante la toxina listeriolisina.'
    },
    {
      id: 'b73', grupo: 'Corineformes', org: 'Listeria monocytogenes', cat: 'Clínica', tincion: 'positivo',
      q: '¿Por qué es especialmente grave la listeriosis en embarazadas?',
      a: 'La bacteria puede atravesar la placenta y causar aborto o infección congénita grave con abscesos diseminados en hígado, pulmón, riñón, bazo y encéfalo.'
    },
    {
      id: 'b74', grupo: 'Corineformes', org: 'Listeria monocytogenes', cat: 'Diagnóstico', tincion: 'positivo', tipoDx: 'directo',
      q: '¿Por qué no se hace diagnóstico serológico indirecto para Listeria?',
      a: 'Porque presenta reacciones cruzadas con otras bacterias; se prefiere el diagnóstico directo: hemocultivo, Gram de LCR y PCR.'
    },
    {
      id: 'b75', grupo: 'Corineformes', org: 'Lactobacillus', cat: 'General', tincion: 'positivo',
      q: '¿Qué rol protector cumple Lactobacillus en la vagina?',
      a: 'Fermenta el glucógeno vaginal produciendo ácido láctico, que disminuye el pH e inhibe el crecimiento de otras bacterias.'
    },
    {
      id: 'b76', grupo: 'Corineformes', org: 'Corynebacterium diphtheriae', cat: 'Patogenia', tincion: 'positivo',
      q: '¿Qué condición es necesaria para que Corynebacterium diphtheriae produzca la exotoxina diftérica?',
      a: 'Debe estar infectada por un fago (lisogenia); la bacteria nunca pasa a la sangre, solo la toxina, por eso no se hace diagnóstico serológico indirecto.'
    },
    {
      id: 'b77', grupo: 'Corineformes', org: 'Corynebacterium diphtheriae', cat: 'Clínica', tincion: 'positivo',
      q: '¿Cuál es el cuadro clínico local y sistémico de la difteria?',
      a: 'Faringolaringitis exudativa con pseudomembranas grisáceas que pueden obstruir la vía aérea; la toxina en sangre causa miocarditis, arritmias, parálisis neurológicas y necrosis tubular renal.'
    },

    // --- Bacillus ---
    {
      id: 'b78', grupo: 'Bacillus', org: 'Bacillus anthracis', cat: 'Características', tincion: 'positivo',
      q: '¿Qué forma característica tienen las colonias de Bacillus anthracis?',
      a: '"Cabeza de medusa": colonias con proyecciones radiales, no hemolíticas y pegajosas; posee esporas ovales subterminales muy resistentes.'
    },
    {
      id: 'b79', grupo: 'Bacillus', org: 'Bacillus anthracis', cat: 'Virulencia', tincion: 'positivo',
      q: '¿Qué tres componentes forman la toxina de Bacillus anthracis?',
      a: 'Antígeno protector (PA), factor de edema (EF) y factor letal (LF); actúan conjuntamente para penetrar la célula y ejercer su acción tóxica.'
    },
    {
      id: 'b80', grupo: 'Bacillus', org: 'Bacillus anthracis', cat: 'Clínica', tincion: 'positivo',
      q: '¿Cuáles son las tres formas clínicas del carbunco y cuál tiene mayor mortalidad?',
      a: 'Cutánea (pápula que ulcera y forma escara), digestiva (mortalidad cercana al 100%) y pulmonar (neumonía hemorrágica grave por inhalación de esporas).'
    },
    {
      id: 'b81', grupo: 'Bacillus', org: 'Bacillus cereus', cat: 'General', tincion: 'positivo',
      q: '¿Qué dos toxinas produce Bacillus cereus y qué cuadros generan?',
      a: 'Emetizante (termoestable, preformada en el alimento) causa náuseas y vómitos; diarreica (termolábil, producida in vivo) causa diarrea acuosa. Ambos cuadros son benignos y autolimitados.'
    },
    {
      id: 'b82', grupo: 'Bacillus', org: 'Bacillus stearothermophilus', cat: 'General', tincion: 'positivo',
      q: '¿Para qué se utiliza Bacillus stearothermophilus en la práctica clínica?',
      a: 'Como indicador biológico para controlar procesos de esterilización, por ser termófilo y esporular muy rápido.'
    },
    {
      id: 'b140', grupo: 'Bacillus', org: 'Bacillus subtilis', cat: 'General', tincion: 'positivo',
      q: '¿Qué infecciones puede causar Bacillus subtilis como oportunista?',
      a: 'Patologías oculares o infección de úlceras; es microbiota normal de la piel.'
    },

    // --- Staphylococcus ---
    {
      id: 'b83', grupo: 'Staphylococcus', org: 'Generalidades', cat: 'Características', tincion: 'positivo',
      q: '¿Qué caracteriza al género Staphylococcus?',
      a: 'Cocos gram positivos catalasa positivos, se disponen en racimos, no esporulados, resistentes a penicilina, presentes en mucosas y piel.'
    },
    {
      id: 'b84', grupo: 'Staphylococcus', org: 'Staphylococcus aureus', cat: 'Clínica', tincion: 'positivo',
      q: '¿Cuáles son los tres procesos patológicos que puede producir Staphylococcus aureus?',
      a: 'Invasivo (forunculosis, celulitis, abscesos, osteomielitis, endocarditis), toxigénico (gastroenteritis, síndrome de piel escaldada) e inmunopatológico (shock tóxico, mediado por superantígeno).'
    },
    {
      id: 'b85', grupo: 'Staphylococcus', org: 'Staphylococcus aureus', cat: 'Diagnóstico', tincion: 'positivo', tipoDx: 'directo',
      q: '¿Por qué no se usa el diagnóstico serológico (Ig) para infecciones por S. aureus?',
      a: 'Porque suelen ser infecciones agudas; se prefiere el diagnóstico directo: Gram, hemocultivo, cultivo en medio hipersalino y búsqueda de antígeno.'
    },
    {
      id: 'b86', grupo: 'Staphylococcus', org: 'Estafilococos coagulasa negativa', cat: 'General', tincion: 'positivo', tipoDx: 'directo',
      q: '¿Qué especies de estafilococos coagulasa negativa hay, a qué se asocian y cómo se diagnostican?',
      a: 'S. epidermidis (catéteres y prótesis, forma biofilm), S. saprophyticus (ITU en mujer joven) y S. lugdunensis (endocarditis en válvulas nativas y protésicas). Diagnóstico directo: cultivo de muestras.'
    },

    // --- Streptococcus ---
    {
      id: 'b87', grupo: 'Streptococcus', org: 'Generalidades', cat: 'Características', tincion: 'positivo',
      q: '¿Cómo se diferencia Streptococcus de Staphylococcus en la tinción y disposición?',
      a: 'Streptococcus es catalasa negativo y se dispone en cadenas (a diferencia de Staphylococcus, catalasa positivo, en racimos); es sensible a penicilina.'
    },
    {
      id: 'b88', grupo: 'Streptococcus', org: 'Streptococcus pyogenes', cat: 'Virulencia', tincion: 'positivo',
      q: '¿Cuál es el principal factor de virulencia de S. pyogenes y qué función cumple?',
      a: 'La proteína M, que junto con la cápsula le confiere propiedades antifagocíticas y facilita la adhesión a la faringe.'
    },
    {
      id: 'b89', grupo: 'Streptococcus', org: 'Streptococcus pyogenes', cat: 'Clínica', tincion: 'positivo',
      q: '¿Qué complicaciones autoinmunes post-infecciosas produce S. pyogenes?',
      a: 'Fiebre reumática (endocarditis reumática con daño valvular irreversible) y glomerulonefritis aguda postestreptocócica.'
    },
    {
      id: 'b141', grupo: 'Streptococcus', org: 'Streptococcus pyogenes', cat: 'Diagnóstico', tincion: 'positivo', tipoDx: 'ambos',
      q: '¿Cuándo se utiliza la búsqueda de inmunoglobulinas (Ig) en el diagnóstico de S. pyogenes? (directo e indirecto)',
      a: 'Directo (infección aguda): cultivo en agar sangre y búsqueda de antígeno. Indirecto: búsqueda de Ig y de ASO (antiestreptolisina O), reservado solo para las complicaciones inmunológicas.'
    },
    {
      id: 'b90', grupo: 'Streptococcus', org: 'Streptococcus agalactiae', cat: 'Clínica', tincion: 'positivo',
      q: '¿Por qué es clínicamente relevante Streptococcus agalactiae en el embarazo?',
      a: 'Coloniza la vagina y por transmisión perinatal causa infecciones graves en el recién nacido (neumonía, bacteriemia, meningitis).'
    },
    {
      id: 'b142', grupo: 'Streptococcus', org: 'Streptococcus agalactiae', cat: 'Diagnóstico', tincion: 'positivo', tipoDx: 'directo',
      q: '¿Cómo se diagnostica Streptococcus agalactiae? (diagnóstico directo)',
      a: 'Cultivo y búsqueda de antígeno; NO se realiza búsqueda de inmunoglobulinas.'
    },
    {
      id: 'b91', grupo: 'Streptococcus', org: 'Streptococcus viridans', cat: 'Clínica', tincion: 'positivo', tipoDx: 'directo',
      q: '¿Qué patología cardíaca se asocia a Streptococcus viridans, por qué vía llega y cómo se diagnostica?',
      a: 'Endocarditis subaguda, tras bacteriemia originada en la microbiota bucal donde normalmente reside, implantándose en válvulas naturales o protésicas. Diagnóstico directo: hemocultivo.'
    },
    {
      id: 'b92', grupo: 'Streptococcus', org: 'Streptococcus pneumoniae', cat: 'Clínica', tincion: 'positivo',
      q: '¿Qué importancia tiene el neumococo en la neumonía y meningitis?',
      a: 'Es el agente principal de neumonía adquirida en la comunidad en adultos, y la 2ª causa de meningitis bacteriana en niños tras Haemophilus influenzae.'
    },
    {
      id: 'b143', grupo: 'Streptococcus', org: 'Streptococcus pneumoniae', cat: 'Diagnóstico', tincion: 'positivo', tipoDx: 'directo',
      q: '¿Por qué no se usa diagnóstico indirecto (Ig) para el neumococo, y qué hallazgo de hemólisis lo distingue de S. pyogenes?',
      a: 'Porque son infecciones agudas. Diagnóstico directo: Gram, cultivo, PCR, búsqueda de Ag. A diferencia de S. pyogenes (beta-hemolítico), el neumococo NO es beta-hemolítico en cultivo.'
    },
    {
      id: 'b93', grupo: 'Streptococcus', org: 'Enterococcus', cat: 'Clínica', tincion: 'positivo', tipoDx: 'directo',
      q: '¿Qué lugar ocupa Enterococcus entre los agentes nosocomiales y cómo se diagnostica?',
      a: '2º agente de ITU nosocomial (tras E. coli) y 3º en bacteriemia intrahospitalaria (tras S. aureus y estafilococo coagulasa negativo). Diagnóstico directo: examen microscópico, Gram y cultivo.'
    },

    // --- Neisseria ---
    {
      id: 'b94', grupo: 'Neisseria', org: 'Generalidades', cat: 'Características', tincion: 'negativo',
      q: '¿Qué características morfológicas y metabólicas comparten las Neisseria?',
      a: 'Diplococos gram negativos con aspecto de "granos de café", aerobios estrictos, catalasa y oxidasa positivos, exigentes para cultivo y capsulados.'
    },
    {
      id: 'b95', grupo: 'Neisseria', org: 'Neisseria meningitidis', cat: 'Clínica', tincion: 'negativo',
      q: '¿Qué signo clínico obliga a sospechar meningococemia hasta demostrar lo contrario?',
      a: 'La combinación de meningitis con petequias, ya que puede asociarse a shock séptico y coagulación intravascular diseminada.'
    },
    {
      id: 'b96', grupo: 'Neisseria', org: 'Neisseria meningitidis', cat: 'Diagnóstico', tincion: 'negativo', tipoDx: 'directo',
      q: '¿Cómo se diagnostica la meningitis meningocócica? (diagnóstico directo)',
      a: 'Muestra de LCR: examen microscópico, Gram, PCR, cultivo en agar chocolate, hemocultivo y pruebas metabólicas.'
    },
    {
      id: 'b97', grupo: 'Neisseria', org: 'Neisseria gonorrhoeae', cat: 'Clínica', tincion: 'negativo',
      q: '¿Cómo se presenta la infección gonocócica en varones y mujeres?',
      a: 'Varones: uretritis purulenta de inicio rápido. Mujeres: cervicitis que puede ascender a endometritis y enfermedad pélvica inflamatoria. En ambos puede haber proctitis.'
    },
    {
      id: 'b98', grupo: 'Neisseria', org: 'Neisseria gonorrhoeae', cat: 'Clínica', tincion: 'negativo',
      q: '¿Qué complicación grave puede sufrir el recién nacido de madre con gonorrea?',
      a: 'Conjuntivitis gonocócica, una infección purulenta aguda que puede conducir a la ceguera total.'
    },
    {
      id: 'b144', grupo: 'Neisseria', org: 'Neisseria gonorrhoeae', cat: 'Diagnóstico', tincion: 'negativo', tipoDx: 'directo',
      q: '¿Cómo se diagnostica la gonorrea? (diagnóstico directo)',
      a: 'Observación microscópica del exudado teñido con Gram o azul de metileno, cultivo en medio exigente, prueba de oxidasa y PCR.'
    },

    // --- Espiroquetas ---
    {
      id: 'b99', grupo: 'Espiroquetas', org: 'Treponema pallidum', cat: 'Clínica', tincion: 'atipica',
      q: '¿Cómo es la lesión primaria de la sífilis?',
      a: 'El chancro: úlcera indolora, única, con exudado seroso, acompañada de adenopatía satélite indolora; cura espontáneamente.'
    },
    {
      id: 'b100', grupo: 'Espiroquetas', org: 'Treponema pallidum', cat: 'Clínica', tincion: 'atipica',
      q: '¿Qué caracteriza a la sífilis secundaria y terciaria?',
      a: 'Secundaria: cuadro pseudogripal con pápulas/nódulos en palmas y plantas, poliadenomegalia. Terciaria (tras años de latencia): lesiones granulomatosas gomosas, aneurisma aórtico y parálisis general progresiva.'
    },
    {
      id: 'b101', grupo: 'Espiroquetas', org: 'Treponema pallidum', cat: 'Diagnóstico', tincion: 'atipica', tipoDx: 'ambos',
      q: '¿Cómo se diagnostica la sífilis y por qué no se cultiva? (directo e indirecto)',
      a: 'Directo: microscopía de campo oscuro del raspado del chancro, búsqueda de Ag, IgM en el recién nacido. Indirecto: pruebas no treponémicas y treponémicas (detectan anticuerpos, son la base del diagnóstico). NO se cultiva.'
    },
    {
      id: 'b102', grupo: 'Espiroquetas', org: 'Leptospira', cat: 'Transmisión', tincion: 'atipica',
      q: '¿Cómo se transmite la leptospirosis?',
      a: 'Por contacto directo con orina, sangre u órganos de animales infectados, o indirectamente por el ambiente (aguas dulces, inundaciones); no entra por piel sana.'
    },
    {
      id: 'b103', grupo: 'Espiroquetas', org: 'Leptospira', cat: 'Clínica', tincion: 'atipica',
      q: '¿Cuál es el síntoma más característico de la leptospirosis grave?',
      a: 'La ictericia, con elevación de las transaminasas séricas; también puede haber síndrome renal, hepático, meníngeo, hemorrágico e hipoxia tisular.'
    },
    {
      id: 'b145', grupo: 'Espiroquetas', org: 'Leptospira', cat: 'Diagnóstico', tincion: 'atipica', tipoDx: 'ambos',
      q: '¿Qué métodos combina el diagnóstico de leptospirosis? (directo e indirecto)',
      a: 'Directo: cultivo (lento, más de 10 días), PCR y campo oscuro. Indirecto: búsqueda de Ig por ELISA. Se observa además anemia hemolítica e ictericia; muestra de sangre o LCR.'
    },

    // --- Micoplasmas ---
    {
      id: 'b104', grupo: 'Micoplasmas', org: 'Generalidades', cat: 'Características', tincion: 'atipica',
      q: '¿Qué hace únicos a los micoplasmas entre las bacterias y cómo afecta esto a su tinción?',
      a: 'Son las bacterias más pequeñas de vida libre, carecen de pared celular rígida y su membrana posee esteroles (único grupo bacteriano con esteroles); por eso NO se tiñen con Gram.'
    },
    {
      id: 'b105', grupo: 'Micoplasmas', org: 'Mycoplasma genitalium', cat: 'Clínica', tincion: 'atipica', tipoDx: 'directo',
      q: '¿Qué cuadros clínicos produce Mycoplasma genitalium y cómo se diagnostica?',
      a: 'Uretritis inespecífica de evolución lenta, prostatitis crónica, cervicitis y EPI; el único método diagnóstico válido es PCR (diagnóstico directo). NO se hace diagnóstico indirecto.'
    },
    {
      id: 'b106', grupo: 'Micoplasmas', org: 'Mycoplasma hominis', cat: 'General', tincion: 'atipica',
      q: '¿Qué forma característica tienen las colonias de Mycoplasma hominis?',
      a: 'Forma de "huevo frito"; se transmite también vía transplacentaria y causa infecciones respiratorias neonatales y parto prematuro.'
    },
    {
      id: 'b146', grupo: 'Micoplasmas', org: 'Mycoplasma hominis / Ureaplasma urealyticum', cat: 'Diagnóstico', tincion: 'atipica', tipoDx: 'directo',
      q: '¿Cómo se diagnostican Mycoplasma hominis y Ureaplasma urealyticum? (diagnóstico directo)',
      a: 'Igual que M. genitalium: solo por PCR; no se realiza diagnóstico indirecto.'
    },
    {
      id: 'b107', grupo: 'Micoplasmas', org: 'Ureaplasma urealyticum', cat: 'General', tincion: 'atipica',
      q: '¿Qué enzima distintiva posee Ureaplasma urealyticum y qué riesgo genera en el embarazo?',
      a: 'Posee ureasa, que altera las prostaglandinas durante el embarazo y puede causar infertilidad.'
    },

    // --- Mycobacterium ---
    {
      id: 'b108', grupo: 'Mycobacterium (BAAR)', org: 'Generalidades', cat: 'Características', tincion: 'atipica',
      q: '¿Qué le da a las micobacterias su resistencia característica y con qué técnica se tiñen?',
      a: 'Poseen ácidos micólicos en la pared que las hacen resistentes a la tinción de Gram, a antibióticos y a la fagocitosis; se tiñen con Ziehl-Neelsen (bacilos ácido-alcohol resistentes, BAAR).'
    },
    {
      id: 'b109', grupo: 'Mycobacterium (BAAR)', org: 'Mycobacterium tuberculosis', cat: 'Patogenia', tincion: 'atipica',
      q: '¿Cómo se forma el granuloma tuberculoso?',
      a: 'Los macrófagos alveolares fagocitan la bacteria, que escapa a la destrucción inhibiendo la fusión fagolisosómica; linfocitos y macrófagos rodean el foco formando el granuloma, que puede tener necrosis caseosa central.'
    },
    {
      id: 'b110', grupo: 'Mycobacterium (BAAR)', org: 'Mycobacterium tuberculosis', cat: 'Clínica', tincion: 'atipica',
      q: '¿Cuál es el cuadro clínico típico de la tuberculosis pulmonar?',
      a: 'Fiebre, anorexia, tos, astenia, adelgazamiento, dolor de pecho y expectoración con sangre; se forman abscesos que al drenar generan cavernas tuberculosas.'
    },
    {
      id: 'b111', grupo: 'Mycobacterium (BAAR)', org: 'Mycobacterium tuberculosis', cat: 'Diagnóstico', tincion: 'atipica', tipoDx: 'ambos',
      q: '¿Cómo se diagnostica la tuberculosis? (directo e indirecto)',
      a: 'Directo: tinción de Ziehl-Neelsen, cultivo lento (10-20 días), PCR y búsqueda de antígeno, en esputo o lavado pulmonar. Indirecto/inmunológico: prueba de tuberculina (PPD), que mide hipersensibilidad retardada previa.'
    },
    {
      id: 'b112', grupo: 'Mycobacterium (BAAR)', org: 'Mycobacterium leprae', cat: 'Características', tincion: 'atipica',
      q: '¿Por qué es difícil diagnosticar por cultivo a Mycobacterium leprae?',
      a: 'Porque no crece en medios de cultivo; el diagnóstico se apoya en la reacción de lepromina y en la tinción de Ziehl-Neelsen.'
    },
    {
      id: 'b113', grupo: 'Mycobacterium (BAAR)', org: 'Mycobacterium leprae', cat: 'Clínica', tincion: 'atipica',
      q: '¿En qué se diferencian la lepra tuberculoide y la lepromatosa según la respuesta inmune?',
      a: 'Tuberculoide: predomina respuesta celular (linfocitos T), mejor pronóstico, lesiones bien delimitadas, poco bacilífera. Lepromatosa: predomina respuesta humoral (Ig) ineficaz, peor pronóstico, lesiones extensas mal delimitadas, muy bacilífera.'
    },
    {
      id: 'b114', grupo: 'Mycobacterium (BAAR)', org: 'Mycobacterium leprae', cat: 'Diagnóstico', tincion: 'atipica', tipoDx: 'ambos',
      q: '¿Cómo se interpreta la reacción de lepromina? (diagnóstico directo e indirecto)',
      a: 'Es una prueba indirecta de hipersensibilidad: positiva indica forma benigna, abacilífera, no contagiosa y curable (tuberculoide); negativa indica forma severa, bacilífera, contagiosa y de pronóstico reservado (lepromatosa). Se complementa con tinción de Ziehl-Neelsen (directo).'
    },

    // --- Chlamydiaceae ---
    {
      id: 'b115', grupo: 'Chlamydiaceae', org: 'Generalidades', cat: 'Características', tincion: 'atipica',
      q: '¿Por qué las clamidias son bacterias intracelulares obligadas y qué dos formas tienen en su ciclo?',
      a: 'Carecen de vías metabólicas para obtener ATP, dependiendo de la célula eucariota. Tienen cuerpo elemental (forma infecciosa extracelular) y cuerpo reticulado (forma no infecciosa intracelular, de replicación).'
    },
    {
      id: 'b116', grupo: 'Chlamydiaceae', org: 'Chlamydia trachomatis', cat: 'Clínica', tincion: 'atipica',
      q: '¿Qué cuadros produce Chlamydia trachomatis según la vía de infección?',
      a: 'Uretritis no gonocócica y cervicitis (vía sexual), conjuntivitis folicular, linfogranuloma venéreo, tracoma (ceguera por conjuntivitis crónica) y neumonía en neonatos.'
    },
    {
      id: 'b117', grupo: 'Chlamydiaceae', org: 'Chlamydia trachomatis', cat: 'Diagnóstico', tincion: 'atipica', tipoDx: 'directo',
      q: '¿Cómo se toma la muestra y qué técnicas se usan para diagnosticar C. trachomatis? (diagnóstico directo)',
      a: 'Muestra de orina de primer chorro miccional o secreción endouretral/cervical; detección de cuerpos de inclusión con Giemsa, búsqueda de Ag, PCR, inmunofluorescencia y EIA.'
    },
    {
      id: 'b118', grupo: 'Chlamydiaceae', org: 'Chlamydophila pneumoniae', cat: 'Clínica', tincion: 'atipica',
      q: '¿Qué manifestaciones extra-respiratorias puede dar Chlamydophila pneumoniae?',
      a: 'Urticaria, eritema nodoso, fenómeno de Raynaud, afectación cardíaca y neurológica (encefalitis, síndrome de Guillain-Barré); la neumonía que produce es "atípica", benigna y de buen pronóstico.'
    },
    {
      id: 'b147', grupo: 'Chlamydiaceae', org: 'Chlamydophila pneumoniae', cat: 'Diagnóstico', tincion: 'atipica', tipoDx: 'ambos',
      q: '¿Qué métodos diagnósticos existen para Chlamydophila pneumoniae y qué particularidad tiene el cultivo? (directo e indirecto)',
      a: 'Directo: búsqueda de antígeno y PCR. Indirecto: serología por EIA o inmunofluorescencia. El cultivo es tan lento que en la práctica NO se realiza.'
    },
    {
      id: 'b119', grupo: 'Chlamydiaceae', org: 'Chlamydophila psittaci', cat: 'Clínica', tincion: 'atipica',
      q: '¿Qué es la psitacosis y cuál es su reservorio?',
      a: 'Zoonosis con reservorio en aves y animales domésticos; enfermedad sistémica febril que puede causar neumonía grave, conjuntivitis, enteritis, encefalitis y fetopatías.'
    },
    {
      id: 'b148', grupo: 'Chlamydiaceae', org: 'Chlamydophila psittaci', cat: 'Diagnóstico', tincion: 'atipica', tipoDx: 'ambos',
      q: '¿Cómo se diagnostica la psitacosis? (directo e indirecto)',
      a: 'Directo: examen microscópico con anticuerpos fluorescentes y PCR. Indirecto: microinmunofluorescencia y búsqueda de IgM.'
    },
  ],
  mc: [
    {
      id: 'mc1', grupo: 'Bacilos Gram(-) exigentes', org: 'Legionella pneumophila', cat: 'Opción múltiple', tincion: 'negativo', type: 'mc',
      q: 'Un paciente desarrolla neumonía multilobar grave tras usar la bañera de hidromasaje de un spa. ¿Cuál es el mecanismo de contagio más probable?',
      options: ['Persona a persona por gotas de saliva', 'Inhalación de aerosoles de agua contaminada', 'Picadura de un vector artrópodo', 'Ingesta de agua contaminada'],
      correct: 1, explain: 'Legionella se transmite por inhalación de aerosoles o vapor de agua contaminada; no hay transmisión persona a persona.'
    },
    {
      id: 'mc2', grupo: 'Bacilos Gram(-) exigentes', org: 'Brucella spp.', cat: 'Opción múltiple', tincion: 'negativo', type: 'mc',
      q: '¿Cuál es la vía de transmisión más frecuente de la brucelosis en zonas rurales?',
      options: ['Consumo de leche o quesos no pasteurizados', 'Picadura de garrapata', 'Inhalación de esporas del suelo', 'Mordedura de un animal doméstico'],
      correct: 0, explain: 'El consumo de leche y quesos no pasteurizados es la vía más frecuente, aunque también puede ingresar por contacto, inhalación o vía perinatal.'
    },
    {
      id: 'mc3', grupo: 'Bacilos Gram(-) exigentes', org: 'Bordetella pertussis', cat: 'Opción múltiple', tincion: 'negativo', type: 'mc',
      q: 'Un lactante presenta accesos de tos seguidos de vómitos e inspiración profunda con estridor. ¿En qué fase de la tos ferina se encuentra?',
      options: ['Catarral', 'Paroxística', 'Convalecencia', 'Incubación'],
      correct: 1, explain: 'La fase paroxística se caracteriza por accesos de tos seguidos de vómitos, con inspiraciones profundas por la sensación de asfixia.'
    },
    {
      id: 'mc4', grupo: 'Haemophilus', org: 'Haemophilus influenzae', cat: 'Opción múltiple', tincion: 'negativo', type: 'mc',
      q: '¿Qué factores de crecimiento requiere H. influenzae para desarrollarse en cultivo?',
      options: ['Factores V y X, en agar chocolate o sangre', 'Solo hierro y cetoácidos', 'Alta concentración de sal (halófilo)', 'Ureasa y bilis'],
      correct: 0, explain: 'H. influenzae necesita los factores V y X derivados de la hemoglobina; se demuestra su ausencia de hemólisis en cultivo.'
    },
    {
      id: 'mc5', grupo: 'Haemophilus', org: 'Haemophilus ducreyi', cat: 'Opción múltiple', tincion: 'negativo', type: 'mc',
      q: 'Un paciente presenta en la región genital una pápula dolorosa que ulceró, con adenopatía inguinal satélite. ¿Qué agente es más probable?',
      options: ['Treponema pallidum', 'Haemophilus ducreyi', 'Neisseria gonorrhoeae', 'Chlamydia trachomatis'],
      correct: 1, explain: 'A diferencia del chancro sifilítico (indoloro), el chancroide de H. ducreyi es doloroso y ulcerado.'
    },
    {
      id: 'mc6', grupo: 'Enterobacterias', org: 'Salmonella typhi', cat: 'Opción múltiple', tincion: 'negativo', type: 'mc',
      q: '¿Cuál de estos síntomas NO es característico de la fiebre tifoidea?',
      options: ['Fiebre alta sostenida', 'Bradicardia relativa', 'Diarrea profusa desde el inicio', 'Constipación'],
      correct: 2, explain: 'La diarrea NO es un síntoma característico de la fiebre tifoidea; predomina la constipación.'
    },
    {
      id: 'mc7', grupo: 'Enterobacterias', org: 'Shigella', cat: 'Opción múltiple', tincion: 'negativo', type: 'mc',
      q: '¿Qué resultado del test de Sereny distingue a Shigella de Salmonella?',
      options: ['Shigella: negativo / Salmonella: positivo', 'Shigella: positivo / Salmonella: negativo', 'Ambas dan positivo', 'Ninguna se evalúa con este test'],
      correct: 1, explain: 'El test de Sereny (queratoconjuntivitis en cobayo) es positivo para Shigella, que sí invade activamente la célula epitelial.'
    },
    {
      id: 'mc8', grupo: 'Enterobacterias', org: 'Yersinia pestis', cat: 'Opción múltiple', tincion: 'negativo', type: 'mc',
      q: '¿Cuál es la forma clínica de la peste con mayor gravedad y mortalidad?',
      options: ['Bubónica', 'Septicémica', 'Neumónica', 'Cutánea'],
      correct: 2, explain: 'La forma neumónica es la más grave, con insuficiencia respiratoria y esputo sanguinolento.'
    },
    {
      id: 'mc9', grupo: 'E. coli patógena', org: 'E. coli enterohemorrágica (EHEC)', cat: 'Opción múltiple', tincion: 'negativo', type: 'mc',
      q: '¿Cuál es la complicación sistémica más temida de la infección por E. coli O157:H7?',
      options: ['Fiebre tifoidea', 'Síndrome urémico hemolítico', 'Colitis pseudomembranosa', 'Botulismo'],
      correct: 1, explain: 'Las toxinas Shiga (STX1/STX2) pueden producir síndrome urémico hemolítico, especialmente en niños y ancianos.'
    },
    {
      id: 'mc10', grupo: 'E. coli patógena', org: 'E. coli enterotoxigénica (ETEC)', cat: 'Opción múltiple', tincion: 'negativo', type: 'mc',
      q: '¿Cuál es el mecanismo de acción de las toxinas LT y LS de ETEC?',
      options: ['Invaden y destruyen el epitelio intestinal', 'Aumentan el AMPc causando salida de agua e iones', 'Bloquean la síntesis proteica ribosomal', 'Activan al sistema del complemento'],
      correct: 1, explain: 'Aumentan el AMPc intracelular, alterando las bombas iónicas y generando diarrea acuosa secretora.'
    },
    {
      id: 'mc11', grupo: 'Bacilos Gram(-) curvados', org: 'Helicobacter pylori', cat: 'Opción múltiple', tincion: 'negativo', type: 'mc',
      q: '¿Qué mecanismo le permite a H. pylori sobrevivir a la acidez gástrica?',
      options: ['Produce ureasa que neutraliza el ácido con amoníaco', 'Forma esporas resistentes', 'Vive dentro de macrófagos', 'Produce una cápsula de mucopolisacáridos'],
      correct: 0, explain: 'La ureasa hidroliza la urea en amoníaco y CO2, alcalinizando el microambiente y facilitando su supervivencia.'
    },
    {
      id: 'mc12', grupo: 'Vibrio', org: 'Vibrio cholerae', cat: 'Opción múltiple', tincion: 'negativo', type: 'mc',
      q: '¿Cómo son característicamente las heces de un paciente con cólera?',
      options: ['Con moco, pus y sangre', 'Aspecto de agua de arroz, sin sangre ni pus', 'Melena', 'Esteatorreicas'],
      correct: 1, explain: 'Son diarreas acuosas abundantes con aspecto de "agua de arroz", sin componente inflamatorio.'
    },
    {
      id: 'mc13', grupo: 'No fermentadores', org: 'Pseudomonas aeruginosa', cat: 'Opción múltiple', tincion: 'negativo', type: 'mc',
      q: 'Un paciente con lentes de contacto desarrolla queratitis. ¿Qué germen es el sospechoso clásico?',
      options: ['Staphylococcus aureus', 'Pseudomonas aeruginosa', 'Streptococcus pyogenes', 'Neisseria gonorrhoeae'],
      correct: 1, explain: 'Pseudomonas se asocia clásicamente a queratitis por lentes de contacto, además de otitis externa por piscinas y foliculitis por depilación.'
    },
    {
      id: 'mc14', grupo: 'Clostridium', org: 'Clostridium perfringens', cat: 'Opción múltiple', tincion: 'positivo', type: 'mc',
      q: '¿Qué toxina de C. perfringens es la principal responsable de la gangrena gaseosa?',
      options: ['Toxina beta', 'Toxina épsilon', 'Toxina alfa', 'Toxina iota'],
      correct: 2, explain: 'La toxina alfa (fosfolipasa) produce hemólisis y necrosis tisular masiva, siendo el principal factor de la gangrena gaseosa.'
    },
    {
      id: 'mc15', grupo: 'Clostridium', org: 'Clostridium tetani', cat: 'Opción múltiple', tincion: 'positivo', type: 'mc',
      q: '¿Cuál es el mecanismo de acción de la tetanospasmina?',
      options: ['Bloquea la liberación de acetilcolina en la placa motora', 'Bloquea la liberación de GABA en neuronas inhibitorias', 'Activa masivamente los receptores nicotínicos', 'Destruye la vaina de mielina directamente'],
      correct: 1, explain: 'Bloquea la liberación de GABA de las neuronas inhibitorias, dejando a las motoneuronas activadas permanentemente (contractura generalizada), a diferencia del botulismo que bloquea acetilcolina.'
    },
    {
      id: 'mc16', grupo: 'Clostridium', org: 'Clostridium botulinum', cat: 'Opción múltiple', tincion: 'positivo', type: 'mc',
      q: 'A diferencia del tétanos, el botulismo produce...',
      options: ['Parálisis espástica generalizada', 'Parálisis flácida por bloqueo de acetilcolina', 'Convulsiones tónico-clónicas', 'Rigidez de nuca con fiebre'],
      correct: 1, explain: 'La toxina botulínica bloquea la liberación de acetilcolina en la placa motora presináptica, produciendo parálisis flácida.'
    },
    {
      id: 'mc17', grupo: 'Clostridium', org: 'Clostridium difficile', cat: 'Opción múltiple', tincion: 'positivo', type: 'mc',
      q: '¿Qué factor predisponente clásico desencadena la colitis pseudomembranosa?',
      options: ['Uso previo de antibióticos', 'Ingesta de alimentos enlatados', 'Contacto con agua de inundación', 'Picadura de garrapata'],
      correct: 0, explain: 'El uso de antibióticos altera la flora normal, permitiendo el sobrecrecimiento de C. difficile y la liberación de sus toxinas A y B.'
    },
    {
      id: 'mc18', grupo: 'Corineformes', org: 'Listeria monocytogenes', cat: 'Opción múltiple', tincion: 'positivo', type: 'mc',
      q: '¿Por qué Listeria monocytogenes es especialmente peligrosa durante el embarazo?',
      options: ['Produce malformaciones por teratogenicidad directa del LPS', 'Atraviesa la placenta y puede causar aborto o infección congénita grave', 'Solo afecta la vía urinaria materna', 'No representa riesgo alguno para el feto'],
      correct: 1, explain: 'Listeria puede atravesar la barrera placentaria y producir aborto o infección congénita grave con abscesos diseminados.'
    },
    {
      id: 'mc19', grupo: 'Corineformes', org: 'Corynebacterium diphtheriae', cat: 'Opción múltiple', tincion: 'positivo', type: 'mc',
      q: '¿Qué condición necesita Corynebacterium diphtheriae para producir la exotoxina diftérica?',
      options: ['Estar infectada por un bacteriófago (lisogenia)', 'Crecer en anaerobiosis estricta', 'Formar esporas', 'Encontrarse en biofilm'],
      correct: 0, explain: 'Solo las cepas lisogenizadas por un fago portador del gen tox pueden producir la exotoxina diftérica.'
    },
    {
      id: 'mc20', grupo: 'Bacillus', org: 'Bacillus anthracis', cat: 'Opción múltiple', tincion: 'positivo', type: 'mc',
      q: '¿Cuál es la forma clínica de carbunco con mayor mortalidad?',
      options: ['Cutánea', 'Digestiva', 'Pulmonar por inhalación', 'Todas tienen igual mortalidad'],
      correct: 1, explain: 'La forma digestiva tiene una mortalidad cercana al 100%, aunque la pulmonar también es muy grave.'
    },
    {
      id: 'mc21', grupo: 'Staphylococcus', org: 'Staphylococcus aureus', cat: 'Opción múltiple', tincion: 'positivo', type: 'mc',
      q: '¿Cuál de los siguientes NO es uno de los tres procesos patológicos clásicos de S. aureus?',
      options: ['Invasivo', 'Toxigénico', 'Inmunopatológico', 'Granulomatoso crónico'],
      correct: 3, explain: 'Los tres procesos son invasivo, toxigénico e inmunopatológico; el patrón granulomatoso crónico es típico de otros agentes.'
    },
    {
      id: 'mc22', grupo: 'Staphylococcus', org: 'Estafilococos coagulasa negativa', cat: 'Opción múltiple', tincion: 'positivo', type: 'mc',
      q: '¿Qué especie de estafilococo coagulasa negativa es causa frecuente de infección urinaria en mujeres jóvenes?',
      options: ['Staphylococcus epidermidis', 'Staphylococcus saprophyticus', 'Staphylococcus lugdunensis', 'Staphylococcus aureus'],
      correct: 1, explain: 'S. saprophyticus es una causa típica de ITU en mujeres jóvenes sexualmente activas.'
    },
    {
      id: 'mc23', grupo: 'Streptococcus', org: 'Streptococcus pyogenes', cat: 'Opción múltiple', tincion: 'positivo', type: 'mc',
      q: '¿Cuál de estas NO es una complicación autoinmune post-infecciosa de S. pyogenes?',
      options: ['Fiebre reumática', 'Glomerulonefritis aguda postestreptocócica', 'Síndrome urémico hemolítico', 'Ambas A y B son correctas como complicaciones'],
      correct: 2, explain: 'El síndrome urémico hemolítico se asocia a E. coli enterohemorrágica (toxina Shiga), no a S. pyogenes.'
    },
    {
      id: 'mc24', grupo: 'Streptococcus', org: 'Streptococcus pneumoniae', cat: 'Opción múltiple', tincion: 'positivo', type: 'mc',
      q: '¿Cuál es la segunda causa de meningitis bacteriana en niños, después de Haemophilus influenzae?',
      options: ['Streptococcus pneumoniae', 'Neisseria meningitidis', 'Listeria monocytogenes', 'Streptococcus agalactiae'],
      correct: 0, explain: 'El neumococo es la segunda causa de meningitis bacteriana y de otitis media en niños, tras H. influenzae.'
    },
    {
      id: 'mc25', grupo: 'Neisseria', org: 'Neisseria meningitidis', cat: 'Opción múltiple', tincion: 'negativo', type: 'mc',
      q: 'Ante un paciente con fiebre, cefalea y petequias, ¿qué diagnóstico se debe asumir hasta demostrar lo contrario?',
      options: ['Fiebre tifoidea', 'Meningococemia', 'Escarlatina', 'Botulismo'],
      correct: 1, explain: 'La combinación de meningitis o fiebre con petequias obliga a sospechar meningococemia por el riesgo de shock séptico y CID.'
    },
    {
      id: 'mc26', grupo: 'Neisseria', org: 'Neisseria gonorrhoeae', cat: 'Opción múltiple', tincion: 'negativo', type: 'mc',
      q: '¿Qué complicación oftálmica grave puede sufrir un recién nacido de madre con gonorrea no tratada?',
      options: ['Cataratas congénitas', 'Conjuntivitis purulenta que puede llevar a la ceguera', 'Glaucoma neonatal', 'Desprendimiento de retina'],
      correct: 1, explain: 'La conjuntivitis gonocócica neonatal es una infección purulenta aguda que puede causar ceguera total si no se trata.'
    },
    {
      id: 'mc27', grupo: 'Espiroquetas', org: 'Treponema pallidum', cat: 'Opción múltiple', tincion: 'atipica', type: 'mc',
      q: '¿Cómo se caracteriza el chancro sifilítico primario?',
      options: ['Doloroso, múltiple, con base purulenta', 'Indoloro, único, con exudado seroso', 'Pruriginoso, vesicular, en racimos', 'Necrótico, con escara negra'],
      correct: 1, explain: 'El chancro sifilítico es indoloro, único y de exudado seroso, con adenopatía satélite también indolora — a diferencia del chancroide (doloroso).'
    },
    {
      id: 'mc28', grupo: 'Espiroquetas', org: 'Treponema pallidum', cat: 'Opción múltiple', tincion: 'atipica', type: 'mc',
      q: '¿Con qué técnica se diagnostica directamente el treponema en el chancro, dado que NO se cultiva?',
      options: ['Cultivo en agar McConkey', 'Microscopía de campo oscuro', 'Tinción de Ziehl-Neelsen', 'Prueba de ureasa'],
      correct: 1, explain: 'Treponema pallidum no se cultiva; el diagnóstico directo del chancro se hace por microscopía de campo oscuro.'
    },
    {
      id: 'mc29', grupo: 'Espiroquetas', org: 'Leptospira', cat: 'Opción múltiple', tincion: 'atipica', type: 'mc',
      q: '¿Cuál es el síntoma más característico de la leptospirosis grave (enfermedad de Weil)?',
      options: ['Ictericia', 'Exantema maculopapular', 'Parálisis flácida', 'Tos convulsa'],
      correct: 0, explain: 'La ictericia, con elevación de transaminasas, es el síntoma más característico del cuadro grave.'
    },
    {
      id: 'mc30', grupo: 'Micoplasmas', org: 'Mycoplasma genitalium', cat: 'Opción múltiple', tincion: 'atipica', type: 'mc',
      q: '¿Por qué Mycoplasma genitalium no se tiñe con la técnica de Gram?',
      options: ['Porque es intracelular obligado', 'Porque carece de pared celular rígida', 'Porque es ácido-alcohol resistente', 'Porque su pared tiene exceso de lípidos'],
      correct: 1, explain: 'Los micoplasmas carecen de pared celular, por lo que no retienen los colorantes de Gram; se visualizan con Giemsa.'
    },
    {
      id: 'mc31', grupo: 'Mycobacterium (BAAR)', org: 'Mycobacterium tuberculosis', cat: 'Opción múltiple', tincion: 'atipica', type: 'mc',
      q: '¿Qué le confiere a M. tuberculosis su resistencia a la tinción de Gram y a la fagocitosis?',
      options: ['La cápsula de polisacáridos', 'Los ácidos micólicos de la pared', 'El lipopolisacárido de membrana externa', 'La producción de esporas'],
      correct: 1, explain: 'Los ácidos micólicos hacen a la pared resistente a Gram, antibióticos y fagocitosis; requiere tinción de Ziehl-Neelsen (BAAR).'
    },
    {
      id: 'mc32', grupo: 'Mycobacterium (BAAR)', org: 'Mycobacterium tuberculosis', cat: 'Opción múltiple', tincion: 'atipica', type: 'mc',
      q: '¿Qué caracteriza histológicamente al granuloma tuberculoso en su centro?',
      options: ['Necrosis caseosa', 'Necrosis licuefactiva', 'Necrosis grasa', 'Necrosis fibrinoide'],
      correct: 0, explain: 'El granuloma tuberculoso presenta típicamente necrosis caseosa en su centro.'
    },
    {
      id: 'mc33', grupo: 'Mycobacterium (BAAR)', org: 'Mycobacterium leprae', cat: 'Opción múltiple', tincion: 'atipica', type: 'mc',
      q: 'Una reacción de lepromina positiva indica...',
      options: ['Lepra lepromatosa, forma grave y contagiosa', 'Lepra tuberculoide, forma benigna y no contagiosa', 'Ausencia de infección', 'Necesidad de biopsia inmediata'],
      correct: 1, explain: 'La lepromina positiva se asocia a la forma tuberculoide, de buen pronóstico, abacilífera y no contagiosa.'
    },
    {
      id: 'mc34', grupo: 'Chlamydiaceae', org: 'Chlamydia trachomatis', cat: 'Opción múltiple', tincion: 'atipica', type: 'mc',
      q: '¿Cuál es la forma infecciosa extracelular en el ciclo biológico de Chlamydia?',
      options: ['Cuerpo reticulado', 'Cuerpo elemental', 'Cuerpo de inclusión citoplasmático', 'Esporangio'],
      correct: 1, explain: 'El cuerpo elemental es la forma extracelular infecciosa; el cuerpo reticulado es la forma intracelular de replicación, no infecciosa.'
    },
    {
      id: 'mc35', grupo: 'Chlamydiaceae', org: 'Chlamydia trachomatis', cat: 'Opción múltiple', tincion: 'atipica', type: 'mc',
      q: '¿Qué complicación oftálmica crónica puede llevar a la ceguera y es causada por C. trachomatis?',
      options: ['Tracoma', 'Uveítis anterior', 'Retinopatía diabética', 'Glaucoma de ángulo cerrado'],
      correct: 0, explain: 'El tracoma es una conjuntivitis folicular crónica de mal pronóstico que puede causar ceguera.'
    },
    {
      id: 'mc36', grupo: 'Enterobacterias', org: 'Salmonella (gastroentérica) vs typhi', cat: 'Opción múltiple', tincion: 'negativo', type: 'mc',
      q: '¿Qué diferencia principal distingue a la Salmonella no tifoidea (gastroentérica) de S. typhi?',
      options: ['S. typhi causa diarrea profusa y la gastroentérica no', 'La gastroentérica invade localmente el intestino, S. typhi produce bacteriemia sistémica sin diarrea característica', 'Ambas afectan solo a inmunodeprimidos', 'No hay diferencias clínicas relevantes'],
      correct: 1, explain: 'La forma gastroentérica queda localizada con inflamación intestinal; S. typhi atraviesa la mucosa y causa bacteriemia sistémica grave, sin diarrea como síntoma predominante.'
    },
    {
      id: 'mc37', grupo: 'E. coli patógena', org: 'Enterobacterias oportunistas', cat: 'Opción múltiple', tincion: 'negativo', type: 'mc',
      q: '¿Qué enterobacteria oportunista se asocia clásicamente a cálculos renales de estruvita por su actividad ureasa?',
      options: ['Klebsiella pneumoniae', 'Proteus mirabilis', 'Serratia marcescens', 'Enterobacter cloacae'],
      correct: 1, explain: 'Proteus mirabilis desdobla la urea en amoníaco, alcalinizando la orina y favoreciendo la formación de cálculos de estruvita.'
    },
    {
      id: 'mc38', grupo: 'Bacilos Gram(-) curvados', org: 'Campylobacter jejuni', cat: 'Opción múltiple', tincion: 'negativo', type: 'mc',
      q: '¿Qué complicación neurológica autoinmune se asocia a Campylobacter jejuni?',
      options: ['Síndrome de Guillain-Barré', 'Esclerosis múltiple', 'Miastenia gravis', 'Encefalitis herpética'],
      correct: 0, explain: 'Por reacción cruzada (mimetismo molecular), C. jejuni se asocia al síndrome de Guillain-Barré.'
    },
    {
      id: 'mc39', grupo: 'Streptococcus', org: 'Streptococcus agalactiae', cat: 'Opción múltiple', tincion: 'positivo', type: 'mc',
      q: '¿Por qué vía se transmite Streptococcus agalactiae al recién nacido?',
      options: ['Transplacentaria en el primer trimestre', 'Perinatal, durante el paso por el canal de parto', 'Por lactancia materna', 'Por vía respiratoria en la sala de neonatología'],
      correct: 1, explain: 'Coloniza la vagina materna y se transmite al neonato durante el parto (vía perinatal).'
    },
    {
      id: 'mc40', grupo: 'Anaerobios no esporulados', org: 'Peptococcus / Peptostreptococcus', cat: 'Opción múltiple', tincion: 'positivo', type: 'mc',
      q: '¿Qué distingue tintorialmente a Peptococcus/Peptostreptococcus de Veillonella y Fusobacterium?',
      options: ['Son cocos gram positivos, mientras que Veillonella y Fusobacterium son gram negativos', 'Son bacilos gram negativos igual que los otros dos', 'No forman parte de la microbiota normal', 'Son aerobios estrictos'],
      correct: 0, explain: 'Peptococcus/Peptostreptococcus son cocos gram positivos anaerobios; Veillonella (diplococo) y Fusobacterium (bacilo) son gram negativos.'
    },
    {
      id: 'mc41', grupo: 'Bacillus', org: 'Bacillus cereus', cat: 'Opción múltiple', tincion: 'positivo', type: 'mc',
      q: 'Un paciente presenta vómitos a las 6 horas de comer arroz recalentado. ¿Qué tipo de toxina de B. cereus es responsable?',
      options: ['Toxina diarreica, termolábil', 'Toxina emetizante, termoestable, preformada en el alimento', 'Toxina Shiga', 'Enterotoxina termolábil tipo LT'],
      correct: 1, explain: 'La toxina emetizante es termoestable y se preforma en el alimento (típicamente arroz), produciendo vómitos precoces.'
    },
    {
      id: 'mc42', grupo: 'Vibrio', org: 'Vibrio parahaemolyticus', cat: 'Opción múltiple', tincion: 'negativo', type: 'mc',
      q: '¿Qué alimento se asocia clásicamente a la infección por Vibrio parahaemolyticus?',
      options: ['Leche no pasteurizada', 'Mariscos y pescados de agua salada', 'Carne de vaca mal cocida', 'Conservas caseras'],
      correct: 1, explain: 'Es halófilo, típicamente asociado al consumo de mariscos y pescados de agua salada.'
    },
    {
      id: 'mc43', grupo: 'No fermentadores', org: 'Acinetobacter baumannii', cat: 'Opción múltiple', tincion: 'negativo', type: 'mc',
      q: '¿Qué característica ambiental facilita que Acinetobacter baumannii persista en el ambiente hospitalario?',
      options: ['Forma esporas resistentes', 'Resiste la desecación en superficies secas', 'Requiere estrictamente anaerobiosis', 'Necesita temperaturas mayores a 42°C'],
      correct: 1, explain: 'Acinetobacter puede resistir la desecación y sobrevivir en superficies secas como colchones y mesas de luz.'
    },
    {
      id: 'mc44', grupo: 'Anaerobios no esporulados', org: 'Fusobacterium', cat: 'Opción múltiple', tincion: 'negativo', type: 'mc',
      q: '¿Con qué tipo de cáncer se ha asociado a Fusobacterium por su efecto proinflamatorio crónico?',
      options: ['Cáncer de pulmón', 'Cáncer colorrectal', 'Cáncer gástrico', 'Cáncer de mama'],
      correct: 1, explain: 'Sus adhesinas generan inflamación crónica que activa señales oncogénicas asociadas al cáncer colorrectal.'
    },
    {
      id: 'mc45', grupo: 'Streptococcus', org: 'Enterococcus', cat: 'Opción múltiple', tincion: 'positivo', type: 'mc',
      q: '¿Cuál es el proceso clínico más frecuente producido por Enterococcus?',
      options: ['Meningitis', 'Bacteriemia', 'Neumonía', 'Faringitis'],
      correct: 1, explain: 'La bacteriemia es el proceso más común producido por Enterococcus, siendo el 3er agente nosocomial en frecuencia tras S. aureus y estafilococo coagulasa negativo.'
    },
    {
      id: 'mc46', grupo: 'Micoplasmas', org: 'Ureaplasma urealyticum', cat: 'Opción múltiple', tincion: 'atipica', type: 'mc',
      q: '¿Qué enzima distintiva posee Ureaplasma urealyticum y qué riesgo genera en el embarazo?',
      options: ['Coagulasa; riesgo de trombosis', 'Ureasa; puede alterar prostaglandinas y causar infertilidad', 'Catalasa; protege de fagocitosis', 'Hialuronidasa; facilita diseminación ósea'],
      correct: 1, explain: 'Produce ureasa, generando amoníaco que altera las prostaglandinas del embarazo, con riesgo de infertilidad.'
    },
    {
      id: 'mc47', grupo: 'Chlamydiaceae', org: 'Chlamydophila psittaci', cat: 'Opción múltiple', tincion: 'atipica', type: 'mc',
      q: '¿Cuál es el reservorio característico de Chlamydophila psittaci?',
      options: ['Roedores', 'Aves y animales domésticos', 'Garrapatas', 'Agua dulce estancada'],
      correct: 1, explain: 'Es una zoonosis con reservorio en aves (loros, palomas) y animales domésticos; se transmite por inhalación.'
    },
    {
      id: 'mc48', grupo: 'Corineformes', org: 'Corynebacterium diphtheriae', cat: 'Opción múltiple', tincion: 'positivo', type: 'mc',
      q: '¿Por qué NO se realiza diagnóstico serológico indirecto para la difteria?',
      options: ['Porque la bacteria nunca pasa a la sangre, solo su toxina', 'Porque no genera respuesta inmune detectable', 'Porque los anticuerpos reaccionan de forma cruzada con otras bacterias', 'Porque es una infección crónica sin fase aguda'],
      correct: 0, explain: 'La bacteria permanece localizada en la faringe; solo la exotoxina pasa a la sangre, por lo que el diagnóstico indirecto no es útil.'
    },
    {
      id: 'mc49', grupo: 'Bacilos Gram(-) exigentes', org: 'Bordetella pertussis / Corynebacterium diphtheriae', cat: 'Opción múltiple', tincion: 'negativo', type: 'mc',
      q: '¿Cuál de estas afirmaciones sobre el período de incubación es correcta?',
      options: ['La tos ferina tiene incubación de 6-10 días; la difteria de 2-5 días', 'Ambas tienen incubación de 1 día', 'La difteria tiene incubación de 6 meses', 'Ninguna tiene período de incubación definido'],
      correct: 0, explain: 'Bordetella pertussis: incubación 6-10 días. Corynebacterium diphtheriae: incubación 2-5 días.'
    },
    {
      id: 'mc50', grupo: 'Enterobacterias', org: 'Generalidades', cat: 'Opción múltiple', tincion: 'negativo', type: 'mc',
      q: '¿Qué antígeno de las enterobacterias corresponde a la cápsula (a veces llamado Vi)?',
      options: ['Antígeno O', 'Antígeno H', 'Antígeno K', 'Antígeno Vi bis'],
      correct: 2, explain: 'El antígeno K (capsular) también se conoce como Vi en Salmonella typhi; O es el somático y H el flagelar.'
    },
    {
      id: 'mc51', grupo: 'Micoplasmas', org: 'Generalidades', cat: 'Opción múltiple', tincion: 'atipica', type: 'mc',
      q: '¿Qué componente de membrana, único entre las bacterias, poseen los micoplasmas?',
      options: ['Ácidos micólicos', 'Esteroles', 'Lipopolisacárido O-específico', 'Peptidoglucano reforzado'],
      correct: 1, explain: 'Los micoplasmas son el único grupo bacteriano cuya membrana contiene esteroles, ya que carecen de pared celular.'
    },
    {
      id: 'mc52', grupo: 'Bacillus', org: 'Bacillus stearothermophilus', cat: 'Opción múltiple', tincion: 'positivo', type: 'mc',
      q: '¿Para qué se utiliza Bacillus stearothermophilus en la práctica de laboratorio?',
      options: ['Como vector de vacunas', 'Como indicador biológico de esterilización', 'Como probiótico intestinal', 'Como cepa de referencia para antibiograma de Gram negativos'],
      correct: 1, explain: 'Por su termofilia y rápida esporulación se usa como indicador biológico para validar procesos de esterilización (autoclave).'
    },
    {
      id: 'mc53', grupo: 'Streptococcus', org: 'Streptococcus viridans', cat: 'Opción múltiple', tincion: 'positivo', type: 'mc',
      q: '¿En qué situación clínica se implica típicamente a Streptococcus viridans?',
      options: ['Faringitis aguda con exudado purulento', 'Endocarditis subaguda tras bacteriemia de origen bucal', 'Meningitis neonatal', 'Síndrome de piel escaldada'],
      correct: 1, explain: 'Al ser microbiota bucal, tras procedimientos dentales puede generar bacteriemia que se implanta en válvulas cardíacas, causando endocarditis subaguda.'
    },
    {
      id: 'mc54', grupo: 'E. coli patógena', org: 'Klebsiella pneumoniae', cat: 'Opción múltiple', tincion: 'negativo', type: 'mc',
      q: 'Dentro del tubo digestivo, Klebsiella pneumoniae se comporta como...',
      options: ['Patógeno estricto siempre', 'Microbiota comensal, patógena solo si sale de su sitio habitual', 'Parásito intracelular obligado', 'Un hongo dimórfico'],
      correct: 1, explain: 'Es parte de la microbiota comensal intestinal; se vuelve patógena oportunista al colonizar otros sitios (vía urinaria, respiratoria, heridas).'
    },
    {
      id: 'mc55', grupo: 'Bacilos Gram(-) exigentes', org: 'Legionella pneumophila', cat: 'Opción múltiple', tincion: 'negativo', type: 'mc',
      q: '¿De qué célula es parásito intracelular obligado Legionella en el ambiente, antes de infectar al ser humano?',
      options: ['Protozoos de vida libre', 'Eritrocitos', 'Células epiteliales vegetales', 'Artrópodos vectores'],
      correct: 0, explain: 'Legionella es parásito intracelular obligado de protozoos de vida libre presentes en el agua, lo que le permite sobrevivir y replicarse en el ambiente.'
    },
  ]
};
