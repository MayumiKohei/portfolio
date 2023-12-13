import React, { useState } from "react";
import './PdfPreview.css';

interface PdfPreviewProps {
    pdfDocument: Blob; // PDFファイルをBlob形式で受け取る
}

const PdfPreview: React.FC<PdfPreviewProps> = ({ pdfDocument }) => {
    const [pageNumber, setPageNumber] = useState(1);

    const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
        setPageNumber(1);
    };

    const handlePageChange = (newPageNumber: number) => {
        setPageNumber(newPageNumber);
    };

    return (
        <div className="pdf-preview-container">
            <div className="pdf-preview">
                {/* PDFの表示 */}
                <iframe
                title="pdf-preview"
                src={`data:application/pdf;base64,${pdfDocument}`}
                width="100%"
                height="500px"
                />
            </div>
            <div className="pagination">
                {/* ページ送りコントロール */}
                <p>
                    ページ：{pageNumber} / 20 {/* 最大ページ数は20と仮定 */}
                </p>
                <button
                    disabled={pageNumber <= 1}
                    onClick={() => handlePageChange(pageNumber - 1)}
                >
                    前へ
                </button>
                <button
                    disabled={pageNumber >= 20} /* 最大ページ数は２０と仮定 */
                    onClick={() => handlePageChange(pageNumber + 1)}
                >
                    次へ
                </button>
            </div>
        </div>
    )
};

export default PdfPreview;