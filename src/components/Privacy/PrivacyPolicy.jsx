import React from "react";
import styled from "styled-components";

const PolicyContainer = styled.div`
  height: 100%;
  background: rgba(255, 255, 255, 0.07);
  margin: 2rem 1.5rem;
  padding: 1.5rem;
`;
const PolicyHeader = styled.h1`
  font-family: "Orbitron";
  font-style: normal;
  font-weight: 900;
  font-size: 80px;
  line-height: 80px;
  text-align: center;
`;
const PrivacyInnerContainer = styled.div`
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

const PolicyText = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 30px;
  color: #ffffff;
  text-align: left;
  padding: 1rem;
`;

const PolicySubHeader = styled.h3`
  font-family: "Orbitron";
  font-style: normal;
  font-weight: 800;
  font-size: 24px;
  line-height: 50px;
  text-transform: uppercase;
  color: #ffffff;
`;

const PrivacyPolicy = () => {
  return (
    <PolicyContainer>
      <PolicyHeader>Privacy Policy</PolicyHeader>
      <PrivacyInnerContainer>
        <PolicyText>
          This Privacy Policy governs the manner in which Biworld technologies
          collect, use, maintain and disclose information collected from the
          users (each person, one "User") of the website https:biworld.io
          ("Website"). This Privacy Policy applies to the Website and all
          products and services offered by Biworld. You have the right to access
          Biworld websites without telling us who you are and without disclosing
          any information about yourself. However, there are times when we need
          information from you.
        </PolicyText>
        <PolicyText>
          Biworld does not rent, sell or share personal information about you
          with other people or unaffiliated companies except:
        </PolicyText>
        <PolicyText>
          <ul>
            <li>To provide the products or services you have requested.</li>
            <li>
              When we have your permission or in the following cases: We provide
              information to trusted organizations working on behalf of or with
              Biworld under strict confidentiality agreements.
            </li>
            <li>
              These organizations may use your personal information to help
              Biworld communicate with you about offers from Biworld and our
              marketing partners. However, these companies do not have any
              independent rights to share or further disseminate this
              information.
            </li>
            <li>
              We respond to subpoenas, court orders or legal process either to
              establish or exercise our legal rights or to defend against legal
              claims.
            </li>
            <li>
              We believe it is necessary to share information to investigate,
              prevent or take action against any illegal activity, suspected
              fraud, situations involving potential threats for the physical
              safety of any person or as otherwise required by law.
            </li>
          </ul>
        </PolicyText>
        <PolicySubHeader>Personally Identifiable Information</PolicySubHeader>
        <PolicyText>
          We may collect personally identifiable information from "Users" in a
          variety of ways, including, but not limited to, when a User visits our
          website, contacts us on the website, places order, sign up for a
          newsletter, respond to a survey, fill out a form, and get involved
          with the activities, services, features or other resources we offer on
          our Website. Users may be asked, as appropriate, for their name, email
          address, mailing address and telephone number. However, users may
          access our Website anonymously. We will only collect personally
          identifiable information from Users if they voluntarily submit such
          information to us.
        </PolicyText>
        <PolicySubHeader>Web browser cookies</PolicySubHeader>
        <PolicyText>
          Our website may use "cookies" to enhance the User experience. A user's
          web browser places cookies on their hard drive for record-keeping
          purposes and sometimes to track information about them. Users can
          choose to set their web browser to refuse cookies or to notify you
          when a cookie is being sent. If they do, be aware that some parts of
          the Site may not function properly.
        </PolicyText>
        <PolicySubHeader>How we use the information we collect</PolicySubHeader>
        <PolicyText>
          Biworld may collect and use the User's personal information for the
          following purposes:
          <ul>
            <li>
              To improve customer service, the information you provide will help
              us more effectively respond to your customer service requests and
              support needs.{" "}
            </li>
            <li>
              To improve our Website, we may use the feedback you provide to
              improve our products and services.
            </li>
            <li>
              To send periodic emails, we may use email addresses to send Users
              information and updates regarding their orders. It can also be
              used to respond to their requests, questions and/or other
              requests. If a User decides to opt-in to our mailing list, they
              will receive an email that may include company news, updates,
              related product or service information, etc. If at any time the
              User wishes to unsubscribe from future emails, we will include
              unsubscribe instructions at the bottom of each email.
            </li>
          </ul>
        </PolicyText>
        <PolicySubHeader>How we protect your information</PolicySubHeader>
        <PolicyText>
          We put in place appropriate data collection, storage and processing
          practices and security measures to protect against unauthorized
          access, alteration, disclose or destroy personal information,
          usernames, passwords, transaction information and data stored on your
          Website. The exchange of sensitive and private data between the
          Website and its Users takes place over an SSL secured communication
          channel and is encrypted and protected with a digital signature. Our
          website also complies with PCI vulnerability standards to create the
          safest possible environment for Users.
        </PolicyText>
        <PolicySubHeader>Share your personal information</PolicySubHeader>
        <PolicyText>
          We do not sell, trade or rent users' personally identifiable
          information to others. We may share general aggregate demographic
          information that is not linked to any personally identifiable
          information regarding visitors and users with our business partners,
          branches, trusted advertiser for the above purposes.
        </PolicyText>
        <PolicySubHeader>Links to non-Biworld websites</PolicySubHeader>
        <PolicyText>
          Biworld may provide links to third party websites for your convenience
          and information. If you access such links through the Biworld website,
          you will leave the Biworld website. Biworld does not control such
          websites or their security practices, which may differ from Biworld's
          practices.We do not endorse or make any representations about third
          party websites. Personal data that you choose to provide or collect by
          these third parties, including any social media sites featured on our
          website, is not covered by Biworld's Privacy Policy. We encourage you
          to review the privacy policy of any website before submitting your
          personal information. We may also provide social media features on our
          website that allow you to share Biworld information with your social
          networks and interact with Biworld on various social media sites. Your
          use of these features may result in the collection or sharing of
          information about you, depending on the features. We encourage you to
          review the privacy policies and settings on the social media sites you
          interact with to ensure that you understand the information that may
          be shared by those sites.
        </PolicyText>
        <PolicySubHeader>
          Comply with the Children's Online Privacy Protection Act
        </PolicySubHeader>
        <PolicyText>
          Protecting the privacy of young children is especially important. For
          that reason, we never collect or maintain information on our Website
          from people we actually know are under the age of 13 and no part of
          our website is structured to attract anyone under the age of 13.
        </PolicyText>
        <PolicySubHeader>Changes to this privacy policy</PolicySubHeader>
        <PolicyText>
          Biworld reserves the right to update this privacy policy at any time.
          We will post any Policy changes on this page and, if those changes are
          material, we will provide a more prominent notice (including, for some
          services, notification via email about Policy changes).We will also
          keep previous versions of this Policy in an archive for your review.
          We encourage Users to regularly check this page for any changes to
          stay updated on how we are helping to protect the personal information
          we collect. You acknowledge and agree that it is your responsibility
          to periodically review this privacy policy and be aware of amendments.
        </PolicyText>
        <PolicySubHeader>Your acceptance of these terms</PolicySubHeader>
        <PolicyText>
          By using this Website, you mean that you accept this policy. If you do
          not agree with this policy, please do not use our Website. Your
          continued use of the Website after posting changes to this policy will
          be deemed your acceptance of such changes.
        </PolicyText>
        <PolicySubHeader>Contact us</PolicySubHeader>
        <PolicyText>
          If you have any questions about this Privacy Policy, the operations of
          this website or your transactions with this website, please contact us
          at: contact@biworld.io
        </PolicyText>
      </PrivacyInnerContainer>
    </PolicyContainer>
  );
};

export default PrivacyPolicy;
