interface PdfComparisonResult {
    allIdentical: boolean;
    errorDetails: { page: number; fieldName: String }[];
}

class PdfComparisonService {
    static comparePdfFields(pdf1: any, pdf2: any): PdfComparisonResult {
        // ここにPDFの比較ロジックを実装

        // 仮の比較ロジック：氏名と数字が同一であるかチェック
        const allIdentical = pdf1.name === pdf2.name && pdf1.number === pdf2.number;

        // エラーメッセージや修正提案の詳細情報を収集
        const errorDetails: { page: number; fieldName: string }[] = [];
        if (!allIdentical) {
            // 仮の詳細情報：ページ1の氏名と数字が異なる場合
            errorDetails.push({ page: 1, fieldName: '氏名と数字'});
        }

        return { allIdentical, errorDetails };
    }
}

export default PdfComparisonService;