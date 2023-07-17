const categories = [
  {
    name: 'Policy, Laws, and Governance',
    isActive: true,
    indicators: [
      {
        name: 'An institutional development plan of the national medicines regulatory authority based on the results of the GBT exists',
        description:
          'The Global Benchmarking Tool (GBT) represents the primary means by which the World Health Organization (WHO) objectively evaluates regulatory systems, as mandated by WHA Resolution 67.20 on Regulatory System Strengthening for medical products. The tool and benchmarking methodology enables WHO and regulatory authorities to:11\n\t·       identify strengths and areas for improvement;\n\t·       facilitate the formulation of an institutional development plan (IDP) to build upon strengths and address the identified gaps;\n\t·       prioritize IDP interventions; and\n\t·       monitor progress and achievements.',
        code: 'PLG01',
      },
      {
        name: 'A progress report on the institutional development of the national medicines regulatory authority published',
        description:
          'The Global Benchmarking Tool (GBT) represents the primary means by which the World Health Organization (WHO) objectively evaluates regulatory systems, as mandated by WHA Resolution 67.20 on Regulatory System Strengthening for medical products. The tool and benchmarking methodology enables WHO and regulatory authorities to:11\n\t·       identify strengths and areas for improvement;\n\t·       facilitate the formulation of an institutional development plan (IDP) to build upon strengths and address the identified gaps;\n\t·       prioritize IDP interventions; and\n\t·       monitor progress and achievements.\n\tCountries should report progress towards the goals and system improvements documented in the institutional development plan.',
        code: 'PLG02',
      },
      {
        name: 'Submission of national data to the Global Antimicrobial Resistance Surveillance System (GLASS)',
        description:
          'Launched in October 2015, the Global Antimicrobial Resistance Surveillance System (GLASS) is being developed to support the global action plan on antimicrobial resistance. The aim is to support global surveillance and research in order to strengthen the evidence base on antimicrobial resistance (AMR) and help informing decision making and drive national, regional, and global actions.',
        code: 'PLG03',
      },
      {
        name: 'Updated National Action Plan on the containment of antimicrobial resistance',
        description:
          'In May 2015, the Sixty-eight World Health Assembly adopted the global action plan on antimicrobial resistance. The goal of the global action plan is to ensure, for as long as possible, continuity of successful treatment and prevention of infectious diseases with effective and safe medicines that are quality-assured, used in a responsible way, and accessible to all who need them. The World Health Assembly also urged all Member States to develop and have in place by 2017, national action plans on antimicrobial resistance that are aligned with the objectives of the global action plan.',
        code: 'PLG04',
      },
      {
        name: '# of annual reports submitted to the INCB in last five years',
        description:
          'The International Narcotics Control Board (INCB) is the independent and quasi-judicial monitoring body for the implementation of the United Nations international drug control conventions. The drug control conventions established a control regime that would ensure the availability of controlled substances for medical and scientific production while preventing their illicit production, trafficking and abuse. An essential component of this regime is a system under which governments are requested to estimate the quantities of controlled substances required for legitimate purposes and to limit the use of and trade in such substances to within those estimates. The ability of the INCB to monitor the functioning of the drug control mechanisms established by the conventions relies, in part, on governments providing it with estimated quantities of controlled substances required for legitimate purposes in their countries.',
        code: 'PLG05',
      },
      {
        name: 'Pharmaceutical System Transparency and Accountability (PSTA) assessment score - (survey data)',
        description:
          'WHO has developed the PSTA assessment tool to assist countries with the assessment of the public availability of key documentation that facilitates accountability of the pharmaceutical system. This document is intended for policy makers and concerned stakeholders with an interest in improving governance in the pharmaceutical system as well as for those who will carry out an assessment.\n\tThe assessment results are intended to be used to:\n\t·       Identify strengths and weaknesses with regards to transparency of pharmaceutical information\n\t·       Inform priority setting\n\t·       Develop targeted policy interventions\n\t·       Periodically to monitor progress\n\tThe main focus of the assessment is on transparency and accountability in the public sector. Other sectors are included in the assessment when relevant for accountability.',
        code: 'PLG06',
      },
      {
        name: 'Number of PSTA assessments within the last five years - (survey data)',
        description:
          'WHO has developed the PSTA assessment tool to assist countries with the assessment of the public availability of key documentation that facilitates accountability of the pharmaceutical system. This document is intended for policy makers and concerned stakeholders with an interest in improving governance in the pharmaceutical system as well as for those who will carry out an assessment.\n\tThe assessment results are intended to be used to:\n\t·       Identify strengths and weaknesses with regards to transparency of pharmaceutical information\n\t·       Inform priority setting\n\t·       Develop targeted policy interventions\n\t·       Periodically to monitor progress\n\tThe main focus of the assessment is on transparency and accountability in the public sector. Other sectors are included in the assessment when relevant for accountability.',
        code: 'PLG07',
      },
    ],
  },
  {
    name: 'Financing',
    isActive: true,
    indicators: [
      {
        name: 'Per capita expenditure on pharmaceuticals',
        description:
          "Pharmaceutical expenditure includes spending on prescription medicines and self-medication, often referred to as over-the-counter products. For some countries, other medical non-durables such as syringes, bandages, etc. may be included in the total. It also includes pharmacists' remuneration when the latter is separate from the price of medicines. Pharmaceuticals consumed in hospitals are excluded (on average they account for around 15% of total pharmaceutical spending). Final expenditure on pharmaceuticals includes wholesale and retail margins and value-added tax. Final expenditure on pharmaceuticals includes wholesale and retail margins and value-added tax. Total pharmaceutical spending refers in most countries to “net” spending, i.e. adjusted for possible rebates payable by manufacturers, wholesalers or pharmacies. This indicator is measured as a share of total health spending, in USD per capita (using economy-wide PPPs) and as a share of GDP. The indicator should be calculated for the previous calendar year, or the latest year for which data are available.",
        code: 'F01',
      },
      {
        name: 'Population with household expenditures on health greater than 10% of total household expenditure or income',
        description:
          "The proportion of a country’s population that spends over 10% of their household income on health related expenses. Health expenditures are likely to expose households to financial hardship in particular when they exceed a pre-defined threshold of a household's ability to pay. When this happens they are characterized as being catastrophic. Within the SDG monitoring framework (SDG indicator 3.8.2), the proportion of the population facing catastrophic expenditures is measured as the population weighted average of the number of households with “large household expenditures on health” as a share of total household expenditure or income (household’s budget). Large is defined as health expenditures exceeding 10% of total household expenditure or income.",
        code: 'F02',
      },
      {
        name: 'Total expenditure on pharmaceuticals (% total expenditure on health)',
        description:
          "Pharmaceutical expenditure includes spending on prescription medicines and self-medication, often referred to as over-the-counter products. For some countries, other medical non-durables such as syringes, bandages, etc. may be included in the total. It also includes pharmacists' remuneration when the latter is separate from the price of medicines. Pharmaceuticals consumed in hospitals are excluded (on average they account for around 15% of total pharmaceutical spending). Final expenditure on pharmaceuticals includes wholesale and retail margins and value-added tax. Final expenditure on pharmaceuticals includes wholesale and retail margins and value-added tax. Total pharmaceutical spending refers in most countries to “net” spending, i.e. adjusted for possible rebates payable by manufacturers, wholesalers or pharmacies. This indicator is measured as a share of total health spending, in USD per capita (using economy-wide PPPs) and as a share of GDP. The indicator should be calculated for the previous calendar year, or the latest year for which data are available.",
        code: 'F03',
      },
      {
        name: 'Median (consumer) drug price ratio for tracer medicines in the public, private, and mission sectors',
        description:
          'Consumer price ratios are calculated as the ratio between median unit prices (e.g. price per tablet or therapeutic unit) and Management Sciences for Health (MSH) median international reference prices for that exact product for the year preceding the survey. The public sector consists of any government program providing pharmaceutical products. This includes any health facilities or programs funded by the Ministry of Health (or subordinate health program) budgets, or programs/agencies receiving funding through national or publicly-funded social insurance schemes, or funding from any level of government - from national to regional to local. For the purpose of this indicator, the private sector consists of any facility dispensing, selling, or providing pharmaceutical products to consumers without government funding. This may include private for-profit businesses, facilities affiliated with private insurance schemes, employer-based health facilities etc. Mission sector: This consists of non-governmental organizations, charities, and/or faith-based agencies. Generic: A pharmaceutical product usually intended to be interchangeable with the originator brand product, manufactured without a license from the originator manufacturer and marketed after the expiry of patent or other exclusivity rights. If the country collects their own data on pricing, please obtain a copy. If the country relies on WHO/HAI pricing surveys for this information, the data are disaggregated using the following categories: Originator brand: Generally the product that was first authorized worldwide for marketing (normally as a patented product) on the basis of the documentation of its efficacy, safety, and quality, according to requirements at the time of authorization: e.g. Valium. The originator product always has a brand name; this name may, however, vary between countries. tMost sold generic: The generic with the highest volume of sales at the sample site. Lowest price generic: The lowest-priced generic product is the one with the lowest unit price or price per pill, tablet, dose, or ml. If there is only one generically equivalent product that corresponds to each originator brand on the tracer list, it is the lowest-priced generic available at that outlet. This is evaluated at each sample outlet. Public sector procurement prices: Prices paid by the public sector to purchase the pharmaceutical product from the manufacturer or wholesaler. Public sector patient prices: Prices paid by consumers in public sector facilities. This includes the price for the medicine only. Price analysis is not performed if medicines are provided for a fixed fee or if dispensing or appointment fees are applied to the medicine, but the medicine itself is provided free of charge. Private sector patient prices: Prices paid by consumers in private sector facilities.\n\t\n\tMission sector patient prices: Prices paid by consumers at mission sector facilities.',
        code: 'F04',
      },
      {
        name: 'Out-of-pocket expenditure out of total pharmaceutical expenditure',
        description:
          'Total pharmaceutical expenditure includes any money spent in the country (from any source) to finance or purchase pharmaceutical products. Out-of-pocket expenditure includes any payment made by consumers for pharmaceutical products. This includes payments for the direct sale of medicines, copayments under insurance schemes or for partially subsidized medicines, or payments for pharmaceutical related fees, such as dispensing fees. The indicator should be calculated for the previous calendar year, or the latest year for which data are available.',
        code: 'F05',
      },
      {
        name: 'At least one national health accounts exercise including pharmaceuticals completed in the past five years.',
        description:
          'National Health Accounts (NHA) exercise is an internationally recognized methodology used to track total expenditures in a health system for a specified period of time. Data on medicines expenditures can be obtained from National Health Accounts (NHA), which is a systematic, comprehensive, and consistent monitoring of resource flows in a country’s health system for a given period. The NHA is designed to capture the full range of information contained in resource flows and reflects the main functions of health care financing, such as resource mobilization and allocation, pooling and insurance, purchasing of care, and the distribution of benefits.',
        code: 'F06',
      },
    ],
  },
  {
    name: 'Outcomes and Attributes',
    isActive: true,
    indicators: [
      {
        name: 'MedMon outputs on Affordability and Availablity of pharmaceutical products',
        description: '',
        code: 'OA02',
      },
      {
        name: 'Proportion of health facilities that have a core set of relevant essential medicines available and affordable on a sustainable basis. (SDG indicator 3.b.3)',
        description: '',
        code: 'OA03',
      },
      {
        name: 'Proportion of population with large household expenditure on health as a share of total household expenditure or income. (SDG indicator 3.8.2)',
        description: '',
        code: 'OA04',
      },
      {
        name: 'Coverage of essential health services. (SDG indicator 3.8.1)',
        description: '',
        code: 'OA05',
      },
    ],
  },
  {
    name: 'Innovation, Research and Development, Manufacturing, and Trade',
    isActive: true,
    indicators: [
      {
        name: 'Pharmaceutical innovation goals identified and documented to address unmet or inadequately met public health needs',
        description:
          'In addition to being stated and/or described as pharmaceutical innovation goals, these must genuinely improve consumer welfare by addressing unmet priority public health needs. Pharmaceutical innovation may be product-related, pertain to service delivery, better disseminate information to drive demand, etc.',
        code: 'IRDMT01',
      },
      {
        name: 'Are medicines subject to import tariffs? If so, what are the tariff amounts applied? ',
        description:
          'Import tariffs consist of customs duties, or other import charges, which are payable on goods of a particular type when they enter the economic territory. For the purpose of this indicator, subject to means that import tariffs are applied to medicines.',
        code: 'IRDMT02',
      },
      {
        name: 'Have any of the following TRIPS flexibilities been utilized to date: compulsory licensing provisions, government use, parallel importation provisions, the Bolar exception (10 year time frame)?',
        description:
          'The provisions of the WTO Agreement on Trade Related Aspects of Intellectual Property Rights (TRIPS) are binding on all WTO Member States. TRIPS sets minimum standards of intellectual property (IP) protection that all WTO Member countries are required to provide. For instance, the TRIPS Agreement states that all patents shall be available for at least 20 years from the filing date, whereas before TRIPS the patent term varied greatly among countries (7, 10, 17 or 20 years). All WTO Members have to incorporate this 20-year patent term in their own patent laws. Least developed countries have until 2031 to become fully TRIPS compliant. Compulsory licensing: A judicial or administrative authority grants a license, without the consent of the rights holder, to a third party, to manufacture a product still under patent. Government use provisions enable an administrative authority to grant a license to a third party, without the consent of the rights holder, to address identified public health needs. Parallel importation is importation, without the consent of the rights -holder, of a patented product marketed in another country either by the patent holder or with the patent-holder’s consent. Parallel importation enables promotion of competition for the patented product by allowing importation of equivalent patented products sold at lower prices in other countries.\n\t\n\tA Bolar exception is an early working provision whereby generic pharmaceutical manufacturers the use of a patented product for the purposes of preparing an application for marketing approval of a follow-on product is considered non-infringing.',
        code: 'IRDMT03',
      },
    ],
  },
  {
    name: 'Human Resources',
    isActive: true,
    indicators: [
      {
        name: 'Existence of governing bodies tasked with accreditation of pre- and in-service pharmacy training programs',
        description:
          'Accreditation requires a review and subsequent granting of formal recognition after meeting certain agreed criteria by the country’s capacity building or learning institution overseeing professional development or education Relevant governing body should be defined by individual countries. May include ministerial CPD desk, higher learning accreditation boards, universities and colleges offering specific health related training courses\n\tPre-service training programs provide instruction to pharmacy and health workers prior to graduation from school, while post-service is defined as training that occurs after graduation.',
        code: 'HR01',
      },
      {
        name: 'Population per licensed pharmacist, pharmacy technician, or pharmacy assistant',
        description:
          'Employment in the public sector means that the facilities of employment and the positions are financed through government funding.\n\t\n\tPrivate sector employees are employed by any facilities outside of the public sector. For purposes of this indicator, pharmacist is defined as a person holding a university degree in pharmacy, and pharmacy technician is defined as a person who has completed formal course work leading to a certificate or diploma in pharmacy technology. Only these personnel who work full or part-time in the health care system which is surveyed should be counted.',
        code: 'HR02',
      },
    ],
  },
  {
    name: 'Information',
    isActive: true,
    indicators: [
      {
        name: 'Existence of a policy or strategy that sets standards for collection and management of pharmaceutical information',
        description:
          'Existence of national policy or strategy that defines clear standards and guidelines for: 1) data collection, 2) data analysis, and 3) reporting procedures to be performed with pharmaceutical data from different sources. The document also defines indicators for data management. Data management is the identification of data sources, collection of data, data analysis, generation of reports, and dissemination of data. Pharmaceutical system indicators typically collect data on product availability, consumption, quality, and movement through the system. This should be combined with patient and provider data, including information on pharmaceutical personnel, prescribing and dispensing, consumption of pharmaceuticals, and medicine safety. It is possible that the standards and indicators assessed in this indicator may be found in different documents, rather than in one document. For the purpose of this indicator, as long as each component is located within any policy or strategy document, mark “yes” for the appropriate assessment question.',
        code: 'IM01',
      },
      {
        name: 'Data on safety, efficacy, and cost effectiveness of medicines available and used to inform essential medicines selection',
        description:
          'The information on safety and efficacy is critical to make decisions on essential medicines selection. Cost effectiveness should be taken into consideration when choosing between therapeutic alternatives.',
        code: 'IM02',
      },
    ],
  },
  {
    name: 'Pharmaceutical Products and Services',
    isActive: true,
    indicators: [
      {
        name: 'Existence of a national essential medicines list published within the past five years',
        description:
          'This indicator monitors existence of an up-to-date Essential Medicines List (EML), it is intended for use with or in place of indicator PS02.\n\tIf there is no reimbursement list for the public sector in the country, indicator PS01 pertaining to the EML should be used. If the country has both an EML and a separate list for reimbursement of pharmaceutical products, use both PS01 and PS02.',
        code: 'PS01',
      },
      {
        name: 'Test35',
        description: '',
        code: 'PS011',
      },
      {
        name: 'Test34',
        description: '',
        code: 'PS013',
      },
      {
        name: 'Existence of a reimbursement list published within the past two years',
        description:
          'This indicator monitors existence of an up-to-date reimbursement list for pharmaceutical products in the public sector.\n\tIt is intended for use with or in place of indicator PS01. If there is no reimbursement list for the public sector in the country, indicator PS01 pertaining to the EML should be used. If the country has both an EML and a separate list for reimbursement of pharmaceutical products, use both PS01 and PS02.',
        code: 'PS02',
      },
      {
        name: 'PS Test',
        description: '',
        code: 'PS021',
      },
      {
        name: '% of median international price paid for a set of tracer medicines that was part of the last regular MOH procurement',
        description:
          'This indicator tracks the potential overspending/savings on tracer medicines. Median international price is the median free on board (FOB) price from a set of international suppliers, adjusted to reflect estimated cost, insurance, and freight (CIF) prices. One source of price information is the MSH International Drug Price Indicator Guide. The last regular procurement price refers to the CIF price paid during the last regular MOH procurement.',
        code: 'PS03',
      },
      {
        name: 'Mean % availability across a basket of medicines',
        description:
          'The mean availability of a basket of medicines is the % of availability of each preselected product that is available at the time of the facility visit divided by the total number of preselected products on the list.',
        code: 'PS04',
      },
      {
        name: 'Product losses by value due to expired medicines or damage or theft per value received (%)',
        description:
          'During storage and distribution of medicines, products may not reach their destination for different reasons: loss during transport, expiry, theft, etc. This indicator measures the % of products by value that are not available out of the total value of products procured',
        code: 'PS05',
      },
      {
        name: '% Generic medicines out of total market volume',
        description:
          'Generic: A pharmaceutical product usually intended to be interchangeable with the originator brand product, manufactured without a license from the originator manufacturer and marketed after the expiry of patent or other exclusivity rights. Total market volume: The total number of units (doses, tablets, cases, boxes) dispensed in the country. This can be restricted to the public sector only, or can be disaggregated by procuring entity – donors, government, non-profit/non-governmental, private sector etc.',
        code: 'PS06',
      },
      {
        name: 'Defined daily dose (DDD) for antimicrobials (per 1000 population) - (Suvery data)',
        description:
          'Drug consumption can be expressed in cost, number of units, number of prescriptions or by the physical quantity of drugs. However these variables can vary between regions and countries over time. This limits comparisons of drug consumption at an international level. To address this, a technical unit of measurement, the Defined Daily Dose (DDD) was created.\n\t\n\t_ftn1\n\t\n\tAntimicrobials: An antimicrobial is an agent that kills microorganisms or stops their growth. These are included in ATC code group J.',
        code: 'PS07',
      },
      {
        name: '% Medicines prescribed from an EML or reimbursement list',
        description:
          'This indicator is based on a review of prescriptions within the country. It involves matching the prescription with a product on the essential medicines list or the relevant reimbursement list referenced in indicator PS02',
        code: 'PS08',
      },
      {
        name: '% Medicines prescribed as generics',
        description:
          'Generic: A pharmaceutical product usually intended to be interchangeable with the originator brand product, manufactured without a license from the originator manufacturer and marketed after the expiry of patent or other exclusivity rights.\n\t\n\t_ftn1\n\t\n\tThis indicator is based on a review of prescriptions within the country. It involves matching the prescription with an international non-proprietary name (INN) or generic product name',
        code: 'PS09',
      },
      {
        name: '% Antibiotics prescribed in outpatient settings',
        description:
          'Antimicrobials: An antimicrobial is an agent that kills microorganisms or stops their growth. These are included in ATC code group J.\n\tAn antibiotic is an antimicrobial agent that helps stop infections caused by bacteria. They do this by killing the bacteria or by keeping them from copying themselves or reproducing. Antibiotics are included in ATC code group J01. An outpatient setting is a health care facility where patients are treated without being admitted to the facility for extended observation, stay, or treatment. This indicator is based on a review of prescriptions within the country. It involves identifying the number of antimicrobials included in each reviewed prescription, compared to the total number of medicines prescribed.',
        code: 'PS10',
      },
      {
        name: '% Population with unmet medicine needs',
        description: '_ftn1',
        code: 'PS11',
      },
      {
        name: 'PSS Test',
        description: '',
        code: 'PS25',
      },
    ],
  },
  {
    name: 'Regulatory Systems',
    isActive: true,
    indicators: [
      {
        name: '% of manufacturing facilities inspected each year',
        description:
          'Manufacturing facilities should be inspected to ensure the safety and quality of pharmaceuticals produced. A manufacturing facility is defined as any facility that is licensed and registered in the country to manufacture pharmaceuticals. The indicator should be calculated for the previous calendar year, or the latest year for which data are available',
        code: 'RS01',
      },
      {
        name: '% of distribution facilities inspected each year',
        description:
          'Distribution facilities should be inspected to ensure the safety and quality of pharmaceuticals in the supply chain. Distribution facilities are defined as facilities licensed and registered to distribute pharmaceuticals within the country. This includes both private distributors or wholesalers, and public distributions agencies and warehouses. The indicator should be calculated for the previous calendar year, or the latest year for which data are available',
        code: 'RS02',
      },
      {
        name: '% of dispensing facilities inspected each year',
        description:
          'Dispensing facilities are defined as facilities licensed and registered to dispense pharmaceuticals within the country. The indicator should be calculated for the previous calendar year, or the latest year for which data are available',
        code: 'RS03',
      },
      {
        name: 'Average number of days for decision making on a medicine application for registration',
        description:
          'Decision making on an application for registration of a pharmaceutical product can include approvals and rejections. An approval grants market authorization and registration to the entity responsible for the new medicine. A rejection prohibits market authorization and registration. A decision date is the date on which the decision was communicated formally to the applicant. Number of days are defined as the number of working days from the submission of the application until formal notification of decision, unless otherwise specified. National SOPs should specify whether or not holidays are included in the timeframe. Number of days excludes those in which the application is on hold while clarification is sought from the applicant. A new/novel drug or a New Molecular Entity (NME) is an active compound, complex, molecule that previously has not been approved by the regulatory authority in the country. A generic drug is generally defined as a drug product that is equivalent to a reference product in active pharmaceutical ingredient, dosage form, strength, route of administration, quality and performance characteristics and intended use.\n\t\n\tMany countries have different application processes for “new” and “generic” pharmaceutical products.',
        code: 'RS04',
      },
      {
        name: '% of medicines on the EML that have at least one registered product available.',
        description:
          'Registered products are pharmaceutical products that have been assessed for safety and efficacy, among other criteria, by the National Medicines Regulatory Authority (or equivalent body) and have been granted approval for sale or distribution in the country. Registration should be determined by molecule or INN, dose and form of administration. Products may be registered more than once based on formulation, so it is important to exclude duplicate registered products in both the numerator and denominator. An Essential Medicines List (EML) is a published list of priority medicines that satisfy the priority health care needs of the population.',
        code: 'RS05',
      },
      {
        name: '% of recorded adverse event reports that are assessed for causality',
        description:
          'An adverse event is defined as a medical occurrence temporally associated with the use of a pharmaceutical product, but not necessarily causally related. A causality assessment is meant to determine whether, and to what extent, a pharmaceutical is associated with an adverse event. Causality assessments should be part of pharmacovigilance systems to monitor pharmaceutical safety and quality. Criteria for assessing causality should be determined according to one of the established systems (algorithms) – Ex. the WHO/UMC system or the Naranjo system. The indicator should be calculated for the previous calendar year, or the latest year for which data are available (please specify)',
        code: 'RS06',
      },
      {
        name: '% of samples tested that failed quality control testing',
        description:
          'The indicator is based on randomly collected samples; if quality control is done only on drugs under suspicion, it should be clearly indicated in the final reports, as the percentage obtained will certainly be higher. The indicator should be calculated for the previous calendar year, or the latest year for which data are available (please specify)',
        code: 'RS07',
      },
    ],
  },
];

export default categories;