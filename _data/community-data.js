export const data = [
  {
    title: `How does the service work?`,
    text: `A collection device is activated on the customer network. This device has an embedded Intrusion Detection System (IDS) that creates security alerts and traffic metadata (packet headers: source and destination addresses, port, protocol, time stamp).`
  },
  {
    title: `Do I need to buy anything?`,
    text: `No, the collector hardware is provided at no cost.`
  },
  {
    title: `Are there infrastructure requirements?`,
    text: `Yes, customers must have infrastructure—specifically an edge switch or router—that allows port mirroring or “spanning.” This process is copying all traffic on the device’s ports and concentrating it on a single monitoring port. The collector plugs into the span port. Ideally, rack space will be provided and, during provisioning, certain information must be collected regarding internal addressing, wire speed, and details of the internet connection.`
  },
  {
    title: `How much work is involved in setting up the monitoring solution?`,
    text: `The collector is pre-configured using information collected in a scoping conversation, and the configuration information is provided on a bootable removable storage device (USB thumb drive). Following simple instructions as the device boots, configuring the collector requires approximately 15 minutes. The collector is then plugged into the edge switch into the port with copied (spanned) traffic, and data flow is confirmed.`
  },
  {
    title: `What type of data is pulled from the network for analysis?`,
    text: `IDS alerts (very similar to anti-virus alerts) and packet headers – metadata. No content (e-mail, web pages, financial transactions) is accessed. A brief summary is provided: source address, destination address, port, protocol, flags, time stamp, and directionality information (inbound versus outbound traffic).`
  },
  {
    title: `What types of things do the analysts find?`,
    text: `Malware delivered to organizational assets that may have evaded preventive controls is the target of the analyst investigations. Suspicious behavior such as internal network scanning, cryptocurrency mining, organized crime command and control communications, all designed to indentify compromised assets on the network.`
  },
  {
    title: `How are security incidents reported?`,
    text: `At the time of provisioning, a communication escalation tree is developed. PISCES will notify the affected jurisdiction using this escalation process with as much information as possible to guide the remediation of an asset that may have become compromised.`
  },
  {
    title: `Can you offer assistance in incident response?`,
    text: `Yes, through our private sector affiliate CI Security.`
  },
  {
    title: `Will students be able to read e-mail?`,
    text: `No. No content, such as e-mail, is available to students nor is it moved offsite. Students do not have access to the on-premise collector nor is it reachable from the internet.`
  },
  {
    title: `Do students go through a background check?`,
    text: `Students are required to sign a non-disclosure agreement, but no background check is required. Because students are handling metadata that are likely subject to public disclosure, there is negligible risk to personally identifiable or regulated information. In addition, the collectors are one way so data can only flow to the cyber range for analysis. Students cannot reach back to the community sharing data.`
  },
  {
    title: `Are international students involved?`,
    text: `International students are members of these classes and subject to the same requirements.`
  },
  {
    title: `How secure is the data pulled from customer networks?`,
    text: `Metadata and IDS alerts are stored for approximately 90 days, if necessary for forensic purposes. Data are stored at a participating university, and the data center must maintain security standards for physical security of the facility, network-level access control, time-limited access authorization for students, and data center security monitoring.`
  },
  {
    title: `How long will my jurisdiction receive this service?`,
    text: `Typically, for jurisdictions with fewer than 150 employees, no-cost contracts are for 3-year terms. If the organization has not grown over the limit, the contract may be renewed for another 3-year term.`
  },
  {
    title: `What if my organization is too large?`,
    text: `Organizations with greater than 150 employees may have a 1-year contract, with the expectation that the time will be leveraged to budget for a commercial equivalent.`
  },
  {
    title: `Will you respond to a public disclosure request for data?`,
    text: `We do not respond to public disclosure requests and refer any requestors back to the originating jurisdiction.`
  },
  {
    title: `How long is my data retained?`,
    text: `IDS alerts and metadata are retained for approximately 90 days, in the event they are needed for forensic examination.`
  },
  {
    title: `By sharing access to multiple students and universities, how can these partnerships ensure security of information?`,
    text: `Students will not have access to sensitive information and students will be working with header data. Additionally, students will primarily work on university-secured computers or with computers that meet university-secured and PISCES-secured requirements. Students are provided waivers to ensure they will, to the best of their ability, maintain data confidentiality. The non-release of information also typically falls under university ethics policies and subjects students to university review if not adhered. The university policies can be provided to municipalities for full transparency.`
  },
  {
    title: `How do we ensure accuracy of student results?`,
    text: `Several lines of checks to accuracy from students. Students are trained to detect anomalies in header data. Upon detecting something anomalous, they verify that this is, in fact, a credible threat. Upon determining a credible threat is present, students report to the professor who is a trained professional in the field. The professor reviews the report and makes a determination, based on this evaluation, to pass this information along to the municipality.`
  },
  {
    title: `How do I get involved?`,
    text: `All inquiries about partnering your community or municipality with a university should be directed to Steve Stein, Executive Director of PISCES, who is responsible for connecting PISCES to local communities. Please use the contact form to reach out to us.`
  }

]