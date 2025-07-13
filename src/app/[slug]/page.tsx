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

  // For other pillars, show the default content
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