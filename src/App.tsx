import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Introduction from './components/Introduction/Introduction';
import FileUploader from './components/FileUploader/FileUploader';
import PdfPreview from './components/PdfPreview/PdfPreview';
import ComparisonResult from './components/ComparisonResult/ComparisonResult';
import PdfLoaderUtil from './utils/PdfLoaderUtil';
import PdfComparisonService from './services/PdfComparatorService';

const App: React.ComponentType<AppProps> = () => {
    const [pdf1, setPdf1] = useState<PdfDocument>(null);
    const [pdf2, setPdf2] = useState<PdfDocument>(null);

    const handleFileUpload = async (file: File, pdfNumber: number) => {
        try {
            // PdfLoaderUtilを使用してPDFを読み込む
            const PdfDocument = await PdfLoaderUtil.loadPdfFromFile(file as File);

            //読み込んだPDFを対応するステートに設定
            if (pdfNumber === 1) {
                setPdf1(pdfDocument);
            } else {
                setPdf2(pdfDocument);
            }
        } catch (error) {
            console.error('Error handling file upload:', error);
        }
    };

    const handleComparison = () => {
        //PdfComparatorServiceを使用してPDFを比較
        const comparisonResult = PdfComparisonService.comparePdfFields(pdf1, pdf2);

        //TODO:比較結果を適切に処理する
        console.log('Comparison Result:', comparisonResult);
    };

    return (
        <Router>
            <div className='app-container'>
                <Routes>
                    <Route path="/" element={<Introduction />} />
                    <Route path="/upload" element={<FileUploader onFileUpload={handleFileUpload} />} />
                    <Route path="/preview" element={<PdfPreview pdf1={pdf1} pdf2={pdf2} />} />
                    <Route path="/upload" element={<ComparisonResult onComparison={handleComparison} />} />
                </Routes>
            </div>
        </Router>
    );
};

interface AppProps {
    // ここにその他のプロパティを定義する
}

export default App;
