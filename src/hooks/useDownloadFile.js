import { Paragraph, Document, Packer, TextRun } from "docx";

function useDownloadFile() {
  function makeDoc(data1, data2, data3, data4) {
    const content = {
      para1: new Paragraph({
        spacing: { after: 200 },
        children: [new TextRun({ text: data1 })],
      }),
      para2: new Paragraph({
        spacing: { after: 200 },
        children: [new TextRun({ text: data2 })],
      }),
      para3: new Paragraph({
        spacing: { after: 200 },
        children: [new TextRun({ text: data3 })],
      }),
      para4: new Paragraph({
        children: [new TextRun({ text: data4 })],
      }),
    };

    const section = {
      sections: [
        {
          properties: {},
          children: [
            content.para1,
            content.para2,
            content.para3,
            content.para4,
          ],
        },
      ],
    };
    downloadToFile(section);
  }

  function downloadToFile(section) {
    const doc = new Document(section);

    Packer.toBlob(doc).then((blob) => {
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "Test.docx";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  }
  return { makeDoc };
}
export default useDownloadFile;
