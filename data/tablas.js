/* Datos del módulo: Tablas — fuente: tablas_de_microbiologia.pdf
   A diferencia de los otros módulos, éste NO repite organismos ya vistos en
   Bacterias/Hongos/Parásitos/Virus. Se enfoca en lo que ese PDF aporta de
   realmente nuevo: nombres y esquemas de vacunas, ventanas diagnósticas
   precisas, un diferencial por síndrome (ITU) y un puñado de organismos
   que no estaban en los otros PDFs (Pneumocystis, Burkholderia). */
window.MODULE = {
  title: 'Tablas (complementos)',
  source: 'tablas_de_microbiologia.pdf',
  storageKey: 'tablas',
  categoryColors: {
    vacunas: { label: 'Vacunas', color: '#5fb88a' },
    ventanas: { label: 'Ventanas diagnósticas', color: '#5b9bd8' },
    sindromes: { label: 'Síndromes y diferenciales', color: '#e0568e' },
    complementos: { label: 'Organismos no cubiertos', color: '#d8a53d' }
  },
  cards: [
    // ============ VACUNAS ============
    {
      id: 't1', grupo: 'Vacunas', org: 'Dengue', cat: 'Vacuna', tincion: 'vacunas',
      q: '¿Cómo se llama la vacuna contra el dengue mencionada en la cátedra?',
      a: 'Qdenga (TAK-003).'
    },
    {
      id: 't2', grupo: 'Vacunas', org: 'Fiebre amarilla', cat: 'Vacuna', tincion: 'vacunas',
      q: '¿Qué tipo de vacuna existe contra la fiebre amarilla y en cuántas dosis se aplica?',
      a: '17D Stamaril: vacuna de virus vivo atenuado, en dosis única.'
    },
    {
      id: 't3', grupo: 'Vacunas', org: 'Virus Junín (FHA)', cat: 'Vacuna', tincion: 'vacunas',
      q: '¿Cómo se llama la vacuna contra la fiebre hemorrágica argentina y qué tipo de vacuna es?',
      a: 'Candid #1: vacuna de virus vivo atenuado, en dosis única.'
    },
    {
      id: 't4', grupo: 'Vacunas', org: 'Chikungunya', cat: 'Vacuna', tincion: 'vacunas',
      q: '¿Cómo se llama la vacuna contra el Chikungunya, y qué otro arbovirus del mismo grupo (Zika) NO tiene vacuna disponible?',
      a: 'IXCHIQ es la vacuna contra Chikungunya. El Zika, en cambio, NO cuenta con vacuna.'
    },
    {
      id: 't5', grupo: 'Vacunas', org: 'Malaria (Plasmodium)', cat: 'Vacuna', tincion: 'vacunas',
      q: '¿Cómo se llama la vacuna contra la malaria?',
      a: 'MOSQUITIX (RTS,S/AS01).'
    },
    {
      id: 't6', grupo: 'Vacunas', org: 'Influenza', cat: 'Vacuna', tincion: 'vacunas',
      q: '¿Qué tipo de vacuna existe contra la influenza, cuánto dura la inmunidad que otorga y a quiénes se indica?',
      a: 'Vacuna tetravalente (con virus atenuado), brinda inmunidad corta de 3 a 6 meses. Se indica en niños de 6 meses a 2 años, embarazadas, personal de salud, mayores de 65 años y grupos con factores de riesgo.'
    },
    {
      id: 't7', grupo: 'Vacunas', org: 'Virus Respiratorio Sincitial (VSR)', cat: 'Vacuna', tincion: 'vacunas',
      q: '¿A quiénes se indica la vacuna contra el VSR y qué proteína viral contiene?',
      a: 'A mayores de 60 años y a embarazadas (para proteger al recién nacido); contiene la proteína F (de fusión) del virus.'
    },
    {
      id: 't8', grupo: 'Vacunas', org: 'Coronavirus (SARS-CoV-2)', cat: 'Vacuna', tincion: 'vacunas',
      q: '¿Qué 3 plataformas de vacuna contra el SARS-CoV-2 se mencionan y qué laboratorio representa a cada una?',
      a: 'ARNm (Pfizer), virus inactivado (Sinovac) y vector viral no replicante (AstraZeneca).'
    },
    {
      id: 't9', grupo: 'Vacunas', org: 'Virus respiratorios comunes', cat: 'Vacuna', tincion: 'vacunas',
      q: 'De los virus respiratorios (Parainfluenza, VSR, Adenovirus, Coronavirus, Rhinovirus), ¿cuáles NO tienen vacuna disponible?',
      a: 'Parainfluenza, Adenovirus y Rhinovirus NO tienen vacuna. El VSR y el Coronavirus (SARS-CoV-2) sí cuentan con vacunas específicas, a diferencia del resto del grupo.'
    },
    {
      id: 't10', grupo: 'Vacunas', org: 'Rotavirus', cat: 'Vacuna', tincion: 'vacunas',
      q: '¿Qué diferencia de esquema hay entre las vacunas Rotarix y Rotatec, y hasta qué edad se pueden aplicar?',
      a: 'Rotarix: virus vivo atenuado, 2 dosis (a los 2 y 4 meses de vida). Rotatec: virus vivo atenuado, 3 dosis (a los 2, 4 y 6 meses). Ambas deben aplicarse antes de las 15 semanas de edad.'
    },
    {
      id: 't11', grupo: 'Vacunas', org: 'Poliovirus', cat: 'Vacuna', tincion: 'vacunas',
      q: '¿Qué diferencia hay entre la vacuna IPV y la OPV contra la polio, y cuál es el esquema de dosis?',
      a: 'IPV: virus inactivado (muertos), inyectable. OPV: virus vivos atenuados/debilitados, vía oral. Esquema: 4 dosis (2, 4, 6 y 18 meses) con refuerzo a los 4-6 años.'
    },
    {
      id: 't12', grupo: 'Vacunas', org: 'Hepatitis A (HAV)', cat: 'Vacuna', tincion: 'vacunas',
      q: '¿Qué tipo de vacuna existe contra la hepatitis A y en cuántas dosis se aplica?',
      a: 'Vacuna inactivada, en 2 dosis.'
    },
    {
      id: 't13', grupo: 'Vacunas', org: 'Hepatitis B (HBV)', cat: 'Vacuna', tincion: 'vacunas',
      q: '¿Cuál es el esquema de vacunación contra la hepatitis B?',
      a: 'Primera dosis dentro de las primeras 12 horas de vida; luego forma parte de la pentavalente (2, 4 y 6 meses) con refuerzo a los 11 años; también se indica en adultos, embarazadas y personal de salud.'
    },
    {
      id: 't14', grupo: 'Vacunas', org: 'Hepatitis D (HDV)', cat: 'Vacuna', tincion: 'vacunas',
      q: '¿Existe una vacuna específica contra la hepatitis D? ¿Cómo se previene entonces?',
      a: 'No existe vacuna específica contra HDV, pero como el virus D necesita al virus B para replicarse, la vacuna contra la hepatitis B da protección indirecta también contra la D.'
    },
    {
      id: 't15', grupo: 'Vacunas', org: 'Varicela-Zóster (VZV)', cat: 'Vacuna', tincion: 'vacunas',
      q: '¿A quiénes se indica la vacuna contra el herpes zóster y qué componente viral contiene?',
      a: 'Se indica a mayores de 50 años; contiene la glicoproteína E, presente en la superficie del virus.'
    },
    {
      id: 't16', grupo: 'Vacunas', org: 'VPH', cat: 'Vacuna', tincion: 'vacunas',
      q: '¿Cómo se llama la vacuna contra el VPH, a qué edad se indica de rutina y hasta qué edad se recomienda su aplicación?',
      a: 'Gardasil 9. Se aplica de rutina a niños y niñas de 11-12 años, y se recomienda su aplicación hasta los 26 años.'
    },

    // ============ VENTANAS DIAGNÓSTICAS ============
    {
      id: 't17', grupo: 'Ventanas diagnósticas', org: 'Dengue', cat: 'Interpretación', tincion: 'ventanas', tipoDx: 'ambos',
      q: '¿Cómo se interpreta el diagnóstico de dengue antes y después del 5° día de síntomas?',
      a: 'Antes de 5 días: antígeno (+) = dengue probable, (-) no descarta; PCR (+) confirma, (-) no descarta. Después de 5 días: IgM (+) hay que repetirla en 5 días — si sigue (-) no descarta, recién a los 15 días un resultado (-) descarta y un (+) confirma.'
    },
    {
      id: 't18', grupo: 'Ventanas diagnósticas', org: 'Fiebre amarilla', cat: 'Interpretación', tincion: 'ventanas', tipoDx: 'ambos',
      q: '¿Qué cuidado hay que tener al interpretar la IgM para fiebre amarilla después del 5° día?',
      a: 'Puede dar falsos positivos si el paciente ya tuvo dengue o fue vacunado contra fiebre amarilla; por eso es necesario confirmar con muestras pareadas de IgG. Antes de 5 días, la PCR positiva confirma el diagnóstico.'
    },
    {
      id: 't19', grupo: 'Ventanas diagnósticas', org: 'Hantavirus', cat: 'Interpretación', tincion: 'ventanas', tipoDx: 'ambos',
      q: '¿Cómo se interpreta el diagnóstico de hantavirus según el día de evolución?',
      a: 'Entre 7 y 10 días: PCR (+) confirma, (-) no descarta. Después de 10 días: IgM, o seroconversión de IgG para la proteína N viral.'
    },
    {
      id: 't20', grupo: 'Ventanas diagnósticas', org: 'Virus Junín (FHA)', cat: 'Interpretación', tincion: 'ventanas', tipoDx: 'ambos',
      q: '¿Cómo se confirma serológicamente la fiebre hemorrágica argentina?',
      a: 'Con dos muestras de sangre pareadas: una en la fase aguda y otra a los 40-60 días, buscando IgM e IgG (además del diagnóstico directo por PCR).'
    },
    {
      id: 't21', grupo: 'Ventanas diagnósticas', org: 'Poliovirus', cat: 'Interpretación', tincion: 'ventanas', tipoDx: 'ambos',
      q: '¿Qué muestra se toma para diagnosticar poliomielitis y a partir de qué día son útiles los anticuerpos?',
      a: 'Muestra de heces en diferentes deposiciones dentro de las primeras 48 horas, o LCR si hay compromiso del SNC. Los anticuerpos IgG o IgM son detectables a partir del 3er día.'
    },
    {
      id: 't22', grupo: 'Ventanas diagnósticas', org: 'Hepatitis B (HBV)', cat: 'Interpretación', tincion: 'ventanas', tipoDx: 'ambos',
      q: '¿Cómo se diferencian los 4 escenarios serológicos posibles frente a la hepatitis B?',
      a: 'Vacunado: solo anti-HBs (HBsAc). Infección pasada/curada: anticuerpos anti-superficie y anti-core. Infección aguda: HBsAg positivo + IgM anti-superficie y anti-core. Infección crónica: HBsAg y HBeAg positivos + anticuerpos anti-superficie.'
    },
    {
      id: 't23', grupo: 'Ventanas diagnósticas', org: 'Hepatitis D (HDV)', cat: 'Interpretación', tincion: 'ventanas', tipoDx: 'ambos',
      q: '¿Cómo se diferencian serológicamente la coinfección y la sobreinfección por HDV?',
      a: 'Coinfección (HBV+HDV simultáneos): antígeno de superficie de HB, anticuerpo anti-core, IgM anti-HBc, IgM anti-HD. Sobreinfección (HDV sobre HBV crónico): HBsAg, anticuerpo anti-core de HB, IgM anti-HBc, y anticuerpo anti-HD (no IgM).'
    },

    // ============ SÍNDROMES Y DIFERENCIALES ============
    {
      id: 't24', grupo: 'Síndromes y diferenciales', org: 'Infección urinaria (ITU)', cat: 'Diferencial', tincion: 'sindromes',
      q: '¿Cuáles son los agentes más frecuentes de ITU en un paciente SIN factores predisponentes?',
      a: 'Escherichia coli, Proteus mirabilis y Klebsiella pneumoniae. Como agente poco frecuente puede aparecer Adenovirus (serotipos 11 y 21).'
    },
    {
      id: 't25', grupo: 'Síndromes y diferenciales', org: 'Infección urinaria (ITU)', cat: 'Diferencial', tincion: 'sindromes',
      q: '¿Cuáles son los agentes más frecuentes de ITU en un paciente CON factores predisponentes (sonda, cálculos, diabetes, etc.)?',
      a: 'Otras enterobacterias, Pseudomonas aeruginosa, Acinetobacter baumannii, Enterococcus faecalis y faecium, Staphylococcus epidermidis y Candida albicans. Como agente poco frecuente: Corynebacterium urealyticum.'
    },
    {
      id: 't26', grupo: 'Síndromes y diferenciales', org: 'Infección urinaria (ITU)', cat: 'Diferencial', tincion: 'sindromes',
      q: '¿Qué patrón general se observa al comparar la ITU con y sin factores predisponentes?',
      a: 'Sin factores predisponentes predominan las enterobacterias clásicas de la microbiota intestinal (E. coli, Proteus, Klebsiella). Con factores predisponentes aparecen más gérmenes oportunistas y hospitalarios (Pseudomonas, Acinetobacter, Enterococcus, Staphylococcus coagulasa negativo, Candida), reflejando la exposición a dispositivos, antibióticos previos e inmunocompromiso.'
    },

    // ============ ORGANISMOS NO CUBIERTOS EN OTROS MÓDULOS ============
    {
      id: 't27', grupo: 'Organismos complementarios', org: 'Pneumocystis jirovecii', cat: 'Características', tincion: 'complementos',
      q: '¿Qué tipo de organismo es Pneumocystis jirovecii y en qué contexto clínico es especialmente relevante?',
      a: 'Es un hongo oportunista extracelular; sus quistes producen 8 esporozoítos que se liberan y diferencian en trofozoítos. Es una de las enfermedades marcadoras de SIDA (neumonía por Pneumocystis).'
    },
    {
      id: 't28', grupo: 'Organismos complementarios', org: 'Pneumocystis jirovecii', cat: 'Clínica', tincion: 'complementos',
      q: '¿Cuál es el cuadro clínico de la neumonía por Pneumocystis jirovecii?',
      a: 'Tos sin expectoración, disnea, fiebre, pérdida de peso, temblores, y en casos avanzados expectoración con sangre e infiltrado pulmonar bilateral.'
    },
    {
      id: 't29', grupo: 'Organismos complementarios', org: 'Pneumocystis jirovecii', cat: 'Diagnóstico', tincion: 'complementos', tipoDx: 'directo',
      q: '¿Cómo se diagnostica la neumonía por Pneumocystis jirovecii?',
      a: 'Secreciones bronquiales obtenidas por lavado broncoalveolar, con tinción de Giemsa, azul de metileno o inmunofluorescencia directa (IFD).'
    },
    {
      id: 't30', grupo: 'Organismos complementarios', org: 'Burkholderia cepacia', cat: 'Características', tincion: 'complementos',
      q: '¿En qué grupo de pacientes es especialmente relevante Burkholderia cepacia y por qué NO suele producir muerte por sí sola?',
      a: 'Es un bacilo gram negativo no fermentador oportunista, de bajo nivel de virulencia; afecta especialmente el aparato respiratorio de pacientes con fibrosis quística o enfermedad granulomatosa crónica, y puede producir septicemia en pacientes con catéteres intravasculares.'
    },
    {
      id: 't31', grupo: 'Organismos complementarios', org: 'Actinobacillus', cat: 'Características', tincion: 'complementos',
      q: '¿Dónde se encuentra habitualmente Actinobacillus y qué infecciones produce?',
      a: 'Es anaerobio facultativo, coloniza la bucofaringe; produce periodontitis, endocarditis, infecciones por mordeduras, y es una causa poco frecuente de endocarditis bacteriana subaguda (pertenece al grupo HACEK).'
    },
  ],
  mc: [
    {
      id: 'tmc1', grupo: 'Vacunas', org: 'Poliovirus', cat: 'Opción múltiple', tincion: 'vacunas', type: 'mc',
      q: '¿Cuál es la diferencia fundamental entre la vacuna IPV y la OPV contra la poliomielitis?',
      options: ['IPV es oral y OPV es inyectable', 'IPV usa virus inactivado (inyectable) y OPV usa virus vivo atenuado (oral)', 'Ambas usan el mismo tipo de virus, solo cambia la dosis', 'IPV es para adultos y OPV para niños exclusivamente'],
      correct: 1, explain: 'IPV (virus inactivado) se aplica de forma inyectable; OPV (virus vivo atenuado/debilitado) se aplica por vía oral.'
    },
    {
      id: 'tmc2', grupo: 'Vacunas', org: 'Rotavirus', cat: 'Opción múltiple', tincion: 'vacunas', type: 'mc',
      q: '¿Cuál es el límite de edad para aplicar la primera dosis de vacuna contra rotavirus?',
      options: ['Antes de las 6 semanas', 'Antes de las 15 semanas', 'Antes del año de vida', 'No tiene límite de edad'],
      correct: 1, explain: 'Tanto Rotarix como Rotatec deben iniciarse antes de las 15 semanas de edad.'
    },
    {
      id: 'tmc3', grupo: 'Vacunas', org: 'Hepatitis D (HDV)', cat: 'Opción múltiple', tincion: 'vacunas', type: 'mc',
      q: '¿Por qué la vacuna contra la hepatitis B también protege contra la hepatitis D?',
      options: ['Porque son el mismo virus con distinto nombre', 'Porque el HDV necesita al HBV para replicarse, y al prevenir HBV se previene también la infección por HDV', 'Porque comparten la misma cápside viral', 'Porque la vacuna de HBV contiene también antígenos de HDV'],
      correct: 1, explain: 'El HDV es un virus defectivo que depende del HBV para formar su envoltura y replicarse; al no poder infectarse con HBV, tampoco puede establecerse la infección por HDV.'
    },
    {
      id: 'tmc4', grupo: 'Vacunas', org: 'VSR vs otros respiratorios', cat: 'Opción múltiple', tincion: 'vacunas', type: 'mc',
      q: '¿Cuál de estos virus respiratorios SÍ cuenta con vacuna específica, a diferencia de Parainfluenza, Adenovirus y Rhinovirus?',
      options: ['Virus Respiratorio Sincitial (VSR)', 'Metapneumovirus', 'Coxsackie', 'Rotavirus (como si fuera respiratorio)'],
      correct: 0, explain: 'El VSR cuenta con vacuna específica indicada en mayores de 60 años y embarazadas, a diferencia de Parainfluenza, Adenovirus y Rhinovirus, que no tienen vacuna.'
    },
    {
      id: 'tmc5', grupo: 'Ventanas diagnósticas', org: 'Dengue', cat: 'Opción múltiple', tincion: 'ventanas', type: 'mc',
      q: 'Un paciente consulta al 3er día de fiebre por sospecha de dengue. ¿Qué estudio es más apropiado en este momento?',
      options: ['Solo IgM, porque ya debería ser positiva', 'Antígeno y/o PCR, porque antes del 5° día la serología IgM aún no es confiable', 'Solo cultivo viral', 'Ninguno; hay que esperar al día 15'],
      correct: 1, explain: 'Antes del 5° día se recomienda antígeno o PCR, ya que la IgM recién se vuelve interpretable después del 5° día de síntomas.'
    },
    {
      id: 'tmc6', grupo: 'Ventanas diagnósticas', org: 'Hepatitis B (HBV)', cat: 'Opción múltiple', tincion: 'ventanas', type: 'mc',
      q: 'Un paciente tiene HBsAg positivo y HBeAg positivo. ¿Qué escenario serológico representa esto?',
      options: ['Vacunación reciente', 'Infección pasada y curada', 'Infección crónica', 'Ventana inmunológica sin infección'],
      correct: 2, explain: 'La presencia de HBsAg y HBeAg positivos, junto con anticuerpos anti-superficie, es compatible con infección crónica por hepatitis B.'
    },
    {
      id: 'tmc7', grupo: 'Ventanas diagnósticas', org: 'Fiebre amarilla', cat: 'Opción múltiple', tincion: 'ventanas', type: 'mc',
      q: '¿Por qué puede haber un falso positivo de IgM para fiebre amarilla en un paciente que tuvo dengue previamente?',
      options: ['Porque son la misma enfermedad', 'Porque ambos son Flavivirus y comparten antígenos, generando reacción cruzada', 'Porque el dengue destruye el sistema inmune', 'Porque la IgM nunca es específica para ningún flavivirus'],
      correct: 1, explain: 'Dengue y fiebre amarilla pertenecen a la familia Flaviviridae y comparten antígenos, lo que puede generar reacciones cruzadas y falsos positivos en la serología; por eso se piden muestras pareadas de IgG para confirmar.'
    },
    {
      id: 'tmc8', grupo: 'Síndromes y diferenciales', org: 'Infección urinaria (ITU)', cat: 'Opción múltiple', tincion: 'sindromes', type: 'mc',
      q: 'Un paciente diabético con sonda vesical permanente desarrolla ITU. ¿Cuál de estos agentes es más esperable en este contexto (con factores predisponentes) que en una ITU no complicada?',
      options: ['Escherichia coli exclusivamente', 'Pseudomonas aeruginosa', 'Adenovirus 11', 'Ninguno; los agentes son siempre los mismos'],
      correct: 1, explain: 'En pacientes con factores predisponentes (como sondaje vesical) aumenta la frecuencia de gérmenes oportunistas como Pseudomonas aeruginosa, Acinetobacter, Enterococcus y Candida.'
    },
    {
      id: 'tmc9', grupo: 'Síndromes y diferenciales', org: 'Infección urinaria (ITU)', cat: 'Opción múltiple', tincion: 'sindromes', type: 'mc',
      q: '¿Cuál es el agente más frecuente de ITU en una paciente joven SIN factores predisponentes?',
      options: ['Escherichia coli', 'Candida albicans', 'Pseudomonas aeruginosa', 'Corynebacterium urealyticum'],
      correct: 0, explain: 'Escherichia coli es, por lejos, el agente más frecuente de ITU no complicada, incluso fuera de esta tabla específica.'
    },
    {
      id: 'tmc10', grupo: 'Organismos complementarios', org: 'Pneumocystis jirovecii', cat: 'Opción múltiple', tincion: 'complementos', type: 'mc',
      q: '¿Con qué técnica de tinción se identifica típicamente Pneumocystis jirovecii en una muestra de lavado broncoalveolar?',
      options: ['Ziehl-Neelsen', 'Giemsa o azul de metileno', 'Gram', 'Tinta china'],
      correct: 1, explain: 'Pneumocystis jirovecii se identifica con tinción de Giemsa, azul de metileno o inmunofluorescencia directa en secreciones obtenidas por lavado broncoalveolar.'
    },
    {
      id: 'tmc11', grupo: 'Organismos complementarios', org: 'Burkholderia cepacia', cat: 'Opción múltiple', tincion: 'complementos', type: 'mc',
      q: '¿En qué grupo de pacientes es clínicamente relevante Burkholderia cepacia?',
      options: ['Pacientes con fibrosis quística o enfermedad granulomatosa crónica', 'Embarazadas sin otras comorbilidades', 'Niños sanos menores de 2 años', 'Deportistas de alto rendimiento'],
      correct: 0, explain: 'Burkholderia cepacia es especialmente relevante en pacientes con fibrosis quística o enfermedad granulomatosa crónica, donde puede colonizar la vía respiratoria de forma persistente.'
    },
    {
      id: 'tmc12', grupo: 'Vacunas', org: 'Fiebre amarilla vs Junín', cat: 'Opción múltiple', tincion: 'vacunas', type: 'mc',
      q: '¿Qué tienen en común las vacunas 17D Stamaril (fiebre amarilla) y Candid #1 (Junín)?',
      options: ['Ambas son de virus inactivado', 'Ambas son de virus vivo atenuado y se aplican en dosis única', 'Ambas requieren 3 dosis', 'Ninguna tiene uso en Argentina'],
      correct: 1, explain: 'Ambas son vacunas de virus vivo atenuado que se aplican en una única dosis.'
    },
  ]
};
