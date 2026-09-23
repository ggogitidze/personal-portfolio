export type TrackKey = "energy" | "embedded";

export type EvidenceLabel =
  | "Executed simulation"
  | "Automated test"
  | "Analytical calculation"
  | "Public-dataset analysis"
  | "Schematic-ready design";

export type Metric = {
  value: string;
  label: string;
  context: string;
};

export type Visual = {
  src: string;
  alt: string;
  caption: string;
};

export type Download = {
  label: string;
  href: string;
  detail: string;
};

export type Project = {
  slug: string;
  route: string;
  track: TrackKey;
  title: string;
  shortTitle: string;
  subtitle: string;
  status: EvidenceLabel[];
  summary: string;
  problem: string;
  scope: string[];
  architecture: string;
  contributions: string[];
  technologies: string[];
  decisions: string[];
  methods: string[];
  metrics: Metric[];
  verification: string[];
  limitations: string[];
  visuals: Visual[];
  downloads: Download[];
  skills: string[];
};

export type Track = {
  key: TrackKey;
  name: string;
  route: string;
  eyebrow: string;
  summary: string;
  focus: string[];
  heroImage: string;
  heroAlt: string;
  resumeHref?: string;
};

export const tracks: Record<TrackKey, Track> = {
  energy: {
    key: "energy",
    name: "Energy & Grid Systems",
    route: "/energy-systems",
    eyebrow: "Power engineering portfolio",
    summary:
      "Power-distribution design, distributed-energy control, and transmission reliability studies built around traceable assumptions and reproducible analysis.",
    focus: [
      "Load flow and short-circuit studies",
      "Distribution equipment and feeder sizing",
      "Microgrid dispatch and energy optimization",
      "N-1 contingency analysis and grid risk",
    ],
    heroImage: "/engineering/grid/network-most-severe.webp",
    heroAlt: "IEEE 14-bus network with the transformer 7-8 contingency highlighted",
  },
  embedded: {
    key: "embedded",
    name: "Embedded Electronics & Signal Processing",
    route: "/embedded-signal-systems",
    eyebrow: "Circuits, instrumentation, and DSP portfolio",
    summary:
      "Mixed-signal acquisition, embedded interfaces, and physics-grounded signal analysis with explicit boundaries between simulation, software verification, and physical testing.",
    focus: [
      "Mixed-signal architecture and PCB constraints",
      "Embedded acquisition and framed data transport",
      "Vibration diagnostics and envelope analysis",
      "Biomedical filtering and event detection",
    ],
    heroImage: "/engineering/bearing/envelope-hero.webp",
    heroAlt: "Envelope spectra comparing a normal bearing with an outer-race fault",
  },
};

export const projects: Project[] = [
  {
    slug: "commercial-power-distribution",
    route: "/energy-systems/commercial-power-distribution",
    track: "energy",
    title: "Small Commercial Facility Power Distribution Design and Analysis",
    shortTitle: "Commercial Power Distribution",
    subtitle: "Preliminary 12.47 kV-to-208/120 V radial distribution study for a synthetic 35,000 ft² office and warehouse.",
    status: ["Executed simulation", "Analytical calculation", "Automated test"],
    summary:
      "An executable educational design that connects a load schedule and preliminary equipment sizing to AC load flow, voltage-drop checks, phase allocation, and fault-current analysis.",
    problem:
      "Develop an explainable small-facility distribution architecture and test whether preliminary transformer, feeder, and panel choices remain acceptable across normal and stressed operating conditions.",
    scope: [
      "12.47 kV utility equivalent, 750 kVA service transformer, and 480Y/277 V distribution",
      "150 kVA derived 208Y/120 V system for receptacle, IT, kitchen, and future loads",
      "Synthetic load schedule, feeder assumptions, four operating scenarios, and preliminary protection hierarchy",
      "Balanced positive-sequence analysis; not a construction or permit design",
    ],
    architecture:
      "A radial utility-to-service-transformer topology supplies a 480 V switchboard, motor and lighting panels, and a downstream delta-wye transformer feeding two 208/120 V panels. Phase allocation is checked separately from the balanced network solution.",
    contributions: [
      "Built the load schedule and translated connected kW, demand factors, and power factor into kW, kvar, kVA, and current.",
      "Implemented the pandapower network, scenario runner, IEC 60909 three-phase fault study, and result exports.",
      "Used execution results to correct an undersized upstream feeder and improve single-phase load allocation.",
      "Produced the one-line, calculation workbook, engineering report, validation checklist, and hand-calculation checks.",
    ],
    technologies: ["Python", "pandapower", "pandas", "NumPy", "Matplotlib", "Excel", "IEC 60909 concepts"],
    decisions: [
      "Used 480 V for larger three-phase loads and 277 V lighting to limit current while deriving 208Y/120 V for common utilization loads.",
      "Selected a radial topology so load paths, protection boundaries, and failure assumptions remain inspectable.",
      "Kept the single-line-to-ground value explicitly approximate because utility and equipment zero-sequence data are unavailable.",
    ],
    methods: [
      "Demand-load and three-phase current calculations",
      "Conductor R/X voltage-drop calculations",
      "Newton-Raphson balanced AC power flow",
      "IEC 60909 positive-sequence short-circuit analysis",
      "Independent transformer-terminal fault and phase-balance checks",
    ],
    metrics: [
      { value: "331.4 kW", label: "Base source power", context: "Executed balanced AC base case" },
      { value: "0.952 p.u.", label: "Base minimum voltage", context: "Barely above the 0.95 p.u. planning target" },
      { value: "0.927 p.u.", label: "Future minimum voltage", context: "110% existing load plus 30 kW future allowance" },
      { value: "16.2 kA", label: "Maximum 3-phase fault", context: "Modeled at the 480 V main switchboard" },
    ],
    verification: [
      "All four published power-flow cases converge and retain traceable bus and feeder outputs.",
      "Automated checks cover current, transformer fault current, voltage drop, and phase balance.",
      "A 7.24 kA transformer-only hand estimate correctly bounds the 5.97 kA detailed 208 V network result.",
      "Generated CSVs, figures, workbook, and report are rebuilt from the same source assumptions.",
    ],
    limitations: [
      "Synthetic facility and utility data; no site survey, field measurements, professional seal, or AHJ review.",
      "Balanced load flow does not resolve neutral current, unbalance, harmonics, or motor starting.",
      "No device-curve coordination, arc-flash calculation, exact grounding study, or construction drawing set.",
      "Feeder ampacity and interrupting selections require the adopted NEC, equipment data, and licensed-engineer review.",
    ],
    visuals: [
      {
        src: "/engineering/commercial/one-line.webp",
        alt: "Preliminary one-line from the 12.47 kV utility through 480 V and 208/120 V distribution equipment",
        caption: "Preliminary radial one-line. Ratings are synthetic study inputs, not construction selections.",
      },
      {
        src: "/engineering/commercial/bus-voltage-scenarios.webp",
        alt: "Bus voltage comparison for base, peak, future expansion, and low utility voltage scenarios",
        caption: "Executed scenario voltages show the downstream 208 V system becoming the governing future constraint.",
      },
      {
        src: "/engineering/commercial/transformer-loading.webp",
        alt: "Transformer loading percentages across four facility operating scenarios",
        caption: "Transformer thermal loading remains below the modeled capacity while voltage limits govern expansion planning.",
      },
    ],
    downloads: [
      { label: "Engineering report", href: "/downloads/commercial-power-distribution/technical-report.pdf", detail: "PDF · preliminary educational study" },
      { label: "Calculation workbook", href: "/downloads/commercial-power-distribution/calculations.xlsx", detail: "XLSX · load, voltage, and fault results" },
      { label: "Source and evidence bundle", href: "/downloads/commercial-power-distribution/project-bundle.zip", detail: "ZIP · source, tests, results, and figures" },
    ],
    skills: ["Power distribution", "Load flow", "Short-circuit analysis", "Equipment sizing", "Voltage drop", "Engineering documentation"],
  },
  {
    slug: "microgrid-energy-management",
    route: "/energy-systems/microgrid-energy-management",
    track: "energy",
    title: "Solar + Battery Microgrid Energy-Management Simulator",
    shortTitle: "Microgrid Energy Management",
    subtitle: "Seven-day commercial dispatch benchmark comparing grid, solar, rule-based storage, and mixed-integer optimized storage.",
    status: ["Executed simulation", "Automated test"],
    summary:
      "A reproducible single-bus simulator that schedules PV, battery, and grid power under time-of-use prices, demand charges, equipment limits, and optional outages.",
    problem:
      "Determine how control strategy changes operating cost, peak demand, renewable utilization, battery cycling, and outage performance while maintaining interval-by-interval power and energy balance.",
    scope: [
      "168 hourly intervals using a fixed-seed synthetic commercial load and PV profile",
      "Grid-only, solar-only, causal rule-based battery, and perfect-forecast MILP cases",
      "Energy charges, demand charges, export credit, throughput cost, and unserved-energy penalty",
      "Single AC bus; no feeder voltage, reactive power, transient, or protection model",
    ],
    architecture:
      "PV, a bidirectional battery inverter, the utility interconnection, and facility load meet at one modeled AC bus. A controller chooses battery and grid setpoints while the validation layer independently checks power balance and state-of-charge recursion.",
    contributions: [
      "Defined the sign conventions, SOC dynamics, dispatch limits, and cost model.",
      "Implemented both a causal self-consumption controller and a SciPy/HiGHS mixed-integer optimizer.",
      "Added binary charge/discharge exclusivity, outage isolation, peak-demand tracking, and a terminal-SOC constraint.",
      "Built sensitivity studies, CSV/XLSX exports, plots, and automated engineering checks.",
    ],
    technologies: ["Python", "SciPy HiGHS MILP", "pandas", "NumPy", "Matplotlib", "Excel"],
    decisions: [
      "Used a binary battery-mode variable so simultaneous charging and discharging are structurally impossible.",
      "Required final SOC to meet or exceed initial SOC to prevent artificial end-of-horizon savings.",
      "Kept the rule-based controller causal and the optimizer perfect-forecast so they serve distinct operational and benchmark roles.",
    ],
    methods: [
      "Hourly AC-bus energy balance",
      "Efficiency-adjusted battery SOC recursion",
      "Mixed-integer linear optimization",
      "Fixed-seed scenario generation",
      "Sensitivity analysis for PV, storage, tariffs, demand charges, SOC, and outage duration",
    ],
    metrics: [
      { value: "$1,800.27", label: "Optimized weekly cost", context: "Synthetic tariff; down from $4,169.94 grid-only" },
      { value: "$2,369.67", label: "Modeled savings", context: "Optimized case versus grid-only over 168 hours" },
      { value: "43.35 kW", label: "Optimized peak import", context: "Versus 101.01 kW in the grid-only case" },
      { value: "890.90 kWh", label: "Battery throughput", context: "Active cycling under the simplified wear proxy" },
    ],
    verification: [
      "Power-balance and SOC-dynamics residuals remain near numerical precision for all four controllers.",
      "SOC stays within 16-144 kWh for the 160 kWh battery configuration.",
      "Automated tests verify balance, bounds, mutual exclusivity, and zero grid exchange during outage intervals.",
      "Fixed seed 321 and machine-readable run metadata make the published week reproducible.",
    ],
    limitations: [
      "Synthetic hourly data and a short billing window; savings are scenario estimates, not a utility bill forecast.",
      "The optimizer assumes perfect foresight and is not a deployed real-time controller.",
      "Fixed efficiency and linear throughput cost do not model electrochemical degradation or temperature.",
      "No reactive power, network voltage, inverter kVA, interconnection, or hardware behavior is represented.",
    ],
    visuals: [
      {
        src: "/engineering/microgrid/architecture.webp",
        alt: "Microgrid architecture connecting solar, battery, utility grid, facility load, and energy-management controller",
        caption: "Single-bus operational model and control boundary used by both battery strategies.",
      },
      {
        src: "/engineering/microgrid/optimized-dispatch.webp",
        alt: "Seven-day optimized load, solar, grid, battery power, and state-of-charge traces",
        caption: "Executed optimized dispatch. Positive battery power denotes discharge; all powers are hourly averages in kW.",
      },
      {
        src: "/engineering/microgrid/cost-comparison.webp",
        alt: "Weekly operating cost comparison for four microgrid control strategies",
        caption: "Synthetic weekly operating-cost comparison including energy, demand, and battery-throughput terms.",
      },
    ],
    downloads: [
      { label: "Technical report", href: "/downloads/microgrid-energy-management/technical-report.pdf", detail: "PDF · formulation, results, and limits" },
      { label: "Results workbook", href: "/downloads/microgrid-energy-management/results.xlsx", detail: "XLSX · dispatch and scenario outputs" },
      { label: "Source and evidence bundle", href: "/downloads/microgrid-energy-management/project-bundle.zip", detail: "ZIP · source, tests, results, and figures" },
    ],
    skills: ["Microgrid controls", "Optimization", "Battery modeling", "Energy economics", "Scenario analysis", "Model validation"],
  },
  {
    slug: "grid-contingency-analysis",
    route: "/energy-systems/grid-contingency-analysis",
    track: "energy",
    title: "IEEE 14-Bus N−1 Contingency Analysis and Grid-Risk Dashboard",
    shortTitle: "Grid Contingency Analysis",
    subtitle: "AC outage analysis, islanding detection, transparent severity ranking, and PTDF/LODF screening on a benchmark network.",
    status: ["Executed simulation", "Automated test"],
    summary:
      "A reproducible reliability workflow that validates the base case, removes every line and transformer, records violations, and compares fast DC screening with full AC results.",
    problem:
      "Identify which single-branch outages most threaten the IEEE 14-bus benchmark while keeping topology failures, voltage criteria, synthetic thermal assumptions, and approximation error auditable.",
    scope: [
      "14 buses, 15 lines, five transformers, 11 loads, and 20 single-branch outages",
      "Newton-Raphson AC analysis with a fast-decoupled validation solve",
      "Graph-based islanding detection and deterministic severity ranking",
      "Independent PTDF/LODF implementation and selected-case AC comparison",
    ],
    architecture:
      "A validated AC base model feeds a contingency engine. Each outage is checked topologically before solving; connected cases produce bus and branch results, while islanded cases are reported without inventing a full-network solution. A separate DC screening path estimates active-flow redistribution.",
    contributions: [
      "Built the branch catalog, topology checks, AC contingency loop, score components, and detailed result tables.",
      "Implemented PTDF and LODF matrices independently and cross-checked them against PYPOWER.",
      "Created network figures, ranking charts, a self-contained dashboard, an executed notebook, and a technical report.",
      "Kept source-case voltage-limit conflicts and missing physical branch ratings visible rather than suppressing them.",
    ],
    technologies: ["Python", "pandapower", "NetworkX", "PYPOWER", "pandas", "Plotly", "Matplotlib"],
    decisions: [
      "Performed graph connectivity checks before AC solution so bridge outages cannot be misreported as ordinary convergence failures.",
      "Used transparent stress-test ratings because the canonical case does not contain physical continuous branch ratings.",
      "Stored every severity component so the prioritization index can be reconstructed and challenged.",
    ],
    methods: [
      "AC Newton-Raphson and fast-decoupled power flow",
      "Complete line and transformer N−1 enumeration",
      "Connected-component and unsupplied-island analysis",
      "Voltage-breach and scenario-loading severity components",
      "DC PTDF/LODF factor calculation and AC error comparison",
    ],
    metrics: [
      { value: "20", label: "N−1 outages", context: "Every line and transformer evaluated exactly once" },
      { value: "1", label: "Islanding event", context: "Transformer 7-8 separates bus 8" },
      { value: "1.174 MW", label: "DC screening MAE", context: "Five selected connected outages versus AC branch flows" },
      { value: "13.393 MW", label: "Base real losses", context: "Validated AC base case on a 259 MW load" },
    ],
    verification: [
      "Two AC algorithms agree within 7.12×10⁻¹⁰ p.u. voltage and 3.74×10⁻⁸ degrees angle.",
      "Generation minus demand minus losses closes to 3.55×10⁻¹⁵ MW in the verified run.",
      "Tests cover contingency completeness, boundary logic, stable ranking, bridge behavior, and factor matrices.",
      "Independent PTDF and finite non-bridge LODF entries match PYPOWER near machine precision.",
    ],
    limitations: [
      "The IEEE 14-bus model is a teaching benchmark, not a current utility system.",
      "Thermal ratings are transparent stress-test values, not utility or manufacturer limits.",
      "Generator reactive limits and PV-to-PQ switching are not enforced in this comparison configuration.",
      "DC screening cannot establish voltage security, reactive behavior, losses, convergence, or islanded operation.",
    ],
    visuals: [
      {
        src: "/engineering/grid/network-most-severe.webp",
        alt: "IEEE 14-bus network showing transformer 7-8 out of service and bus 8 islanded",
        caption: "Top-ranked event: transformer 7-8 islands bus 8, so no valid full-network AC solution is claimed.",
      },
      {
        src: "/engineering/grid/severity-ranking.webp",
        alt: "Bar chart ranking the ten highest-severity IEEE 14-bus contingencies",
        caption: "Deterministic ranking from visible islanding, solution, voltage, loading, unsupplied-energy, and loss components.",
      },
      {
        src: "/engineering/grid/dc-ac-comparison.webp",
        alt: "Comparison of DC LODF estimates and full AC post-contingency branch flows",
        caption: "Selected connected cases show where lossless DC screening is useful and where nonlinear AC effects remain important.",
      },
    ],
    downloads: [
      { label: "Technical report", href: "/downloads/grid-contingency-analysis/technical-report.pdf", detail: "PDF · AC, topology, and screening results" },
      { label: "Interactive dashboard", href: "/downloads/grid-contingency-analysis/grid-risk-dashboard.html", detail: "HTML · self-contained result explorer" },
      { label: "Source and evidence bundle", href: "/downloads/grid-contingency-analysis/project-bundle.zip", detail: "ZIP · source, tests, results, and figures" },
    ],
    skills: ["Power-system reliability", "Contingency analysis", "AC power flow", "PTDF/LODF", "Topology analysis", "Technical visualization"],
  },
  {
    slug: "stm32-data-acquisition",
    route: "/embedded-signal-systems/stm32-data-acquisition",
    track: "embedded",
    title: "USB Mixed-Signal STM32 Data-Acquisition Board",
    shortTitle: "STM32 Data Acquisition",
    subtitle: "Schematic-ready two-channel Rev-A architecture with protected analog inputs, SPI conversion, framed USB transport, and a Python host workflow.",
    status: ["Schematic-ready design", "Analytical calculation", "Automated test"],
    summary:
      "A mixed-signal design package connecting electrical requirements and PCB constraints to portable embedded logic, host-side capture, and an explicit hardware bring-up plan.",
    problem:
      "Design a buildable first-revision acquisition board that exposes the real interfaces among analog conditioning, conversion, firmware buffering, USB transport, layout, and verification without overstating unbuilt hardware.",
    scope: [
      "Two protected 0-3.0 V inputs and a 20 kS/s-per-channel target",
      "STM32G0B1, MCP3202 12-bit SPI ADC, TLV9062 buffers, USB-C power/data, and SWD",
      "250 kHz PWM with a two-pole RC output for slow stimulus and loopback testing",
      "Schematic-ready connections and layout plan; no KiCad PCB, fabrication, or bench measurements",
    ],
    architecture:
      "USB-C supplies 5 V and CDC transport. A protected LDO creates digital 3.3 V and a ferrite-fed analog zone over one continuous ground plane. Buffered RC-filtered inputs feed the external ADC; timer-driven firmware fills ping-pong buffers and emits sequence- and CRC-protected frames.",
    contributions: [
      "Converted acquisition goals into measurable electrical, timing, interface, and bring-up requirements.",
      "Selected the MCU, ADC, op amp, regulator, protection approach, and assembly-friendly packages through a documented trade study.",
      "Defined schematic-ready connections, pin assignments, floorplan, return-path rules, BOM, and Rev-A risk controls.",
      "Implemented portable buffering, framing, CRC, PWM math, and a Python parser/simulated capture workflow.",
    ],
    technologies: ["STM32G0", "MCP3202", "TLV9062", "USB CDC", "SPI", "C11", "Python", "CMake", "Mixed-signal PCB design"],
    decisions: [
      "Selected a 12-bit SOIC ADC over a higher-resolution delta-sigma device to reduce Rev-A clocking, front-end, and assembly risk.",
      "Used one continuous ground plane with placement-based analog/digital partitioning to preserve return-current paths.",
      "Kept USB transfer outside the sampling callback and added sequence, status, and CRC fields so transport failures are observable.",
    ],
    methods: [
      "RC cutoff, quantization, power, and ideal PWM-ripple calculations",
      "Mixed-signal placement and return-path planning",
      "Ping-pong acquisition buffering and CRC-16-CCITT framing",
      "Native C unit tests and host parser simulation",
      "Staged power, USB, ADC, output, loopback, and sustained-stream bring-up plan",
    ],
    metrics: [
      { value: "20 kS/s/ch", label: "Sampling target", context: "Two channels; not yet measured on target hardware" },
      { value: "12 bit", label: "Nominal conversion", context: "0.806 mV ideal LSB at a 3.3 V reference" },
      { value: "10.61 kHz", label: "Input RC pole", context: "First-order anti-alias aid above the 5 kHz useful band" },
      { value: "250 kHz", label: "PWM carrier", context: "Filtered for slow analog stimulus, not precision generation" },
    ],
    verification: [
      "The calculation script produces filter, quantization, thermal, data-rate, and supply-current results.",
      "Portable native tests exercise CRC, frame structure, buffer transitions, sequence behavior, and PWM conversion.",
      "Python tests exercise frame parsing and simulated host capture with CSV and plotted output.",
      "Hardware acceptance is deliberately deferred to target compilation, KiCad ERC/DRC, fabrication review, and bench bring-up.",
    ],
    limitations: [
      "No schematic capture, PCB layout, ERC, DRC, Gerber review, assembled board, or electrical measurement has occurred.",
      "Native tests do not prove STM32 HAL integration, SPI timing, USB enumeration, or interrupt latency.",
      "The 3.3 V rail doubles as the ADC reference and the one-pole input filter provides limited Nyquist rejection.",
      "The board is non-isolated, uncalibrated, and not a safety- or measurement-certified instrument.",
    ],
    visuals: [
      {
        src: "/engineering/daq/architecture.webp",
        alt: "STM32 mixed-signal DAQ architecture from USB-C through the MCU, ADC inputs, and PWM output",
        caption: "Rev-A functional architecture linking USB power/data, conversion, acquisition control, and filtered output.",
      },
      {
        src: "/engineering/daq/power-tree.webp",
        alt: "DAQ power tree separating protected USB input, digital 3.3 V, and ferrite-fed analog 3.3 V",
        caption: "Power and placement domains share one continuous ground plane; the ferrite separates supply noise, not ground nets.",
      },
      {
        src: "/engineering/daq/simulated-capture.webp",
        alt: "Simulated two-channel voltage capture produced by the Python DAQ host utility",
        caption: "Host-side simulated capture verifies parsing, engineering-unit conversion, CSV export, and plotting—not analog hardware performance.",
      },
    ],
    downloads: [
      { label: "Design report", href: "/downloads/stm32-data-acquisition/design-report.pdf", detail: "PDF · architecture, decisions, and verification boundary" },
      { label: "BOM workbook", href: "/downloads/stm32-data-acquisition/bom.xlsx", detail: "XLSX · Rev-A planning BOM" },
      { label: "Source and evidence bundle", href: "/downloads/stm32-data-acquisition/project-bundle.zip", detail: "ZIP · hardware package, source, tests, and results" },
    ],
    skills: ["Mixed-signal design", "Embedded C", "USB and SPI", "PCB layout planning", "Data acquisition", "Design verification"],
  },
  {
    slug: "bearing-condition-monitoring",
    route: "/embedded-signal-systems/bearing-condition-monitoring",
    track: "embedded",
    title: "Motor Bearing Condition Monitoring from Vibration Signals",
    shortTitle: "Bearing Condition Monitoring",
    subtitle: "Physics-first vibration analysis using bearing kinematics, calibrated spectra, and Hilbert-envelope demodulation on CWRU data.",
    status: ["Public-dataset analysis", "Automated test"],
    summary:
      "A reproducible diagnostic workflow that uses mechanical fault frequencies and demodulation before introducing a deliberately limited cross-load classifier.",
    problem:
      "Distinguish normal, inner-race, outer-race, and rolling-element conditions across two loads while keeping the evidence physically interpretable and avoiding same-record machine-learning leakage.",
    scope: [
      "Eight official CWRU drive-end records covering four conditions at 0 and 3 HP",
      "Smallest 0.007-inch seeded defects and five one-second windows per record",
      "12 kHz common analysis rate, 1 Hz FFT resolution, and a fixed 2-5 kHz envelope band",
      "Exploratory cross-load logistic regression after physics-based interpretation",
    ],
    architecture:
      "Checksum-verified MAT files pass through channel discovery, offset removal, rate standardization, and segmentation. A parallel feature path computes time statistics while a spectral path calculates kinematic frequencies, raw spectra, resonance-band envelopes, and local frequency prominence.",
    contributions: [
      "Selected a controlled subset and encoded official record metadata, source rates, loads, speeds, and hashes.",
      "Implemented amplitude-correct one-sided FFTs, bearing kinematics, envelope analysis, and interpretable feature extraction.",
      "Designed a cross-load experiment that keeps windows from each source record on one side of a directional split.",
      "Produced the notebook, seven figures, results tables, automated tests, and deployment considerations.",
    ],
    technologies: ["Python", "SciPy", "NumPy", "pandas", "scikit-learn", "CWRU Bearing Data Center", "Hilbert transform"],
    decisions: [
      "Used measured RPM in the kinematic equations rather than a nominal motor speed.",
      "Fixed the 2-5 kHz demodulation band for all conditions to avoid post-hoc favorable tuning.",
      "Treated the classifier as secondary because 40 windows still represent only eight source recordings.",
    ],
    methods: [
      "Polyphase anti-alias resampling and one-second segmentation",
      "Hann-windowed coherent-gain-corrected FFT",
      "BPFO, BPFI, BSF, and FTF kinematic calculation",
      "Butterworth bandpass and Hilbert-envelope spectrum",
      "Cross-load standardized logistic-regression comparison",
    ],
    metrics: [
      { value: "36.1-40.0 dB", label: "BPFO prominence", context: "Median outer-race evidence across 3 and 0 HP" },
      { value: "34.8-35.0 dB", label: "BPFI prominence", context: "Median inner-race evidence across 0 and 3 HP" },
      { value: "5.8-9.9 dB", label: "BSF prominence", context: "Weaker, load-sensitive rolling-element evidence" },
      { value: "82.5%", label: "Cross-load accuracy", context: "Exploratory; windows are not independent machines" },
    ],
    verification: [
      "Official downloads are checked against fixed SHA-256 values before analysis.",
      "Tests cover rate and length, offset removal, segmentation, FFT amplitude/peak location, Nyquist endpoint, and feature values.",
      "The analysis produces 40 balanced feature rows and seven publication-quality figures.",
      "The notebook and two-page report preserve the same assumptions, units, and limitations as the executable pipeline.",
    ],
    limitations: [
      "CWRU faults are isolated EDM-seeded defects on a laboratory rig, not naturally evolving field failures.",
      "Each class/load combination has one source recording; window count does not equal independent asset count.",
      "Normal and fault records have different source sampling histories before standardization.",
      "Absolute acceleration calibration is not established by the referenced public pages, so amplitude remains in CWRU units.",
    ],
    visuals: [
      {
        src: "/engineering/bearing/envelope-hero.webp",
        alt: "Normal and outer-race bearing envelope spectra with BPFO harmonic markers",
        caption: "At 3 HP, demodulation reveals the BPFO harmonic family above the local envelope-spectrum floor.",
      },
      {
        src: "/engineering/bearing/cross-load-evidence.webp",
        alt: "Expected bearing fault-frequency prominence compared across zero and three horsepower",
        caption: "Measured-RPM kinematic overlays keep race-fault evidence aligned as load and speed change.",
      },
      {
        src: "/engineering/bearing/time-waveforms.webp",
        alt: "Time-domain vibration waveforms for normal, inner-race, outer-race, and ball-bearing conditions",
        caption: "Time waveforms show changing impulsiveness, while envelope-frequency evidence identifies the likely component.",
      },
    ],
    downloads: [
      { label: "Technical report", href: "/downloads/bearing-condition-monitoring/technical-report.pdf", detail: "PDF · two-page diagnostic study" },
      { label: "Feature results", href: "/downloads/bearing-condition-monitoring/feature-results.csv", detail: "CSV · 40 analyzed windows" },
      { label: "Source and evidence bundle", href: "/downloads/bearing-condition-monitoring/project-bundle.zip", detail: "ZIP · source, tests, results, and figures; raw CWRU files excluded" },
    ],
    skills: ["Vibration analysis", "Spectral estimation", "Envelope demodulation", "Bearing kinematics", "Condition monitoring", "Experimental design"],
  },
  {
    slug: "ecg-signal-processing",
    route: "/embedded-signal-systems/ecg-signal-processing",
    track: "embedded",
    title: "ECG Denoising, QRS Detection, and Signal-Quality Testbench",
    shortTitle: "ECG Signal Processing",
    subtitle: "Non-diagnostic synthetic testbench for configurable filtering, explainable QRS timing, robustness sweeps, and failure analysis.",
    status: ["Executed simulation", "Automated test"],
    summary:
      "A fixed-seed DSP experiment that injects controlled artifacts, compares two processing chains, and evaluates denoising and one-to-one detection metrics across 80 synthetic conditions.",
    problem:
      "Measure how filter bandwidth and detector sensitivity trade morphology preservation against robust beat timing under baseline drift, mains interference, broadband noise, motion-like contamination, and impulses.",
    scope: [
      "Deterministic 30-second, 250 Hz synthetic ECG with 35 known reference beats",
      "Five input-SNR targets, four artifact selections, 50/60 Hz mains, and two processing configurations",
      "Zero-phase offline filtering, derivative-square-integrate detection, RR metrics, and heuristic SQI",
      "Educational, non-diagnostic study; no patient or public-record performance result is claimed",
    ],
    architecture:
      "A synthetic generator provides the clean reference and exact event times. Controlled noise injection feeds configurable notch and Butterworth band-pass stages, optional smoothing, and an explainable QRS detector. A metric layer performs one-to-one peak matching, denoising comparisons, timing error, and signal-quality scoring.",
    contributions: [
      "Implemented deterministic ECG synthesis and controlled baseline, mains, motion-like, impulse, and broadband noise injection.",
      "Built stable configurable filters with zero-phase and causal execution paths.",
      "Implemented an inspectable derivative-square-integrate detector with refractory and peak-refinement logic.",
      "Designed the 80-condition sweep, one-to-one metrics, failure-case visualization, workbook, notebook, and tests.",
    ],
    technologies: ["Python", "SciPy Signal", "NumPy", "pandas", "Matplotlib", "Digital filtering", "Event detection"],
    decisions: [
      "Compared a balanced 0.5-35 Hz chain with a narrower aggressive 1-25 Hz chain instead of optimizing a single favorable configuration.",
      "Used exact synthetic reference peaks to make precision, recall, F1, and timing error auditable.",
      "Published a severe-motion failure case and kept public MIT-BIH evaluation separate until actually executed.",
    ],
    methods: [
      "DC removal, selectable 50/60 Hz notch, and SOS Butterworth band-pass filtering",
      "Derivative, squaring, moving integration, robust thresholding, and refractory enforcement",
      "One-to-one event matching within a 100 ms tolerance",
      "SNR, RMSE, RR, heart-rate, timing, and heuristic SQI calculations",
      "Fixed-seed factorial robustness sweep and explicit failure-case review",
    ],
    metrics: [
      { value: "80", label: "Synthetic conditions", context: "Five SNRs × four artifact sets × two mains frequencies × two configurations" },
      { value: "0.9898", label: "Mean aggressive F1", context: "Synthetic one-to-one QRS detection only" },
      { value: "0.8947", label: "Worst aggressive F1", context: "Lowest result across the fixed synthetic sweep" },
      { value: "0.90 ms", label: "Mean timing error", context: "Aggressive configuration; synthetic reference peaks" },
    ],
    verification: [
      "Tests check filter stability, output length and finiteness, random-seed reproducibility, invalid cutoffs, and detection on a known signal.",
      "The run manifest records seed 20260922, 250 Hz sampling, 30-second duration, 35 clean beats, and 80 result rows.",
      "CSV and workbook summaries are produced directly from the experiment table.",
      "Filter-response, waveform, robustness, and failure figures preserve the synthetic and non-diagnostic context.",
    ],
    limitations: [
      "All published performance values come from a synthetic generator, not patient recordings or a clinical study.",
      "Zero-phase filtering uses future samples and is suitable for offline analysis, not direct real-time deployment.",
      "The heuristic SQI is transparent but not clinically validated.",
      "Public-record evaluation, causal-delay characterization, diverse morphology, and device-level acquisition remain future work.",
    ],
    visuals: [
      {
        src: "/engineering/ecg/waveform-detection.webp",
        alt: "Synthetic clean and noisy ECG, filtered waveform with detected R peaks, and integrated detector energy",
        caption: "Representative 60 Hz, 10 dB synthetic condition showing the signal path and detected events.",
      },
      {
        src: "/engineering/ecg/filter-response.webp",
        alt: "Magnitude and phase responses for balanced and aggressive ECG filter configurations",
        caption: "The aggressive chain trades retained bandwidth for stronger timing robustness in the synthetic sweep.",
      },
      {
        src: "/engineering/ecg/noise-performance.webp",
        alt: "QRS F1 score versus target input SNR for balanced and aggressive ECG processing",
        caption: "Fixed-seed robustness comparison across the all-artifact synthetic cases.",
      },
      {
        src: "/engineering/ecg/failure-case.webp",
        alt: "ECG detections and reference beats during severe motion-like contamination at minus five decibels",
        caption: "Published failure case: motion-like slopes can create false detections and obscure true peaks.",
      },
    ],
    downloads: [
      { label: "Technical report", href: "/downloads/ecg-signal-processing/technical-report.pdf", detail: "PDF · non-diagnostic DSP study" },
      { label: "Noise-sweep results", href: "/downloads/ecg-signal-processing/noise-sweep-results.csv", detail: "CSV · 80 synthetic conditions" },
      { label: "Source and evidence bundle", href: "/downloads/ecg-signal-processing/project-bundle.zip", detail: "ZIP · canonical source, tests, results, and figures" },
    ],
    skills: ["Digital signal processing", "Filter design", "QRS detection", "Testbench design", "Metric design", "Failure analysis"],
  },
];

export const projectsByTrack = (track: TrackKey) => projects.filter((project) => project.track === track);

export const getProject = (track: TrackKey, slug: string) =>
  projects.find((project) => project.track === track && project.slug === slug);
