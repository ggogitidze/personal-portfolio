"""Render the DAQ design report as a compact portfolio PDF."""
from __future__ import annotations

import argparse
from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import inch
from reportlab.platypus import Image, PageBreak, Paragraph, SimpleDocTemplate, Spacer, Table, TableStyle


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("workspace", type=Path)
    parser.add_argument("output", type=Path)
    args = parser.parse_args()
    workspace = args.workspace.resolve()
    source = workspace / "PCB-Signals" / "USB_Mixed_Signal_STM32_DAQ_MVP"
    output = args.output.resolve()
    output.parent.mkdir(parents=True, exist_ok=True)

    styles = getSampleStyleSheet()
    styles.add(ParagraphStyle(name="Eyebrow", parent=styles["Normal"], textColor=colors.HexColor("#FF4500"), fontName="Helvetica-Bold", fontSize=8, leading=10, spaceAfter=9))
    styles.add(ParagraphStyle(name="Body2", parent=styles["BodyText"], fontSize=9.2, leading=13, spaceAfter=7))
    styles.add(ParagraphStyle(name="H2x", parent=styles["Heading2"], fontSize=15, leading=18, spaceBefore=10, spaceAfter=6, textColor=colors.HexColor("#172B4D")))
    styles.add(ParagraphStyle(name="TitleX", parent=styles["Title"], fontName="Helvetica-Bold", fontSize=25, leading=28, alignment=TA_LEFT, textColor=colors.HexColor("#172B4D"), spaceAfter=12))

    doc = SimpleDocTemplate(str(output), pagesize=letter, rightMargin=.6*inch, leftMargin=.6*inch, topMargin=.55*inch, bottomMargin=.55*inch, title="USB Mixed-Signal STM32 Data-Acquisition Board", author="Giorgi Gogitidze")
    story = [
        Paragraph("REV A DESIGN PACKAGE · SOFTWARE/CALCULATIONS VERIFIED", styles["Eyebrow"]),
        Paragraph("USB Mixed-Signal STM32 Data-Acquisition Board", styles["TitleX"]),
        Paragraph("A schematic-ready two-channel acquisition/control architecture connecting analog conditioning, external conversion, embedded buffering, USB transport, PCB constraints, and staged verification.", styles["Body2"]),
    ]
    architecture = source / "portfolio" / "images" / "architecture.png"
    story.extend([Image(str(architecture), width=7.25*inch, height=2.99*inch), Spacer(1, 8)])
    story.append(Paragraph("Requirements and architecture", styles["H2x"]))
    story.append(Paragraph("The board targets two protected 0–3.0 V channels, 20 kS/s per channel, a 5 kHz useful signal band, 12-bit nominal conversion, USB CDC streaming, SWD, and a filtered PWM output. USB VBUS feeds a protected low-noise 3.3 V supply; a ferrite creates an analog supply zone while every ground pin connects to one continuous plane.", styles["Body2"]))
    data = [["Block", "Rev-A choice", "Engineering reason"], ["MCU", "STM32G0B1CBT6", "Native USB FS, SPI, timers, SWD, LQFP-48"], ["ADC", "MCP3202", "Two-channel 12-bit SPI converter in an assembly-friendly package"], ["Input", "1 kΩ / 15 nF + TLV9062", "10.61 kHz pole and buffering of the SAR input"], ["Output", "250 kHz PWM + two RC poles", "Low-cost slow stimulus; not a precision DAC"], ["Layout", "Two layers, continuous ground", "Placement-based partitioning without broken return paths"]]
    table = Table(data, colWidths=[1.05*inch, 1.65*inch, 4.55*inch], repeatRows=1)
    table.setStyle(TableStyle([("BACKGROUND",(0,0),(-1,0),colors.HexColor("#172B4D")),("TEXTCOLOR",(0,0),(-1,0),colors.white),("FONTNAME",(0,0),(-1,0),"Helvetica-Bold"),("FONTNAME",(0,1),(-1,-1),"Helvetica"),("FONTSIZE",(0,0),(-1,-1),7.5),("LEADING",(0,0),(-1,-1),9.5),("GRID",(0,0),(-1,-1),.35,colors.HexColor("#AAB3BF")),("VALIGN",(0,0),(-1,-1),"TOP"),("ROWBACKGROUNDS",(0,1),(-1,-1),[colors.white,colors.HexColor("#F2F4F7")]),("LEFTPADDING",(0,0),(-1,-1),5),("RIGHTPADDING",(0,0),(-1,-1),5),("TOPPADDING",(0,0),(-1,-1),5),("BOTTOMPADDING",(0,0),(-1,-1),5)]))
    story.extend([table, PageBreak(), Paragraph("Firmware, host software, and verification", styles["H2x"]), Paragraph("A timer-triggered acquisition path reads paired ADC samples into alternating 32-sample buffers. Frames include synchronization, sequence, timestamp, status, and CRC-16-CCITT so the host can reject corruption and identify gaps. USB transfer is kept outside the sampling callback. The Python host supports simulated or serial input, engineering-unit conversion, CSV export, and plotting.", styles["Body2"])])
    capture = source / "portfolio" / "images" / "simulated_capture.png"
    story.extend([Image(str(capture), width=6.7*inch, height=3.12*inch), Spacer(1, 8)])
    story.append(Paragraph("Verified evidence", styles["H2x"]))
    story.append(Paragraph("Executable calculations cover quantization, RC poles, ideal PWM attenuation, power, and data rate. Native C and Python tests cover portable framing, buffering, CRC, PWM conversion, parser behavior, and simulated capture. These checks do not establish STM32 HAL timing or electrical performance.", styles["Body2"]))
    story.append(Paragraph("Required next gates", styles["H2x"]))
    story.append(Paragraph("Exact symbol/package pin audit; CubeMX target configuration and ARM build; KiCad schematic and PCB capture; ERC, DRC, impedance geometry, 3D/Gerber review; assembly; current-limited power-up; SWD and USB enumeration; ADC DC/noise/sine testing; PWM ripple; loopback; and sustained streaming.", styles["Body2"]))
    story.append(Paragraph("Verification boundary", styles["H2x"]))
    story.append(Paragraph("No schematic capture, PCB layout, fabricated board, USB enumeration, or bench measurement is claimed. Rev A remains non-isolated and uncalibrated, uses the 3.3 V rail as ADC reference, and has a first-order input filter. The project is a schematic-ready design and software/calculation test package—not physically validated hardware.", styles["Body2"]))
    doc.build(story)
    print(output)


if __name__ == "__main__":
    main()
