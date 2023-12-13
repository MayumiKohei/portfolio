import React, { useState } from 'react';
import './FileUploader.css';

interface FileUploaderProps {
    onFileUpload: (file: File, pdfNumber: number) => Promise<void>;
}

const FileUploader: React.FC = () => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setSelectedFile(file);
            //ここでファイルが選択された後の処理を追加する
        }
    };

    return (
        <div className="file-uploader-container">
            <label className="file-input-label">
                ファイルを選択してください：
                <input type="file" accept=".pdf" onChange={handleFileChange} />
            </label>
            {selectedFile && (
                <p>選択されたファイル：{selectedFile.name}</p>
            )}
        </div>
    );
};

export default FileUploader;