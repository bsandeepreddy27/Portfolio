import React, { useState } from 'react';
import { PERSONAL_INFO } from '../constants';
import { LinkedInIcon } from './icons';

const Home: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadError, setDownloadError] = useState<string | null>(null);

  const handleDownloadClick = () => {
    setIsModalOpen(true);
    setDownloadError(null); // Clear previous errors when opening the modal
  };

  const handleConfirmDownload = async () => {
    setIsDownloading(true);
    setDownloadError(null);

    try {
      // Fetches the resume from the root of the server. This assumes 'Resume.pdf'
      // is located in your project's public directory, which is served at the root.
      const response = await fetch('/Resume.pdf');

      if (!response.ok) {
        // If the server returns an error (e.g., 404 Not Found), provide a helpful message.
        throw new Error(`The file could not be found on the server (Error: ${response.status}). Please ensure 'Resume.pdf' is placed in the project's 'public' directory.`);
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      // This sets the filename for the downloaded file.
      link.setAttribute('download', 'Bobbili_Sandeep_Reddy_Resume.pdf');
      document.body.appendChild(link);
      link.click();
      
      // Clean up the created object URL and the link element.
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
      
      setIsModalOpen(false); // Close modal on successful download
    } catch (error) {
      console.error('Resume download failed:', error);
      const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred.';
      setDownloadError(errorMessage);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <>
      <section id="home" className="min-h-screen flex items-center justify-center bg-slate-900" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, hsla(0, 0%, 100%, 0.05) 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}>
        <div className="container mx-auto px-6 py-20">
          <div className="grid items-center">
            
            {/* Text Content */}
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-100 leading-tight">
                Hi, I'm <span className="text-cyan-400">{PERSONAL_INFO.name}</span>
                <span role="img" aria-label="waving hand" className="animate-wave ml-4">👋</span>
              </h1>
              <p className="mt-4 text-lg text-slate-400 max-w-xl mx-auto">
                Full Stack Developer | Python | MERN | Cloud Enthusiast
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={handleDownloadClick}
                  className="inline-block px-6 py-3 bg-cyan-500 text-white font-semibold rounded-lg shadow-lg shadow-cyan-500/20 hover:bg-cyan-600 transition-all duration-300 transform hover:scale-105 text-center"
                >
                  Resume PDF
                </button>
              
               {/* <a
                  href={PERSONAL_INFO.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-slate-800 text-slate-300 font-semibold rounded-lg shadow-lg hover:bg-slate-700 transition-all duration-300 transform hover:scale-105"
                >
                  <LinkedInIcon className="w-5 h-5 mr-2" />
                  LinkedIn
                </a> */}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Download Confirmation Modal */}
      {isModalOpen && (
        <div 
            className="fixed inset-0 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center z-50 transition-opacity duration-300"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
        >
          <div className="bg-slate-800 rounded-lg p-8 max-w-sm w-full shadow-2xl border border-slate-700">
            <h2 id="modal-title" className="text-2xl font-bold text-slate-100 mb-4">
              {downloadError ? 'Download Failed' : 'Confirm Download'}
            </h2>
            
            {downloadError ? (
              <p className="text-red-400 mb-6">{downloadError}</p>
            ) : (
              <p className="text-slate-400 mb-6">You are about to download my resume. Do you wish to continue?</p>
            )}

            <div className="flex justify-end gap-4">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-5 py-2 bg-slate-700 text-slate-300 font-semibold rounded-lg hover:bg-slate-600 transition-colors disabled:opacity-50"
                disabled={isDownloading}
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmDownload}
                className="px-5 py-2 bg-cyan-500 text-white font-semibold rounded-lg hover:bg-cyan-600 transition-colors shadow-lg shadow-cyan-500/20 flex items-center justify-center w-36 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isDownloading}
              >
                {isDownloading ? (
                    <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span>Downloading...</span>
                    </>
                ) : downloadError ? 'Try Again' : 'Download'}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;