// pages/research.js
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

const experiences = [
  {
    title: 'Indian Institute of Technology Patna — Multi-modal Pan-Cancer Survival Estimation & Skin Lesion Classification',
    date: 'Jan 2023 – present',
    location: 'IIT Patna, India',
    description:
      'Developing a deep multi-modal architecture for accurately estimating the survival of cancer patients irrespective of cancer locations using six modalities from multi-omics, clinical, and histopathology (TCGA PAN Cancer). Also developing multi-modal deep learning architectures for skin lesion classification using dermoscopy images and demographics.',
    advisors: 'Dr. Sriparna Saha; Dr. Kitsuchart Pasupa',
  },
  {
    title: 'Ensemble techniques for Dermoscopy Skin Lesion Classification & Breast Cancer Survival Prognosis',
    date: 'Jan 2022 – Dec 2022',
    location: 'IIT Patna, India',
    description:
      'Developed ensemble techniques and a multi-class skin cancer classifier using transfer-learning based pre-trained base classifiers. Proposed algorithms to handle class imbalance and fuzzy ensembles that dynamically allocate importance among base classifiers; enhanced fuzzy ensemble using deviation/support non-linear functions for breast cancer survival prediction.',
    advisors: 'Dr. Sriparna Saha',
  },
  {
    title: 'Generative models for missing data in multi-modal framework (GIMPP)',
    date: 'Jan 2021 – Dec 2021',
    location: 'IIT Patna, India',
    description:
      'Developed AI-based generative models (attention + GAN ideas) to impute missing modalities in multi-modal cancer prognosis frameworks and trained classifiers that use generated + available data for survival prediction.',
    advisors: 'Dr. Sriparna Saha',
  },
  {
    title: 'Deep Multi-modal Architectures for Biomedical Problems',
    date: 'Jul 2018 – Dec 2020',
    location: 'IIT Patna, India',
    description:
      'Analyzed gene expression, copy number variation, and clinical details of breast cancer patients and developed deep learning architectures (CNNs, attention, stacked classifiers) to classify patients as long-term vs short-term survivors.',
    advisors: 'Dr. Sriparna Saha',
  },
  {
    title: 'Stability & Robustness of AI-based Multi-modal Classifiers (Visiting / Collaboration)',
    date: 'Jul 2022 – Jan 2023',
    location: 'BITS Pilani, Goa (collaboration)',
    description:
      'Worked on improving the stability and robustness of multi-modal machine learning classifiers for breast cancer prognosis by incorporating multiple modalities and proposing advanced kernel functions for SVM classifiers with deep feature extraction.',
    advisors: 'Dr. Snehanshu Saha',
  },
]

const gradients = [
  'linear-gradient(135deg,#A78BFA 0%,#60A5FA 100%)',
  'linear-gradient(135deg,#34D399 0%,#06B6D4 100%)',
  'linear-gradient(135deg,#FB7185 0%,#F59E0B 100%)',
  'linear-gradient(135deg,#60A5FA 0%,#7C3AED 100%)',
  'linear-gradient(135deg,#F472B6 0%,#F97316 100%)',
]

export default function Research() {
  return (
    <>
      <Head>
        <title>Research — Dr. Nikhilanand Arya</title>
      </Head>

      {/* MAIN 3-COLUMN LAYOUT (same as index.js) */}
      <div
        className="container"
        style={{
          marginTop: '40px',
          display: 'grid',
          gridTemplateColumns: '0.6fr 3fr 0.3fr',
          gap: '30px',
        }}
      >
{/* LEFT COLUMN – SAME AS INDEX.JS BUT WITH ACTIVE RESEARCH BUTTON */}
<div style={{ textAlign: 'left' }}>
  <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>

    <Link href="/" className="btn" style={{ width: '180px' }}>
      Home
    </Link>

    {/* ACTIVE BUTTON HERE */}
    <Link href="/research" className="btn btn-active" style={{ width: '180px' }}>
      Research
    </Link>

    <a className="btn" href="#publications" style={{ width: '180px' }}>Publications</a>
    <a className="btn" href="#teaching" style={{ width: '180px' }}>Teaching</a>
    <a className="btn" href="#contact" style={{ width: '180px' }}>Contact</a>
  </div>
</div>

        {/* CENTER COLUMN — NOW SHOWS RESEARCH TILES */}
        <div>
      

          <div className="research-grid">
            {experiences.map((exp, idx) => (
              <article
                key={idx}
                className="tile"
                style={{
                  background: gradients[idx % gradients.length],
                  color: 'white',
                }}
              >
                <h3>{exp.title}</h3>
                <div>{exp.date} • {exp.location}</div>
                <p>{exp.description}</p>
                <div><strong>Advisors:</strong> {exp.advisors}</div>
              </article>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN – SAME SOCIAL ICONS AS INDEX.JS */}
        <div style={{ textAlign: 'right' }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '18px',
              alignItems: 'flex-end',
            }}
          >
            <a href="https://scholar.google.com/citations?user=hBf6EmgAAAAJ&hl=en" target="_blank">
              <img src="/assets/icons/google.png" width="32" />
            </a>
            <a href="https://www.linkedin.com/in/dr-nikhilanand-arya-785a5356/" target="_blank">
              <img src="/assets/icons/linkedin.png" width="32" />
            </a>
            <a href="https://github.com/nikhilaryan92" target="_blank">
              <img src="/assets/icons/github.png" width="32" />
            </a>
            <a href="https://x.com/nikhilaryan92" target="_blank">
              <img src="/assets/icons/twitter.png" width="32" />
            </a>
            <a href="https://www.instagram.com/nikhil_aryan92/" target="_blank">
              <img src="/assets/icons/instagram.png" width="32" />
            </a>
          </div>
        </div>
      </div>

      {/* GRID & TILE STYLING */}
      <style jsx>{`
        .research-grid {
          display: grid;
          gap: 18px;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        }
        .tile {
          padding: 18px;
          border-radius: 14px;
          box-shadow: 0 12px 36px rgba(0,0,0,0.15);
          transition: 0.25s ease;
        }
        .tile:hover {
          transform: translateY(-6px) scale(1.02);
          box-shadow: 0 24px 60px rgba(0,0,0,0.25);
        }
.btn-active {
  background: linear-gradient(90deg, #4F46E5, #06B6D4) !important;
  color: white !important;
  font-weight: 700;
  box-shadow: 0 0 12px rgba(79, 70, 229, 0.4), 0 0 18px rgba(6, 182, 212, 0.4);
  transform: scale(1.03);
  border: 2px solid rgba(255,255,255,0.6);
}

      `}</style>
    </>
  )
}
