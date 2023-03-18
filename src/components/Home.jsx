import React from 'react';
import styles from './Home.module.css';
import Setas from './Setas';

const Home = () => {
  const [url, setUrl] = React.useState('');
  const [caixa, setCaixa] = React.useState('todas');
  const imagens = React.useRef();

  function mudaImagem() {
    if (caixa === 'todas') {
      imagens.current.childNodes.forEach((div) => {
        div.childNodes[0].src = url;
      });
    } else if (caixa === '1°') {
      imagens.current.childNodes[0].childNodes[0].src = url;
    } else if (caixa === '2°') {
      imagens.current.childNodes[1].childNodes[0].src = url;
    } else if (caixa === '3°') {
      imagens.current.childNodes[2].childNodes[0].src = url;
    } else if (caixa === '4°') {
      imagens.current.childNodes[3].childNodes[0].src = url;
    }
  }

  function rotacionaTodos(sentido) {
    imagens.current.childNodes.forEach((div) => {
      if (sentido === 'cima') {
        console.log('cima');
        div.childNodes[0].style.transform = up(div.childNodes[0]);
      } else if (sentido === 'esquerda') {
        div.childNodes[0].style.transform = left(div.childNodes[0]);
      } else if (sentido === 'baixo') {
        div.childNodes[0].style.transform = down(div.childNodes[0]);
      } else if (sentido === 'direita') {
        div.childNodes[0].style.transform = right(div.childNodes[0]);
      }
    });
  }

  function rotacionaUnico(numero, sentido) {
    if (sentido === 'cima') {
      imagens.current.childNodes[numero].childNodes[0].style.transform = up(
        imagens.current.childNodes[numero].childNodes[0],
      );
    } else if (sentido === 'esquerda') {
      imagens.current.childNodes[numero].childNodes[0].style.transform = left(
        imagens.current.childNodes[numero].childNodes[0],
      );
    } else if (sentido === 'baixo') {
      imagens.current.childNodes[numero].childNodes[0].style.transform = down(
        imagens.current.childNodes[numero].childNodes[0],
      );
    } else if (sentido === 'direita') {
      imagens.current.childNodes[numero].childNodes[0].style.transform = right(
        imagens.current.childNodes[numero].childNodes[0],
      );
    }
  }

  function left(img) {
    if (img.style.transform == 'rotateY(0deg) rotateX(0deg)') {
      return 'rotateY(180deg) rotateX(0deg)';
    } else if (img.style.transform == 'rotateY(0deg) rotateX(180deg)') {
      return 'rotateY(180deg) rotateX(180deg)';
    } else if (img.style.transform == 'rotateY(180deg) rotateX(0deg)') {
      return 'rotateY(0deg) rotateX(0deg)';
    } else if (img.style.transform == 'rotateY(180deg) rotateX(180deg)') {
      return 'rotateY(0deg) rotateX(180deg)';
    }
  }

  function right(img) {
    if (img.style.transform == 'rotateY(0deg) rotateX(0deg)') {
      return 'rotateY(180deg) rotateX(0deg)';
    } else if (img.style.transform == 'rotateY(0deg) rotateX(180deg)') {
      return 'rotateY(180deg) rotateX(180deg)';
    } else if (img.style.transform == 'rotateY(180deg) rotateX(0deg)') {
      return 'rotateY(0deg) rotateX(0deg)';
    } else if (img.style.transform == 'rotateY(180deg) rotateX(180deg)') {
      return 'rotateY(0deg) rotateX(180deg)';
    }
  }

  function up(img) {
    if (img.style.transform == 'rotateY(0deg) rotateX(0deg)') {
      return 'rotateY(0deg) rotateX(180deg)';
    } else if (img.style.transform == 'rotateY(0deg) rotateX(180deg)') {
      return 'rotateY(0deg) rotateX(0deg)';
    } else if (img.style.transform == 'rotateY(180deg) rotateX(0deg)') {
      return 'rotateY(180deg) rotateX(180deg)';
    } else if (img.style.transform == 'rotateY(180deg) rotateX(180deg)') {
      return 'rotateY(180deg) rotateX(0deg)';
    }
  }

  function down(img) {
    if (img.style.transform == 'rotateY(0deg) rotateX(0deg)') {
      return 'rotateY(0deg) rotateX(180deg)';
    } else if (img.style.transform == 'rotateY(0deg) rotateX(180deg)') {
      return 'rotateY(0deg) rotateX(0deg)';
    } else if (img.style.transform == 'rotateY(180deg) rotateX(0deg)') {
      return 'rotateY(180deg) rotateX(180deg)';
    } else if (img.style.transform == 'rotateY(180deg) rotateX(180deg)') {
      return 'rotateY(180deg) rotateX(0deg)';
    }
  }

  return (
    <main className={`${styles.mainContent} container`}>
      <div className={styles.searchBox}>
        <label htmlFor="img">Insira a url da sua imagem</label>
        <input
          type="text"
          id="img"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <div className={styles.sendOptions}>
          <fieldset className={styles.opcoesContainer}>
            <legend>Escolha a caixa</legend>
            <div>
              <input
                type="radio"
                value="todas"
                id="todas"
                checked={caixa === 'todas'}
                onChange={(e) => {
                  setCaixa(e.target.value);
                }}
              />
              <label htmlFor="todas">todas</label>
            </div>
            <div>
              <input
                type="radio"
                value="1°"
                id="1°"
                checked={caixa === '1°'}
                onChange={(e) => {
                  setCaixa(e.target.value);
                }}
              />
              <label htmlFor="1°">1°</label>
            </div>
            <div>
              <input
                type="radio"
                value="2°"
                id="2°"
                checked={caixa === '2°'}
                onChange={(e) => {
                  setCaixa(e.target.value);
                }}
              />
              <label htmlFor="2°">2°</label>
            </div>
            <div>
              <input
                type="radio"
                value="3°"
                id="3°"
                checked={caixa === '3°'}
                onChange={(e) => {
                  setCaixa(e.target.value);
                }}
              />
              <label htmlFor="3°">3°</label>
            </div>
            <div>
              <input
                type="radio"
                value="4°"
                id="4°"
                checked={caixa === '4°'}
                onChange={(e) => {
                  setCaixa(e.target.value);
                }}
              />
              <label htmlFor="4°">4°</label>
            </div>
          </fieldset>
          <button onClick={mudaImagem}>INSERIR</button>
        </div>
      </div>
      <div className={styles.mudaTodos}>
        <p>Rotacione Todos:</p>
        <div className={styles.setasGeralBox}>
          <Setas rotacionaTodos={rotacionaTodos} />
        </div>
      </div>
      <div className={styles.imgBoxes} ref={imagens}>
        <div className={styles.box}>
          <img
            src="https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_2.0/c_scale,w_400/ncom/en_US/games/switch/k/kirby-and-the-forgotten-land-switch/description-image"
            style={{ transform: 'rotateY(0deg) rotateX(0deg)' }}
          />
          <Setas rotacionaUnico={rotacionaUnico} numero={0} />
        </div>
        <div className={styles.box}>
          <img
            src="https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_2.0/c_scale,w_400/ncom/en_US/games/switch/k/kirby-and-the-forgotten-land-switch/description-image"
            style={{ transform: 'rotateY(0deg) rotateX(0deg)' }}
          />
          <Setas rotacionaUnico={rotacionaUnico} numero={1} />
        </div>
        <div className={styles.box}>
          <img
            src="https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_2.0/c_scale,w_400/ncom/en_US/games/switch/k/kirby-and-the-forgotten-land-switch/description-image"
            style={{ transform: 'rotateY(0deg) rotateX(0deg)' }}
          />
          <Setas rotacionaUnico={rotacionaUnico} numero={2} />
        </div>
        <div className={styles.box}>
          <img
            src="https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_2.0/c_scale,w_400/ncom/en_US/games/switch/k/kirby-and-the-forgotten-land-switch/description-image"
            style={{ transform: 'rotateY(0deg) rotateX(0deg)' }}
          />
          <Setas rotacionaUnico={rotacionaUnico} numero={3} />
        </div>
      </div>
    </main>
  );
};

export default Home;
