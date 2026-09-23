# Giorgi Gogitidze — Embedded Electronics & Signal Processing Resume Content

> Content brief for the final one-page PDF. Contact details and final visual formatting remain with the candidate. Every technical number below is tied to the supplied executable project evidence.

## Target headline

Electrical Engineering Graduate Student | Embedded Electronics, Instrumentation, and Signal Processing

## Professional summary

M.S. Electrical Engineering student at NJIT with a B.S. in Computer Science and project experience spanning mixed-signal acquisition, embedded data transport, vibration diagnostics, and biomedical DSP testbenches. Connects circuit and sampling decisions to testable firmware, host tools, reproducible experiments, and explicit verification boundaries. Seeking embedded hardware, electronics, instrumentation, test, or signal-processing roles.

## Education

**New Jersey Institute of Technology** — M.S. Electrical Engineering, in progress

**Caldwell University** — B.S. Computer Science, May 2025

## Selected engineering projects

### USB Mixed-Signal STM32 Data-Acquisition Board

- Designed a schematic-ready two-channel STM32G0 acquisition architecture with protected 0–3.0 V inputs, TLV9062 buffers, an external MCP3202 12-bit SPI ADC, USB CDC transport, SWD, and a filtered 250 kHz PWM output.
- Calculated a 10.61 kHz input RC pole, 0.806 mV ideal ADC LSB, supply/power margins, and two-pole PWM filtering; defined a continuous-ground-plane layout strategy, schematic-ready connections, pin assignments, BOM, risk register, and staged bring-up plan.
- Implemented portable C ping-pong buffering, sequence/status/CRC-16 framing, and PWM conversion plus a Python capture/parser workflow; verified native logic and simulated acquisition while explicitly deferring target compilation, KiCad ERC/DRC, fabrication, and bench performance.

### Motor Bearing Condition Monitoring from Vibration Signals

- Built a reproducible Python/SciPy pipeline for eight checksum-verified CWRU records covering normal, inner-race, outer-race, and ball conditions at 0 and 3 HP.
- Implemented amplitude-correct Hann-windowed FFTs, bearing kinematics from measured RPM, fixed 2–5 kHz bandpass filtering, and Hilbert-envelope demodulation; measured 34.8–40.0 dB median race-fault prominence and 5.8–9.9 dB ball-fault prominence.
- Designed a source-separated cross-load comparison that achieved 82.5% exploratory accuracy over 40 windows, while documenting that the windows represent eight source recordings and seeded laboratory faults—not independent field assets.

### ECG Denoising, QRS Detection, and Signal-Quality Testbench

- Developed a modular, non-diagnostic DSP testbench with deterministic ECG synthesis, baseline/mains/broadband/motion/impulse contamination, configurable notch and Butterworth filtering, and an explainable derivative-square-integrate QRS detector.
- Executed an 80-condition fixed-seed sweep across five SNR targets, four artifact sets, 50/60 Hz interference, and two processing configurations; the aggressive chain produced 0.9898 mean F1 and 0.90 ms mean absolute timing error on synthetic reference peaks.
- Added tests for filter stability, output integrity, reproducible noise, invalid parameters, and known-signal detection; published response, detection, robustness, and severe-motion failure figures without clinical or public-record performance claims.

## Prior research experience

**Machine Learning Research Assistant, The Cog AI Lab, Caldwell University** — 2023–2025

- Conducted reproducible model experiments and technical visualization; co-authored and presented research on GPT-2 reinforcement learning at CCSCNE 2024.

## Technical skills

- **Embedded/electronics:** STM32, embedded C, SPI, USB CDC, ADC acquisition, CRC framing, buffering, mixed-signal architecture, PCB placement/return-path planning
- **Signal processing:** filter design, FFT scaling, Hilbert envelope analysis, bearing kinematics, event detection, SNR/RMSE/timing metrics
- **Tools:** Python, SciPy, NumPy, pandas, Matplotlib, C11, CMake, pytest, Excel, technical-report workflows

## Accuracy notes for final formatting

- Use “schematic-ready design”; do not imply a completed PCB, ERC/DRC, target build, fabrication, or bench measurement.
- Label bearing classifier accuracy exploratory and tied to seeded CWRU laboratory data.
- Label all ECG performance synthetic and non-diagnostic; no MIT-BIH result has been generated.
