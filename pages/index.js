import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Dr. Nikhilanand Arya — Home</title>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </Head>

      <div 
        className="container"
        style={{
          marginTop: '40px',
          display: 'grid',
          gridTemplateColumns: '0.6fr 3fr 0.3fr',
          gap: '30px',
          alignItems: 'flex-start',
        }}
      >

        {/* LEFT COLUMN — SECTION BUTTONS */}
        <div style={{ textAlign: 'left' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <Link href="/research" className="btn" style={{ width: '180px', display: 'inline-block' }}>Research</Link>
            <Link href="/journals" className="btn" style={{ width: '180px', display: 'inline-block' }}>Journals</Link>
            <Link href="/conferences" className="btn" style={{ width: '180px', display: 'inline-block' }}>Conferences</Link>
            <Link href="/teaching" className="btn" style={{ width: '180px', display: 'inline-block' }}>Teaching</Link>
            <Link href="/lectures" className="btn" style={{ width: '180px', display: 'inline-block' }}>Seminars/Lectures</Link>
            <Link href="/gallery" className="btn" style={{ width: '180px', display: 'inline-block' }}>Gallery</Link>            
            <Link href="/contact" className="btn" style={{ width: '180px', display: 'inline-block' }}>Contact</Link>  


          </div>
        </div>

        {/* CENTER COLUMN — PROFILE + INTRO */}
        <div style={{ textAlign: 'center' }}>
          
          {/* Profile Photo */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '25px' }}>
            <div className="avatar-frame">
              <Image
                src="/assets/profile.jpg"
                alt="Dr. Nikhilanand Arya"
                width={180}
                height={180}
                className="avatar-img"
              />
            </div>
          </div>

          {/* Name + Intro */}
          <h1>Dr. Nikhilanand Arya</h1>
            <p
            style={{
              maxWidth: '3000px',  
              margin: '10px auto 0 auto',
              fontSize: '14px',
              lineHeight: '1.6',
              color: 'var(--muted)',
              padding: '0 20px',    
	      textAlign: 'justify',     
              textJustify: 'inter-word',           
	}}
          >
An Assistant Professor at the Indian Institute of Information Technology Allahabad (IIIT-A), specializing in computational biology, deep learning, and multi-modal machine learning. He earned his M.Tech. (Mathematics and Computing) and PhD  (Computer Science & Engineering) from IIT Patna, where his research advanced state-of-the-art methods for breast cancer prognosis, multi-omics integration, generative models for missing data, and ensemble learning. His work has led to numerous high-impact publications in journals and transactions such as Scientific Reports, IEEE/ACM TCBB, Applied Soft Computing, and Knowledge-Based Systems, including Top-100 downloaded cancer research recognition in 2023.

Dr. Arya has experience as an Assistant Professor at KIIT University and as a Software Engineer at LTIMindtree. His research contributions span graph neural networks, fuzzy ensembles, EfficientNet-based skin lesion classification, and robust multi-modal breast cancer survival prediction frameworks. He has received multiple fellowships and awards, including the MoE PhD Fellowship, SERB ITS Travel Grant, Outstanding TA Award (IIT Patna), and various recognitions for academic and professional excellence.
          </p>

        </div>

        {/* RIGHT COLUMN — VERTICAL SOCIAL ICONS */}
        <div style={{ textAlign: 'right' }}>
          <div 
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '18px',
              alignItems: 'flex-end',
            }}
          >

            <a href="https://scholar.google.com/citations?user=hBf6EmgAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">
              <img src="/assets/icons/google.png" width="32" height="32" alt="Google Scholar" />
            </a>

            <a href="https://www.linkedin.com/in/dr-nikhilanand-arya-785a5356/" target="_blank" rel="noopener noreferrer">
              <img src="/assets/icons/linkedin.png" width="32" height="32" alt="LinkedIn" />
            </a>

            <a href="https://github.com/nikhilaryan92" target="_blank" rel="noopener noreferrer">
              <img src="/assets/icons/github.png" width="32" height="32" alt="GitHub" />
    	    </a>

            <a href="https://x.com/nikhilaryan92" target="_blank" rel="noopener noreferrer">
              <img src="/assets/icons/twitter.png" width="32" height="32" alt="Twitter" />
            </a>

            <a href="https://www.instagram.com/nikhil_aryan92/" target="_blank" rel="noopener noreferrer">
              <img src="/assets/icons/instagram.png" width="32" height="32" alt="Instagram" />
            </a>


        
          </div>
        </div>

      </div>

    </>
  )
}
