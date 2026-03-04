import { PDFDocument, rgb, StandardFonts } from "pdf-lib";

export const generatePolisPDF = async () => {
    console.log("▶️ generatePolisPDF start");

    const res = await fetch("/templates/sertifikat-polis.pdf");
    console.log("▶️ fetch status:", res.status);

    if (!res.ok) {
        throw new Error("Template PDF tidak ditemukan");
    }

    const bytes = await res.arrayBuffer();

    const header = new TextDecoder().decode(bytes.slice(0, 20));
    console.log("▶️ PDF HEADER:", header);

    if (!header.includes("%PDF")) {
        throw new Error("File yang dibaca BUKAN PDF (HTML / 404)");
    }

    const pdfDoc = await PDFDocument.load(bytes);
    const page = pdfDoc.getPages()[0];

    const font = await pdfDoc.embedFont(StandardFonts.Helvetica);

    page.drawText("TEST PDF", {
        x: 200,
        y: 400,
        size: 12,
        font,
        color: rgb(0, 0, 0),
    });

    const pdfBytes = await pdfDoc.save();

    const blob = new Blob([pdfBytes], { type: "application/pdf" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "test.pdf";
    a.click();

    URL.revokeObjectURL(url);

    console.log("✅ generatePolisPDF success");
};
