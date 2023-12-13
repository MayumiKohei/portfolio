import React from "react";
import './ComparisonResult.css';

interface ComparisonResultProps {
    allIdentical: boolean; // 全ての要素が同一かどうか
    errorDetails: { page: number; fieldName: string }[]; //エラーがある場合の詳細情報
}

const ComparisonResult: React.FC<ComparisonResultProps> = ({
    allIdentical,
    errorDetails,
}) => {
    return (
        <div className="comparison-result-container">
            {allIdentical ? (
                <p className="all-identical">全ての要素が同一です。</p>
            ) : (
                <div>
                    <p className="error-message">エラーが検出されました。</p>
                    <ul className="error-list">
                        {errorDetails.map((error, index) => (
                            <li key={index}>
                                ページ{error.page}の{error.fieldName}に問題があります。
                            </li>
                        ))}
                    </ul>
                    <p className="fix-suggestion">修正の提案があります。</p>
                </div>
            )}
        </div>
    );
};

export default ComparisonResult;