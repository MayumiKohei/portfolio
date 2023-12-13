class PdfLoaderUtil {
    static async loadPdfFromFile(file: File): Promise<any> {
        try {
            // FileReaderを使用してファイルからデータを読み込む
            const fileData = await new Promise<string | ArrayBuffer | null>((resolve) => {
                const reader = new FileReader();
                reader.onload = (event) => resolve(event.target?.result);
                reader.readAsArrayBuffer(file);
            });

            // PDFJSを使用してファイルデータからPDFを読み込む
            const pdfjsLib = require('pdfjs-dist');
            const pdfDocument = await pdfjsLib.getDocument(fileData).promise;

            return pdfDocument;
        } catch (error) {
            console.error('Error Loading PDF from file:', error);
            throw error;
        }
    }

    // loadPdfFromUrlメソッド
    static async loadPdfFromUrl(url: string): Promise<any> {
        const pdfjsLib = require('pdfjs-dist');
        const pdfDocument = await pdfjsLib.getDocument(url).promise;
        return pdfDocument;
    }
}

export default PdfLoaderUtil;