import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Twitter, MailPlus, PhoneCall, Eye, MessageCircleMore } from 'lucide-react';

function App() {
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [text, setText] = useState('');
  const fullText = 'Aspiring Software Developer | Full Stack Developer';

  const skills = ['C++', 'Java', 'ReactJS', 'C',   'DBMS', 'DSA', 'SQL', 'HTML', 'CSS', 'JavaScript', 'Tailwind CSS', 'Spring Boot'];
  const projects = [
    {
      name: 'String Analyzer (Full Stack)',
      description: 'A React + Spring Boot app to perform string operations like palindrome check, camelCase, compression, etc.',
      link: 'https://github.com/TheeViR/string-analyzer'
    },
    {
      name: 'Games Zone Website',
      description: 'A web-based portal featuring a collection of fun games built with React and styled with Tailwind CSS.',
      link: 'https://games-zone-mocha.vercel.app/'
    }
  ];

  useEffect(() => {
    const moveCursor = (e) => {
      setCursor({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white font-sans overflow-x-hidden">
      {/* Cursor Blob */}
      <div
        className="pointer-events-none fixed top-0 left-0 w-32 h-32 rounded-full bg-cyan-400 opacity-20 blur-3xl z-50 transition-transform duration-300"
        style={{ transform: `translate(${cursor.x - 64}px, ${cursor.y - 64}px)` }}
      />

      {/* Sticky Navbar */}
      <nav className="sticky top-0 z-40 bg-black bg-opacity-80 backdrop-blur-md shadow-lg flex justify-between items-center px-6 py-4 border-b border-cyan-500">
        <h1 className="text-3xl font-extrabold tracking-widest animate-pulse text-cyan-400 drop-shadow-lg">
          Vir<span className="text-pink-500">.</span>Portfolio
        </h1>
      </nav>

      {/* Floating Download Button */}
      <a
        href="https://drive.google.com/file/d/1Zxnyhyq3SYcqVKoF_wGsqViTufUJCKyo/view?usp=sharing"
        target="_blank"
        className="flex fixed bottom-6 right-6 z-50 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white px-4 py-2 rounded-full shadow-xl border border-white hover:scale-110 transition-transform animate-bounce"
      >
        <Eye className='w-6 h-6'/> <span className='mx-1 text-green-400'>Resume</span>
      </a>

      {/* Main Content */}
      <main className="p-6 space-y-20 max-w-6xl mx-auto my-10">
        {/* Typewriter About */}
        <section>
          <h2 className="text-4xl font-extrabold text-center text-cyan-400 mb-6 border-r-4 border-cyan-400 whitespace-nowrap overflow-hidden mx-auto w-fit drop-shadow-xl">
            {text}
          </h2>
          <p className="text-center max-w-3xl mx-auto text-lg text-gray-300 animate-fadein">
            Hi! I’m <span className='text-xl font-extrabold text-cyan-400'>Vishal Roshan</span>, a passionate self-taught developer diving deep into React and Spring Boot. I’m consistently improving my skills through real-world projects, daily learning, and hands-on coding challenges.
          </p>
        </section>

        {/* Skills */}
        <section>
          <h2 className="text-3xl font-bold text-cyan-300 mb-6 text-center drop-shadow-lg">Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 justify-items-center">
            {skills.map(skill => (
              <div
                key={skill}
                className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg hover:scale-110 transition-transform border border-white"
              >
                {skill}
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section>
          <h2 className="text-3xl font-bold text-cyan-300 mb-6 text-center drop-shadow">Education</h2>
          <div className="space-y-6 text-center">
            <div className="bg-gray-800 p-4 rounded-xl border border-cyan-700 shadow-md">
              <p className="text-lg font-semibold text-pink-400">Government Engineering College Kishanganj</p>
              <p>Electronics and Communication Engineering - Bachelors of Technology</p>
              <p className="text-sm text-cyan-300">GPA: 7.4 | Bihar | 2020 - 2024</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-xl border border-cyan-700 shadow-md">
              <p className="text-lg font-semibold text-pink-400">Millia Convent English School</p>
              <p>Science Intermediate</p>
              <p className="text-sm text-cyan-300">Purnia | 2018 - 2020</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-xl border border-cyan-700 shadow-md">
              <p className="text-lg font-semibold text-pink-400">Mount Zion School</p>
              <p>Degree in Matriculation</p>
              <p className="text-sm text-cyan-300">Purnia | 2017 - 2018</p>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section>
          <h2 className="text-3xl font-bold text-cyan-300 mb-6 text-center drop-shadow">Project Spotlight</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map(project => (
              <div
                key={project.name}
                className="bg-gray-900 p-6 rounded-2xl shadow-2xl border border-cyan-500 hover:scale-[1.02] hover:shadow-cyan-500/50 transition-transform"
              >
                <h3 className="text-xl font-bold mb-3 text-pink-400 drop-shadow">{project.name}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  className="text-cyan-400 hover:underline text-sm font-medium"
                >
                  View Project
                </a>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <a
              href="https://github.com/TheeViR"
              target="_blank"
              className="text-cyan-400 hover:underline font-semibold flex justify-center items-center space-x-2"
            >
              <Github className="w-5 h-5" /><span>Explore more projects on GitHub</span>
            </a>
          </div>
        </section>

        {/* Twitter Learning Showcase */}
        <section className="text-center">
          <h2 className="text-2xl font-semibold text-cyan-300 mb-4">What I'm Learning Daily</h2>
          <a
            href="https://x.com/thevir888"
            target="_blank"
            className="text-blue-400 hover:underline text-lg font-medium flex justify-center items-center space-x-2"
          >
            <Twitter className="w-5 h-5" /><span>Follow my journey on Twitter</span>
          </a>
        </section>

        {/* Contact */}
        <section className="text-center">
          <h2 className="text-2xl font-semibold mb-4 text-cyan-300 drop-shadow">Connect with Me</h2>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-lg">
            <a href="https://www.linkedin.com/in/vishal-roshan/" target="_blank" className="text-white hover:text-cyan-300 flex items-center space-x-2">
              <Linkedin className="w-6 h-6" /><span>LinkedIn</span>
            </a>
            <a href="mailto:vishalrshn@gmail.com" className="text-white hover:text-cyan-300 flex items-center space-x-2">
              <MailPlus className='w-6 h-6'/><span>vishalrshn@gmail.com</span>
            </a>
            <a href="https://api.whatsapp.com/send/?phone=%2B917654653362&text&type=phone_number&app_absent=0" className="text-white hover:text-cyan-300 flex items-center space-x-2">
              <MessageCircleMore className='w-6 h-6'/><span>Direct Message</span>
            </a>
            
            
          </div>
        </section>
      </main>

      <footer className=" bg-black text-white text-center p-6 mt-20 border-t border-cyan-700">
        <p>&copy; 2025 Vir. All rights reserved. </p> <img className='w-8 h-8 mx-auto' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAAFIRJREFUeF7tnQfwFcUdx7/2ijVqHCWOir1gA+yOBQ1RFCwoir33WMBu7IqgETuKvaBBFFtsaFSiYxAUbKgQW0CDZhQ7Kkjuc/nfy71712/v3r3/ezvzRsb/3pbffnf313cutc+yqqQ1JXWStJKkFSX9VtJvJC0haVFJC0qat236syTNlPSdpBmS/iPp35KmSvpY0hRJ70r6Z3sj11ztYEIrSNpSUjdJm0jaQFKHnOb1raQJksZJ+oekv0uallNfhTTbqADYSRK/HSStVwilgjt50wLgaElPtf3qPJxk3TcSAHaWtIe1A3tJWjLZNAur/ZV1Ao2yQDlS0uOF9Zqho7IDYA1JB1p3cD9JHTPMsx6f/sviQe6WdIek9+oxgDh9lhUAHO9HSuodZxINUOchSUPLeEWUDQAc8SdK2qoBFjXNEMdY19eQtisizffGvykLALjfT2vHC+9dOIAwsAx8Qr0B0FnSn9rRUZ90h3I1nG/Nf2LSD03VrycALpF0hqmJNHg7l0o6sx5zqAcA/mBp4gZLWqseEy5xn5MsTeSpkv5a5BiLBsCVkk4qcoIN2NefJZ1c1LiLAsDGkm6wmJ4uRU2swft5VdLRksbnPY8iAHCIZYwZZjE7RfSVN72KbH+OZYw6TNKteXaa96JcLql/nhNogrYHSRqQ1zzzAsA8koZL2iuvgTdZuyMsdXJfSbNNzzsPACwniQG3V22e6TWI2x7KIzbU9LgfxKlnGgA4YqDcqLeJNs7cG7EOpmfsI8YcU0wCAMvdo5JWa0TKNtCYJ1vSQU9TFkZTAGDnP9Fa/MJgBAh6mDgJTACAO/+Z1rFf2OI7HXEddM/KE2QFANz+31oMX+GL73QIY7htFukgKwD+0hL16rb4TsdIXH3SjiILAFpKnrRUN/9damVRWgCg3r3F/DxaLWagwKFp1MZpAIBhB2NFmm8zzK/1aQQFsB1gbEtkQEqziGNbVr3SgpGN2TXJ6JICoGXPT0Ld+tRN5E+QBAB48jREsEN96F6qXnGyjeVZlAQA77TcuEq1yGGDwb1s7TijjQuAlgNnHGqWq04sR9M4AMB1m4jYVmk8ChApHepyHgcADzax337jLXn1iDHN7x42iSgAwEw81uhUaPLx7xLGvEcB4MVmN/SsuOKKOuaYY7TjjjtqlVVW0bzzzqtZs2bp7bff1kUXXaSnniItQKkLBqOtg0YYBgACNR8o9dRyHFyHDh108cUXq1+/flpySf90BB9++KH23XdfvfLKKzmOxEjTewYFpIYBoGl3/9prr63bbrtNXbp00VxzBZPop59+0iWXXKILLrjAyCrl2EjgKRA0O+Lzn8xxQKVtmp3/+OOPa8sttwxdfCYwZ84c3XzzzTrySFIZlL783i8/QRAAmpbzP+OMM3TuuedqwQVJIhZeGugEYCK+EoEfAHDuJCVaU5Zhw4bp0EOxrEaXBuIBnMmQOq8qXY0fAJpa6xcXADNmzBCnxY033hiNlPLUqNEO+gHgkwZMyGSMxIh8AwcO1KKLkkvSv3z99dc283f55ThFNVQhcdXv3CP2AqCl+LHShyLfH3fccVp88cWrVnf27NmaOHGizjzzzEaQ/4OQWaUY8gKASNSDGwrTOQ0WBRAy/rrrrmv38OWXX+qee+7Rq6/ic9HQ5TZJuPTZxQuAL0uchLGhqV6iwZPMcik/ADSt7F+ixSlqKBWdgPsEaLl75UT+k08+WaeddppQMl122WVl0BxW3MbcAHijFd5lHgEXXnihTjnlFC200EJ2488++6x22IEc13UthJWt7+YBSLlObvxWMUiBo446SpdeeqmWWIInCv5XSgIAhsIbCtOcE2Bv64GF+wzOvembWn311fXAAw9ovfWqUyU88sgj2m233cpAn30sH8/7HQC07n/DSzJgwACdd955laOf5n/88Uf7/5VEgWTzAQ4Amtb0a3jdK83dd9992ntvDtb/l/fee0+77rqr3n///by6TdKubSJ2APBNjs+sJBlUu6k7evRobb/99lXzuf/++7XPPpy8pSg8f7MYACC7B48iNW1B64f9f7755tO7775rRNvnB4ASMYDOWncCAKXU/++00062O9YKK6ygCRMmCCvdO+8Qm2KuIJffcMMN6t27txZeeGG7Ye7pK664Quecc06mjh5++GH7uHeXEloQdwEAPNBwVabZGv7YKzvT/NSpU3XEEUfoiSdIRZS9hLl9vfnmm1p/fVtMTl0OOeQQDR48uMaf8KuvvrKVQSVhBP8IAEolAQQRjpV46aWX1KNHD337LddX+sLi33vvvfYi+/n8cdKss8466TuAoerQQS+88II23HDDmnbwKkYcPPHEE21g17H8GQCUKs3Liy++qK228s8xye7BTMvipS0szIMPPmgzaEEOnyaYNSyJ1157rX0C/Prrr5p77rmrhow/4ZQpU9S/f39xXdSpjAAApREB2d144y63HInHasvPP/9sO2vgs5e2sCho6OaZh/xWtYV7GhkeZ88sBd6CK4sxw1MAan5e0OFcwpjOPvvsLN2l/XYMAChN1K+f8sQ9s6yKlLDrxenHBKeOFpAjfo011pAj+3/22We2WpgxOHYBp0+uhIceesj2Rcx6vSVEwiQA8Kn1pNnyCT/MpfrQoUN1+OGHBx7NH3/8sS1HpwnE4Oh/7rnntMkmvC7rX3D6OPbYY4USJ0tx3MqQLG666SYdfTSp//9X+DfawGWXXbaqC7yNRo0apYMPPrhIEHwGAEqjBCLMihAsv8I9etddd+mggw5KtTYEb2CSnX/++X2/504eMWJEjfYuTWeOCDh9+nR7Qb2SC7YAjn30D+4CCPA6OvBA3sospHwLAH6WNF8h3UV0Ape/+eab+9bK4oIN18/uWm214DTGWdp3D3jTTTe1T5CVVlrJDjDZZRdc8GoLfMHxxx9vK5/chWsOsCIqFlB+AQC/xsn4RZjUfvvtp6WWWso+oh577DFjMrkzUQIuWSxvYfd7j9IkxIli/H755Rddc801tt0+a2HhcAAhaIQT5/rrr/dtcrvtttOdd95pK7q8BT3EnnvuWYTNYE4sAMCcwXkvssgilbF+9913oRNMSkju6LFjx2rNNYldqC5BR2mcPtiRiI0rr7xyYPVx48aJBcnKgLll/9dff13bbLNNaJtBJ97333+v008/3b4mci42ACKvgKC7+Y477kh9J3snFrYjwo7SKAI5O9J71DrfIYYR4IHYlrU4zN8CCyygK6+80l7EsOJnL3Dqm6RtyBjsKyCSCQw6mk2ITM7gggCQRfRzi2N+RIDx4yrz6uzTAoG2dt55Z8XlJ8IAYJK2IfOxmcBQMRDlBUeol2OlUZODDArKRH6GK37mGTLSJytRgZ7Tpk3TAQccYIuHWYujxFpmmWVi8yv0u+22JPuuLa+99po23pikrLkWWwwMVQSFHc2mAMDdiai0xRZb1Mw2i14+TK2MyEVcH6plE8XR/H3xxRe+op+3jzCeh7oFAcBWBIWqgvfff39dd911tnHDW55++mlhts1aTjjhBDvWzs1kOm2mBVmUWnny5Mnq1auXEROzI2Z26tTJFgGxA0SVnj172iZur0Io67yj+vX83VYFhxqDwgBwyy236LDDeNswfQnb/bSaFmRw0GjdvEYY2jRhU3DP2GE0kSLiahKjFFMmDFIxVsU2BoWag/MGQNjuZwJpQBZmiqVNk755bu/fJNJK2PWEbWDIkCE69VTeks612ObgUIeQIKSinOHey3KHRu3+tABwm2K95EPpE0dEi0t2h9FEWolrqo66nrBJYLFENZ1zsR1CQl3CggBg4hhFTkbBhHUMkYwjdLHFFquac5oTAKkFo5GfvT+uiBaH8Msvv7zQ2i299NKhal9vWw7D6Hc9URexe7PNNsukmEIBhjUSfUJIsV3CQp1CgwCQRT5nQF7r3Oeff2570KACdS9cGgCgOfRjrrKqlL2ExOQLM8eRjagax1ElSjdhaoyMBVriXxGSxMp2CqUEKoOCUqY4DA8WujTFDSx2P9wzzp/eYIqkTCDauKuvvtrX4QOQwbQ++ijvW2Yr7H4kCSQX/svCxilRuoksam+nf5xcEXHZZCGGpYpbON8FioJBAMhCTK91zlHIMBCvgeTll1/21Q8EERsd/AYbkCO5towZM0Zbbx2YNDPO+lXqIJ6iI2HHAlocWeOUMOaP75MwkkH9obrv3r27xo8fH2bjqAoMCZQEggCQRYvmts55FTJe9Sh+c6hX40TTcO9z5/nZ/E1y1gCYheTu/+STT2zTb5wSxpzyvQkDm8NXAUxS2XAaBpSq0LDA4FC/ECcaJICia9euiRkV53hy7miv6dN7RH7zzTe29+ztt98eSmMWBdnZSenirWySs4Yv4c4HvLh3x40hgGfAPyDIGTWOBTGMCEgXmM0xMaM6j1DSVQWHBoaHBxks0qponeMJImD29KLUyxzGMdiw+Nx5RPdQ/AicFrBegnPKoBnFLyLJcR0l+mUVT6EbTi9cS59++qnN60TEUFSFhzNP3wQRJgHgFfuCLHHeuPqZM2fasvtZZ51VswFwrxo0aJBQw3LMs/hk9PaWtCpldztuvUVS/8EwzSR9ZPF35HuuPhx2OJXwNmJjhZSaBBHU9eUDggCQlKBex4woedwbHcTivvHGG3ryySft6wdLGZZKgjtYcOz6aPhw+vSTr03Y1x3ehfaT+g/CkG200Ua+a+JIQXFsCH4NMC48ivFDYF123333qKvZN0WMb5IoUwBw339x/d6c3DpBBhOI4c7dhwOmNyTbIVgafYKb2O5TKQq83kWKMvxkCXghpT10IrdxgnH5Joli3DVp4kwAADEJ/zgGmdT7Fj8E7AU4bXTs2NHWGrLoBHBgMuXux6eeEuZgkQUA7tOL64jgFOYUt6Dt5Ehmh/qVtKZf9ymZIPA0ME0cY6tJFJkVAA5n6jiUcIz37dvXiBnWS8w8AOCOI6S/NB5EUfmH01xPgJCNwaYK45F8ABeaKLLGLpAFABBv+PDhlUhbjjosXLfeCs7MF9M+doCWxcFrB+YyLXjD4h2S2lRgRK+66io7dB59B4uPrM8JG7OEpoqljapk0X5x7lSKYgK9QZgJURpzLtXVgnQW1EqqUeTYh7AwlSw+XDr+BWnC08OAmQQAjImd78QY8i2aU6KpYpbIZNG0U5UuPuj4ioqhd8QSgjCLinghHh+lkZ8YmETHDkfNHe9cW1kWP4o3iQsAdjjMnsMQs6HgaxKa42Oli696MCLIGvjRRx+pT58+NelUnKwbKEycxUd0497P6ncfhfIwbhvmE8UNolbQOLiyYNjQLTgvhmDoAVRpdr4z3qiYxzCFEto83OU6d+5cMXAxfmT9888/P4ok3r/HejCCjypPxkAwolu8qdP99NbsGFSRxPex+BA9plyadCKB9cOOW8aDDgG+ZOTIkTYjyphRT/Pr1q1bJVUMddH3Y13MmpqGeEY8fLy+Ds4k0HFwRREXOGnSJFva4ZhHq7fqqqtWWTZJKIG6/O67705Ks9hPxtBwRSeAmROEomnzlrfeesuOb8MyiAyOi7VzREFA9NHYpPPe+e5xuVW1SSnk1EephB39pJNOSttEzXduFXiaRgHJ888/b59GKQGZ6NEoxlgxEYcxV36TqVOoc2UobuVIEmI7RMa4kyYEPawvr0QUd1xspA8++MDOLcCdn7IkfjaOfioPR8JlYvVy57wNGghaPhhHZNR6FuIZsT0EPfroHtsPP/xgH8EwkXm+BAoXjwcxRqugDCXOuFh4TM3Qkusj4yma6uHIqlPAzdX7LawhpBrFjKNFhJHiXnWkA2zlSAXwAzCo3KcZCZxo3PAbeFsTce3mrQAizDXBqtDb0OskqZ+OZVIVxZDD3e+xxx5Vb+o5SMUHjWOqSEImonrzVs70eDRkq3pE0p1Vk7seP76UTEnzLklxM8/8fDxD7SxpQnFjbvVkkAI4R04Ma8/7aFRQ3aZ+TNLgghTZVI3Wz6/zuADg29KkkyuSig3a1yQr5rM2147PZJIA4A94LTcoQZpt2DDvf40z6SQAoL1S5RWOM8EmrFNx94oz96QAoM2x1knQJU7jrTqFU4BnTbsm6TUNAMhbQkdpvk0ytlbdZBSY07Yxxyf5LO0i8vZsasV0kgG26samwKFtLn2xP6BiWgDwLW+n90/UW6tyXhQYJGlAmsazAID+SvXWQBoCtINvyCLRJ+08sgKApPt/s1wE/V94SDuq1ndxKYChhzxzs+N+4K2XFQC0x+sOJPGrfiIz7Yha38WlAOFd3a0M9NPjfuBXzwQAaJcsI7zmFJyOO8soW996KTBZUg9J/8xKGlMAYBw4k5J6owWCrKsS/j2L35NkZya6MQkA5yTABNm6DkysTm0bHPu9Tex8p2nTAHB4AjjTFmNoFgQwfHtlvfPzYAL9pol0MLxtwGbJ0JytsaH6ZuH2g8iWxwng7qulLMoO2NRKnjhd5w0AxoDaeFhGrWOcubS3Ouj2ScScTyRtG7WKAABdYUDiSY6WFTEeTDG28dZcIsNOvKaraxUFAKfXlj9B9ColsudHNxdeo2gAMBo8iwZLWivr4NvZ97hxkR48liePqbnXAwDO2FuOpv9fxVgOnKYW3d1OPQHAOHA5/1ObciOP+ZW9TZRmxHiHum7nOYl6A8CZG06M5DhpFuURSp2BZXCyLQsAHCAQkMoDFu0VCCz8EEtVPjLPXZ2k7bIBwBk7+QmObEdXA0f9UElPJVmcIuqWFQDO3LEw8pR2P8sHsWMRBDHYBwmZSOPBkx1GLHcGx1ZpquwAcM8ZPoEropd1jC6ZBzEMtEkSxlFtR3xDBNE0EgDc68MVwW+HEpieMdGObjveS3fER4G6UQHgnhep7skT381K5LmJtQOJiK195TKKEvH+zjMrREqPszxy/mEB8O+SpsX7tJy12gMA/CiLixop0chsxXMe5Mb/raTfSFrC0kQuKmlBSU5e+VmSZvJoh6QZkv4j6d+WMWYqmdwtHmQKb2SYdMQoCxz+C3rf0vN57HLdAAAAAElFTkSuQmCC" alt="" />
      </footer>
    </div>
  );
}

export default App;
