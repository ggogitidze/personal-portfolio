# Giorgi Gogitidze — Power Systems Resume Content

> Content brief for the final one-page PDF. Contact details and final visual formatting remain with the candidate. Every technical number below is tied to the supplied executable project evidence.

## Target headline

Electrical Engineering Graduate Student | Power Systems, Distribution, Grid Reliability, and DER Controls

## Professional summary

M.S. Electrical Engineering student at NJIT with a B.S. in Computer Science and project experience in commercial power distribution, solar-plus-storage control, and transmission contingency analysis. Builds reproducible engineering studies that connect assumptions and hand calculations to load flow, short-circuit analysis, optimization, automated checks, and technical documentation. Seeking power systems, electrical design, grid studies, DER, or energy-engineering roles.

## Education

**New Jersey Institute of Technology** — M.S. Electrical Engineering, in progress

**Caldwell University** — B.S. Computer Science, May 2025

## Selected engineering projects

### Small Commercial Facility Power Distribution Design and Analysis

- Developed a preliminary radial 12.47 kV-to-480Y/277 V-to-208Y/120 V design for a synthetic 35,000 ft² office/warehouse, including load scheduling, transformer/panel/feeder sizing, voltage-drop calculations, phase allocation, and an electrical one-line.
- Built and executed four pandapower AC scenarios; the corrected base case served 331.4 kW with 0.952 p.u. minimum voltage and 69.5% maximum feeder loading, while future expansion reached 0.927 p.u. and identified downstream voltage as the governing constraint.
- Performed an IEC 60909 three-phase fault study with a 16.2 kA maximum at the 480 V main and cross-checked the 208 V result against an independent transformer-terminal estimate; documented that exact SLG, coordination, arc-flash, and construction compliance remain outside the study.

### Solar + Battery Microgrid Energy-Management Simulator

- Formulated a 168-hour single-bus microgrid model with load, PV, battery SOC/efficiency, import/export limits, time-of-use energy rates, demand charges, throughput cost, and optional outage isolation.
- Implemented and compared grid-only, PV-only, causal rule-based, and SciPy/HiGHS mixed-integer dispatch; the optimized synthetic case reduced weekly operating cost from $4,169.94 to $1,800.27 and peak import from 101.01 kW to 43.35 kW.
- Added binary charge/discharge exclusivity, terminal-SOC protection, sensitivity studies, and interval-level validation of power balance and SOC dynamics.

### IEEE 14-Bus N−1 Contingency Analysis and Grid-Risk Dashboard

- Automated all 20 line/transformer outages on the IEEE 14-bus benchmark after validating Newton-Raphson and fast-decoupled AC solutions and closing active-power balance to numerical precision.
- Detected the transformer 7-8 bridge outage that islands bus 8, ranked connected events with reconstructable voltage/loading/loss components, and preserved the benchmark’s source voltage-limit conflict and missing physical branch ratings.
- Implemented PTDF/LODF matrices and compared fast DC screening with full AC results, obtaining 1.174 MW mean absolute branch-flow error across five selected connected outages; delivered CSV evidence, network figures, dashboard, tests, and a technical report.

## Prior research experience

**Machine Learning Research Assistant, The Cog AI Lab, Caldwell University** — 2023–2025

- Conducted reproducible model experiments and technical visualization; co-authored and presented research on GPT-2 reinforcement learning at CCSCNE 2024.

## Technical skills

- **Power engineering:** balanced AC load flow, IEC 60909 concepts, N−1 contingency analysis, PTDF/LODF, voltage drop, fault-current estimation, equipment and feeder sizing, microgrid dispatch
- **Analysis:** Python, pandapower, SciPy/HiGHS, NumPy, pandas, NetworkX, Matplotlib, Plotly, Excel
- **Engineering practice:** requirements, assumption management, hand checks, automated validation, scenario/sensitivity analysis, technical reports and one-lines

## Accuracy notes for final formatting

- Do not describe the commercial project as construction-ready, NEC-approved, ETAP-verified, or physically validated.
- Describe IEEE 14-bus loading limits as synthetic study ratings, not utility ratings.
- Describe microgrid savings as simulated results using synthetic data and a short modeled billing window.
