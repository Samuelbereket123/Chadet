export interface AboutSection {
  slug: string;
  title: string;
  description?: string;
  list?: string[];
}

const aboutSections: AboutSection[] = [
  {
    slug: 'about-chadet',
    title: 'About CHADET',
    description: `CHADET is a charitable organisation registered in Ethiopia (Reg. no. 0234) that works for the protection and welfare of children found under difficult circumstances. The establishment of CHADET coincided with the period when the HIV/AIDS pandemic was on its highest peak in Ethiopia. Hence, most of the projects launched by the organization during that time focused on educating the community about protection and mitigating the impact of AIDS on children and families infected and affected by the epidemic. In this regard, CHADET was able to train and deploy peer educators who were conveying educational messages for children and young persons and home care providers who were supporting individuals and families on voluntary basis. CHADET launched its first project in one of the most congested parts of the city of Addis Ababa where there are large numbers of street connected and working children, migrants and children exposed to physical and sexual exploitation. The area, which is also known as ‘Merkato’, is the largest commercial centre of the city. Expanding its operations in the country, CHADET currently implements different projects in thirteen Woredas/districts of South Wollo and South Gondar Administrative Zones in Amhara Regional State as well as in Arsi and South West Shoa Zones in Oromiya Regional State. It also implements different projects in Addis Ababa. CHADET has shown remarkable progress in terms of enhancing its capacity and addressing more and more marginalized children in different parts of the country since the time it has began operation. It has currently five field offices and three service delivery centers in the regional states and in Addis Ababa.`
  },
  {
    slug: 'vision',
    title: 'Our Vision',
    description: 'CHADET wants to see a society in which the needs of children are fulfilled.'
  },
  {
    slug: 'mission',
    title: 'Our Mission',
    description: 'CHADET exists to inspire effective partnerships through ensuring provision of quality services for vulnerable children.'
  },
  {
    slug: 'core-values',
    title: 'Our Core Values',
    list: [
      'Child focused: whatever you do, work at it with all your heart, as working for the children we are serving.',
      'Dignity: Carry your duties with all and equal respect for people you are working with and for.',
      'Integrity: Conduct yourself in a manner worthy of best working atmosphere.',
      'Accountability and transparency: Use the resources to the best efficient level that ensures the organizational exercise of equity and equality.',
      'Equity/equality: Carry your duties in a manner worth of fairness and justice.'
    ]
  },
  {
    slug: 'governance',
    title: 'Governance',
    description: `CHADET has an administrative structure that guides the operation of the organization. It has a governing structure composed of two major organs, namely, the General Assembly and the Board of Directors. The General Assembly is the highest administrative organ of the organization and is responsible for the issuance and modification of the association’s articles of association, approval annual plans and budget, performance reports, financial statements and audit report. The Board of Directors, on the other hand, is elected by the General Assembly and is responsible for ensuring that decisions made by the general assembly and the board is implemented by the secretariat. It provides close follow up concerning the performance of the management of the organization. The Secretariat represents the Head office of CHADET. Led by a full-time Executive Director that is directly answerable to the Board of Directors, the secretariat serves as a coordination office for the planning, implementing and monitoring of project activities.`
  },
  {
    slug: 'policies-guidelines',
    title: 'Organizational Policies and Guidelines',
    list: [
      'Human resources and management policy: Provides clear guidelines for managing the organization’s human resource functions and systems to attract, develop and retain staff. Includes principles such as strategic HR management, equal opportunity, continuous learning, a safe working environment, alignment with strategic objectives, and recognition of contributions.',
      'Child Safeguarding Policy: Ensures all children are assured of the safest possible environment and organizational practices which promote their protection. Encourages staff to treat children with concern and respect, empowers children, and fosters an open, reflective environment.',
      'Children and Young Person’s Participation Guideline: Promotes children and young people’s participation and inclusion in project planning, implementation, and evaluation. Ensures inclusion, ethical values, and dialogue between staff, adults, and children.',
      'Environmental policy: Ensures CHADET’s operations do not negatively impact the environment. Promotes sustainability, compliance with legislation, pollution prevention, waste minimization, and climate change mitigation.',
      'Financial management: Provides effective budgeting, recording, reporting, and control procedures in line with international standards and donor/government requirements. Annual financial statements are audited by an external auditor.'
    ]
  }
];

export default aboutSections; 