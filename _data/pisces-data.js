export const data = [
  {
    title: `What is PISCES?`,
    video: `https://www.youtube.com/watch?v=y06m8g3ikic`,
    text: `The Public Infrastructure Security Cyber Education System (PISCES) provides qualified students with curricula and supervised experiences to act as entry-level cyber analysts. Students analyze streaming data for small communities or municipalities who may otherwise not be able to obtain cybersecurity to the extent needed. Through PISCES, a reliable high-quality pipeline is being developed to address the shortage of cyber professionals ready for the workforce.`
  },
  {
    title: `Student Testimonials`,
    video: `https://www.youtube.com/watch?v=quPpkxkBJME`,
    text: ``
  },
  {
    title: `Why is PISCES needed?`,
    text: `PISCES trains a future workforce of entry-level cyber analysts to meet the ever-growing demand for businesses to adapt to and protect against dynamic cyber threats. Municipalities and communities facing similar vulnerabilities need these services but in many cases are unable to secure the resources to meet their needs. For municipalities, collaboration with universities and students helps them meet these needs and remain protected.`
  },
  {
    title: `What are the students' key capabilities and for what types of jobs are they prepared?`,
    text: `Students will be prepared to work with and process large volumes of live data. They have worked with network flow data and developed alerts from an embedded intrusion detection system. These students are capable of monitoring real-time, live data streams in abundance and detect irregularities from expected data, pinpoint those irregularities to determine the validity in an attack or malicious actor, and through this screening, they report credible threats. With these qualifications and experiences, these students can work in diverse industries and sectors.`
  },
  {
    title: `What are the incentives for getting involved?`,
    text: `Through their involvement in this program, students have their information distributed to top-tier companies who seek to hire. This symbiotic relationship serves a dual purpose: Students gain an advantage in the job market upon graduation, companies gain access to valuable and well-trained new employees, and universities gain the benefit of name recognition, potentially higher employment statistics for alumni, and a strengthened academic program.`
  },
  {
    title: `How sustainable is PISCES and how will you maintain the program?`,
    text: `Volunteer efforts as well as support from the Department of Homeland Security have supported the establishment and operation of PISCES. As the program grows, a goal is to partner directly with hiring organizations (public and private) to meet funding and sustainability goals. PISCES has initiated a team to focus on this issue.`
  },
  {
    title: `What are you going to do with our data?`,
    text: `The data collected are limited to packet headers and alerts from an intrusion detection system embedded in the collector. This is metadata about how content is delivered but not the content itself (no email, health records, criminal justice data, financial transactions, or privacy information). Within the collector system, a Suricata intrusion detection system is updated daily with detection patterns. The monitoring stack itself is located at the Western Washington University Poulsbo Cyber Range and is both physically protected and monitored for security events just like any other PISCES customer.`
  },
  {
    title: `Do the communities have any insight into the data?`,
    text: `PISCES uses a community liaison to oversee tickets and conduct outreach to the data sharing partners to validate student findings. Additionally, notifications and alerts are sent to all the participating communities highlighting any suspicious activity the students observe.    `
  },
  {
    title: `What is the PISCES data retention policy?`,
    text: `Currently, the data is retained for 90 days in a first-in, first-out stack.`
  },
  {
    title: `Do any third parties have access to the data?`,
    text: `No.`
  },
  {
    title: `How is data collected from the network?`,
    text: `PISCES ships collectors with a network tap to avoid situations in which customers lack networking switches capable of spanning or mirroring ports. Deploying the collector with the tap causes an approximately 10-second network outage.`
  },
  {
    title: `Can a data sharing partner get access to the intrusion detection system services or alerts?`,
    text: `No, but if the data sharing partner has specific questions, students can be tasked with obtaining the necessary data.`
  },
  {
    title: `If the data sharing partner asked for a data retention policy to be instated, would you be amenable to adding that?`,
    text: `No. The PISCES monitoring stack is not the system of record for any data collected from customer networks, and PISCES cannot set retention schedules.`
  },
  {
    title: `What about public disclosure?`,
    text: `No. Since PISCES is not a data originator and the monitoring stack is not the system of record, we will not be responsive to public records requests and will direct any received requests back to the data sharing partner.`
  },
  {
    title: `Does the ELK stack include anything that would actively interfere with the data sharing partner’s infrastructure?`,
    text: `No. Data collection is passive and the monitoring stack itself is not located on the customer premise.`
  },
  {
    title: `How do we maintain security of the data?`,
    text: `
The monitoring stack housing customer metadata is protected by strong access control, which includes both technology (e.g., firewalls) and process (user provisioning and deprovisioning).
Each PISCES “chapter” (which may be an entire state) uses physical and virtual network isolation. 
The Cyber Range is also monitored by PISCES itself, along with an additional intrusion detection system for redundancy. Access is provided through VPN tunnels only. Dedicated OpenVPN and DNS servers are provisioned for each chapter. 
All services are authenticated against a LDAP server. Dedicated OpenLDAP servers are also provisioned for each state. 

Additionally, dedicated physical and virtual network isolation is established for each state via the firewall and cloud network virtualization. TLS is enabled on all services. The services are also protected by rotating TLS certificates via Let's Encrypt. All services run on stripped down and hardened Docker containers as non-privileged user processes. 

In addition to the protections listed above, the Elasticsearch product has built-in protections against data loss and corruption, including:
- Collectors connect and deliver metadata to the Cyber Range via a nested SSH tunnel.
- Communications are encrypted to, from, and within the Elasticsearch cluster with SSL/TLS.
- Role-based access control is established for Elasticsearch users.
- Elasticsearch nodes authenticate users as they join the cluster using SSL certificates.`
  },
  {
    title: `Who helps a new academic institution understand how to join and administer their part of the program?`,
    text: `PISCES International helps introduce new academic institutions to PISCES. This includes providing an overview of and answering questions about the program, curriculum, and  objectives and working with academic institutions to sign the memorandum of understanding. PISCES International also hosts an annual academic workshop for participating schools to share information and lessons learned.`
  },
  {
    title: `Who helps a new school figure out how to deliver the curriculum?`,
    text: `Western Washington University takes the lead with onboarding new schools. In the future, the program aims to establish a lead academic institution within a given state that PISCES will onboard and who will then onboard other academic institutions in the state.`
  },
  {
    title: `Are there standardized performance metrics (e.g., students taught, students passed) and, if so, how are they reported?`,
    text: `Yes, but within limits. Student privacy is protected by law so we can ask the professor how many students passed, but they do not have to answer. The basic metric used regarding students is the number of students who take and complete the course. Via qualitative feedback, we also elicit whether the students perceived value in and benefited from the course. In the future, we hope to garner positive data from the employers that PISCES students are more prepared for the workforce than those who do not participate in the program.`
  },
  {
    title: `How is the curriculum standardized and who determines what is best?`,
    text: `The PISCES program determines which knowledge areas must be mastered and that is also in line with the National Institute of Standards and Technology National Initiative for Cybersecurity Education framework. Instructor feedback is also collected and evaluated annually to identify areas of improvement and implement new ideas and techniques.    `
  },
  {
    title: `How is the curriculum maintained? Shared?`,
    text: `Each school adjusts the curriculum to fit their program while Western Washington University maintains the master. Through the annual academic workshop, we gather input on changes that should be considered and incorporated to continuously improve our program and curriculum. For example, based on student and partner feedback, we plan to add a second course on a different topic that can benefit from a live data stream. This course would follow the same road map, although the school that develops the curriculum will lead the curation process. All the curriculum is free to the participating schools.`
  },
  {
    title: `How are the technology platforms maintained?`,
    text: `PISCES International maintains the infrastructure with engineering operations provided by Critical Insight along with resources from Western Washington University that maintain hands-on access to the monitoring stack hosted at the Cyber Range.    `
  }
]