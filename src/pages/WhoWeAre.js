import "owl.carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import { Link } from "react-router-dom";
// 🔹 Import Images
import icon1 from "../assets/images/1-icon.png";
import icon2 from "../assets/images/2-icon.png";
import icon3 from "../assets/images/3-icon.png";

import jennImg from "../assets/images/jenn-image.jpg";
import kyleImg from "../assets/images/Kyle-Schuett-300x300.jpg";
import markImg from "../assets/images/mark-image.jpg";
import samImg from "../assets/images/Sam-Headshot-3-480x568.jpg";

import planeImg from "../assets/images/airplane-image.jpg";
import flexImg from "../assets/images/flex-image.jpg";
import winImg from "../assets/images/win-image.jpg";

import award1 from "../assets/images/Icon-1-150x150.png";
import award2 from "../assets/images/Icon-2-150x150.png";
import award3 from "../assets/images/Icon-3-150x150.png";
import award4 from "../assets/images/Icon-4-150x150.png";

const WhoWeAre = () => {
  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="weUnlock-sec whoWe-sec pb-2">
        <div className="image-box d-flex align-items-center justify-content-center">
          <div className="image-box-content text-center">
            <h1 className="main-title">WHO WE ARE</h1>
            <p>
              American Natural Processors: Founded in 2000 by Mark and Julie
              Schuett
            </p>
          </div>
        </div>

        <div className="container weUnlock-content">
          <div className="value-card">
            <div className="row g-4 justify-content-center text-center">
              <div className="col-lg-4 col-sm-6">
                <Link to="#" className="service-card">
                  <div className="icon-wrapper">
                    <img src={icon1} alt="Family Owned" className="img-fluid" />
                  </div>
                  <h4>Family Owned</h4>
                </Link>
              </div>

              <div className="col-lg-4 col-sm-6">
                <Link to="#" className="service-card">
                  <div className="icon-wrapper">
                    <img src={icon2} alt="Past Successes" className="img-fluid" />
                  </div>
                  <h4>Past Successes</h4>
                </Link>
              </div>

              <div className="col-lg-4 col-sm-6">
                <Link to="#" className="service-card">
                  <div className="icon-wrapper">
                    <img src={icon3} alt="Locations" className="img-fluid" />
                  </div>
                  <h4>Locations</h4>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FAMILY OWNED SECTION ================= */}
      <section className="bg-light py-5 familyOwned-sec">
        <div className="container">
          <div className="section-title-wrap">
            <h1 className="main-heading">Family Owned</h1>
            <span className="heading-accent"></span>
          </div>

          {/* Slide 1 */}
          <div className="familyOwned-box bg-white p-4 mb-4 d-flex flex-column flex-lg-row gap-5">
            <div className="familyOwned-content w-100">
              <p>
                  Mark and Julie Schuett, while raising their three children, farmed and operated a
                  grain mill in Northwest Iowa for 20 years and continue to raise organic crops today
                  on their family farm of 600 acres. They understand sustainable agriculture up close
                  and personal. The importance of using sustainable farming practices, ensuring that
                  the soil remains fertile and that erosion is prevented is well understood by the Schuetts.                        
              </p>
              <h6 className="mt-4 fw-bold">— Mark Schuett</h6>
            </div>
            <div className="familyOwned-img-box">
              <img src={markImg} className="img-fluid rounded" alt="Mark" />
            </div>
          </div>

          {/* Slide 2 */}
          <div className="familyOwned-box bg-white p-4 mb-4 d-flex flex-column flex-lg-row gap-5">
            <div className="familyOwned-content w-100">
              <p>Under Mark’s innovative and skillful leadership, American Natural Processors, Inc. 
                                        has grown to be one of the largest organic oilseed processors in the United States. 
                                        Organic soybeans, canola, sunflower, safflower, and flax seeds are taken from field 
                                        to packaged product here.  Hard work and dedication to customer satisfaction has earned 
                                        the company a reputation as a leader in developing innovative systems for organic processing.
                                    </p>
    
                                    <p>
                                        By identifying what organic ingredients food companies require to supply what the consumer seeks, 
                                        we have established ourselves as a go-to company in filling demands for unique organic processing 
                                        expertise in niche markets.
                                    </p>
              <h6 className="mt-4 fw-bold">— Nicole Schuett Jennett</h6>
            </div>
            <div className="familyOwned-img-box">
              <img src={jennImg} className="img-fluid rounded" alt="Nicole" />
            </div>
          </div>

          {/* Slide 3 */}
          <div className="familyOwned-box bg-white p-4 mb-4 d-flex flex-column flex-lg-row gap-5">
            <div className="familyOwned-content w-100">
               <p>
                                        Realizing the importance of constantly improving on the status quo, Mark continues to lead the company in ever improving processes and expanding capacities.  What started as one facility in Cherokee Iowa has grown to 4 facilities in Cherokee, Galva, Hartley and Sioux City Iowa.
                                    </p>
    
                                    <p>
                                        Working alongside Mark and Julie, their daughter Nicole Schuett Jennett and her husband Sam Jennett have joined the fast-growing company.
                                    </p>
                                    <p>Nicole Schuett Jennett, a food scientist, is a 2010 graduate of Iowa State University.  She has known since junior high school that she wanted to join the family business and help to grow the company.  Her food science background and passion for her work bring an incredible strength to our quality and food safety programs.</p>
                                    <p>Sam Jennet, an engineer, is a 2009 graduate of Iowa State University. Sam’s skills with process designs and engineering experience provides added expertise to our ever growing and changing process lines.</p>
    
    
              <h6 className="mt-4 fw-bold">— Sam Jennett</h6>
            </div>
            <div className="familyOwned-img-box">
              <img src={samImg} className="img-fluid rounded" alt="Sam" />
            </div>
          </div>

          {/* Slide 4 */}
          <div className="familyOwned-box bg-white p-4 d-flex flex-column flex-lg-row gap-5">
            <div className="familyOwned-content w-100">
            

               <p>
                                        Kyle Schuett, son of Mark and Julie Schuett, is a 2015 Accounting graduate from Iowa State University. His expertise in tax preparation, financial reporting, loan compliance, and financial analysis has been a valuable asset to the family business.
                                    </p>
    
                                    <p>
                                        Constantly evolving, our family-run company has developed and perfected many organic process, gaining valuable expertise in organic processing. Today, our company is ready to take on new challenges and would like to become an essential link between you and your customers.
                                    </p>                  
              <h6 className="mt-4 fw-bold">— Kyle Schuett</h6>
            </div>
            <div className="familyOwned-img-box">
              <img src={kyleImg} className="img-fluid rounded" alt="Kyle" />
            </div>
          </div>
        </div>
      </section>

      {/* ================= PAST SUCCESSES ================= */}
      <section className="py-5 innovationSec">
        <div className="container">
          <div className="section-title-wrap">
            <h1 className="main-heading">Past Successes</h1>
            <span className="heading-accent"></span>
          </div>

          <div className="row">
            <div className="col-lg-4 mb-4">
              <div className="innovation-card">
                <img src={winImg} className="img-fluid" alt="Soy Lecithin" />
                  <div className="innovation-content">
                              <h3 className="innovation-title">World’s 1st Organic Soy Lecithin</h3>
                              <p>Estee Lauder’s brand, Origins, launched in 1990. But its new organic line was stalled by the 
                                  search for a plant-based emulsifier. Soy lecithin is an emulsifier; it binds oil and water. 
                                  Estée Lauder discovered ANP on the Internet and contacted the Schuetts and their partner at Clarkson 
                                  Soy Products in Illinois. But purity requirements for cosmetics are stringent.</p>     
                              <Link to="#" className="learn-more">Read More<i class="fas fa-arrow-right ms-2"></i></Link>
                  </div>
                
              </div>
            </div>

            <div className="col-lg-4 mb-4">
              <div className="innovation-card">
                <img src={planeImg} className="img-fluid" alt="Biofuel" />
               <      div className="innovation-content">
                            <h3 className="innovation-title">ANP in a joint venture with Solazyme, Inc. developed the process and manufactured the historical 
                                first ever algae-derived biofuel to power a U.S. military aircraft.</h3>
                            <p>San Francisco’s Solazyme, Inc. provided the algal biofuel, called Solajet HRJ-5 working with the US Navy. 
                                The successful flight demonstration of the Seahawk helicopter on a 50/50 blend of Solajet HRJ-5 and 
                                petroleum-derived jet fuel marked a significant milestone and reinforced the Navy’s commitment to 
                                securing our nation’s energy supply.</p>
                                <Link to="#" className="learn-more">Read More <i class="fas fa-arrow-right ms-2"></i></Link>    
                      </div>
                
              </div>
            </div>

            <div className="col-lg-4 mb-4">
              <div className="innovation-card">
                <img src={flexImg} className="img-fluid" alt="Flax Plant" />
                      <div className="innovation-content">
                            <h3 className="innovation-title">Iowa’s First Flax Processing Plant</h3>
                            <p>Spectrum Organic Products Inc.,  in partnership with a division of American Natural Processors, Biowa 
                                Nutraceuticals,  made a major commitment and investment in our Iowa-based flaxseed  processing facility. 
                                ANP opened the world’s largest production facility, at the time, dedicated to organic, plant-based 
                                Essential Fatty Acid oils.</p>
                            <Link to="#" className="learn-more"> Read More <i class="fas fa-arrow-right ms-2"></i></Link>
                      </div>
                
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= AWARDS ================= */}
      <section className="awardsSec pb-5 bg-light">
        <div className="container">
          <div className="section-title-wrap">
            <h1 className="main-heading">Recognition & Awards</h1>
            <span className="heading-accent"></span>
          </div>

          <div className="row g-4 text-center">
            {[award1, award2, award3, award4].map((award, index) => (
              <div className="col-lg-3 col-md-6" key={index}>
                <div className="award-badge">
                  <img src={award} className="img-fluid" alt="Award" />
                  <p className="award-title mt-3">Iowa Venture Award</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-sec">
             <div className="cta-overlay"></div>
             <div className="container">
               <div className="row align-items-center">
                 <div className="col-md-12">
                   <div className="cta-content text-center">
                     <h2 className="cta-title">
                       Have A Question About Oil Extraction? We Have Answers.
                     </h2>
                     <div className="title-divider mx-auto"></div>
                     <p className="cta-text">
                       We continue to develop new methods and products for the
                       ever-expanding specialty food marketplace. Let's start a
                       conversation about our contract manufacturing solutions.
                     </p>
                     <Link to="/contact" className="btn-custom">
                       Contact Us
                     </Link>
                   </div>
                 </div>
               </div>
             </div>
           </section>
    </>
  );
};

export default WhoWeAre;