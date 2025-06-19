import React from 'react';
import Layout from '../components/Layout';
import { Box, Text, Heading, Button, VStack, SimpleGrid } from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
// import ReactPlayer if you want video support later

const cotmPost = {
  title: 'Catch of the Month',
  date: '2025-06-18',
  author: { name: 'PISCES Team' },
  content: `
## This Month’s Highlight

🚨 May Threat Intelligence Wrap-Up: Real-World Threats Blocked and Lessons Learned 🚨

In May, we had 330 reports from our student analysts who monitored and mitigated a wide spectrum of threats targeting infrastructure, protocols, and public-facing services. Here's a look at the most notable activity we detected:

🔥 Active Exploitation Attempts
 • Log4Shell (CVE-2021-44228) – Obfuscated LDAP payloads from infrastructure linked to exploit hosting (AS49581). Blocked at the perimeter — no execution observed.

 • Apache Path Traversal (CVE-2021-41773 & CVE-2021-42013) – Classic and obfuscated /cgi-bin/.../bin/sh attempts. Denied with 400 responses.

🤖 IoT Botnet Activity
 • Mirai & Mozi Scans – POST requests targeting /GponForm/diag_Form, using "Hello, World" User-Agent. Known signatures of Mirai and Mozi botnet propagation attempts. Blocked before infection.

🕵️ Targeted Reconnaissance & Enumeration
 • ZGrab-based TLS Mapping – JA3 fingerprint revealed focused scanning with evasion tactics (e.g., invalid TCP timestamps).
 • RDP Scanning – Probes using malformed headers and mstshash=Administr on non-standard ports — a common RDP fingerprinting technique.
 • WordPress Enumeration – Requests to /wlwmanifest.xml seeking vulnerable CMS endpoints. No exposure detected.
 • Sensitive Dev File Probing – Attempts to access /.git/config and /.env — often precursors to source code or secret leaks.

🧠 Student-Led Discoveries
 • Corona-virus-map[.]com Malware Callback Attempts – Repeated DNS queries from an internal system to a historically malicious domain. Accompanied by related IOCs including connections to api.telegram[.]org, arcgis[.]com, and ipapi[.]co.
 • WPAD Abuse (wpad.opsn[.]us) – Internal system attempting to fetch proxy config from an external, phishing-associated domain. Blocked to prevent potential MitM risk.
 • Tor Exit Node Connections – Low-byte traffic from anonymized IPs attempting to reach internal infrastructure. While benign in appearance, the anonymization layer warrants proactive blocking and further monitoring.

📌 Key Takeaways:
 Even in the absence of successful exploitation, these threats demonstrate the constant, adaptive pressure from opportunistic and targeted actors. Our layered defenses, threat intelligence, and sharp student oversight ensured early detection and zero impact.

👏 Huge thanks to our analysts, mentors, and students who contributed to this successful month of threat mitigation.
`,
  video: null, // optional video url if needed
};

export default function CatchOfTheWeek() {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    setIsMobile(window.innerWidth < 890);
    function handleResize() {
      setIsMobile(window.innerWidth < 890);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Layout title={`PISCES | ${cotmPost.title}`} background="other">
      <Link href="/news" passHref>
        <Button mt={10} pl={0} variant="ghost" leftIcon={<ArrowBackIcon />}>
          Back to all news
        </Button>
      </Link>

      <Text py={5} fontSize="16px" fontWeight={400} color="#CCCCCC">
        {new Date(cotmPost.date).toLocaleDateString(undefined, {
          month: 'long',
          day: 'numeric',
          year: 'numeric',
        })}
      </Text>

      <Heading size="lg">{cotmPost.title}</Heading>

      {cotmPost.author?.name && (
        <Text pb={8} fontSize="1.1em" color="#BABABA" fontWeight={500}>
          {cotmPost.author.name}
        </Text>
      )}

      <Box pb={isMobile ? '2em' : '33vh'}>
        <ReactMarkdown className="markdown" rehypePlugins={[rehypeRaw]}>
          {cotmPost.content}
        </ReactMarkdown>
      </Box>
    </Layout>
  );
}
