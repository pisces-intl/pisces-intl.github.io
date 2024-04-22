export const data = [
  {
    title: `How does the service work?`,
    text: `A collection device is activated on the customer network. This device has an embedded intrusion detection system that creates security alerts and traffic metadata (packet headers: source and destination addresses, port, protocol, time stamp).`
  },
  {
    title: `Do I need to buy anything?`,
    text: `No, the collector hardware is provided at no cost.`
  },
  {
    title: `Are there infrastructure requirements?`,
    text: `Yes, customers must have infrastructure—specifically an edge switch or router—that allows port mirroring or “spanning.” This process is copying all traffic on the device's ports and concentrating it on a single monitoring port. The collector plugs into the span port. Ideally, rack space will be provided During provisioning, certain information must be collected regarding internal addressing, wire speed, and details of the internet connection.`
  },
  {
    title: `How much work is involved in setting up the monitoring solution?`,
    text: `The collector is pre-configured using information collected in a scoping conversation and sent to your location.  Once you have received it, the collector should be plugged into the edge switch or port with copied (spanned) traffic, and data flow is confirmed.  Instructions for connection are provided.  If needed our cyber engineer will talk you through the process.`
  },
  {
    title: `What type of data is pulled from the network for analysis?`,
    text: `Intrusion detection system alerts (very similar to anti-virus alerts) and packet headers (metadata). No content (e-mail, web pages, financial transactions) is accessed. A summary is provided that includes source address, destination address, port, protocol, flags, time stamp, and directionality information (inbound versus outbound traffic).`
  },
  {
    title: `What types of things do the analysts find?`,
    text: `Malware delivered to organizational assets that have evaded preventive controls is the target of the analyst investigations. Suspicious behavior such as internal network scanning, cryptocurrency mining, organized crime command and control communications, all designed to identify compromised assets and/or information exploitation from your network.`
  },
  {
    title: `How are security incidents reported?`,
    text: `At the time of provisioning, a communication escalation tree is developed. PISCES will notify the affected jurisdiction using this escalation process with as much information as possible to guide the remediation of an asset that may have become compromised.`
  },
  {
    title: `Can you offer assistance in incident response?`,
    text: `We can offer limited assistance.  We can also connect you to your state Cyber Security Analyst or other state assets that can assist you at no cost.`
  },
  {
    title: `Will students be able to read e-mail?`,
    text: `No. No content, such as e-mail, is available to students, instructors, or PISCES staff.  Only metadata is copied and sent to our Cyber Range for analysis.  Students only have access to data on the systems at the Cyber Range and cannot reach back to the device on your premises.`
  },
  {
    title: `Do students go through a background check?`,
    text: `Students are required to sign a non-disclosure agreement, but no background check is required. Because students are handling metadata only, likely subject to public disclosure, there is negligible risk to personally identifiable or regulated information. In addition, the collectors are one-way so data can only flow to the Cyber Range for analysis. Students cannot reach back to the community sharing data.`
  },
  {
    title: `Are international students involved?`,
    text: `International students are members of these classes and subject to the same requirements.  It is important to note that our approach teaches detection and protection.  No students, international or domestic, learn how to attack networks through this program.`
  },
  {
    title: `How secure is the data pulled from customer networks?`,
    text: `Metadata and intrusion detection system alerts are stored for approximately 90 days. The Cyber Range maintain security standards for physical security of the facility, network-level access control, time-limited access authorization for students, and data center security monitoring.`
  },
  {
    title: `How long will my jurisdiction receive this service?`,
    text: `Typically, for jurisdictions with fewer than 150 employees, no-cost agreements are for 3-year terms. If the organization has not grown over the limit, the agreement may be renewed for another 3-year term.`
  },
  {
    title: `What if my organization is too large?`,
    text: `Organizations with greater than 150 employees may have a 1-2 year agreement with the expectation that the time will be leveraged to budget for a commercial equivalent.  If a community can afford to pay for commercial cybersecurity protections we strongly encourage them to do so.`
  },
  {
    title: `Will you respond to a public disclosure request for data?`,
    text: `We do not respond to public disclosure requests and refer any requestors back to the originating jurisdiction.`
  },
  {
    title: `How long is my data retained?`,
    text: `Intrusion detection system alerts and metadata are retained for approximately 90 days, in the event they are needed for forensic examination.  With the agreement of the data sharing partner, PISCES will hold data for longer periods to support research by the academic institutions.`
  },
  {
    title: `By sharing access to multiple students and universities, how can these partnerships maintain security of information?`,
    text: `Students will not have access to sensitive information.  Students will be working with header data. Only.   Additionally, students will primarily work on university-secured computers or with computers that meet university-secured and PISCES-secured requirements. Students must sign a nondisclosure agreement ensuring they will maintain confidentiality.`
  },
  {
    title: `How do we ensure accuracy of student results?`,
    text: `Several lines of checks to accuracy from students. Students are trained to detect anomalies in header data. Upon detecting something anomalous, they verify that this is, in fact, a credible threat. Upon determining a credible threat is present, students report to the professor for review and validation.  PISCES also provides a professional cyber analyst who reviews all student findings to validate them and as needed report them to the data sharing partner with recommendation for mitigative actions.`
  },
  {
    title: `How do I get involved?`,
    text: `Simply hit the Contact Us tab and provide your information.  We will typically respond to you in 24 hours or less.`
  }

]