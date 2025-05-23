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
  date: '2025-05-21',
  author: { name: 'PISCES Team' },
  content: `
## This Month’s Highlight

🚨 April Snapshot: 300 Issues Detected by Our Student Analysts 🚨  
Our students continue to impress with their dedication to monitoring and protecting our community networks. In April alone, they identified 300 security issues, with 130 escalated to clients—including 76 issues from a single community.

🔍 Some of the activity they uncovered includes:

TFTP access attempts on port 69 with netascii read requests via client phone lines  
Scanning activity from tools like Zgrab/Zmap (User-Agent: Mozilla/5.0 zgrab/0.x)  
Discovery of DHS NCATS vulnerability scanning infrastructure, observed via HTTP 302 redirects

- Login-related probes:
    - /login.php, /scripts/login.php, /sitecore/login/default.aspx, /login.php?url=editgedcoms.php
- Admin and setup interface scans:
    - /cgi-bin/admin.php, /scripts/admin/setup.php, /operations-console/
- Sitecore CMS-specific probes:
    - /sitecore/login/default.aspx, /cgi-bin/shell/sitecore.version.xml
- Other anomalies and script probes:
    - /news.php, /samba/smb2www.pl, /scripts/search/show.pl?url=http://www.google.com, /libhtp::request_uri_not_seen

💡 The hands-on experience these students gain is invaluable. If you're hiring for entry-level SOC or cybersecurity analyst roles, I highly recommend taking a look at our upcoming graduates and alumni. They're battle-tested and ready to contribute.
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
