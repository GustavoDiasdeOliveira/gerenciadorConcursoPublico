// ============================
// DADOS DOS CONCURSOS
// ============================
const concursos = {
  pmesp: {
    nome: "PMESP",
    dataProva: new Date(2024, 10, 29), // 29/11/2024 (mês 10 = novembro, pois começa em 0)
    semanas: 3,
    topics: {
      portugues: [
        "Leitura e interpretação: textos literários e não literários",
        "Sinônimos e antônimos",
        "Sentido próprio e figurado das palavras",
        "Pontuação (vírgula, ponto, dois-pontos, etc.)",
        "Classes de palavras: substantivo",
        "Classes de palavras: adjetivo, numeral",
        "Classes de palavras: pronome, verbo",
        "Classes de palavras: advérbio, preposição, conjunção",
        "Concordância verbal e nominal",
        "Regência verbal e nominal",
        "Colocação pronominal",
        "Crase",
      ],
      matematica: [
        "Números inteiros: operações e propriedades",
        "Números racionais: fração e decimal",
        "Mínimo múltiplo comum",
        "Razão e proporção",
        "Porcentagem",
        "Regra de três simples",
        "Média aritmética simples",
        "Equação do 1º grau",
        "Sistema de equações do 1º grau",
        "Sistema métrico: medidas (tempo, comprimento, capacidade)",
        "Tabelas e gráficos: relação entre grandezas",
        "Geometria: forma, perímetro, área, volume, Pitágoras",
        "Raciocínio lógico",
        "Resolução de situações-problema",
      ],
      historiaGeral: [
        "Primeira Guerra Mundial",
        "Nazifascismo e Segunda Guerra Mundial",
        "A Guerra Fria",
        "Globalização e políticas neoliberais",
      ],
      historiaBrasil: [
        "Revolução de 1930 e Era Vargas",
        "As Constituições Republicanas",
        "Estrutura política e movimentos sociais no período militar",
        "Abertura política e redemocratização",
      ],
      geografiaGeral: [
        "Nova ordem mundial e espaço geopolítico",
        "Globalização (aspectos econômicos e culturais)",
        "Principais problemas ambientais",
      ],
      geografiaBrasil: [
        "Relevo e hidrografia brasileiros",
        "Clima e vegetação do Brasil",
        "População: crescimento, distribuição e movimentos",
        "Atividades econômicas: indústria, urbanização, energia, agropecuária",
        "Impactos ambientais no Brasil",
      ],
      atualidades: ["Acompanhar notícias dos últimos 6 meses (fatos nacionais e internacionais) - prática de resumo"],
      informatica: [
        "Windows 10: pastas, diretórios, atalhos, manipulação de arquivos",
        "Word 2016: edição e formatação, cabeçalhos, parágrafos, tabelas",
        "Excel 2016: fórmulas, funções, tabelas e gráficos",
        "PowerPoint 2016: slides, animações e apresentação",
        "Correio eletrônico: envio e anexos",
        "Internet: URL, links, busca e impressão",
        "Google Workspace e Microsoft Teams: conceitos básicos",
      ],
      administracao: [
        "Constituição Federal: Direitos e Garantias Fundamentais (Tít. II)",
        "Constituição Federal: Organização do Estado e Administração Pública (Tít. III)",
        "Constituição Federal: Defesa do Estado e Segurança Pública (Tít. V)",
        "Constituição do Estado de SP: Organização dos Poderes e Segurança Pública",
        "Lei 12.527/11 (Acesso à Informação) e Decreto 68.155/23",
      ],
    },
    weeklyPattern: {
      Domingo: ["revisao_port", "revisao_mat", "portugues", "matematica"],
      Segunda: ["portugues", "matematica", "portugues", "matematica"],
      Terça: ["historiaGeral", "geografiaGeral", "historiaBrasil", "geografiaBrasil"],
      Quarta: ["portugues", "matematica", "portugues", "matematica"],
      Quinta: ["administracao", "informatica", "administracao", "informatica"],
      Sexta: ["historiaBrasil", "geografiaBrasil", "atualidades", "revisao"],
      Sábado: ["revisao_port", "revisao_mat", "revisao_hg", "simulado"],
    },
  },

  capatazia: {
    nome: "Capatazia - Santos OGMO",
    dataProva: new Date(2024, 11, 13), // 13/12/2024 (mês 11 = dezembro)
    semanas: 5,
    topics: {
      portugues: [
        "Compreensão e interpretação de texto",
        "Ortografia e Acentuação (Novo Acordo Ortográfico)",
        "Sinais de Pontuação",
        "Semântica: sinônimos, antônimos, homônimos, parônimos, denotação e conotação",
        "Classes de palavras: substantivo, adjetivo, verbo, advérbio, artigo, preposição, conjunção, interjeição, numeral e pronomes",
        "Divisão silábica",
        "Sintaxe: frase, oração e períodos",
        "Tempos verbais e concordância verbal e nominal",
      ],
      matematica: [
        "Operações com números racionais: adição, subtração, multiplicação, divisão, potenciação e radiciação",
        "Regra de três simples",
        "Sistemas de medida: tempo, comprimento, quantidade",
        "Teoria dos números: divisibilidade, MMC, MDC, números primos, pares e ímpares, fatoração numérica",
        "Porcentagem e problemas aplicados",
      ],
      ingles: [
        "Compreensão e interpretação de texto em inglês",
        "Vocabulário fundamental e técnico marítimo",
        "Gramática básica: verbos, pronomes, preposições e tempos simples",
        "Funções sociais da língua (saudações, pedidos, instruções)",
        "Compreensão de pequenos diálogos",
      ],
      informatica: [
        "Conceitos de hardware e software",
        "Principais componentes e funcionamento básico do computador",
        "Sistema Operacional Windows",
        "Internet: navegação, links, URLs, busca e impressão",
        "Word 2019: formatação, bordas, cabeçalho, tabelas, imagens, numeração e parágrafos",
        "Excel 2019: fórmulas, quatro operações, gráficos e formatação condicional",
        "Segurança digital: antivírus, firewall, anti-spyware",
        "Correio eletrônico (e-mail)",
      ],
      legislacaoPortuaria: [
        "Lei 7.418/1985 - Vale Transporte",
        "Lei 9.719/1998 - Normas e condições do trabalho portuário",
        "Lei 12.815/2013 - Exploração de portos e atividades portuárias",
        "Decreto 8.033/2013 - Regulamentação da Lei 12.815/13",
        "Decreto 10.088/2019 - Convenções da OIT (Segurança e Saúde Portuária)",
      ],
      conhecimentosEspecificos: [
        "1. Tipos de Cargas: Classificação e características das mercadorias/cargas",
        "2. Cargas/mercadorias Perigosas: Conceito, Classificação e Medidas de segurança",
        "3. Operações de Movimentação de Cargas: Equipamentos e acessórios",
        "4. Normas Regulamentadoras: NR-6, NR-11, NR-12, NR-29",
      ],
    },
    weeklyPattern: {
      Domingo: ["revisao_port", "matematica", "ingles"],
      Segunda: ["portugues", "matematica", "informatica"],
      Terça: ["portugues", "legislacaoPortuaria", "ingles"],
      Quarta: ["matematica", "informatica", "portugues"],
      Quinta: ["legislacaoPortuaria", "portugues", "conhecimentosEspecificos", "geografiaBrasil"],
      Sexta: ["matematica", "informatica", "atualidades", "conhecimentosEspecificos"],
      Sábado: ["revisao_port", "revisao_mat", "revisao_leg", "simulado"],
    },
  },
}

// ============================
// CONFIGURAÇÕES GLOBAIS
// ============================
let WEEKS = 3 // será atualizado dinamicamente
const DAYS = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"]
const BLOCKS = ["07:00 – 08:45", "09:00 – 10:45", "11:00 – 12:45", "13:00 – 14:45"]
const BLOCK_DURATION = 1.75 // horas por bloco

// estado
let mode = "single" // 'single' ou 'combinado'
let currentConcurso = "pmesp"
let plan = {}
let iter = {} // iteradores por matéria no concurso atual
let currentNoteBlock = null

let pomoTimer = null
let pomoSeconds = 25 * 60
let pomoCycles = 0
let pomoMode = "focus" // focus ou break

// ========= helpers de storage =========
function storageKey() {
  return `cronograma_state_${currentConcurso}_${mode}`
}
function saveState(state) {
  localStorage.setItem(storageKey(), JSON.stringify(state))
  updateAllStats()
}
function loadState() {
  try {
    return JSON.parse(localStorage.getItem(storageKey()) || "{}")
  } catch {
    return {}
  }
}

function notesKey() {
  return `cronograma_notes_${currentConcurso}_${mode}`
}

function saveNotes(notes) {
  localStorage.setItem(notesKey(), JSON.stringify(notes))
}

function loadNotes() {
  try {
    return JSON.parse(localStorage.getItem(notesKey()) || "{}")
  } catch {
    return {}
  }
}

function statsKey() {
  return `cronograma_stats`
}

function saveStats(stats) {
  localStorage.setItem(statsKey(), JSON.stringify(stats))
}

function loadStats() {
  try {
    return JSON.parse(localStorage.getItem(statsKey()) || "{}")
  } catch {
    return {}
  }
}

// ============================
// COUNTDOWN TIMERS
// ============================
function updateCountdowns() {
  const now = new Date()

  const pmespDays = Math.ceil((concursos.pmesp.dataProva - now) / (1000 * 60 * 60 * 24))
  const capataziaDays = Math.ceil((concursos.capatazia.dataProva - now) / (1000 * 60 * 60 * 24))

  const pmespChip = document.getElementById("pmespCountdown")
  pmespChip.innerHTML = `
    <i class="bi bi-alarm"></i> PM: <strong>${pmespDays} dias</strong>
  `
  if (pmespDays <= 7) pmespChip.classList.add("urgent")

  const capataziaChip = document.getElementById("capataziaCountdown")
  capataziaChip.innerHTML = `
    <i class="bi bi-alarm"></i> Capatazia: <strong>${capataziaDays} dias</strong>
  `
  if (capataziaDays <= 7) capataziaChip.classList.add("urgent")
}

// ============================
// STATISTICS
// ============================
function updateAllStats() {
  const state = loadState()
  let total = 0,
    done = 0

  for (let w = 1; w <= WEEKS; w++) {
    for (const day of DAYS) {
      for (const b of plan[w][day]) {
        total++
        const id = `w${w}_${day}_${b.time}`.replace(/\s|–|:/g, "_") + `_${currentConcurso}_${mode}`
        if (state[id]) done++
      }
    }
  }

  const pct = total ? Math.round((done / total) * 100) : 0
  const hoursStudied = (done * BLOCK_DURATION).toFixed(1)
  const avgDaily = total ? Math.round((done / (WEEKS * 6)) * 100) : 0

  // Update stat cards
  document.getElementById("totalHours").textContent = hoursStudied + "h"
  document.getElementById("completionRate").textContent = pct + "%"
  document.getElementById("avgDaily").textContent = avgDaily + "%"

  // Update today's progress
  updateTodayProgress()

  // Update detailed stats
  document.getElementById("statTotal").textContent = total
  document.getElementById("statDone").textContent = done
  document.getElementById("statRemaining").textContent = total - done

  const timeLeft = ((total - done) * BLOCK_DURATION).toFixed(1)
  document.getElementById("statTimeLeft").textContent = timeLeft + "h"

  // Calculate finish date
  const blocksPerDay = 4
  const daysNeeded = Math.ceil((total - done) / blocksPerDay)
  const finishDate = new Date()
  finishDate.setDate(finishDate.getDate() + daysNeeded)
  document.getElementById("statFinishDate").textContent = finishDate.toLocaleDateString("pt-BR")

  // Update achievements
  updateAchievements(done, total, pct)

  // Update streak
  updateStreak()

  // Update progress chart
  updateProgressChart()

  // Update study calendar
  updateStudyCalendar()

  // Update priority topics
  updatePriorityTopics()
}

function updateTodayProgress() {
  const today = new Date().getDay() // 0 = domingo, 1 = segunda, etc
  const dayName = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"][today]

  const state = loadState()
  const currentWeek = Math.min(Math.ceil((new Date() - new Date(2024, 10, 1)) / (7 * 24 * 60 * 60 * 1000)), WEEKS)

  if (!plan[currentWeek] || !plan[currentWeek][dayName]) {
    document.getElementById("todayProgress").textContent = "0/0"
    return
  }

  const todayTotal = plan[currentWeek][dayName].length
  let todayDone = 0

  for (const b of plan[currentWeek][dayName]) {
    const id = `w${currentWeek}_${dayName}_${b.time}`.replace(/\s|–|:/g, "_") + `_${currentConcurso}_${mode}`
    if (state[id]) todayDone++
  }

  document.getElementById("todayProgress").textContent = `${todayDone}/${todayTotal}`
}

function updateAchievements(done, total, pct) {
  const achievements = document.querySelectorAll(".achievement-card")

  // First week complete
  if (done >= 28) achievements[0].classList.add("unlocked")

  // 7 day streak
  const stats = loadStats()
  if (stats.streak >= 7) achievements[1].classList.add("unlocked")

  // 50% complete
  if (pct >= 50) achievements[2].classList.add("unlocked")

  // 100% complete
  if (pct >= 100) achievements[3].classList.add("unlocked")
}

function updateStreak() {
  const stats = loadStats()
  const streak = stats.streak || 0
  document.getElementById("streakChip").innerHTML = `
    <i class="bi bi-fire"></i> Sequência: <strong>${streak} dias</strong>
  `
  if (document.getElementById("streakValue")) {
    document.getElementById("streakValue").textContent = streak
  }
}

function updateProgressChart() {
  const state = loadState()
  const chart = document.getElementById("progressChart")
  chart.innerHTML = ""

  for (let w = 1; w <= WEEKS; w++) {
    let weekTotal = 0,
      weekDone = 0

    for (const day of DAYS) {
      for (const b of plan[w][day]) {
        weekTotal++
        const id = `w${w}_${day}_${b.time}`.replace(/\s|–|:/g, "_") + `_${currentConcurso}_${mode}`
        if (state[id]) weekDone++
      }
    }

    const weekPct = weekTotal ? Math.round((weekDone / weekTotal) * 100) : 0
    const bar = document.createElement("div")
    bar.className = "chart-bar"
    bar.style.height = weekPct + "%"
    bar.setAttribute("data-week", `S${w}`)
    bar.setAttribute("data-percent", weekPct + "%")
    bar.title = `Semana ${w}: ${weekPct}%`
    chart.appendChild(bar)
  }
}

function updateStudyCalendar() {
  const calendar = document.getElementById("studyCalendar")
  calendar.innerHTML = ""

  const state = loadState()
  const startDate = new Date(2024, 10, 1) // 01/11/2024

  for (let i = 0; i < WEEKS * 7; i++) {
    const date = new Date(startDate)
    date.setDate(date.getDate() + i)

    const dayOfWeek = date.getDay()
    const dayName = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"][dayOfWeek]

    const day = document.createElement("div")
    day.className = "cal-day"
    day.textContent = date.getDate()

    const week = Math.floor(i / 7) + 1
    if (plan[week] && plan[week][dayName]) {
      const dayTotal = plan[week][dayName].length
      let dayDone = 0

      for (const b of plan[week][dayName]) {
        const id = `w${week}_${dayName}_${b.time}`.replace(/\s|–|:/g, "_") + `_${currentConcurso}_${mode}`
        if (state[id]) dayDone++
      }

      const dayPct = (dayDone / dayTotal) * 100

      if (dayPct === 0) day.classList.add("none")
      else if (dayPct <= 25) day.classList.add("low")
      else if (dayPct <= 75) day.classList.add("medium")
      else if (dayPct < 100) day.classList.add("high")
      else day.classList.add("complete")
    } else {
      day.classList.add("none")
    }

    calendar.appendChild(day)
  }
}

function updatePriorityTopics() {
  const notes = loadNotes()
  const priorityList = document.getElementById("priorityTopics")
  priorityList.innerHTML = ""

  const difficultTopics = []

  for (const id in notes) {
    if (notes[id].difficulty === "dificil") {
      difficultTopics.push(notes[id].topic)
    }
  }

  if (difficultTopics.length === 0) {
    priorityList.innerHTML = '<p class="small">Tópicos marcados como difíceis aparecerão aqui.</p>'
    return
  }

  difficultTopics.forEach((topic) => {
    const item = document.createElement("div")
    item.className = "priority-item"
    item.textContent = topic
    priorityList.appendChild(item)
  })
}

// ============================
// POMODORO TIMER
// ============================
function openPomodoro() {
  document.getElementById("pomodoroFloat").classList.remove("hidden")
}

function closePomodoro() {
  document.getElementById("pomodoroFloat").classList.add("hidden")
}

function startPomodoro() {
  if (pomoTimer) return

  document.getElementById("pomoStart").classList.add("hidden")
  document.getElementById("pomoPause").classList.remove("hidden")

  pomoTimer = setInterval(() => {
    pomoSeconds--
    updatePomoDisplay()

    if (pomoSeconds <= 0) {
      clearInterval(pomoTimer)
      pomoTimer = null

      if (pomoMode === "focus") {
        pomoCycles++
        document.getElementById("pomoCycles").textContent = `Ciclos: ${pomoCycles}`

        // Break time
        pomoMode = "break"
        pomoSeconds = pomoCycles % 4 === 0 ? 15 * 60 : 5 * 60
        document.getElementById("pomoLabel").textContent = pomoCycles % 4 === 0 ? "Pausa Longa" : "Pausa"

        // Play sound or notification
        alert("Tempo de foco concluído! Hora de descansar.")
      } else {
        // Back to focus
        pomoMode = "focus"
        pomoSeconds = 25 * 60
        document.getElementById("pomoLabel").textContent = "Foco"
        alert("Pausa concluída! Vamos voltar ao foco.")
      }

      document.getElementById("pomoStart").classList.remove("hidden")
      document.getElementById("pomoPause").classList.add("hidden")
    }
  }, 1000)
}

function pausePomodoro() {
  if (pomoTimer) {
    clearInterval(pomoTimer)
    pomoTimer = null
  }

  document.getElementById("pomoStart").classList.remove("hidden")
  document.getElementById("pomoPause").classList.add("hidden")
}

function resetPomodoro() {
  pausePomodoro()
  pomoMode = "focus"
  pomoSeconds = 25 * 60
  document.getElementById("pomoLabel").textContent = "Foco"
  updatePomoDisplay()
}

function updatePomoDisplay() {
  const mins = Math.floor(pomoSeconds / 60)
  const secs = pomoSeconds % 60
  document.getElementById("pomoTime").textContent = `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`
}

// ============================
// NOTES MODAL
// ============================
function openNotesModal(blockId, topic) {
  currentNoteBlock = blockId
  const notes = loadNotes()
  const noteData = notes[blockId] || { text: "", difficulty: "" }

  document.getElementById("notesTopicTitle").textContent = topic
  document.getElementById("notesTextarea").value = noteData.text || ""

  // Set difficulty buttons
  document.querySelectorAll(".diff-btn").forEach((btn) => {
    btn.classList.remove("active")
    if (btn.dataset.diff === noteData.difficulty) {
      btn.classList.add("active")
    }
  })

  document.getElementById("notesModal").classList.remove("hidden")
}

function closeNotesModal() {
  document.getElementById("notesModal").classList.add("hidden")
  currentNoteBlock = null
}

function saveNotesData() {
  if (!currentNoteBlock) return

  const notes = loadNotes()
  const text = document.getElementById("notesTextarea").value
  const difficulty = document.querySelector(".diff-btn.active")?.dataset.diff || ""

  // Get topic from modal title
  const topic = document.getElementById("notesTopicTitle").textContent

  notes[currentNoteBlock] = { text, difficulty, topic }
  saveNotes(notes)

  // Update block styling
  const block = document.querySelector(`input[id="${currentNoteBlock}"]`)?.closest(".block")
  if (block && difficulty) {
    block.classList.remove("easy", "medium", "difficult")
    if (difficulty === "facil") block.classList.add("easy")
    else if (difficulty === "medio") block.classList.add("medium")
    else if (difficulty === "dificil") block.classList.add("difficult")
  }

  closeNotesModal()
  updatePriorityTopics()
}

// ============================
// PLAN GENERATION
// ============================
function buildCombinedTopics() {
  // junta tópicos por chave entre os dois concursos (une arrays evitando duplicates)
  const combined = {}
  for (const c of ["pmesp", "capatazia"]) {
    const t = concursos[c].topics
    for (const key in t) {
      if (!combined[key]) combined[key] = []
      t[key].forEach((item) => {
        if (!combined[key].includes(item)) combined[key].push(item)
      })
    }
  }
  return combined
}

function buildCombinedPattern() {
  // cria um padrão semanal que mistura as matérias mais relevantes de ambos os concursos
  return {
    Domingo: ["revisao_port", "matematica", "portugues", "ingles"],
    Segunda: ["portugues", "matematica", "informatica", "administracao"],
    Terça: ["historiaGeral", "geografiaGeral", "legislacaoPortuaria", "ingles"],
    Quarta: ["portugues", "matematica", "informatica", "historiaBrasil"],
    Quinta: ["legislacaoPortuaria", "portugues", "conhecimentosEspecificos", "geografiaBrasil"],
    Sexta: ["matematica", "informatica", "atualidades", "conhecimentosEspecificos"],
    Sábado: ["revisao_port", "revisao_mat", "revisao_leg", "simulado"],
  }
}

function setConcurso(conc) {
  if (conc === "combinado") {
    currentConcurso = "combinado"
    WEEKS = Math.max(concursos.pmesp.semanas, concursos.capatazia.semanas)
    iter = {}
    const combined = buildCombinedTopics()
    Object.keys(combined).forEach((k) => (iter[k] = 0))
  } else {
    currentConcurso = conc
    WEEKS = concursos[conc].semanas
    iter = {}
    Object.keys(concursos[conc].topics).forEach((k) => (iter[k] = 0))
  }

  generatePlan()
  renderWeeks()
  updateAllStats()
  document.getElementById("programSummary").textContent = buildProgramSummary()
}

// nextTopic (usa o conjunto correto de topics)
function nextTopic(subject) {
  if (subject === "revisao" || subject === "simulado" || subject.startsWith("revisao")) return subject
  let topicsSet
  if (currentConcurso === "combinado") topicsSet = buildCombinedTopics()
  else topicsSet = concursos[currentConcurso].topics
  const arr = topicsSet[subject]
  if (!arr) return "Tópico geral"
  if (!iter[subject]) iter[subject] = 0
  const i = iter[subject] % arr.length
  iter[subject]++
  return arr[i]
}

function generatePlan() {
  plan = {}
  for (let w = 1; w <= WEEKS; w++) {
    plan[w] = {}
    for (const day of DAYS) {
      plan[w][day] = []
      // pick weekly pattern
      let pattern
      if (currentConcurso === "combinado") pattern = buildCombinedPattern()
      else pattern = concursos[currentConcurso].weeklyPattern
      const subjects = pattern[day] || []
      for (const s of subjects) {
        if (s === "revisao_port") {
          plan[w][day].push({ time: BLOCKS[0], topic: "Revisão Português (questões)" })
        } else if (s === "revisao_mat") {
          plan[w][day].push({ time: BLOCKS[1], topic: "Revisão Matemática (questões)" })
        } else if (s === "revisao_transito" || s === "revisao_hg" || s === "revisao_leg" || s === "revisao_esp") {
          const labels = {
            revisao_transito: "Revisão Trânsito",
            revisao_hg: "Revisão História/Geografia",
            revisao_leg: "Revisão Legislação Portuária",
            revisao_esp: "Revisão Conhecimentos Específicos",
          }
          plan[w][day].push({ time: BLOCKS[2], topic: labels[s] || "Revisão" })
        } else if (s === "simulado") {
          plan[w][day].push({ time: BLOCKS[3], topic: "Simulado completo (mistura de disciplinas)" })
        } else {
          plan[w][day].push({ time: BLOCKS[plan[w][day].length], topic: nextTopic(s) })
        }
      }
    }
  }
}

// ============================
// RENDER
// ============================
function renderWeeks() {
  const tabs = document.getElementById("weeks")
  tabs.innerHTML = ""
  for (let w = 1; w <= WEEKS; w++) {
    const btn = document.createElement("button")
    btn.className = "week-btn"
    btn.textContent = "Semana " + w
    btn.onclick = () => selectWeek(w)
    tabs.appendChild(btn)
  }
  selectWeek(1)
}

function selectWeek(week) {
  document.querySelectorAll(".week-btn").forEach((b, i) => b.classList.toggle("active", i === week - 1))
  const container = document.getElementById("weekContent")
  container.innerHTML = ""
  const state = loadState()
  const notes = loadNotes()
  const weekData = plan[week]

  const grid = document.createElement("div")
  grid.className = "day-grid"
  for (const day of DAYS) {
    const card = document.createElement("div")
    card.className = "day"
    const h = document.createElement("h3")
    h.innerHTML = `<i class="bi bi-calendar-day"></i> ${day}`
    card.appendChild(h)
    for (const b of weekData[day]) {
      const id = `w${week}_${day}_${b.time}`.replace(/\s|–|:/g, "_") + `_${currentConcurso}_${mode}`

      const div = document.createElement("div")
      div.className = "block"

      // Apply difficulty styling
      if (notes[id]?.difficulty) {
        if (notes[id].difficulty === "facil") div.classList.add("easy")
        else if (notes[id].difficulty === "medio") div.classList.add("medium")
        else if (notes[id].difficulty === "dificil") div.classList.add("difficult")
      }

      const t = document.createElement("time")
      t.textContent = b.time
      div.appendChild(t)
      const label = document.createElement("label")
      label.innerHTML = `<strong>${b.topic}</strong>`
      label.onclick = () => {
        const chk = document.getElementById(id)
        chk.checked = !chk.checked
        chk.dispatchEvent(new Event("change"))
      }
      div.appendChild(label)

      // Actions
      const actions = document.createElement("div")
      actions.className = "block-actions"

      const noteBtn = document.createElement("button")
      noteBtn.className = "icon-btn"
      noteBtn.innerHTML = '<i class="bi bi-journal-text"></i>'
      noteBtn.title = "Adicionar nota"
      noteBtn.onclick = (e) => {
        e.stopPropagation()
        openNotesModal(id, b.topic)
      }
      actions.appendChild(noteBtn)

      const chk = document.createElement("input")
      chk.type = "checkbox"
      chk.id = id
      if (state[id]) {
        chk.checked = true
        div.classList.add("completed")
      }

      chk.onchange = () => {
        state[id] = chk.checked
        saveState(state)
        updateProgress(week)

        if (chk.checked) {
          div.classList.add("completed")
          // Update streak
          const stats = loadStats()
          const today = new Date().toDateString()
          if (stats.lastStudyDate !== today) {
            const yesterday = new Date()
            yesterday.setDate(yesterday.getDate() - 1)
            if (stats.lastStudyDate === yesterday.toDateString()) {
              stats.streak = (stats.streak || 0) + 1
            } else {
              stats.streak = 1
            }
            stats.lastStudyDate = today
            saveStats(stats)
          }
        } else {
          div.classList.remove("completed")
        }
      }
      actions.appendChild(chk)
      div.appendChild(actions)

      card.appendChild(div)
    }
    grid.appendChild(card)
  }
  container.appendChild(grid)
  updateProgress(week)
}

function updateProgress(week) {
  const state = loadState()
  const weekData = plan[week]
  let total = 0,
    done = 0
  for (const day of DAYS) {
    for (const b of weekData[day]) {
      total++
      const id = `w${week}_${day}_${b.time}`.replace(/\s|–|:/g, "_") + `_${currentConcurso}_${mode}`
      if (state[id]) done++
    }
  }
  const pct = total ? Math.round((done / total) * 100) : 0
  document.getElementById("progressBar").style.width = pct + "%"
  document.getElementById("progressText").textContent = `${done}/${total} blocos concluídos (${pct}%)`
}

function updateOverall() {
  const state = loadState()
  let total = 0,
    done = 0
  for (let w = 1; w <= WEEKS; w++) {
    for (const day of DAYS) {
      for (const b of plan[w][day]) {
        total++
        const id = `w${w}_${day}_${b.time}`.replace(/\s|–|:/g, "_") + `_${currentConcurso}_${mode}`
        if (state[id]) done++
      }
    }
  }
  const pct = total ? Math.round((done / total) * 100) : 0
  document.getElementById("overall").textContent = `${done}/${total} blocos concluídos no total — Progresso: ${pct}%`
}

// build program summary (para painel lateral)
function buildProgramSummary() {
  let s = `== Concurso: ${currentConcurso === "combinado" ? "Modo Combinado" : concursos[currentConcurso].nome} ==\n\n`
  const topicsSet = currentConcurso === "combinado" ? buildCombinedTopics() : concursos[currentConcurso].topics
  for (const key in topicsSet) {
    s += `== ${key.toUpperCase()} ==\n${topicsSet[key].join("\n")}\n\n`
  }
  s += "== Observação ==\nSábados são reservados para revisão e simulados completos."
  return s
}

// ============================
// CONTROLES GERAIS
// ============================
document.getElementById("selectConcurso").addEventListener("change", (e) => {
  const val = e.target.value
  if (val === "combinado") {
    mode = "combinado"
    currentConcurso = "combinado"
  } else {
    mode = "single"
    currentConcurso = val
  }
  setConcurso(currentConcurso)
})

document.getElementById("menuToggle").addEventListener("click", () => {
  const menu = document.querySelector(".topbar-controls")
  menu.classList.toggle("open")
  const icon = document.querySelector("#menuToggle i")
  icon.className = menu.classList.contains("open") ? "bi bi-x" : "bi bi-list"
})

document.getElementById("toggleTheme").addEventListener("click", () => {
  const body = document.body
  const current = body.getAttribute("data-theme")
  const next = current === "light" ? "dark" : "light"
  body.setAttribute("data-theme", next)
  const icon = document.querySelector("#toggleTheme i")
  icon.className = next === "dark" ? "bi bi-sun" : "bi bi-moon"
  localStorage.setItem("theme", next)
})

document.getElementById("markWeek").addEventListener("click", () => {
  const activeBtn = document.querySelector(".week-btn.active")
  if (!activeBtn) {
    alert("Selecione uma semana primeiro!")
    return
  }

  const current = Number(activeBtn.textContent.replace("Semana ", ""))
  const state = loadState()

  for (const day of DAYS) {
    for (const b of plan[current][day]) {
      const id = `w${current}_${day}_${b.time}`.replace(/\s|–|:/g, "_") + `_${currentConcurso}_${mode}`
      state[id] = true
    }
  }

  saveState(state)
  selectWeek(current)
  alert(`Semana ${current} marcada como completa!`)
})

document.getElementById("clearWeek").addEventListener("click", () => {
  const activeBtn = document.querySelector(".week-btn.active")
  if (!activeBtn) {
    alert("Selecione uma semana primeiro!")
    return
  }

  const current = Number(activeBtn.textContent.replace("Semana ", ""))

  if (!confirm(`Tem certeza que deseja limpar toda a Semana ${current}?`)) {
    return
  }

  const state = loadState()

  for (const day of DAYS) {
    for (const b of plan[current][day]) {
      const id = `w${current}_${day}_${b.time}`.replace(/\s|–|:/g, "_") + `_${currentConcurso}_${mode}`
      delete state[id]
    }
  }

  saveState(state)
  selectWeek(current)
  alert(`Semana ${current} limpa com sucesso!`)
})

document.getElementById("resetAll").addEventListener("click", () => {
  if (confirm("Tem certeza? Isso vai apagar todo o progresso salvo localmente para este modo/concurso.")) {
    localStorage.removeItem(storageKey())
    localStorage.removeItem(notesKey())
    location.reload()
  }
})

document.getElementById("search").addEventListener("input", (e) => {
  const q = e.target.value.trim().toLowerCase()

  if (!q) {
    document.querySelectorAll(".block").forEach((b) => (b.style.display = "flex"))
    return
  }

  document.querySelectorAll(".block").forEach((b) => {
    const text = b.querySelector("label").innerText.toLowerCase()
    b.style.display = text.includes(q) ? "flex" : "none"
  })
})

document.getElementById("exportCsv").addEventListener("click", () => {
  const rows = ["Semana,Dia,Horário,Conteúdo,Concluído,Dificuldade,Notas"]
  const state = loadState()
  const notes = loadNotes()

  for (let w = 1; w <= WEEKS; w++) {
    for (const day of DAYS) {
      for (const b of plan[w][day]) {
        const id = `w${w}_${day}_${b.time}`.replace(/\s|–|:/g, "_") + `_${currentConcurso}_${mode}`
        const done = state[id] ? "SIM" : "NAO"
        const difficulty = notes[id]?.difficulty || "N/A"
        const noteText = (notes[id]?.text || "").replace(/"/g, '""')
        rows.push(
          [w, day, b.time, '"' + b.topic.replace(/"/g, '""') + '"', done, difficulty, '"' + noteText + '"'].join(","),
        )
      }
    }
  }

  const csv = rows.join("\n")
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" })
  const url = URL.createObjectURL(blob)
  const a = document.createElement("a")
  a.href = url
  a.download = `cronograma_${currentConcurso}_${mode}.csv`
  a.click()
  URL.revokeObjectURL(url)
})

document.getElementById("toggleAllReminders").addEventListener("click", () => {
  const el = document.getElementById("programSummary")
  el.textContent = buildProgramSummary()
  window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })
})

// Pomodoro controls
document.getElementById("openPomodoro").addEventListener("click", openPomodoro)
document.getElementById("closePomo").addEventListener("click", closePomodoro)
document.getElementById("pomoStart").addEventListener("click", startPomodoro)
document.getElementById("pomoPause").addEventListener("click", pausePomodoro)
document.getElementById("pomoReset").addEventListener("click", resetPomodoro)

// Notes modal controls
document.getElementById("closeNotes").addEventListener("click", closeNotesModal)
document.getElementById("saveNotes").addEventListener("click", saveNotesData)

document.querySelectorAll(".diff-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".diff-btn").forEach((b) => b.classList.remove("active"))
    btn.classList.add("active")
  })
})

// Close modal on outside click
document.getElementById("notesModal").addEventListener("click", (e) => {
  if (e.target.id === "notesModal") closeNotesModal()
})

// ============================
// INITIALIZATION
// ============================
document.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem("theme") || "light"
  document.body.setAttribute("data-theme", saved)
  const icon = document.querySelector("#toggleTheme i")
  icon.className = saved === "dark" ? "bi bi-sun" : "bi bi-moon"

  // Sidebar navigation
  const navItems = document.querySelectorAll(".nav-item")
  const sections = document.querySelectorAll(".content-section")

  navItems.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault()
      const targetSection = item.dataset.section

      navItems.forEach((nav) => nav.classList.remove("active"))
      item.classList.add("active")

      sections.forEach((section) => section.classList.remove("active"))
      document.getElementById(targetSection).classList.add("active")
    })
  })

  const sidebarToggle = document.getElementById("sidebarToggle")
  const sidebar = document.querySelector(".sidebar")

  sidebarToggle.addEventListener("click", () => {
    sidebar.classList.toggle("collapsed")
    localStorage.setItem("sidebarCollapsed", sidebar.classList.contains("collapsed"))
  })

  // Restaurar estado da sidebar
  const sidebarCollapsed = localStorage.getItem("sidebarCollapsed") === "true"
  if (sidebarCollapsed) {
    sidebar.classList.add("collapsed")
  }

  // Mobile menu toggle
  const menuToggle = document.getElementById("menuToggle")

  menuToggle.addEventListener("click", () => {
    sidebar.classList.add("open")
  })

  document.addEventListener("click", (e) => {
    if (window.innerWidth <= 1024) {
      if (!sidebar.contains(e.target) && !menuToggle.contains(e.target) && sidebar.classList.contains("open")) {
        sidebar.classList.remove("open")
      }
    }
  })

  setConcurso("pmesp") // default
  updateCountdowns()
  setInterval(updateCountdowns, 60000) // Update every minute

  document.getElementById("programSummary").textContent = buildProgramSummary()
})

// ============================
// CONTROLES GERAIS - Modo Foco
// ============================
let focusModeActive = false

document.getElementById("focusMode").addEventListener("click", () => {
  focusModeActive = !focusModeActive
  const btn = document.getElementById("focusMode")
  const appContainer = document.querySelector(".app-container")

  if (focusModeActive) {
    appContainer.classList.add("focus-mode")
    btn.innerHTML = '<i class="bi bi-eye-slash"></i> Sair do Foco'
    btn.classList.add("active")

    // Esconder sidebar
    document.querySelector(".sidebar").classList.add("focus-hidden")

    // Esconder header actions
    document.querySelector(".header-actions").classList.add("focus-hidden")

    // Esconder section header actions
    document.querySelector(".section-actions").classList.add("focus-hidden")

    // Mostrar apenas o cronograma
    document.querySelectorAll(".content-section").forEach((section) => {
      if (section.id !== "cronograma") {
        section.style.display = "none"
      }
    })

    alert("Modo Foco ativado! Apenas o cronograma está visível para máxima concentração.")
  } else {
    appContainer.classList.remove("focus-mode")
    btn.innerHTML = '<i class="bi bi-eye"></i> Modo Foco'
    btn.classList.remove("active")

    // Mostrar sidebar
    document.querySelector(".sidebar").classList.remove("focus-hidden")

    // Mostrar header actions
    document.querySelector(".header-actions").classList.remove("focus-hidden")

    // Mostrar section header actions
    document.querySelector(".section-actions").classList.remove("focus-hidden")

    // Restaurar navegação normal
    const activeNav = document.querySelector(".nav-item.active")
    if (activeNav) {
      const targetSection = activeNav.dataset.section
      document.querySelectorAll(".content-section").forEach((section) => {
        section.style.display = section.id === targetSection ? "block" : "none"
      })
    }
  }
})
