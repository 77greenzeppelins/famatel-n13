import React, { useState } from 'react';
/**HardCoded Staff*/
const chapter05href = '/pdf/catalogChapters/05_przedluzacze_bebnowe.pdf';

/**------------------------**/
const LoaderLink = () => {
  const [chapter, setChapter] = useState('');
  /**Handler**/
  const handleDownload = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault();
    const url = event.currentTarget.href;
    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/pdf',
      },
    })
      .then(response => response.blob())
      .then(blob => {
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'file.pdf';
        document.body.appendChild(a);
        a.click();
        a.remove();
      })
      .catch(error => console.error(error));
  };

  return (
    <div>
      <a
        className="text-2xl text-light"
        href={chapter05href}
        onClick={handleDownload}
        rel="noopener noreferrer"
      >
        Download PDF
      </a>
    </div>
  );
};

export default LoaderLink;
