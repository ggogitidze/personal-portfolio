"""Create optimized web copies of verified engineering figures from the sibling projects."""
from __future__ import annotations

import argparse
from pathlib import Path
from PIL import Image, ImageDraw, ImageOps


ASSETS = {
    "Power/small_commercial_power_design/diagrams/one_line_diagram.png": "commercial/one-line.webp",
    "Power/small_commercial_power_design/diagrams/bus_voltage_scenarios.png": "commercial/bus-voltage-scenarios.webp",
    "Power/small_commercial_power_design/diagrams/transformer_loading.png": "commercial/transformer-loading.webp",
    "Power/microgrid_ems/portfolio/architecture.png": "microgrid/architecture.webp",
    "Power/microgrid_ems/figures/optimized_dispatch.png": "microgrid/optimized-dispatch.webp",
    "Power/microgrid_ems/figures/cost_comparison.png": "microgrid/cost-comparison.webp",
    "Power/ieee14_grid_reliability/results/figures/network_most_severe.png": "grid/network-most-severe.webp",
    "Power/ieee14_grid_reliability/results/figures/contingency_severity_top10.png": "grid/severity-ranking.webp",
    "Power/ieee14_grid_reliability/results/figures/dc_ac_comparison.png": "grid/dc-ac-comparison.webp",
    "PCB-Signals/USB_Mixed_Signal_STM32_DAQ_MVP/portfolio/images/architecture.png": "daq/architecture.webp",
    "PCB-Signals/USB_Mixed_Signal_STM32_DAQ_MVP/portfolio/images/power_tree.png": "daq/power-tree.webp",
    "PCB-Signals/USB_Mixed_Signal_STM32_DAQ_MVP/portfolio/images/simulated_capture.png": "daq/simulated-capture.webp",
    "PCB-Signals/motor-bearing-condition-monitoring/docs/figures/07_portfolio_hero.png": "bearing/envelope-hero.webp",
    "PCB-Signals/motor-bearing-condition-monitoring/docs/figures/05_cross_load_frequency_evidence.png": "bearing/cross-load-evidence.webp",
    "PCB-Signals/motor-bearing-condition-monitoring/docs/figures/01_time_waveforms.png": "bearing/time-waveforms.webp",
    "PCB-Signals/ecg_dsp_mvp/figures/waveform_and_detection.png": "ecg/waveform-detection.webp",
    "PCB-Signals/ecg_dsp_mvp/figures/filter_response.png": "ecg/filter-response.webp",
    "PCB-Signals/ecg_dsp_mvp/figures/noise_performance_curve.png": "ecg/noise-performance.webp",
    "PCB-Signals/ecg_dsp_mvp/figures/failure_case.png": "ecg/failure-case.webp",
}


def save_webp(source: Path, destination: Path) -> None:
    destination.parent.mkdir(parents=True, exist_ok=True)
    with Image.open(source) as image:
        image.convert("RGB").save(destination, "WEBP", quality=88, method=6)


def save_og(images: list[Image.Image], destination: Path, widths: list[int]) -> None:
    canvas = Image.new("RGB", (1200, 630), "white")
    ImageDraw.Draw(canvas).rectangle((0, 0, 1200, 22), fill="#ff4500")
    x = 0
    for image, width in zip(images, widths):
        tile = ImageOps.fit(image.convert("RGB"), (width, 608), method=Image.Resampling.LANCZOS)
        canvas.paste(tile, (x, 22))
        x += width
    canvas.save(destination, "WEBP", quality=88, method=6)


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("workspace", type=Path)
    args = parser.parse_args()
    workspace = args.workspace.resolve()
    site = workspace / "personal-portfolio"
    output = site / "public" / "engineering"
    for source, destination in ASSETS.items():
        save_webp(workspace / source, output / destination)

    with Image.open(site / "public" / "GiorgiGogitidzeLinkedin.webp") as portrait, Image.open(output / "grid/network-most-severe.webp") as grid, Image.open(output / "bearing/envelope-hero.webp") as bearing:
        save_og([portrait, grid], output / "site-og.webp", [420, 780])
        save_og([grid], output / "energy-og.webp", [1200])
        save_og([bearing], output / "embedded-og.webp", [1200])
    print(f"Prepared {len(ASSETS) + 3} web assets")


if __name__ == "__main__":
    main()
