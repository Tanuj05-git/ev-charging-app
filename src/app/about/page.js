"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".story-step", {
        opacity: 0,
        y: 100,
        duration: 1,
        stagger: 0.4,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);
  

  const journey = [
    {
      year: "2022",
      title: "The Idea Was Born",
      desc: "We started with a vision to make EV charging accessible everywhere.",
      img: "https://lh3.googleusercontent.com/rd-gg-dl/AJfQ9KRKUCdiUZ17dcAenKSpfx_CuCA7G89QdOpiaU2OEWcYw5wofSxCDB4YBRq5Q7KAuPRl-1AXDYRN4PQXejB9LVTbmeJhAeTG7XlVAke2sPrq3vaWcZ-fBPS7RxY0HmcjHfoVcw32qeFL3N7msOP6jjHO-AUe77brGd2kr_Fm0YXrtduPurH-3VhKVHa2GxAtiCZuCyAUS4G3XfV1z3ZZgeHX_1QWDFOT6cal0aVUJKc_xU0eLc_8NvqRNEvob4bmfc8pmoqAEJrTv3k5fKfVbgLy9ctPJsoUnyKAYF1YUretmAM4LvzXTJ7q7pN8Rkn6ejNduruvUIDdH0l5MYMqUifU14SZalaNZjNQ4rsDvugYEhoNSM6wSwL78OcoYE1vQucYvqxnXQ8AfPhBo3pPwR6dH0_QaDwB-vXiQ249qkeGn_iA-DzLyB5KjU_haKyMY9tMJp6vAcmmzYczGf8BikpLCfvtTu6hUQ_BQW4jMyKafg0erCjEiIHnkU_iZSSubmlo5Sq3PWnF1fd-yiMKuR7ocCn_JvGKW4KIoJZTXautoMqZSGN7GzAiATOSF0w5BlK0QPu4W9_XyTQpQ34RvYJqZebamJREQ-dD88VRNBzmrriZ1DI7ukrLKnjEGbPSwkVUUT7yK3o6x7ZlhbljNrszeuQvalkYr2M0nOkJ0m0xcit5OXxIR5Z3fMePnmd34pvO68wg6e95uvgnIsjhs01ngEmV4Sk9V9WTO2raQET5St_tFW_ZvO9tUM_SSk78Wd2X5g3Kxi0DYRe1vBV1o6KA6B0waO61X4tgfWDvcmfGPMk6DgAki09i5NjWBlQWANHdPNJUmIN9uZR48AeginfMbwIEPkCwi1yDsQmk45F-BDABHE94lKi0p4wjqGpWkJZadYFblVwpHEa79rmpvxLZ3YLu0f70V_vE-U7-gclxn6EprElMq_8E9K7UqCqncexCS3SR3LtdJKcp7WM_njPM1xDNXVTNHZu2pAJBTwiqx07rVCLx9HMQ-iiFDdyWDujqaqLturUelDI5U_NVmrsiSXuMxETuzqBJDOnQWevBfooV2QCOeGk0ow4qMjQkLrSlbTyvj0UE_eiX0S1s303f0x3ojiM5oa4WJJYhaxX_z4TZhRM=s1024",
    },
    {
      year: "2023",
      title: "First Prototype",
      desc: "Our first charging station prototype came alive and tested successfully.",
      img: "https://lh3.googleusercontent.com/rd-gg-dl/AJfQ9KRB0y4uRkDIIIMEdbiTG-7ujpGj4rk1b4kWb1F1v55EbAt97rnYdH0sc_HRxWOqYGyoos-zeIsOcsRE9R3Ltqisfo8HIAeUFGWAnRXRReA-0LTNxDaSReZtCEPJn3xsHCObR1bmAskL0c85k9MSoWt2rAb2ekB3xTJOOmZA3XF9PPrcJETWxYRbvbbFA-chBMTw1LoX86bZ3-AWKSgVdToAf3E0ImFHSZYVb7vQoHqxpliZDsdxkyAcpdcILMfYqJRNZ65E3LvSOq-3FC5FdDFww0vx1ukWUArTThDNDX4oyryl4cFb3rlqNY3hJ9ziTdT20qWOD2YojElPY_sCStFuYGfuVp0kwojKiX_kKDCdbZC0VXkCUQL6wSiONxfpWWmDUTEhir5vU8QjPYlIciIY2rkKDgfiXvTu3ffYt6cSX-FWT6xz0RUd34ymtUP_D0ilJKmwoPy_pK1eEw2S0y_VX6TgRny44PbxVIdgtIcdnCqwBxts_kY4uadhCWZGXdqiRoKJUxmd_l2d7miNriBHGZ026741t0iP16YBCsHpiKKXvIkx7qsMAJm9IJI_Vpk5RU4Ed1Wa2r3bLAkbQIMHjQuX69yix142dqsQ_FOscuYFX7q57vsxQCY4-Lm2trGYBqAiEMWeSn4QJWsxpP9mAwXsy3kRBzTx5yfqNgHso0i96S-5425XT51rFUQQDsG5LFJqGJ708uyIwGYLBMRskfCtXMvzmu-Ct_pBfKoyrfOoEoBlJIQCL8veWlsG9iSzSOoRIUKsAad4eHVbzcT5UBIbqJbwXcKvhRE9v89DMt0yELq_y4H79TLG4cFODNMYdAw4QHeU_AeMkoS9mmKRu9H4xgtnjw-mvmbynTVcGvAyNEW-ZLDGDwleiQ1COzeAMyV5jLNzpFDjCkTNcrsZb3CdKGbOobPn2P6Jdbn_2sLCfaFJjfc3CRF8Y-p5ra2kfVJEXJ1fLjeXu73zxe4BHrNWyxQ_n_2-N5_dypqO4gRoMmiVgmmreQpSRlXfAaJHIWsEPBBZIBDcqEmmyW9o5EIRdyT3gjLOau7K3cG1YzmtX7i9NCSfPBJ7tlZKixWsel65SsH6UUX_AGg0p_PyYze_CRVDFew1UF47IwirpjE5nUs=s1024",
    },
    {
      year: "2024",
      title: "App Launch",
      desc: "We launched our mobile app for users to find and book charging slots easily.",
      img: "https://lh3.googleusercontent.com/rd-gg-dl/AJfQ9KT7Lq7IMlHEaqgTuuAGIQJuolgfsOnNlAUcoQzcfQR9rIxct0SMcAdsIg0EJaHbmJ_OMdPViRxdbtuNJh4FxcmnOdoJzkQSsLqS5CthBU1tftIugNujUfvroVnc5DqflFkQI72t1AlHPUthhuaSe-6YztBsnpsI3p-MxPSjg5Ohs-1CPOpeTlrSxzVOGiD79eYLzNkM2kz2flRAbKpi0JPSktDl5WLmviJENzSDU0_TxD00-sClvtGT_Grx3JjZWXg7pfvfxEMj2mkG1ToCODG-omJR3PHPV-ssNs4W8jqQYxYmzlF0UiHQuZQTMtF-ZjKVkw6Pafmb8ciMEw-Fok3i_sJRa0u-rD-RdoeONKhDv7Zszpi5Ct5MlCkTXbDfS_5J0lsT6KKdNUp9Ht-b0p5WayCHL-pjORHVO1Q184TayOkcccW6pCTFDhfXnCZu21mmJoqm3FNgX9iFh-4OIwmmN4Bi3LOTXVg3aEQbAPExu51lQE1gB3o5OQvpli1HnSjt8bhdGlEAovswKRmr3BALHogANekyormAdZ1sQYrgQZNNm8Ckq1KJggULudxxzG13s6DfYYInmMVutHK-qKMWEMMW9EWc14AJcGwjpySCbLR1doBPRmjnfmIC8uKZQgSL33L_bmKH4AIwwVOUu8wBQB41P89gZ8ApAW4Ja5SNICZp79TgTMZpBwTzIe6Kf8b9ucZNLFB3m3i-pC1eQ56-6PNY9bOdtc9m9Zo0k3t1m_fM6qYeq4lA3sggaJkJq_sFSehLg9pL5MSs54H0N3Zgbq53N1-FT8kZCcAqwFA_ctNwM6iNBjC2Rn4DoKZwVuupivFgv5am6i3u-iCH8fO6gQ_2uaxDQPaXysnl1FqHpMX4PQw0xfD9xAeiWPw3Zh7vgebWp4MN5ZlpT6To_jvqNlclltd09H-seCZRtFzCe1ZW0mukRnqK7VdedoqzvwFGD9tyCjJTYp6Q7OtdmrCxBaiDdfumzwvKKvGCyDsIn9ZgcxMCEPBtVyzrrTFenUm5V6S_OT4RzVCKLv3x3Xr6iTqEm5H1bJR6Q7Bim9smo9hAJ-cEVjn7nPFyO2xvlCHynqeo1e1Y8DUexty60kKDpd-yzlN4ZLdYOpdQZBNxaA75Dp4=s1024",
    },
    {
      year: "2025",
      title: "Expanding Nationwide",
      desc: "We are scaling across India with hundreds of charging stations and partners.",
      img: "https://lh3.googleusercontent.com/rd-gg-dl/AJfQ9KSTpeyq9m5TCK2uzHe329TmXbf51kbOAPc0FT9pR4teDUWx4ATumi9Dgh2Ycym4vQRKYJlDm0PuPI66OkNXlrrzECwqCMrQNU1lH5trKYQomYlW5IdR6F-IIPkR6yb1Q7mHF2-zmbZIIPkpoamJIuJ8ZQF5pgw0YhSyWH8VUju0yFNNWctgaoziC-hnfyjtflyXaBumuD788BTqhQ-J5afcjUcetOhAA2O3WIRx8k3AtMygdo1ZMtTDU6OfFTtMRkB8yt2Wa-RHxVLm4vt__Cx0MM3U3DpCkywCVcZcCLtxt-xbwE2_skJmX_qnaa3PvxtAuo_v4aW2z7uy1Yh2CBH14bIwYzIG61ECm2zeq10jtAlE98k6Vay5M8mM_N6ug3hxMQKLOWE9BBLkzvRY4R-a1zfPMmOfcLz5dvAaodeaw3VF_Ez5_KLn0cUYWmLJjUqqgsytMMyKdXiBf9zVVD3E1_QaDn2MCS0RsG4KIPCq5FUXx1IWnGwTmvxQq9Fld13HHa1fUiFI8GLrtS82xgGGxbx0o10Ph7hza2lt2FclM4WKnx1MORGMkQlTdSCj-xcIhrOzdLnDH949dbrKHhZ4WuJIdndhXRYMD1CqPw9QgrIaNBgKMGi6qkenPEdn-alEQU6of46zFUC6YskQwVyphyY9z0BFX2TDN5DIF_3T14jYJxk0FDZW7_aEUvVyLxlVOmHOmQe4Sk7q5NEeD_R8IXJGNp9kvwl1jNqKUVTJ02LiN81nuvFeE5yAXGth0HOLFkcNyjGSXcyaXejARg3TyBKi0NRAZ-4Ln7Cb-OCv78_DzBPPwdovPclDJAVY3hr-vA1PEq0SG1uWoZJjdTvCezi-8-IO6W2MO0VWPSgFrHZ1VY3emp1OgoM9aPw9JtJfjNXeKJUFap-SyhS8-BthmnE9MPNXNJO1ONtGSrjz3iUOvuN6kEi65it5zLAAm8OuNkRVnLXhgcN_Sy2YnnVeNKpyipaLkpwdkgzqlC5KmUOTbGvCdCr65p8xGwdbPC5wxOCn_Xo1NWDzpX28e3r4a1ulH1Im3U__vrgWXp14mKkAhBsfCdGX--oiW0gl5-52Niu6_wTQTH5jK6l-tNbRt6zxGNmAirUEkWL87JzwhJJczrg=s1024",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-20 px-6 md:px-20 bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white"
    >
      <h2 className="text-4xl font-bold text-center mb-12">Our Journey</h2>
      <div className="space-y-16 max-w-5xl mx-auto">
        {journey.map((step, i) => (
          <div
            key={i}
            className={`story-step flex flex-col md:flex-row items-center gap-8 ${
              i % 2 === 0 ? "" : "md:flex-row-reverse"
            }`}
          >
            {/* Image */}
            <div className="flex-1">
              <img
                src={step.img}
                alt={step.title}
                className="rounded-2xl shadow-lg w-full h-64 object-cover border border-gray-700"
              />
            </div>

            {/* Text */}
            <div className="flex-1">
              <span className="text-green-400 font-semibold text-lg">
                {step.year}
              </span>
              <h3 className="text-2xl font-bold mt-2">{step.title}</h3>
              <p className="text-gray-300 mt-3 leading-relaxed">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Background Animation Effect */}
      <div className="absolute inset-0 bg-[url('/images/about-bg.jpg')] bg-cover bg-center opacity-20 pointer-events-none"></div>
    </section>
  );
}
