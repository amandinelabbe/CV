import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import layoutStyles from '../components/layout.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone
} from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <Layout home>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.1/css/all.css" integrity="sha384-5sAR7xN1Nv6T6+dT2mhtzEpVJvfS3NScPQTrOxhwjIuvcA67KV2R5Jz6kr4abQsz" 
        crossorigin="anonymous"></link>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css"></link>
        <script src='https://kit.fontawesome.com/a076d05399.js' crossorigin='anonymous'></script>
    <div className={utilStyles.container}>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      
      <section className={utilStyles.navigation}> 
        <nav>
          <ul className={utilStyles.ul}>
            <li className={utilStyles.list}><a href="#me" className={utilStyles.a}>Qui suis-je ?</a></li>
            <li className={utilStyles.list}><a href="#formations" className={utilStyles.a}>Formations</a></li>
            <li className={utilStyles.list}><a href="#competences" className={utilStyles.a}>Compétences</a></li>
            <li className={utilStyles.list}><a href="#experiences" className={utilStyles.a}>Expériences</a></li>
            <li className={utilStyles.list}><a href="#contact" className={utilStyles.a}>Contact</a></li>
          </ul>
        </nav>
      </section>
      </div>
      <br></br><br></br>
      <section className={utilStyles.display}> 
        <section className={utilStyles.displayx1}> 
          <div id="me">
              <section className={utilStyles.displayG}>
              <br></br>
                <h3 className={utilStyles.h3}>A PROPOS DE MOI :</h3>
                  <p> Actuellement étudiante en informatique en 1ère année à Enigma,
                  je suis actuellement à la recherche d'un job étudiant du 14 juin au 29 septembre. </p>
                    <section className={layoutStyles.inbox1}>
                      <section className={layoutStyles.fontA}>
                      <FontAwesomeIcon
                      icon={faPhone}
                      style={{ transform: "scale(0.7)", color: "black" }}
                      />
                      </section>
                      <section className={layoutStyles.info}>
                        <a href="tel:+33678942565" style={{color: "#000"}}>06 78 94 25 65</a>
                      </section>
                      <section className={layoutStyles.fontA}>
                      <FontAwesomeIcon
                      icon={faEnvelope}
                      style={{ transform: "scale(0.7)", color: "black" }}
                      />
                      </section>
                      <section className={layoutStyles.info}>
                        <a href="mailto:amandine17021702@gmail.com" style={{color: "#000"}}>amandine17021702@gmail.com</a>
                      </section>  
                    </section>
                  <br></br>
                  <h3 className={utilStyles.h3}>CENTRES D’INTÉRÊT :</h3>
                  <section className={utilStyles.inbox}>
                    <p className={utilStyles.inbox1}>Musculation<br></br><br></br>Football<br></br><br></br>Formule 1</p>
                    <p className={utilStyles.inbox1}>Crochet<br></br><br></br>Jeux vidéo<br></br><br></br>Voyages</p>
                  </section>
                </section>
                <section className={utilStyles.displayD}>
                  <section className={utilStyles.lang}>
                  <br></br>
                    <h3 className={utilStyles.h3}>LANGUES :</h3>
                    <p>Français</p>
                    <section className={utilStyles.bar100}> </section>
                    <p>Anglais</p>
                    <section className={utilStyles.bar70}></section>
                    <p>Allemand</p>
                    <section className={utilStyles.bar35}></section>
                    <br></br>
                  </section>  
                <h3 className={utilStyles.h3}>QUALITES :</h3>
                <section className={utilStyles.qual}>
                  <section className={utilStyles.inbox}>
                      <p className={utilStyles.inbox1}>Ambitieuse<br></br><br></br>Autonomie</p>
                      <p className={utilStyles.inbox1}>Dynamisme<br></br><br></br>Travail en équipe</p>
                  </section>
                </section>
            </section>
          </div> 
        </section>


        <div id="formations">
          <h2 className={utilStyles.h2}>FORMATIONS</h2>
          <section className={utilStyles.box}>
            <section className={utilStyles.left}>
              <section className={utilStyles.year}>
                <p>2022-2025</p>
              </section>
              <p>BAC + 3</p>
            </section>
          <section className={utilStyles.right}>
            <section className={utilStyles.titleB}>
             <h3 className={utilStyles.h3}>Responsable de projet informatique</h3>
            </section>
            <p className={utilStyles.loc}>Enigma Lille </p>
            <p>Cursus général en 3 ans <br></br>Spécialisation vers 
            la cybersécurité / le réseau en master par la suite
           </p>
          </section>
          </section> 

          <section className={utilStyles.box}>
            <section className={utilStyles.left}>
              <section className={utilStyles.year}>
                <p>2019-2022</p>
              </section>
              <p>BAC</p>
            </section>
          <section className={utilStyles.right}>
          <h3 className={utilStyles.h3}>Baccalauréat général mention bien </h3>
            <p className={utilStyles.loc}>Lycée Privé Sacré-Coeur Tourcoing</p>
            <p>Spécialites mathématiques, physique-chimie et SVT <br></br>
              Voyages linguistiques / Option sciences et laboratoire / Association sportive
           </p>
          </section>
          </section>           
        </div>

        <section className={utilStyles.displayx1}> 
        <div id="competences">
        <h2 className={utilStyles.h2}>COMPETENCES</h2>
              <section className={utilStyles.displayG}>
                <p>HTML / CSS </p>
                <section className={utilStyles.bar80}></section>
                <p>Java</p>
                <section className={utilStyles.bar35}></section>
                <p>Python</p>
                <section className={utilStyles.bar70}></section>
                <p>JS / Next.js / React / Node.js</p>
                <section className={utilStyles.bar35}></section>
                <p>C</p>
                <section className={utilStyles.bar70}></section>
                <p>SQL</p>
                <section className={utilStyles.bar70}></section>
              </section>
              <section className={utilStyles.displayD}>
                <section className={utilStyles.lang}>
                  <p>Git</p>
                  <section className={utilStyles.bar35}></section>
                  <p>Administration linux</p>
                  <section className={utilStyles.bar55}></section>
                  <p>Administration Windows</p>
                  <section className={utilStyles.bar55}></section>
                  <p>CCNA 1 & CCNA 2</p>
                  <section className={utilStyles.bar100}> </section>
                  <p>Adobe Creative Cloud</p>
                  <section className={utilStyles.bar80}></section>
                  <p>Office 365</p>
                  <section className={utilStyles.bar100}> </section>
                </section>  
              </section>
          </div> 
        </section>

    <div id="experiences">
      <h2 className={utilStyles.h2}>EXPERIENCES</h2>
        <section className={utilStyles.box}>
              <section className={utilStyles.left}>
                <section className={utilStyles.year}>
                  <p>06/2022 - 07/2022</p>
                </section>
                <p>Lompret</p>
              </section>
            <section className={utilStyles.right}>
            <h3 className={utilStyles.h3}>MAGASINIERE | CDD </h3>
              <p className={utilStyles.loc}>ENTREPÔT DECATHLON LOMPRET</p>
              <p>Préparation de commande, gestion de stock et
              inventaire, réception. Travail en équipe et
              autonomie.<br></br>Technologies : AS400, Excel</p>
            </section>
        </section> 

        <section className={utilStyles.box}>
              <section className={utilStyles.left}>
                <section className={utilStyles.year}>
                  <p>05/2019</p>
                </section>
                <p>Villeneuve d’Ascq</p>
              </section>
            <section className={utilStyles.right}>
            <h3 className={utilStyles.h3}>STAGE</h3>
              <p className={utilStyles.loc}>SOCIETE INFORMATIQUE UNIS</p>
              <p>Découverte des différents domaines de
              l’informatique. Suivi de plusieurs métiers :
              développeur web, chef de projet, cloud computing…
              Accompagnement lors de réunions et projets.
              Immersion au cœur d’une équipe.<br></br>Technologies : HTML, JavaScript, SQL, Python</p>
            </section>
        </section> 
     
        <section className={utilStyles.box}>
              <section className={utilStyles.left}>
                <section className={utilStyles.year}>
                  <p>02/2019</p>
                </section>
                <p>Lompret, Croix</p>
              </section>
            <section className={utilStyles.right}>
            <h3 className={utilStyles.h3}>STAGE</h3>
              <p className={utilStyles.loc}>DECATHLON PÔLE INFORMATIQUE</p>
              <p>Découverte des différents domaines de
              l’informatique : cloud, logistique,
              développement web, maintenance…
              Immersion au cœur d’une équipe.</p>
            </section>
        </section> 

        <section className={utilStyles.box}>
              <section className={utilStyles.left}>
                <section className={utilStyles.year}>
                  <p>12/2018</p>
                </section>
                <p>Loos</p>
              </section>
            <section className={utilStyles.right}>
            <h3 className={utilStyles.h3}>STAGE</h3>
              <p className={utilStyles.loc}>M.A.S LE HAVRE DE GALADRIEL</p>
              <p>Découverte des différents domaines du
              médical. Immersion au cœur de l’équipe de la
              direction et du paramédical. Assistance à la
              personne. Approche humanitaire et sociale.</p>
            </section>
        </section> 
    </div>
    <br></br><br></br>

    <div id="contact">
      <ul className={layoutStyles.ul} >
        <li>
        <section className={layoutStyles.fab} >
            <a href="https://github.com/amandinelabbe"><i class="fa fa-github"></i></a>
            </section>
        </li>
        <li>
        <section className={layoutStyles.fab} >
            <a href="https://twitter.com/lbe_amandine"><i class="fab fa-twitter"></i></a>
            </section>
        </li>
        <li>
          <section className={layoutStyles.fab} >
            <a href="https://www.linkedin.com/in/amandine-labbe-22837022b/"><i class="fab fa-linkedin-in"></i></a>
          </section>
        </li>
        <li> 
          <section className={layoutStyles.fab} >
            <a href="tel:+33678942565">
            <FontAwesomeIcon
            icon={faPhone}
            style={{ transform: "scale(0.5)", color: "black", transition: "color 0.3s ease" }}
            onMouseEnter={(e) => {
              e.target.style.color = "white";
            }}
            onMouseLeave={(e) => {
              e.target.style.color = "black";}}/>
            </a> 

          </section>
        </li>
        <li>  
        <section className={layoutStyles.fab} >
          <a href="mailto:amandine17021702@gmail.com">    
            <FontAwesomeIcon
            icon={faEnvelope}
            style={{ transform: "scale(0.5)", color: "black", transition: "color 0.3s ease" }}
            onMouseEnter={(e) => {
              e.target.style.color = "white";
            }}
            onMouseLeave={(e) => {
              e.target.style.color = "black";
            }}
            />
          </a>
        </section>
        </li>
      </ul>
    </div>
    </section>
    </Layout>
  );
}