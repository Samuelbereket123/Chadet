"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useParams } from "next/navigation";
import GridBG from '../../components/GridBG';
import pillars from '../../data/pillars';

export default function SlugPage() {
  const params = useParams();
  const slug = params.slug as string;
  
  // Find the pillar data
  const pillar = pillars.find(p => p.slug === slug);
  
  // If it's the education page, show the detailed content
  if (slug === 'education') {
    return (
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen bg-white px-4 pt-32 pb-16 flex flex-col items-center"
      >
        <GridBG />
        
        {/* Breadcrumb */}
        <nav className="w-full max-w-4xl mb-8 text-sm text-gray-500" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2">
            <li>
              <Link href="/" className="hover:underline text-green-600">Home</Link>
              <span className="mx-2">/</span>
            </li>
            <li className="text-gray-700 font-semibold">Education</li>
          </ol>
        </nav>

        <div className="w-full max-w-4xl bg-white border border-green-100 rounded-2xl shadow-lg p-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-green-600 mb-8 text-center">Education</h1>
          
          <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
            {/* Main Education Overview */}
            <div>
              <p className="text-lg leading-relaxed">
                CHADET's work on education focuses on promoting access and ensuring retention and transition for vulnerable and marginalised children. The education programs extend support under <a href="#abe" className="text-green-600 hover:text-green-800 underline font-semibold">Non-Formal/ Alternative Basic Education (ABE)</a>, <a href="#ecce" className="text-green-600 hover:text-green-800 underline font-semibold">Early Childhood Care and Education (ECCE)</a> and the provision of support for children at primary and secondary level of education with a focus on <a href="#girls-education" className="text-green-600 hover:text-green-800 underline font-semibold">Girls' Education</a>. CHADET also provides support for teachers and educational institutions to improve teaching and learning outcomes for girls and boys.
              </p>
            </div>

            {/* Non-Formal/Alternative Basic Education (ABE) */}
            <div id="abe" className="scroll-mt-20">
              <h2 className="text-3xl font-bold text-green-700 mb-4 border-b-2 border-green-200 pb-2">
                Non-Formal/Alternative Basic Education (ABE)
              </h2>
              <p className="text-lg leading-relaxed">
                CHADET introduced non-formal/Alternative Basic Education (ABE) for children who did not get the chance to be enrolled into regular education. Between the years 2003-2008, CHADET established and operated three schools in and around the largest commercial center of Addis Ababa where there are large number of street and working children. Over 3,000 children got an opportunity to attend the first cycle of education (grades 1-4) and be integrated into regular schools. Currently, there are about 400 street and working children who are enrolled into the non-formal education and regular schools in Addis Ketema Sub city. <span className="text-green-600 font-semibold">See photos</span>
              </p>
            </div>

            {/* Early Childhood Care and Education ECCE */}
            <div id="ecce" className="scroll-mt-20">
              <h2 className="text-3xl font-bold text-green-700 mb-4 border-b-2 border-green-200 pb-2">
                Early Childhood Care and Education (ECCE)
              </h2>
              <p className="text-lg leading-relaxed">
                Even though significant success has been achieved by the government of Ethiopia in all areas of education, especially in the enrolment of children at primary level of education, highly vulnerable children still have difficulties to access Early Childhood Care and Education (ECCE). Under its ECCE program, CHADET has been able to set-up and furnish ECCE centers where thousands of vulnerable children who have limited or no access to ECCE, especially for children from low-income households, are enrolled. CHADET trains facilitators and provides scholastic materials for vulnerable children. Over 6,000 children have accessed CHADET's ECCE services and were able to transit to primary, secondary and college level of education over the past two decades. <span className="text-green-600 font-semibold">See photos</span>
              </p>
            </div>

            {/* Girls Education */}
            <div id="girls-education" className="scroll-mt-20">
              <h2 className="text-3xl font-bold text-green-700 mb-4 border-b-2 border-green-200 pb-2">
                Girls Education
              </h2>
              <p className="text-lg leading-relaxed mb-4">
                The support that is being provided by CHADET to primary and secondary level students has an objective of retaining children in school and help them thrive to successfully transit to the next level of education. CHADET identified the low value attached to girls' education by families and communities, inability of care givers to meet education-related costs (books, food and uniforms) and unfriendly, unsafe, un-stimulating and poorly-resourced school environments where boys dominate 'to be challenges to girls' education. CHADET established Good Brothers Clubs to secure the support of boys to girls' education.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                The project that focused on girls' education attempted to achieving three outcomes: improved learning outcome, transition, and sustainability. It also has five pillars of intervention namely the creation of safe and conducive environment for learning, meeting transition costs, improving teacher quality and challenging harmful social norms. As part of improving <a href="#wash" className="text-green-600 hover:text-green-800 underline font-semibold">WASH</a> in schools, CHADET has set-up separate toilets for girls and boys, sanitary corners and water points for washing and drinking. One of the most significant education projects that has been successfully implemented by CHADET is the 'Girls' Education Challenge project'. The project was executed in 77 primary and secondary schools in eleven Woredas located in Amhara and Oromiya Regions during the years 2013-2021. The project was funded by the Foreign, Commonwealth and Development Office (FCDO) and the funds were managed by PWC. Key achievements and impact of the project could be viewed in the project-end evaluation and impact report.
              </p>
            </div>

            {/* WASH */}
            <div id="wash" className="scroll-mt-20">
              <h2 className="text-3xl font-bold text-green-700 mb-4 border-b-2 border-green-200 pb-2">
                WASH
              </h2>
              <p className="text-lg leading-relaxed mb-4">
                With the support that it had obtained from FCDO and Guernsey Overseas Aid & Development Commission, CHADET carried out different activities to improve access to safe and potable water and sanitation for students in rural schools. Depending on the location, accessibility of water sources and suitability of the landscape where the schools were set-up, CHADET used different design, material and items to construct the water facilities. In some of the sites, the work involved fixing a water pump to push up water into a water tanker mounted on a steel structure while in other places an all-in-one structure, where the drinking and hand washing basins are set around a masonry structure on which the water tanker is mounted. WASH clubs were organised within the schools and were trained to educate club members and their peers on ways of proper handling of the hand washing and drinking facilities including the sanitary corners and toilets.
              </p>
              <p className="text-lg leading-relaxed">
                CHADET found the positive response and feedback from students, school principals, focal teachers for coordinating girls' clubs and members of the community, including members of School PTA (Parent teachers Associations) for improving WASH for students and communities around the schools.
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="mt-12 pt-8 border-t border-green-200">
            <h3 className="text-xl font-semibold text-green-700 mb-4">Quick Navigation</h3>
            <div className="flex flex-wrap gap-4">
              <a href="#abe" className="px-4 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors">
                Alternative Basic Education (ABE)
              </a>
              <a href="#ecce" className="px-4 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors">
                Early Childhood Care (ECCE)
              </a>
              <a href="#girls-education" className="px-4 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors">
                Girls' Education
              </a>
              <a href="#wash" className="px-4 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors">
                WASH
              </a>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link href="/" className="inline-block px-6 py-3 rounded-full border-2 border-green-500 text-green-600 font-semibold hover:bg-green-50 transition">
              Back to Home
            </Link>
          </div>
        </div>
      </motion.section>
    );
  }

  // If it's the livelihoods page, show the detailed content
  if (slug === 'livelihoods') {
    return (
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen bg-white px-4 pt-32 pb-16 flex flex-col items-center"
      >
        <GridBG />
        
        {/* Breadcrumb */}
        <nav className="w-full max-w-4xl mb-8 text-sm text-gray-500" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2">
            <li>
              <Link href="/" className="hover:underline text-green-600">Home</Link>
              <span className="mx-2">/</span>
            </li>
            <li className="text-gray-700 font-semibold">Livelihoods</li>
          </ol>
        </nav>

        <div className="w-full max-w-4xl bg-white border border-green-100 rounded-2xl shadow-lg p-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-green-600 mb-8 text-center">Improving Livelihoods</h1>
          
          <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
            {/* Main Livelihoods Overview */}
            <div>
              <p className="text-lg leading-relaxed">
                Through facilitating training in <a href="#marketable-skills" className="text-green-600 hover:text-green-800 underline font-semibold">marketable skills</a>, <a href="#economic-empowerment" className="text-green-600 hover:text-green-800 underline font-semibold">economic empowerment for women</a> and improving <a href="#household-nutrition" className="text-green-600 hover:text-green-800 underline font-semibold">household nutrition</a>, CHADET is making efforts to reduce the vulnerabilities of children to different forms of challenges in their lives and in their transitions into adulthood.
              </p>
            </div>

            {/* Training in Marketable Skills */}
            <div id="marketable-skills" className="scroll-mt-20">
              <h2 className="text-3xl font-bold text-green-700 mb-4 border-b-2 border-green-200 pb-2">
                Training in Marketable Skills
              </h2>
              <p className="text-lg leading-relaxed mb-4">
                CHADET has developed and implemented a tailor-made short term training programs for marginalized and unemployed young people through making arrangements with Technical, Vocational Education and Training (TVETs) located in both rural and urban settings. For instance, in collaboration with the Addis Ababa TVET Agency, it has made contributions for the development of short-term curricula for conducting training in the fields of automotive painting, basic plumbing, gypsum work, male hair cut, leather foot wear design and processing and wielding and metal work. Subsequently, it developed short term training modules on plumbing; masonry and carpentry; bar bending and leather works. Such training programs are often accompanied by apprenticeship and training programs on life skills, job readiness and work ethics. All trainees undergo through examination on competency skills for obtaining accreditation given by the concerned government agencies. CHADET used to run its own Skills Training Center where it provided short-term tailor-made training programs in food preparation, housekeeping and child care for young and migrant girls who are at the risk of sexual abuse and exploitation. During the course of the delivery of the training programs, efforts were made to create and strengthen <a href="#ppps" className="text-green-600 hover:text-green-800 underline font-semibold">Public Private Partnerships (PPPs)</a>. <span className="text-green-600 font-semibold">See photos</span>
              </p>
            </div>

            {/* Economic Empowerment for Women */}
            <div id="economic-empowerment" className="scroll-mt-20">
              <h2 className="text-3xl font-bold text-green-700 mb-4 border-b-2 border-green-200 pb-2">
                Economic Empowerment for Women
              </h2>
              <p className="text-lg leading-relaxed mb-4">
                One of the ways through which gender equality could be ensured is strengthening the income earning capacities of girls and women. CHADET assists girls and women under its programs to earn sustainable income by, for instance, creating access to training in Basic Business Skills (BBS) and by providing <a href="#startups" className="text-green-600 hover:text-green-800 underline font-semibold">start-ups</a> to run their small businesses. Project participants who are interested to work together have organised themselves in Saving and Credit Cooperatives (SaCCOs) on voluntary basis. Arrangements are made for them to obtain technical support and obtain certificate of registration from the respective government agencies. Currently there are 21 SaCCOs and 200 Self Help Groups with over 2,000 members. CHADET had recently facilitated the establishment of two <a href="#agribusiness-hubs" className="text-green-600 hover:text-green-800 underline font-semibold">agribusiness Incubation hubs</a> in its rural intervention areas that are located in Oromiya and Amhara Regions.
              </p>
            </div>

            {/* Household Nutrition */}
            <div id="household-nutrition" className="scroll-mt-20">
              <h2 className="text-3xl font-bold text-green-700 mb-4 border-b-2 border-green-200 pb-2">
                Household Nutrition
              </h2>
              <p className="text-lg leading-relaxed">
                CHADET believes that household food insecurity faced by poor households is caused by lack of capability to produce sufficient food for their families and for sale. As most families lack the resources and skills to diversify and improve their dietary needs, CHADET provides technical and material support to low-income households to diversify their sources of food and improve their nutrition through the proper use and management of their agricultural plots and by using home-grown vegetables and fruits. Households are also provided with improved vegetable seeds and seedlings of tomato, carrot, cabbage, chilly, beetroot, onion, avocado, mango, etc.
              </p>
            </div>

            {/* Public Private Partnerships (PPPs) */}
            <div id="ppps" className="scroll-mt-20">
              <h2 className="text-3xl font-bold text-green-700 mb-4 border-b-2 border-green-200 pb-2">
                Public Private Partnerships (PPPs)
              </h2>
              <p className="text-lg leading-relaxed">
                CHADET facilitated the creation of Public and Private Partnerships during the implementation of its project that focused on the creation of employment opportunities for unemployed young people, girls, women and persons with disabilities. The institutions that were involved from the private sector include the Leather Industry Development Institute, Ethiopian Leather Industry Association, Construction Inputs Industry Development Institute and Metals Industry Development Institute. In consultation with relevant government stakeholders, attempts have also been made to establish youth employment/job centers to enhance the chances of employability of young people who have undergone skills and vocational training. Moreover, in collaboration with the Bureau of Labour and Social Affairs, Ethio-jobs was commissioned to set up digitalised Public Employment Service Centers in the four Sub-cities of Addis Ababa.
              </p>
            </div>

            {/* Start-ups */}
            <div id="startups" className="scroll-mt-20">
              <h2 className="text-3xl font-bold text-green-700 mb-4 border-b-2 border-green-200 pb-2">
                Start-ups
              </h2>
              <p className="text-lg leading-relaxed">
                Based on a selection criteria that is set in consultation with project participants, their business plans and an assessment of their performance since joining the program, the project provides seed money to accelerate their existing income generating activities. There are variations on the amount of support that is to be made for each participant/incubatee based on their capacity, skills, availability of working spaces, viability of their business plans, owns contributions, etc.
              </p>
            </div>

            {/* Agribusiness Incubation Hubs */}
            <div id="agribusiness-hubs" className="scroll-mt-20">
              <h2 className="text-3xl font-bold text-green-700 mb-4 border-b-2 border-green-200 pb-2">
                Agribusiness Incubation Hubs
              </h2>
              <p className="text-lg leading-relaxed mb-4">
                Studies indicate that promoting agri-businesses play a crucial role in getting rural women engaged in agriculture out of poverty. However, there are various constraints which prevent women from becoming successful entrepreneurs in Africa. As a consequence of taking on the bigger share of household work and care duties and due to poor access to finance, lack of appropriate skills and education, role models and mentors women often face difficulties to become successful entrepreneurs. This is further exacerbated by socio-cultural practices that do not give due considerations for gender equality.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                The agri-business incubation model that CHADET adopted with the technical support that it obtains from African Agri-business Incubators Network (AAIN) is believed to promote innovation and improve the transfer of technology and knowledge in the sphere of agribusiness across its intervention areas.
              </p>
              <p className="text-lg leading-relaxed">
                The hub that is established in Wonchi Woreda, South West Shoa Zone of Oromia supports over 1,200 women and girls who are engaged in the production of vegetables and fruits. Among other things, the hub provides cold storage services for vegetables, training in vegetable processing and value addition, technical support on vegetable production and improved irrigation. The second hub is established in Artuma Fursi Woreda of Oromo Nationality Zone in the Amhara Region. The hub provides services related to poultry value chain along with fishery and horticultural products. Both hubs provide mentorship and couching in the management of vegetable enterprises, creating market linkages and facilitating access to financial services.
              </p>
              <p className="text-lg leading-relaxed">
                Over 1,200 girls and women are currently engaged in potato and beetroot production, poultry, animal husbandry, etc. and creating value chains through value addition and widening market opportunities.
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="mt-12 pt-8 border-t border-green-200">
            <h3 className="text-xl font-semibold text-green-700 mb-4">Quick Navigation</h3>
            <div className="flex flex-wrap gap-4">
              <a href="#marketable-skills" className="px-4 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors">
                Marketable Skills
              </a>
              <a href="#economic-empowerment" className="px-4 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors">
                Economic Empowerment
              </a>
              <a href="#household-nutrition" className="px-4 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors">
                Household Nutrition
              </a>
              <a href="#ppps" className="px-4 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors">
                Public Private Partnerships
              </a>
              <a href="#startups" className="px-4 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors">
                Start-ups
              </a>
              <a href="#agribusiness-hubs" className="px-4 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors">
                Agribusiness Hubs
              </a>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link href="/" className="inline-block px-6 py-3 rounded-full border-2 border-green-500 text-green-600 font-semibold hover:bg-green-50 transition">
              Back to Home
            </Link>
          </div>
        </div>
      </motion.section>
    );
  }

  // If it's the protection-safeguarding page, show the detailed content
  if (slug === 'protection-safeguarding') {
    return (
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen bg-white px-4 pt-32 pb-16 flex flex-col items-center"
      >
        <GridBG />
        
        {/* Breadcrumb */}
        <nav className="w-full max-w-4xl mb-8 text-sm text-gray-500" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2">
            <li>
              <Link href="/" className="hover:underline text-green-600">Home</Link>
              <span className="mx-2">/</span>
            </li>
            <li className="text-gray-700 font-semibold">Protection and Safeguarding</li>
          </ol>
        </nav>

        <div className="w-full max-w-4xl bg-white border border-green-100 rounded-2xl shadow-lg p-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-green-600 mb-8 text-center">Protection and Safeguarding</h1>
          
          <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
            {/* Main Protection Overview */}
            <div>
              <p className="text-lg leading-relaxed">
                CHADET has developed a safeguarding policy for protecting children and adults who are obtaining support from the organisation. Moreover, it was able to build the capacities of other CSOs in establishing and/or strengthening their <a href="#organizational-safeguarding" className="text-green-600 hover:text-green-800 underline font-semibold">organizational safeguarding systems</a>.
              </p>
              
              {/* Read More Button */}
              <div className="mt-6 text-center">
                <button
                  onClick={() => {
                    const readMoreSection = document.getElementById('read-more-section');
                    const readMoreButton = document.getElementById('read-more-button');
                    if (readMoreSection && readMoreButton) {
                      if (readMoreSection.style.display === 'none' || readMoreSection.style.display === '') {
                        readMoreSection.style.display = 'block';
                        readMoreButton.textContent = 'Show Less';
                      } else {
                        readMoreSection.style.display = 'none';
                        readMoreButton.textContent = 'Read More';
                      }
                    }
                  }}
                  id="read-more-button"
                  className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Read More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>

              {/* Read More Section */}
              <div id="read-more-section" className="mt-8 p-6 bg-green-50 rounded-lg" style={{ display: 'none' }}>
                <p className="text-lg leading-relaxed">
                  CHADET has developed a safeguarding policy that encompass the philosophies, policies, standards, guidelines and procedures to protect children and vulnerable adults and steps to be taken to promote their wellbeing. All its workers, contractors and visitors who have a chance to work for the organization or get in contact with children under its programs are expected to observe the policy. CHADET has cascaded its protection policy to all its stakeholders, including teachers, police officers and community members. It has also established a system that enables children to <a href="#report" className="text-green-600 hover:text-green-800 underline font-semibold">report</a> any form of harm or Sexual Exploitation Abuse and Harassment (SEAH) on their way to and from school, in their schools and at home/communities. CHADET is committed to provide psycho-social and other forms of support for children and communities in <a href="#emergency" className="text-green-600 hover:text-green-800 underline font-semibold">emergency</a> situations. CHADET had successfully implemented projects that were designed to safeguard children exposed to <a href="#risky-migration" className="text-green-600 hover:text-green-800 underline font-semibold">risky migration</a>.
                </p>
              </div>
            </div>

            {/* Organizational Safeguarding Systems */}
            <div id="organizational-safeguarding" className="scroll-mt-20">
              <h2 className="text-3xl font-bold text-green-700 mb-4 border-b-2 border-green-200 pb-2">
                Organizational Safeguarding Systems
              </h2>
              <p className="text-lg leading-relaxed mb-4">
                Beyond what it does for the safeguarding of children as a child-focused organisation, with the financial and technical support that it obtained from The British Council under the <a href="#cssp2" className="text-green-600 hover:text-green-800 underline font-semibold">CSSP2</a> program, CHADET was able to build capacities of 44 Civil Society Organisations (CSOs) located in five regions (Somali, Benishangul, SNNPR, Amhara, Gambella and Addis Ababa) to develop and/or strengthen their capacities in putting in place a functional safeguarding policy and procedure.
              </p>
              <p className="text-lg leading-relaxed">
                To facilitate this, CHADET, in partnership with EDA, developed and distributed a National Directory of Service Providers for facilitating referral linkages between CSOs and other agencies that are engaged in the delivery of service for victims of SEAH. A series of <a href="#training" className="text-green-600 hover:text-green-800 underline font-semibold">training</a> programs were conducted for safeguarding focal points of the CSOs and consultations were made with senior management and responsible staffs of the respective organisations. Moreover, mentoring and coaching services were provided to the CSOs by CHADET's safeguarding coordinator which, in turn, enabled the CSOs to develop an organizational culture where the management, staff members, contractors and partners working for the CSOs maintain shared values and develop the right behaviour towards the safeguarding of children and adults who are participating in their programs. Some CSOs were able to establish community- based safeguarding mechanisms through assigning watchdogs to report cases of abuse and disseminating information using local languages.
              </p>
            </div>

            {/* CSSP2 */}
            <div id="cssp2" className="scroll-mt-20">
              <h2 className="text-3xl font-bold text-green-700 mb-4 border-b-2 border-green-200 pb-2">
                CSSP2
              </h2>
              <p className="text-lg leading-relaxed">
                The Civil Society Support Program (CSSP2) is the second round of capacity development program of The British Council that is designed to support Ethiopia's civil society capacity to "contribute to inclusive and accountable governance; and an improved environment for the promotion and protection of the human rights of all Ethiopians". To achieve this grand objective, the programme identified three themes (gender transformation, young people, and citizen-state engagement) and has taken human rights-based approach as its key strategic approach.
              </p>
            </div>

            {/* Training */}
            <div id="training" className="scroll-mt-20">
              <h2 className="text-3xl font-bold text-green-700 mb-4 border-b-2 border-green-200 pb-2">
                Training
              </h2>
              <p className="text-lg leading-relaxed">
                The training programs that were offered to safeguarding focal points and human resource managers on safe programming and recruitment practices, safeguarding and risk assessment, reporting and handling of cases, how to institutionalize safeguarding practice in an organisation, ways of preventing SEAH and reporting and case management of SEAH, minimum standards and procedures for ensuring safeguarding and accountability etc.
              </p>
            </div>

            {/* Report */}
            <div id="report" className="scroll-mt-20">
              <h2 className="text-3xl font-bold text-green-700 mb-4 border-b-2 border-green-200 pb-2">
                Report
              </h2>
              <p className="text-lg leading-relaxed">
                In order to encourage children to report cases of any forms of abuse anonymously, CHADET has placed Letter Link Boxes (LLBs) in the premises of primary and secondary schools. All cases that are reported through the LLBs will be treated in such a way that different levels of intervention are taken as may be decided by the Gender, Social inclusion and Safeguarding (GESIS) officer of CHADET, trained focal teachers/para-counselors who are coordinating the activities of both Girls' Clubs and <a href="#good-brothers-clubs" className="text-green-600 hover:text-green-800 underline font-semibold">Good brothers' Clubs</a>. Cases might be handled smoothly in consultation with care givers or referred to the local government structure, particularly the office of Women and Children Affairs, the police or CCCs, depending on the nature and magnitude of the case.
              </p>
            </div>

            {/* Good Brother's Clubs */}
            <div id="good-brothers-clubs" className="scroll-mt-20">
              <h2 className="text-3xl font-bold text-green-700 mb-4 border-b-2 border-green-200 pb-2">
                Good Brother's Clubs
              </h2>
              <p className="text-lg leading-relaxed">
                CHADET is a pioneer in establishing good brother's clubs within schools. The establishment of such clubs was initiated in response to girls stating that boys need to be educated on how to treat girls and need to better understand about the gendered social norms and barriers that affect girls in accessing and staying in school and in life in general.
              </p>
            </div>

            {/* Risky Migration */}
            <div id="risky-migration" className="scroll-mt-20">
              <h2 className="text-3xl font-bold text-green-700 mb-4 border-b-2 border-green-200 pb-2">
                Risky Migration
              </h2>
              <p className="text-lg leading-relaxed">
                Based on lessons drawn from the implementation of a project for 'the prevention and rehabilitation of children exposed to sexual abuse and exploitation' in Addis Ababa and informed from a study on the migration patterns of children that was conducted in selected Zones and cities in Northern Ethiopia. CHADET has developed and implemented projects for the safeguarding and reintegration of children who were found to be involved in risky migration. In this regard, it was able to develop an intervention model that was implemented in the places of origin, transit towns and destination cities across selected sites in Amhara and Oromia Regions. In this regard, it was able to set-up transitional shelters that were duly handed over to the government, built the capacities of local stakeholders and assisted children and care givers through providing educational, psycho-social and livelihood support.
              </p>
            </div>

            {/* Emergency */}
            <div id="emergency" className="scroll-mt-20">
              <h2 className="text-3xl font-bold text-green-700 mb-4 border-b-2 border-green-200 pb-2">
                Emergency
              </h2>
              <p className="text-lg leading-relaxed">
                CHADET had experience in providing emergency response with special focus on Education. At times when an emergency situation is created due to natural, such as drought, and/or man-made calamities, it provides supplementary food, scholastic materials and engages in improving WASH facilities within schools and communities residing around the schools. Moreover, in collaboration with scholars at Addis Ababa University (Ethiopia) and Duquesne University (USA), CHADET has developed and disseminated brochures that contained information on the skills needed to provide psychological support to individuals found under distressful conditions.
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="mt-12 pt-8 border-t border-green-200">
            <h3 className="text-xl font-semibold text-green-700 mb-4">Quick Navigation</h3>
            <div className="flex flex-wrap gap-4">
              <a href="#organizational-safeguarding" className="px-4 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors">
                Organizational Safeguarding
              </a>
              <a href="#cssp2" className="px-4 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors">
                CSSP2
              </a>
              <a href="#training" className="px-4 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors">
                Training
              </a>
              <a href="#report" className="px-4 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors">
                Report
              </a>
              <a href="#good-brothers-clubs" className="px-4 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors">
                Good Brother's Clubs
              </a>
              <a href="#risky-migration" className="px-4 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors">
                Risky Migration
              </a>
              <a href="#emergency" className="px-4 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors">
                Emergency
              </a>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link href="/" className="inline-block px-6 py-3 rounded-full border-2 border-green-500 text-green-600 font-semibold hover:bg-green-50 transition">
              Back to Home
            </Link>
          </div>
        </div>
      </motion.section>
    );
  }

  // If it's the research-networking-public-education page, show the detailed content
  if (slug === 'research-networking-public-education') {
    return (
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen bg-white px-4 pt-32 pb-16 flex flex-col items-center"
      >
        <GridBG />
        
        {/* Breadcrumb */}
        <nav className="w-full max-w-4xl mb-8 text-sm text-gray-500" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2">
            <li>
              <Link href="/" className="hover:underline text-green-600">Home</Link>
              <span className="mx-2">/</span>
            </li>
            <li className="text-gray-700 font-semibold">Research, Networking and Public Education</li>
          </ol>
        </nav>

        <div className="w-full max-w-4xl bg-white border border-green-100 rounded-2xl shadow-lg p-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-green-600 mb-8 text-center">Research, Networking and Public Education</h1>
          
          <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
            {/* Main Overview */}
            <div>
              <p className="text-lg leading-relaxed">
                CHADET's engagement in undertaking research is aimed at using the outcomes of research for improving its own work and services to children and young people on one hand and to contribute towards providing evidence for improving policy and practice.
              </p>
            </div>

            {/* Research */}
            <div id="research" className="scroll-mt-20">
              <h2 className="text-3xl font-bold text-green-700 mb-4 border-b-2 border-green-200 pb-2">
                Research
              </h2>
              <p className="text-lg leading-relaxed">
                CHADET had coordinated research undertakings in collaboration with higher learning institutions within and out of the country. Between the years 2004-2006, CHADET was able to work closely with The Royal Tropical Institute of The Netherlands and the Ethiopian Social Science Research Initiative in the implementation of a multi-country research initiative. It served as a secretary to the national steering committee and coordinated the undertaking of research by graduate and undergraduate students and staffs drawn from different Universities. CHADET has also participated in another multi-country research that was conducted in Ethiopia and Nepal focusing on marginalised youth in fragile and conflict affected situations. Partners in this research were University of London-Goldsmiths and The University of Brighton (UK); Tribhuvan University (Nepal) and Addis Ababa University (Ethiopia). Under this research program, an opportunity was given for two young scholars (one from each country) to be enrolled into a PhD program at the University of London. The final findings were published in a form of a book in 2022 under the title 'Youth and Positive Uncertainty: Negotiating pathways in post-conflict and fragile environments. The research was funded by ESRC/DFID Poverty Alleviation Fund. CHADET is a founding member of Child Research Policy and Practice Forum (CRPF), which is currently hosted by the Federal Ministry of Women, children and Youth.
              </p>
            </div>

            {/* Networking */}
            <div id="networking" className="scroll-mt-20">
              <h2 className="text-3xl font-bold text-green-700 mb-4 border-b-2 border-green-200 pb-2">
                Networking
              </h2>
              <p className="text-lg leading-relaxed">
                CHADET believes that networking and collaboration with other CSOs and institutions that work to reduce the challenges faced by children and young people would bring about better outcomes and lasting impact. Consequently, CHADET has acquired a wealth of experience in leading and participating in <a href="#networks" className="text-green-600 hover:text-green-800 underline font-semibold">networks</a> that are established to carry out activities and services in a coordinated manner. More recently, CHADET has coordinated the establishment of the <a href="#ecran" className="text-green-600 hover:text-green-800 underline font-semibold">Ethiopian Child Rights Advocacy Network (ECRAN)</a>.
              </p>
            </div>

            {/* Networks */}
            <div id="networks" className="scroll-mt-20">
              <h2 className="text-3xl font-bold text-green-700 mb-4 border-b-2 border-green-200 pb-2">
                Networks
              </h2>
              <p className="text-lg leading-relaxed mb-4">
                CHADET is a member of networks such as CCRDA that are established with an aim of promoting collaboration and support among civil Society Organisations. CHADET had an experience of leading and working as a member of other networks for implementing projects jointly. It led a network that was set-up for the implementation of a 'Multi-sectoral Project for the Prevention, Protection and Rehabilitation of Sexually Abused and exploited Children' in Addis Ketema Sub-City of Addis Ababa. Members of the network include national, Regional and International CSOs and relevant government agencies.
              </p>
              <p className="text-lg leading-relaxed">
                In partnership with other national and international NGOs, CHADET has also implemented other projects in different parts of the country. Among these projects are 'Children on the Move in the Northern Ethiopian Corridor' that was jointly implemented with four other local NGOs and 'Stemming Irregular Migration in Northern and Central Ethiopia' (SINCE) that was implemented in partnership with three other international NGOs, namely, <a href="https://www.peopleinneed.net" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-800 underline font-semibold">People In Need (PIN)</a>, <a href="https://www.concern.net" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-800 underline font-semibold">Concern Worldwide</a> and <a href="https://www.volint.it" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-800 underline font-semibold">Volontariato Internazionale Per Lo Sviluppo (VIS)</a>. CHADET has also implemented a project for Better Migration Management in collaboration with Emanual Development Association (EDA), Live Addis and Addis Ababa Women Association.
              </p>
            </div>

            {/* Child Rights Advocacy Network (ECRAN) */}
            <div id="ecran" className="scroll-mt-20">
              <h2 className="text-3xl font-bold text-green-700 mb-4 border-b-2 border-green-200 pb-2">
                Child Rights Advocacy Network (ECRAN)
              </h2>
              <p className="text-lg leading-relaxed mb-4">
                Having realized the complex and diverse nature of the causes of children's vulnerabilities, which are embedded in structural systems of the country as well as international economic, social, and political orders that require a multi-faceted effort by different stakeholders, CHADET has recently initiated the establishment of the Ethiopian Child Rights Advocacy Network (ECRAN). About fifteen CSOs have already joined the network. In the course of the establishment of the network, CHADET obtained technical support from The Eastern Africa Child Rights Network (EACRN), Save the Children and Plan International. The network is in. the process of registration with the Authority for Civil Society Organisations (ACSO) of The Federal Democratic Republic of Ethiopia.
              </p>
              <p className="text-lg leading-relaxed">
                The first consultative and founding meeting of The Ethiopian Child Rights Advocacy Network (ECRAN) was conducted between November 13-14,2023 in Addis Ababa. The meeting was accompanied by a consultative workshop on stakeholders' engagement in the creation of an enabling environment for local civil society organizations that are engaged in the promotion and protection of the rights of children in Ethiopia.
              </p>
            </div>

            {/* Public Education */}
            <div id="public-education" className="scroll-mt-20">
              <h2 className="text-3xl font-bold text-green-700 mb-4 border-b-2 border-green-200 pb-2">
                Public Education
              </h2>
              <p className="text-lg leading-relaxed mb-4">
                CHADET undertakes mass awareness raising activities on pertinent issues that affect the lives of children, young people and marginalised communities. It deploys its own <a href="#music-drama" className="text-green-600 hover:text-green-800 underline font-semibold">music/drama team</a> and a <a href="#mobile-unit" className="text-green-600 hover:text-green-800 underline font-semibold">mobile unit</a> to convey educational messages to a wider audience.
              </p>
            </div>

            {/* Music and Drama */}
            <div id="music-drama" className="scroll-mt-20">
              <h2 className="text-3xl font-bold text-green-700 mb-4 border-b-2 border-green-200 pb-2">
                Music and Drama
              </h2>
              <p className="text-lg leading-relaxed">
                CHADET uses music and drama to convey useful messages to the general public and targeted audiences aimed at overcoming harmful social norms and practices around children's rights, gender, disability and protection/safeguarding of children and adults at risk.
              </p>
            </div>

            {/* Mobile Unit */}
            <div id="mobile-unit" className="scroll-mt-20">
              <h2 className="text-3xl font-bold text-green-700 mb-4 border-b-2 border-green-200 pb-2">
                Mobile Unit
              </h2>
              <p className="text-lg leading-relaxed">
                The unit is made up of a truck with a convertible stage mounted on its back and could be taken to different locations both in urban and rural areas. The team adopts a 'Forum Drama' approach where the audience could also participate in the discussions that take place following the performance of the drama. Hence, the shows are participatory in nature and attempt to encourage audiences to engage in dialogue towards bringing about changes among their respective communities depending on the issue presented during the show. <span className="text-green-600 font-semibold">See photos</span>
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="mt-12 pt-8 border-t border-green-200">
            <h3 className="text-xl font-semibold text-green-700 mb-4">Quick Navigation</h3>
            <div className="flex flex-wrap gap-4">
              <a href="#research" className="px-4 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors">
                Research
              </a>
              <a href="#networking" className="px-4 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors">
                Networking
              </a>
              <a href="#networks" className="px-4 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors">
                Networks
              </a>
              <a href="#ecran" className="px-4 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors">
                ECRAN
              </a>
              <a href="#public-education" className="px-4 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors">
                Public Education
              </a>
              <a href="#music-drama" className="px-4 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors">
                Music & Drama
              </a>
              <a href="#mobile-unit" className="px-4 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors">
                Mobile Unit
              </a>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link href="/" className="inline-block px-6 py-3 rounded-full border-2 border-green-500 text-green-600 font-semibold hover:bg-green-50 transition">
              Back to Home
            </Link>
          </div>
        </div>
      </motion.section>
    );
  }

  // If it's the capacity-development page, show the detailed content
  if (slug === 'capacity-development') {
    return (
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen bg-white px-4 pt-32 pb-16 flex flex-col items-center"
      >
        <GridBG />
        
        {/* Breadcrumb */}
        <nav className="w-full max-w-4xl mb-8 text-sm text-gray-500" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2">
            <li>
              <Link href="/" className="hover:underline text-green-600">Home</Link>
              <span className="mx-2">/</span>
            </li>
            <li className="text-gray-700 font-semibold">Capacity Development</li>
          </ol>
        </nav>

        <div className="w-full max-w-4xl bg-white border border-green-100 rounded-2xl shadow-lg p-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-green-600 mb-8 text-center">Capacity Development</h1>
          
          <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
            {/* Main Overview */}
            <div>
              <p className="text-lg leading-relaxed">
                CHADET provides training and support for its local stakeholders. This is aimed at building their capacities and encouraging them to gain confidence to sustain project activities and take on new initiatives in developing community-led projects to find lasting solutions to local problems.
              </p>
              
              {/* Read More Button */}
              <div className="mt-6 text-center">
                <button
                  onClick={() => {
                    const readMoreSection = document.getElementById('capacity-read-more-section');
                    const readMoreButton = document.getElementById('capacity-read-more-button');
                    if (readMoreSection && readMoreButton) {
                      if (readMoreSection.style.display === 'none' || readMoreSection.style.display === '') {
                        readMoreSection.style.display = 'block';
                        readMoreButton.textContent = 'Show Less';
                      } else {
                        readMoreSection.style.display = 'none';
                        readMoreButton.textContent = 'Read More';
                      }
                    }
                  }}
                  id="capacity-read-more-button"
                  className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Read More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>

              {/* Read More Section */}
              <div id="capacity-read-more-section" className="mt-8 p-6 bg-green-50 rounded-lg" style={{ display: 'none' }}>
                <p className="text-lg leading-relaxed">
                  CHADET believes that building capacities of its local stakeholders will benefit communities in ensuring the sustainability of key activities even beyond the life of the project. In this regard, it provides <a href="#delta" className="text-green-600 hover:text-green-800 underline font-semibold">DELTA</a> training for development workers, field staffs and influential community leaders. It also undertakes capacity strengthening activities for grassroot level Community-Based Organisations (CBOs) such as <a href="#idirs" className="text-green-600 hover:text-green-800 underline font-semibold">Idirs</a> and <a href="#cccs" className="text-green-600 hover:text-green-800 underline font-semibold">Community Care coalitions (CCCs)</a>. Moreover, it provides support for schools to undertake <a href="#igas" className="text-green-600 hover:text-green-800 underline font-semibold">Income Generation Activities (IGAs)</a> such that they would be able to support vulnerable children who are not obtaining direct support from CHADET. The income they generate through the IGA scheme is used to cover costs related to scholastic materials and school uniforms.
                </p>
              </div>
            </div>

            {/* DELTA */}
            <div id="delta" className="scroll-mt-20">
              <h2 className="text-3xl font-bold text-green-700 mb-4 border-b-2 border-green-200 pb-2">
                DELTA
              </h2>
              <p className="text-lg leading-relaxed">
                DELTA is an acronym that stands for Development Education and Leadership Teams in Action. This training is mainly aimed at building capacities of development workers and community leaders through introducing contemporary concepts and practices in social development in general and community development in particular. Furthermore, the training contributes to raise the levels of awareness of development actors on issues of social concern in society through stimulating a culture of critical thinking and enhancing skills necessary to facilitate social transformation.
              </p>
            </div>

            {/* Idirs */}
            <div id="idirs" className="scroll-mt-20">
              <h2 className="text-3xl font-bold text-green-700 mb-4 border-b-2 border-green-200 pb-2">
                Idirs
              </h2>
              <p className="text-lg leading-relaxed">
                Idirs are voluntary associations that are formed by communities who are often residing in the same geographical locations. They have historically evolved along the growth of population living in urban areas with relationships with their relatives and members of families back home is becoming lose in due course of time. Hence, Idirs were basically established to facilitate funeral services for their members. With the advent of the AIDS pandemic, Idirs became involved in the provision of support and services for persons and families affected by AIDS and also in undertaking development activities in communities. CHADET has been working closely with Idirs and assisted them to strengthen their institutional capacities such that they could support children and engage in facilitating and sustaining development programs that were introduced by CHADET. Some Idirs have been able to provide support for thousands of children to help them continue their education to the level of higher education.
              </p>
            </div>

            {/* Community Care Coalitions */}
            <div id="cccs" className="scroll-mt-20">
              <h2 className="text-3xl font-bold text-green-700 mb-4 border-b-2 border-green-200 pb-2">
                Community Care Coalitions (CCCs)
              </h2>
              <p className="text-lg leading-relaxed">
                Community Care Coalitions (CCCs) are voluntary associations that are organised to resolve social problems that are affecting children, person with disabilities and other vulnerable groups at kebele level through mobilizing resources from the community and by working very closely with civil society Organizations. CCCs has been established and became operational in the Amhara and other regions of the country.
              </p>
            </div>

            {/* Income Generation Activities */}
            <div id="igas" className="scroll-mt-20">
              <h2 className="text-3xl font-bold text-green-700 mb-4 border-b-2 border-green-200 pb-2">
                Income Generation Activities (IGAs)
              </h2>
              <p className="text-lg leading-relaxed">
                CHADET assisted Idirs and schools to set-up shops, communal showers, toilets, etc. to use as a means to generate income and to be able to sustain some aspects of the projects that phase out in due course.
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="mt-12 pt-8 border-t border-green-200">
            <h3 className="text-xl font-semibold text-green-700 mb-4">Quick Navigation</h3>
            <div className="flex flex-wrap gap-4">
              <a href="#delta" className="px-4 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors">
                DELTA
              </a>
              <a href="#idirs" className="px-4 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors">
                Idirs
              </a>
              <a href="#cccs" className="px-4 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors">
                Community Care Coalitions
              </a>
              <a href="#igas" className="px-4 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors">
                Income Generation Activities
              </a>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link href="/" className="inline-block px-6 py-3 rounded-full border-2 border-green-500 text-green-600 font-semibold hover:bg-green-50 transition">
              Back to Home
            </Link>
          </div>
        </div>
      </motion.section>
    );
  }

  // Default case for other slugs
  if (!pillar) {
    return (
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen bg-white px-4 py-16 flex flex-col items-center"
      >
        <GridBG />
        <div className="w-full max-w-2xl bg-white border border-green-100 rounded-2xl shadow-lg p-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-green-500 hover:text-green-800 mb-2 transition-colors duration-200">Page Not Found</h1>
          <div className="text-green-600 font-semibold text-lg mb-6">The requested page could not be found.</div>
          <Link href="/" className="inline-block px-6 py-3 rounded-full border-2 border-green-500 text-green-600 font-semibold hover:bg-green-50 transition">
            Back to Home
          </Link>
        </div>
      </motion.section>
    );
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-white px-4 py-16 flex flex-col items-center"
    >
      <GridBG />
      {/* Breadcrumb */}
      <nav className="w-full max-w-2xl mb-8 text-sm text-gray-500" aria-label="Breadcrumb">
        <ol className="flex items-center space-x-2">
          <li>
            <Link href="/" className="hover:underline text-green-600">Home</Link>
            <span className="mx-2">/</span>
          </li>
          <li className="text-gray-700 font-semibold truncate max-w-[120px]">{pillar.title}</li>
        </ol>
      </nav>

      <div className="w-full max-w-2xl bg-white border border-green-100 rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-green-500 hover:text-green-800 mb-2 transition-colors duration-200">{pillar.title}</h1>
        <div className="text-green-600 font-semibold text-lg mb-6">{pillar.description}</div>
        <div className="prose prose-lg text-gray-700 mb-8 whitespace-pre-line">
          {pillar.fullDescription}
        </div>
        <Link href="/" className="inline-block px-6 py-3 rounded-full border-2 border-green-500 text-green-600 font-semibold hover:bg-green-50 transition">
          Back to Home
        </Link>
      </div>
    </motion.section>
  );
} 