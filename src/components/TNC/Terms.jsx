import React from "react";
import styled from "styled-components";

const TNCContainer = styled.div`
  height: 100%;
  background: rgba(255, 255, 255, 0.07);
  margin: 2rem 1.5rem;
  padding: 1.5rem;
`;
const TNCHeader = styled.h1`
  font-family: "Orbitron";
  font-style: normal;
  font-weight: 900;
  font-size: 80px;
  line-height: 80px;
  text-align: center;
`;
const TNCInnerContainer = styled.div`
  height: 80%;
  width: 80%;
  display: flex;
  flex-direction: column;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 1rem;
  margin: 0 auto;
  margin-bottom: 1rem;
`;

const TNCText = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 30px;
  color: #ffffff;
  text-align: left;
  padding: 1rem;
`;

const TNCSubHeader = styled.h3`
  font-family: "Orbitron";
  font-style: normal;
  font-weight: 800;
  font-size: 24px;
  line-height: 50px;
  text-transform: uppercase;
  color: #ffffff;
`;

const Terms = () => {
  return (
    <TNCContainer>
      <TNCHeader>Terms & Conditions</TNCHeader>
      <TNCInnerContainer>
        <TNCSubHeader>Introduction</TNCSubHeader>
        <TNCText>
          Welcome to Biworld. Biworld provides IT services that enable people
          and organizations to increase their presence in the web, mobile and IT
          spaces. By accessing the Biworld website ( www.biworld.io ), including
          all features, user interface and graphics, content and software
          applications associated with these services, you are entering into a
          binding contract with Biworld.
        </TNCText>
        <TNCText>
          Your agreement with us includes the Terms of Use to which you agree.
          If you visit the Biworld website ( www.biworld.io ), it means that you
          confirm that you have read the Terms of Use and agree to all of its
          terms..
        </TNCText>
        <TNCSubHeader>Ownership and agreement to terms of use</TNCSubHeader>
        <TNCText>
          These terms and conditions govern your access to or use of the Biworld
          website ( www.biworld.io ) and all linked sites www.biworld.io
          (hereinafter referred to as the 'Site') ) by Biworld (hereinafter
          referred to as “Biworld”) and its subsidiaries and affiliates. By
          using the Website, you agree to all provisions of the Terms of Use,
          and if you DO NOT AGREE, please DO NOT access or use the Website..
        </TNCText>
        <TNCSubHeader>Changes to the Agreement</TNCSubHeader>
        <TNCText>
          Biworld Technologies reserves the right in its sole discretion to
          change, modify, add or remove any provision of these Terms of Use at
          any time without notice.. You are solely responsible for checking
          these Terms of Use periodically for any changes. If you continue to
          use the Website after making the changes, it means that you accept and
          agree to the changes. Your use of the Website is conditioned on your
          acceptance of all provisions of the terms set forth herein.
        </TNCText>
        <TNCSubHeader>Copyright and Limited License</TNCSubHeader>
        <TNCText>
          Unless otherwise specified, all text, visual appearance, user
          interface, graphics, trademarks, logos, videos, images, audio files,
          music files, domain names and computer software code, (collectively,
          'website content') including, but not limited to, the design,
          communication, coordination and “interface” of web page content on the
          Website are the exclusive property of Biworld and are protected by
          copyright, trademark, other intellectual property rights and laws. You
          may use information available on Biworld products and services
          intentionally designed, developed and offered by Biworld for download
          from the Website, provided that you (a) do not violate any applicable
          local, state, national or international law (b) use the information
          for personal, non-commercial purposes only, (c) do not forge
          identifiers or proprietary notices on any piece of information
          indicating the source of the information, (d) not modify information
          or make any derivative use of the Website and any part of its content,
          (f)do not attempt to interfere, manipulate, or disrupt computer
          networks or servers or hardware or software applications to download
          or access website content by illegal means. You agree and acknowledge
          that, between you and Biworld, the Website and its content are the
          sole and exclusive property of Biworld. Biworld provides a limited,
          non-exclusive, revocable right to access the Site for your personal
          and non-commercial use as long as you respect and comply with all
          provisions of the Terms of Use to protect Biworld's contractual,
          statutory and common law rights. Any use of the Website or its content
          other than that permitted herein is strictly prohibited and will
          result in the termination of the license granted herein. Biworld, in
          its sole discretion, reserves the right to revoke the license at any
          time without notice.
        </TNCText>
        <TNCSubHeader>Your use of the website</TNCSubHeader>
        <TNCText>
          You may not attempt to gain unauthorized access to the Website or any
          part of the Website or its content in any way not expressly permitted
          in the Terms of Use. You may not copy, reproduce, redistribute the
          Website or any part of its content, which infringes Biworld's
          intellectual property rights. You may not monitor, disassemble,
          decompile or reverse engineer the Website or any portion of its
          content, or any other system or network connected to the Website or to
          its servers by hacking or any other illegal means. You are not
          permitted to seek any information about any other user or visitor of
          the Site or any other customer of Biworld by any means for the purpose
          of disclosure or exploitation information. You may not pretend that
          you are a representative of some other entity or individual, or
          impersonate another person when using the Site or to connect to the
          Site.. You agree not to disrupt or interfere with any part or
          functionality of the Website or with any other person's use of the
          Website.. You agree not to use the Site or its content for any purpose
          or any other activity that is illegal and prohibited by these Terms of
          Use and in any way that violates the rights of Biworld or any other
          activity.
        </TNCText>
        <TNCSubHeader>Additional Terms and Conditions</TNCSubHeader>
        <TNCText>
          Additional terms and conditions may apply to a particular part of the
          website content or features of the Website, including but not limited
          to promotions or contests, which are part of the Website Terms of Use
          by reference. You agree to abide by these terms and conditions,
          including where applicable, that you are of legal age to participate
          in such service or use such feature.. If there is a conflict between
          these Terms of Use and additional terms posted for specific services
          through the Website, the following will govern your use of those
          services. Biworld is under no obligation to update changes in specific
          services regarding products and services that may be out of date.
        </TNCText>
        <TNCSubHeader>Third-party content</TNCSubHeader>
        <TNCText>
          The Website may contain third party content, including but not limited
          to links to websites and references to third party websites or
          information provided in such websites (collectively, “Third Party
          Content”). You may leave the Website and access Third Party Content at
          your own risk and Biworld has no liability for claims arising from
          damage or loss which is alleged to be caused by such Third Party
          Content. Biworld is not responsible for the accuracy of Third Party
          Content, nor is it responsible for the risks, uncertainties and
          assumptions associated with Third Party Content or opinions expressed
          in Third-party content. Use of Third Party Content on the Site does
          not convey the approval or endorsement of the linked websites, or the
          organizations, products or services or owners of the Third Party
          Content under any way by Biworld. Biworld has no control over Third
          Party Content and is not responsible for any form of representation,
          including but not limited to financial transactions you may conduct
          with suppliers of such Third Party Content. such third party content,
          even if you learn about such providers from the Website or reach
          through the Website
        </TNCText>
        <TNCSubHeader>Additional Terms and Conditions</TNCSubHeader>
        <TNCText>
          You may link to the Website by means of a text link or a link to the
          homepage of the Website. Biworld only agrees to links where the link
          and the pages activated by the link MUST NOT: (a) copy the website
          content; (b) imply that Biworld approves or endorses the products and
          services of the website to which it is linked (c) create a false
          impression of Biworld and the Website (d) use the Biworld trademark in
          page text, meta tags or hidden text (e) create the same
          representation, “interface” as in the Website (f) use the Biworld
          name, trademarks, service marks, logos or any other characteristic
          trademarks of Biworld and the Website (g) use Biworld or the Website,
          or its content, knowingly for advertising or publicity, without
          Biworld's prior written permission. You agree that Biworld reserves
          the right in its sole discretion to terminate the right to link to the
          Website at any time. In such event, you agree to immediately remove
          all links to the Website and to cease using any Biworld trademarks.
        </TNCText>
        <TNCSubHeader>Privacy</TNCSubHeader>
        <TNCText>
          Please refer to the privacy policy page to read about Biworld's
          Privacy Policy. Your use of the Website means that you have read,
          acknowledged and agreed to the Privacy Policy that applies to your use
          of this Website.
        </TNCText>
        <TNCSubHeader>Disclaimer</TNCSubHeader>
        <TNCText>
          You understand and agree that the Website services are provided
          “status quo” and “available” with no express or implied warranties or
          conditions of any kind. Biworld does not warrant that the information
          available on the Website, the service or any feature of the Website
          will be free from errors, omissions or typographical errors. Biworld
          does not warrant that any part of the Website, feature or service is
          free of viruses or malware, or contaminated or destructive features.
          All Website content, Website features and services are subject to
          change without prior notice. You are solely responsible for your use
          of the Website and the pages linked to it. In the event of
          dissatisfaction with the Website or any part of its content, your sole
          remedy is to discontinue using the Website or its content.
        </TNCText>
        <TNCSubHeader>Limited</TNCSubHeader>
        <TNCText>
          You agree that under no circumstances will Biworld be liable for any
          claim for loss suffered by you,including but not limited to damages
          resulting from the inability to use the Website or its content, or
          inability to use the Website or its content,including but not limited
          to claims resulting from inaccuracies, omissions, typographical errors
          or destructive properties of any information, including but not
          limited to your use of any Third-Party Content of the Party linked to
          the Website, including but not limited to loss of usage rights, loss
          of data, loss of profits, whether due to breach of contract, tort,
          negligence or any other cause anything else arising from your use or
          inability to use the Website or its content. You specifically agree
          that Biworld will not be liable for damages resulting from
          unauthorized access or computer viruses, theft or destruction, or
          failure of communications or any website content or files you download
          from the Website. Use is at your own risk.
        </TNCText>
        <TNCSubHeader>Compensation</TNCSubHeader>
        <TNCText>
          You agree to defend, indemnify and hold Biworld, directors,
          predecessors, heirs, employees, subsidiaries and affiliates harmless
          from any and all claims, claims or claims, liability or expense
          (including but not limited to attorney's fees) or loss (actual or
          consequential) made against Biworld by any third party in connection
          with your use the Website.
        </TNCText>
        <TNCSubHeader>Violation of these Terms of Use</TNCSubHeader>
        <TNCText>
          You agree that Biworld reserves the right at all times to disclose any
          information it holds about you if it determines that such disclosure
          is necessary for any investigation or claim against you relating to
          the you use the Website or hold you or someone else liable for causing
          harm (intentional or unintentional) to the rights or property of
          Biworld, or the rights or property of visitors to the Website or any
          other user of the Website. Under certain circumstances, Biworld may
          disclose information necessary to comply with any applicable law,
          regulation, legal process or governmental request. Biworld may
          disclose your information when required by applicable law, including
          in exchange for information with companies or organizations or any
          legal entity for anti-fraud purposes. You acknowledge and agree that
          Biworld may preserve or use any communications made with Biworld
          through the Website or any services offered on or through the
          Websiteand may disclose such data if Biworld determines such
          preservation or disclosure is necessary to (1) enforce these Terms of
          Use, (2) respond to claims that any data do so violate the rights of
          others, or (3) protect the rights, property or personal safety of
          Biworld, its employees, users or visitors of the Website, and the
          public..
        </TNCText>
        <TNCSubHeader>Terminate your access to the website</TNCSubHeader>
        <TNCText>
          You agree that Biworld may, in its sole discretion and without prior
          notice, terminate your access to the Website and/or block your access
          to the Website in the future. In such event, you must destroy all
          copies of any data or results you have downloaded, imported, or
          obtained from the Website or in conjunction with the Biworld Services
          within the period. You may not keep any information, display, or
          printout generated from any data associated with the Service beyond
          the limits of the Agreement or authorized period.
        </TNCText>
        <TNCSubHeader>Dispute Resolution and Arbitration</TNCSubHeader>
        <TNCText>
          Biworld operates and administers this Website from its headquarters
          location in India and cannot warrant that the Website or its content
          is appropriate or complies with the requirements or laws of the
          country where you are using the Website. You agree that you are solely
          responsible for compliance with the laws of the country, republic,
          province, or other regulatory jurisdiction from which you are using
          the Website or its content. You specifically acknowledge and agree
          that all matters and concerns relating to your access to or use of the
          Website, including all disputes, shall be governed by the laws of
          India. In case, there is any controversy or dispute between Biworld
          and you arising out of or relating to your use of the Website and its
          content, the parties shall endeavor to resolve the matter immediately
          and goodwill.
        </TNCText>
        <TNCSubHeader>Other rule</TNCSubHeader>
        <TNCText>
          All rights and remedies in the Terms of Use are cumulative and not
          specific to any specific rights and remedies provided by law. If a
          certain term is not implied in any way, or may be found invalid, that
          does not affect the continuity of other provisions in these Terms of
          Use. Nothing in these Terms of Use shall be construed as creating a
          partnership or joint venture of any kind between any party, either as
          a third party or an agent.
        </TNCText>
        <TNCSubHeader>Comment</TNCSubHeader>
        <TNCText>
          You agree that any feedback you provide on this website will be
          treated as non-confidential by Biworld. Biworld reserves the right to
          use such feedback or information on an unrestricted basis.
        </TNCText>
        <TNCSubHeader>Contact us</TNCSubHeader>
        <TNCText>
          If you have any questions regarding Biworld or the Website Terms of
          Use, please write to us at: contact@biworld.io Thank you for reading
          these Terms of Use.
        </TNCText>
      </TNCInnerContainer>
    </TNCContainer>
  );
};

export default Terms;
