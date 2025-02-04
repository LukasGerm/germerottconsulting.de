import { HeroSection } from "@/components/ui/sections/hero-section";
import { Title } from "@/components/ui/title";
import type { Metadata, NextPage } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Datenschutz | Germerott Performance Consulting",
  description:
    "Erfahren Sie, wie wir mit Ihren persönlichen Daten umgehen. Wir legen höchsten Wert auf Datenschutz und transparente Datenverarbeitung.",
  openGraph: {
    title: "Datenschutz | Germerott Performance Consulting",
    description:
      "Informationen zum Umgang mit personenbezogenen Daten und den geltenden Datenschutzrichtlinien bei Germerott Performance Consulting.",
    url: "https://germerottconsulting.de/datenschutz",
    images: [
      {
        url: "https://germerottconsulting.de/og?title=Datenschutz",
        width: 1200,
        height: 630,
        alt: "Germerott Performance Consulting - Datenschutz",
      },
    ],
    siteName: "Germerott Performance Consulting",
    locale: "de_DE",
    type: "article",
  },
};

const PrivacyPolicy: NextPage = () => {
  return (
    <div>
      <HeroSection>
        <Title variant="h1">Datenschutzerklärung</Title>
      </HeroSection>
      <div className="max-w-screen-lg pt-8 pb-20 px-4 mx-auto flex flex-col gap-2">
        <Title variant="h2">
          1) Einleitung und Kontaktdaten des Verantwortlichen
        </Title>
        <p>
          <b>1.1&nbsp;</b>Wir freuen uns, dass Sie unsere Website besuchen und
          bedanken uns für Ihr Interesse. Im Folgenden informieren wir Sie über
          den Umgang mit Ihren personenbezogenen Daten bei der Nutzung unserer
          Website. Personenbezogene Daten sind hierbei alle Daten, mit denen Sie
          persönlich identifiziert werden können.
        </p>

        <p>
          <b>1.2&nbsp;</b>Verantwortlicher für die Datenverarbeitung auf dieser
          Website im Sinne der Datenschutz-Grundverordnung (DSGVO) ist Lukas
          Germerott, Totenhäuser Str. 29, 37434 Gieboldehausen, Deutschland,
          Tel.: 015161228182, E-Mail: lukas@lukasgermerott.de. Der für die
          Verarbeitung von personenbezogenen Daten Verantwortliche ist diejenige
          natürliche oder juristische Person, die allein oder gemeinsam mit
          anderen über die Zwecke und Mittel der Verarbeitung von
          personenbezogenen Daten entscheidet.
        </p>

        <Title variant="h2">
          2) Datenerfassung beim Besuch unserer Website
        </Title>
        <p>
          <b>2.1&nbsp;</b>Bei der bloß informatorischen Nutzung unserer Website,
          also wenn Sie sich nicht registrieren oder uns anderweitig
          Informationen übermitteln, erheben wir nur solche Daten, die Ihr
          Browser an den Seitenserver übermittelt (sog. „Server-Logfiles“). Wenn
          Sie unsere Website aufrufen, erheben wir die folgenden Daten, die für
          uns technisch erforderlich sind, um Ihnen die Website anzuzeigen:
        </p>

        <ul>
          <li>Unsere besuchte Website</li>
          <li>Datum und Uhrzeit zum Zeitpunkt des Zugriffes</li>
          <li>Menge der gesendeten Daten in Byte</li>
          <li>Quelle/Verweis, von welchem Sie auf die Seite gelangten</li>
          <li>Verwendeter Browser</li>
          <li>Verwendetes Betriebssystem</li>
          <li>Verwendete IP-Adresse (ggf.: in anonymisierter Form)</li>
        </ul>

        <p>
          Die Verarbeitung erfolgt gemäß Art. 6 Abs. 1 lit. f DSGVO auf Basis
          unseres berechtigten Interesses an der Verbesserung der Stabilität und
          Funktionalität unserer Website. Eine Weitergabe oder anderweitige
          Verwendung der Daten findet nicht statt. Wir behalten uns allerdings
          vor, die Server-Logfiles nachträglich zu überprüfen, sollten konkrete
          Anhaltspunkte auf eine rechtswidrige Nutzung hinweisen.
        </p>

        <p>
          <b>2.2&nbsp;</b>Diese Website nutzt aus Sicherheitsgründen und zum
          Schutz der Übertragung personenbezogener Daten und anderer
          vertraulicher Inhalte (z.B. Bestellungen oder Anfragen an den
          Verantwortlichen) eine SSL-bzw. TLS-Verschlüsselung. Sie können eine
          verschlüsselte Verbindung an der Zeichenfolge „https://“ und dem
          Schloss-Symbol in Ihrer Browserzeile erkennen.
        </p>

        <Title variant="h2">3) Hosting &amp; Content-Delivery-Network</Title>
        <p>
          <b>3.1&nbsp;</b>Für das Hosting unserer Website und die Darstellung
          der Seiteninhalte nutzen wir das System des folgenden Anbieters:
          Cloudflare Inc., 101 Townsend St. San Francisco, CA 94107, USA
        </p>

        <p>
          Sämtliche auf unserer Website erhobenen Daten werden auf den Servern
          des Anbieters verarbeitet.
          <br />
          Wir haben mit dem Anbieter einen Auftragsverarbeitungsvertrag
          geschlossen, der den Schutz der Daten unserer Seitenbesucher
          sicherstellt und eine unberechtigte Weitergabe an Dritte untersagt.
        </p>

        <p>
          Für Datenübermittlungen in die USA hat sich der Anbieter dem
          EU-US-Datenschutzrahmen (EU-US Data Privacy Framework) angeschlossen,
          das auf Basis eines Angemessenheitsbeschlusses der Europäischen
          Kommission die Einhaltung des europäischen Datenschutzniveaus
          sicherstellt.
        </p>

        <p>
          <b>3.2&nbsp;</b>Cloudflare
        </p>

        <p>
          Wir nutzen ein Content Delivery Network des folgenden Anbieters:
          Cloudflare Inc., 101 Townsend St. San Francisco, CA 94107, USA
        </p>

        <p>
          Dieser Dienst ermöglicht uns, große Mediendateien wie Grafiken,
          Seiteninhalte oder Skripte über ein Netz regional verteilter Server
          schneller auszuliefern. Die Verarbeitung erfolgt zur Wahrung unseres
          berechtigten Interesses an der Verbesserung der Stabilität und
          Funktionalität unserer Website gem. Art. 6 Abs. 1 lit. f DSGVO. Wir
          haben mit dem Anbieter einen Auftragsverarbeitungsvertrag geschlossen,
          der den Schutz der Daten unserer Seitenbesucher sicherstellt und eine
          unberechtigte Weitergabe an Dritte untersagt.
        </p>

        <p>
          Für Datenübermittlungen in die USA hat sich der Anbieter dem
          EU-US-Datenschutzrahmen (EU-US Data Privacy Framework) angeschlossen,
          das auf Basis eines Angemessenheitsbeschlusses der Europäischen
          Kommission die Einhaltung des europäischen Datenschutzniveaus
          sicherstellt.
        </p>

        <Title variant="h2">4) Cookies</Title>
        <p>
          Um den Besuch unserer Website attraktiv zu gestalten und die Nutzung
          bestimmter Funktionen zu ermöglichen, verwenden wir Cookies, also
          kleine Textdateien, die auf Ihrem Endgerät abgelegt werden. Teilweise
          werden diese Cookies nach Schließen des Browsers automatisch wieder
          gelöscht (sog. „Session-Cookies“), teilweise verbleiben diese Cookies
          länger auf Ihrem Endgerät und ermöglichen das Speichern von
          Seiteneinstellungen (sog. „persistente Cookies“). Im letzteren Fall
          können Sie die Speicherdauer der Übersicht zu den Cookie-Einstellungen
          Ihres Webbrowsers entnehmen.
        </p>

        <p>
          Sofern durch einzelne von uns eingesetzte Cookies auch
          personenbezogene Daten verarbeitet werden, erfolgt die Verarbeitung
          gemäß Art. 6 Abs. 1 lit. b DSGVO entweder zur Durchführung des
          Vertrages, gemäß Art. 6 Abs. 1 lit. a DSGVO im Falle einer erteilten
          Einwilligung oder gemäß Art. 6 Abs. 1 lit. f DSGVO zur Wahrung unserer
          berechtigten Interessen an der bestmöglichen Funktionalität der
          Website sowie einer kundenfreundlichen und effektiven Ausgestaltung
          des Seitenbesuchs.
        </p>

        <p>
          Sie können Ihren Browser so einstellen, dass Sie über das Setzen von
          Cookies informiert werden und einzeln über deren Annahme entscheiden
          oder die Annahme von Cookies für bestimmte Fälle oder generell
          ausschließen können.
        </p>

        <p>
          Bitte beachten Sie, dass bei Nichtannahme von Cookies die
          Funktionalität unserer Website eingeschränkt sein kann.
        </p>

        <Title variant="h2">5) Kontaktaufnahme</Title>
        <p>
          <b>5.1&nbsp;</b>Calendly
        </p>

        <p>
          Für die Bereitstellung einer Online-Terminbuchungsfunktion nutzen wir
          die Dienste des folgenden Anbieters: Calendly, LLC, BB&amp;T Tower,
          271 17th St NW, Atlanta, GA 30363, USA
        </p>

        <p>
          Zum Zwecke der Terminvergabe werden gemäß Art. 6 Abs. 1 lit. b DSGVO
          Vor- und Zuname sowie Mailadresse (und ggf. die Telefonnummer, sofern
          ein telefonischer Termin gewünscht ist) erhoben und gemäß Art. 6 Abs.
          1 lit. f DSGVO auf Basis unseres berechtigten Interesses an einem
          effektiven Kundenmanagement und einer effizienten Terminverwaltung an
          den Anbieter übermittelt und dort für die Terminorganisation
          gespeichert.
        </p>

        <p>
          Nach Abhaltung des Termins bzw. nach Ablauf des vereinbarten
          Terminzeitraums werden Ihre Daten vom Anbieter gelöscht.
        </p>

        <p>
          Wir haben mit dem Anbieter einen Auftragsverarbeitungsvertrag
          geschlossen, der den Schutz der Daten unserer Seitenbesucher
          sicherstellt und eine unberechtigte Weitergabe an Dritte untersagt.
        </p>

        <p>
          Für Datenübermittlungen in die USA hat sich der Anbieter dem
          EU-US-Datenschutzrahmen (EU-US Data Privacy Framework) angeschlossen,
          das auf Basis eines Angemessenheitsbeschlusses der Europäischen
          Kommission die Einhaltung des europäischen Datenschutzniveaus
          sicherstellt.
        </p>

        <p>
          <b>5.2&nbsp;</b>WhatsApp-Business
        </p>

        <p>
          Sie haben die Möglichkeit, mit uns über den Nachrichtendienst WhatsApp
          der WhatsApp Ireland Limited, 4 Grand Canal Square, Grand Canal
          Harbour, Dublin 2, Irland, in Kontakt zu treten. Hierfür verwenden wir
          die sog. „Business-Version“ von WhatsApp.
        </p>

        <p>
          Sofern Sie uns anlässlich eines konkreten Geschäfts (beispielsweise
          einer getätigten Bestellung) per WhatsApp kontaktieren, speichern und
          verwenden wir die von Ihnen bei WhatsApp genutzte Mobilfunknummer
          sowie – falls bereitgestellt – Ihren Vor- und Nachnamen gemäß Art. 6
          Abs. 1 lit. b. DSGVO zur Bearbeitung und Beantwortung Ihres Anliegens.
          Auf Basis derselben Rechtsgrundlage werden wir Sie per WhatsApp
          gegebenenfalls um die Bereitstellung weiterer Daten (Bestellnummer,
          Kundennummer, Anschrift oder E-Mailadresse) bitten, um Ihre Anfrage
          einem bestimmten Vorgang zuordnen zu können.
        </p>

        <p>
          Nutzen Sie unseren WhatsApp-Kontakt für allgemeine Anfragen (etwa zum
          Leistungsspektrum, zu Verfügbarkeiten oder zu unserem
          Internetauftritt) speichern und verwenden wir die von Ihnen bei
          WhatsApp genutzte Mobilfunknummer sowie – falls bereitgestellt – Ihren
          Vor- und Nachnamen gemäß Art. 6 Abs. 1 lit. f DSGVO auf Basis unseres
          berechtigten Interesses an der effizienten und zeitnahen
          Bereitstellung der gewünschten Informationen.
        </p>

        <p>
          Ihre Daten werden stets nur zur Beantwortung Ihres Anliegens per
          WhatsApp verwendet. Eine Weitergabe an Dritte findet nicht statt.
        </p>

        <p>
          Bitte beachten Sie, dass WhatsApp Business Zugriff auf das Adressbuch
          des von uns hierfür verwendeten mobilen Endgeräts erhält und im
          Adressbuch gespeicherte Telefonnummern automatisch an einen Server des
          Mutterkonzerns Meta Platforms Inc. in den USA überträgt. Für den
          Betrieb unseres WhatsApp-Business-Kontos verwenden wir ein mobiles
          Endgerät, in dessen Adressbuch ausschließlich die
          WhatsApp-Kontaktdaten solcher Nutzer gespeichert werden, die mit uns
          per WhatsApp auch in Kontakt getreten sind.
        </p>

        <p>
          Hierdurch wird sichergestellt, dass jede Person, deren
          WhatsApp-Kontaktdaten in unserem Adressbuch gespeichert sind, bereits
          bei erstmaliger Nutzung der App auf seinem Gerät durch Akzeptanz der
          WhatsApp-Nutzungsbedingungen in die Übermittlung seiner
          WhatsApp-Telefonnummer aus den Adressbüchern seiner Chat-Kontakte
          gemäß Art. 6 Abs. 1 lit. a DSGVO eingewilligt hat. Eine Übermittlung
          von Daten solcher Nutzer, die WhatsApp nicht verwenden und/oder uns
          nicht über WhatsApp kontaktiert haben, wird insofern ausgeschlossen.
        </p>

        <p>
          Zweck und Umfang der Datenerhebung und die weitere Verarbeitung und
          Nutzung der Daten durch WhatsApp sowie Ihre diesbezüglichen Rechte und
          Einstellungsmöglichkeiten zum Schutz Ihrer Privatsphäre entnehmen Sie
          bitte den Datenschutzhinweisen von WhatsApp:{" "}
          <a
            href="https://whatsapp.com/legal/?eea=1#privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://whatsapp.com/legal/?eea=1#privacy-policy
          </a>
        </p>

        <p>
          Wir haben mit dem Anbieter einen Auftragsverarbeitungsvertrag
          geschlossen, der die Daten unserer Seitenbesucher schützt und eine
          Weitergabe an Dritte untersagt.
        </p>

        <p>
          Im Rahmen der oben genannten Verarbeitungen kann es zu
          Datenübertragungen an Server von Meta Platforms Inc. in den USA
          kommen.
        </p>

        <p>
          Für Datenübermittlungen in die USA hat sich der Anbieter dem
          EU-US-Datenschutzrahmen (EU-US Data Privacy Framework) angeschlossen,
          das auf Basis eines Angemessenheitsbeschlusses der Europäischen
          Kommission die Einhaltung des europäischen Datenschutzniveaus
          sicherstellt.
        </p>

        <p>
          <b>5.3&nbsp;</b>Im Rahmen der Kontaktaufnahme mit uns (z.B. per
          Kontaktformular oder E-Mail) werden – ausschließlich zum Zweck der
          Bearbeitung und Beantwortung Ihres Anliegens und nur im dafür
          erforderlichen Umfang – personenbezogene Daten verarbeitet.
        </p>

        <p>
          Rechtsgrundlage für die Verarbeitung dieser Daten ist unser
          berechtigtes Interesse an der Beantwortung Ihres Anliegens gemäß Art.
          6 Abs. 1 lit. f DSGVO. Zielt Ihre Kontaktierung auf einen Vertrag ab,
          so ist zusätzliche Rechtsgrundlage für die Verarbeitung Art. 6 Abs. 1
          lit. b DSGVO. Ihre Daten werden gelöscht, wenn sich aus den Umständen
          entnehmen lässt, dass der betroffene Sachverhalt abschließend geklärt
          ist und sofern keine gesetzlichen Aufbewahrungspflichten
          entgegenstehen.
        </p>

        <Title variant="h2">6) Nutzung von Kundendaten zur Direktwerbung</Title>
        <p>Anmeldung zu unserem E-Mail-Newsletter</p>

        <p>
          Wenn Sie sich zu unserem E-Mail Newsletter anmelden, übersenden wir
          Ihnen regelmäßig Informationen zu unseren Angeboten. Pflichtangabe für
          die Übersendung des Newsletters ist allein Ihre E-Mailadresse. Die
          Angabe weiterer Daten ist freiwillig und wird verwendet, um Sie
          persönlich ansprechen zu können. Für den Newsletter-Versand verwenden
          wir das sog. Double Opt-in Verfahren, mit dem sichergestellt wird,
          dass Sie Newsletter erst erhalten, wenn Sie uns durch Betätigung eines
          an die angegebene Mailadresse versandten Verifizierungslinks
          ausdrücklich Ihre Einwilligung in den Newsletterempfang bestätigt
          haben.
        </p>

        <p>
          Mit der Aktivierung des Bestätigungslinks erteilen Sie uns Ihre
          Einwilligung für die Nutzung Ihrer personenbezogenen Daten gemäß Art.
          6 Abs. 1 lit. a DSGVO. Hierbei speichern wir Ihre vom Internet
          Service-Provider (ISP) eingetragene IP-Adresse sowie das Datum und die
          Uhrzeit der Anmeldung, um einen möglichen Missbrauch Ihrer
          E-Mail-Adresse zu einem späteren Zeitpunkt nachvollziehen zu können.
          Die von uns bei der Anmeldung zum Newsletter erhobenen Daten werden
          streng zweckgebunden verwendet.
        </p>

        <p>
          Sie können den Newsletter jederzeit über den dafür vorgesehenen Link
          im Newsletter oder durch entsprechende Nachricht an den eingangs
          genannten Verantwortlichen abbestellen. Nach erfolgter Abmeldung wird
          Ihre E-Mailadresse unverzüglich in unserem Newsletter-Verteiler
          gelöscht, soweit Sie nicht ausdrücklich in eine weitere Nutzung Ihrer
          Daten eingewilligt haben oder wir uns eine darüberhinausgehende
          Datenverwendung vorbehalten, die gesetzlich erlaubt ist und über die
          wir Sie in dieser Erklärung informieren.
        </p>

        <Title variant="h2">7) Webanalysedienste</Title>
        <p>Google Analytics 4</p>

        <p>
          Diese Website benutzt Google Analytics 4, einen Webanalysedienst der
          Google Ireland Limited, Gordon House, 4 Barrow St, Dublin, D04 E5W5,
          Irland (&quot;Google&quot;), der eine Analyse Ihrer Benutzung unserer
          Website ermöglicht.
        </p>

        <p>
          Standardmäßig werden beim Besuch der Website durch Google Analytics 4
          keine Cookies verwendet, es sei denn, Sie stimmen Cookies ausdrücklich
          zu. Stattdessen werden Informationen über Ihr Nutzungsverhalten durch
          sog. Pings (kleine Datenpakete, die an den Host eines Endgerätes
          versendet werden) erhoben und verarbeitet. Zum Umfang dieser
          Informationen gehört auch Ihre IP-Adresse, die allerdings von Google
          um die letzten Ziffern gekürzt wird, um eine direkte
          Personenbeziehbarkeit auszuschließen.
        </p>

        <p>
          Die Informationen werden an Server von Google übertragen und dort
          weiterverarbeitet. Dabei sind auch Übermittlungen an Google LLC mit
          Sitz in den USA möglich.
        </p>

        <p>
          Google nutzt die erhobenen Informationen in unserem Auftrag, um Ihre
          Nutzung der Website auszuwerten, Reports über die Websiteaktivitäten
          für uns zusammenzustellen und um weitere mit der Websitenutzung und
          der Internetnutzung verbundene Dienstleistungen zu erbringen. Die im
          Rahmen von Google Analytics von Ihrem Browser übermittelte und
          gekürzte IP-Adresse wird nicht mit anderen Daten von Google
          zusammengeführt. Die im Rahmen der Nutzung von Google Analytics 4
          erhobenen Daten werden für die Dauer von zwei Monaten gespeichert und
          anschließend gelöscht.
        </p>

        <p>
          Alle vorstehend beschriebenen Verarbeitungen, einschließlich der
          Datenübermittlung durch „Pings“ und das mögliche Setzen von
          Google-Analytics-Cookies, erfolgen nur, wenn Sie uns hierfür Ihre
          ausdrückliche Einwilligung gem. Art. 6 Abs. 1 lit. a DSGVO erteilt
          haben.
        </p>

        <p>
          Ohne Ihre Einwilligung unterbleibt der Einsatz von Google Analytics 4
          während Ihres Seitenbesuchs. Sie können Ihre erteilte Einwilligung mit
          Wirkung für die Zukunft jederzeit widerrufen. Um Ihr Widerrufsrecht
          auszuüben, deaktivieren Sie bitte diesen Dienst über das auf der
          Website bereitgestellte „Cookie-Consent-Tool“.
        </p>

        <p>
          Wir haben mit Google einen Auftragsverarbeitungsvertrag geschlossen,
          der den Schutz der Daten unserer Seitenbesucher sicherstellt und eine
          unberechtigte Weitergabe an Dritte untersagt.
        </p>

        <p>
          Weitere rechtliche Hinweise zu Google Analytics 4 finden Sie unter{" "}
          <a
            href="https://business.safety.google/intl/de/privacy/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://business.safety.google/intl/de/privacy/
          </a>
          ,{" "}
          <a
            href="https://policies.google.com/privacy?hl=de&gl=de"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://policies.google.com/privacy?hl=de&gl=de
          </a>{" "}
          und unter{" "}
          <a
            href="https://policies.google.com/technologies/partner-sites"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://policies.google.com/technologies/partner-sites
          </a>
        </p>

        <p>
          <b>Demografische Merkmale</b>
          <br />
          Google Analytics 4 nutzt die spezielle Funktion „demografische
          Merkmale“ und kann darüber Statistiken erstellen, die Aussagen über
          das Alter, Geschlecht und Interessen von Seitenbesuchern treffen. Dies
          geschieht durch die Analyse von Werbung und Informationen von
          Drittanbietern. Dadurch können Zielgruppen für Marketingaktivitäten
          identifiziert werden. Die gesammelten Daten können jedoch keiner
          bestimmten Person zugeordnet werden und werden nach einer Speicherung
          für die Dauer von zwei Monaten gelöscht.
        </p>

        <p>
          <b>Google Signals</b>
          <br />
          Als Erweiterung zu Google Analytics 4 kann auf dieser Website Google
          Signals verwendet werden, um geräteübergreifende Berichte erstellen zu
          lassen. Wenn Sie personalisierte Anzeigen aktiviert haben und Ihre
          Geräte mit Ihrem Google-Konto verknüpft haben, kann Google
          vorbehaltlich Ihrer Einwilligung zur Nutzung von Google Analytics gem.
          Art. 6 Abs. 1 lit. a DSGVO Ihr Nutzungsverhalten geräteübergreifend
          analysieren und Datenbankmodelle, unter anderem zu
          geräteübergreifenden Conversions, erstellen. Wir erhalten keine
          personenbezogenen Daten von Google, sondern nur Statistiken. Wenn Sie
          die geräteübergreifende Analyse stoppen möchten, können Sie die
          Funktion &quot;Personalisierte Werbung&quot; in den Einstellungen
          Ihres Google-Kontos deaktivieren. Folgen Sie dazu den Anweisungen auf
          dieser Seite:{" "}
          <a
            href="https://support.google.com/ads/answer/2662922?hl=de"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://support.google.com/ads/answer/2662922?hl=de
          </a>
          . Weitere Informationen zu Google Signals finden Sie unter folgendem
          Link:{" "}
          <a
            href="https://support.google.com/analytics/answer/7532985?hl=de"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://support.google.com/analytics/answer/7532985?hl=de
          </a>
        </p>

        <p>
          <b>UserIDs</b>
          <br />
          Als Erweiterung zu Google Analytics 4 kann auf dieser Website die
          Funktion &quot;UserIDs&quot; verwendet werden. Wenn Sie in die Nutzung
          von Google Analytics 4 gem. Art. 6 Abs. 1 lit. a DSGVO eingewilligt,
          ein Konto auf dieser Website eingerichtet haben und sich auf
          verschiedenen Geräten mit diesem Konto anmelden, können Ihre
          Aktivitäten, darunter auch Conversions, geräteübergreifend analysiert
          werden.
        </p>

        <p>
          Für Datenübermittlungen in die USA hat sich der Anbieter dem
          EU-US-Datenschutzrahmen (EU-US Data Privacy Framework) angeschlossen,
          das auf Basis eines Angemessenheitsbeschlusses der Europäischen
          Kommission die Einhaltung des europäischen Datenschutzniveaus
          sicherstellt.
        </p>

        <Title variant="h2">8) Tools und Sonstiges</Title>
        <p>Cookie-Consent-Tool</p>

        <p>
          Diese Website nutzt zur Einholung wirksamer Nutzereinwilligungen für
          einwilligungspflichtige Cookies und cookie-basierte Anwendungen ein
          sog. „Cookie-Consent-Tool“. Das „Cookie-Consent-Tool“ wird Nutzern bei
          Seitenaufruf in Form einer interaktiven Benutzeroberfläche angezeigt,
          auf welcher sich per Häkchensetzung Einwilligungen für bestimmte
          Cookies und/oder cookie-basierte Anwendungen erteilen lassen. Hierbei
          werden durch den Einsatz des Tools alle einwilligungspflichtigen
          Cookies/Dienste nur dann geladen, wenn der jeweilige Nutzer
          entsprechende Einwilligungen per Häkchensetzung erteilt. So wird
          sichergestellt, dass nur im Falle einer erteilten Einwilligung
          derartige Cookies auf dem jeweiligen Endgerät des Nutzers gesetzt
          werden.
        </p>

        <p>
          Das Tool setzt technisch notwendige Cookies, um Ihre
          Cookie-Präferenzen zu speichern. Personenbezogene Nutzerdaten werden
          hierbei grundsätzlich nicht verarbeitet.
        </p>

        <p>
          Kommt es im Einzelfall zum Zwecke der Speicherung, Zuordnung oder
          Protokollierung von Cookie-Einstellungen doch zur Verarbeitung
          personenbezogener Daten (wie etwa der IP-Adresse), erfolgt diese gemäß
          Art. 6 Abs. 1 lit. f DSGVO auf Basis unseres berechtigten Interesses
          an einem rechtskonformen, nutzerspezifischen und nutzerfreundlichen
          Einwilligungsmanagement für Cookies und mithin an einer
          rechtskonformen Ausgestaltung unseres Internetauftritts.
        </p>

        <p>
          Weitere Rechtsgrundlage für die Verarbeitung ist ferner Art. 6 Abs. 1
          lit. c DSGVO. Wir unterliegen als Verantwortliche der rechtlichen
          Verpflichtung, den Einsatz technisch nicht notwendiger Cookies von der
          jeweiligen Nutzereinwilligung abhängig zu machen.
        </p>

        <p>
          Soweit erforderlich, haben wir mit dem Anbieter einen
          Auftragsverarbeitungsvertrag geschlossen, der den Schutz der Daten
          unserer Seitenbesucher sicherstellt und eine unberechtigte Weitergabe
          an Dritte untersagt.
        </p>

        <p>
          Weitere Informationen zum Betreiber und den Einstellungsmöglichkeiten
          des Cookie-Consent-Tools finden Sie direkt in der entsprechenden
          Benutzeroberfläche auf unserer Website.
        </p>

        <Title variant="h2">9) Rechte des Betroffenen</Title>
        <p>
          <b>9.1&nbsp;</b>Das geltende Datenschutzrecht gewährt Ihnen gegenüber
          dem Verantwortlichen hinsichtlich der Verarbeitung Ihrer
          personenbezogenen Daten die nachstehenden Betroffenenrechte
          (Auskunfts- und Interventionsrechte), wobei für die jeweiligen
          Ausübungsvoraussetzungen auf die angeführte Rechtsgrundlage verwiesen
          wird:
        </p>

        <ul>
          <li>Auskunftsrecht gemäß Art. 15 DSGVO;</li>
          <li>Recht auf Berichtigung gemäß Art. 16 DSGVO;</li>
          <li>Recht auf Löschung gemäß Art. 17 DSGVO;</li>
          <li>Recht auf Einschränkung der Verarbeitung gemäß Art. 18 DSGVO;</li>
          <li>Recht auf Unterrichtung gemäß Art. 19 DSGVO;</li>
          <li>Recht auf Datenübertragbarkeit gemäß Art. 20 DSGVO;</li>
          <li>
            Recht auf Widerruf erteilter Einwilligungen gemäß Art. 7 Abs. 3
            DSGVO;
          </li>
          <li>Recht auf Beschwerde gemäß Art. 77 DSGVO.</li>
        </ul>

        <p>
          <b>9.2&nbsp;</b>WIDERSPRUCHSRECHT
        </p>

        <p>
          WENN WIR IM RAHMEN EINER INTERESSENABWÄGUNG IHRE PERSONENBEZOGENEN
          DATEN AUFGRUND UNSERES ÜBERWIEGENDEN BERECHTIGTEN INTERESSES
          VERARBEITEN, HABEN SIE DAS JEDERZEITIGE RECHT, AUS GRÜNDEN, DIE SICH
          AUS IHRER BESONDEREN SITUATION ERGEBEN, GEGEN DIESE VERARBEITUNG
          WIDERSPRUCH MIT WIRKUNG FÜR DIE ZUKUNFT EINZULEGEN.
        </p>

        <p>
          MACHEN SIE VON IHREM WIDERSPRUCHSRECHT GEBRAUCH, BEENDEN WIR DIE
          VERARBEITUNG DER BETROFFENEN DATEN. EINE WEITERVERARBEITUNG BLEIBT
          ABER VORBEHALTEN, WENN WIR ZWINGENDE SCHUTZWÜRDIGE GRÜNDE FÜR DIE
          VERARBEITUNG NACHWEISEN KÖNNEN, DIE IHRE INTERESSEN, GRUNDRECHTE UND
          GRUNDFREIHEITEN ÜBERWIEGEN, ODER WENN DIE VERARBEITUNG DER
          GELTENDMACHUNG, AUSÜBUNG ODER VERTEIDIGUNG VON RECHTSANSPRÜCHEN DIENT.
        </p>

        <p>
          WERDEN IHRE PERSONENBEZOGENEN DATEN VON UNS VERARBEITET, UM
          DIREKTWERBUNG ZU BETREIBEN, HABEN SIE DAS RECHT, JEDERZEIT WIDERSPRUCH
          GEGEN DIE VERARBEITUNG SIE BETREFFENDER PERSONENBEZOGENER DATEN ZUM
          ZWECKE DERARTIGER WERBUNG EINZULEGEN. SIE KÖNNEN DEN WIDERSPRUCH WIE
          OBEN BESCHRIEBEN AUSÜBEN.
        </p>

        <p>
          MACHEN SIE VON IHREM WIDERSPRUCHSRECHT GEBRAUCH, BEENDEN WIR DIE
          VERARBEITUNG DER BETROFFENEN DATEN ZU DIREKTWERBEZWECKEN.
        </p>

        <Title variant="h2">
          10) Dauer der Speicherung personenbezogener Daten
        </Title>
        <p>
          Die Dauer der Speicherung von personenbezogenen Daten bemisst sich
          anhand der jeweiligen Rechtsgrundlage, am Verarbeitungszweck und –
          sofern einschlägig – zusätzlich anhand der jeweiligen gesetzlichen
          Aufbewahrungsfrist (z.B. handels- und steuerrechtliche
          Aufbewahrungsfristen).
        </p>

        <p>
          Bei der Verarbeitung von personenbezogenen Daten auf Grundlage einer
          ausdrücklichen Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO werden
          die betroffenen Daten so lange gespeichert, bis Sie Ihre Einwilligung
          widerrufen.
        </p>

        <p>
          Existieren gesetzliche Aufbewahrungsfristen für Daten, die im Rahmen
          rechtsgeschäftlicher bzw. rechtsgeschäftsähnlicher Verpflichtungen auf
          der Grundlage von Art. 6 Abs. 1 lit. b DSGVO verarbeitet werden,
          werden diese Daten nach Ablauf der Aufbewahrungsfristen routinemäßig
          gelöscht, sofern sie nicht mehr zur Vertragserfüllung oder
          Vertragsanbahnung erforderlich sind und/oder unsererseits kein
          berechtigtes Interesse an der Weiterspeicherung fortbesteht.
        </p>

        <p>
          Bei der Verarbeitung von personenbezogenen Daten auf Grundlage von
          Art. 6 Abs. 1 lit. f DSGVO werden diese Daten so lange gespeichert,
          bis Sie Ihr Widerspruchsrecht nach Art. 21 Abs. 1 DSGVO ausüben, es
          sei denn, wir können zwingende schutzwürdige Gründe für die
          Verarbeitung nachweisen, die Ihre Interessen, Rechte und Freiheiten
          überwiegen, oder die Verarbeitung dient der Geltendmachung, Ausübung
          oder Verteidigung von Rechtsansprüchen.
        </p>

        <p>
          Bei der Verarbeitung von personenbezogenen Daten zum Zwecke der
          Direktwerbung auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO werden
          diese Daten so lange gespeichert, bis Sie Ihr Widerspruchsrecht nach
          Art. 21 Abs. 2 DSGVO ausüben.
        </p>

        <p>
          Sofern sich aus den sonstigen Informationen dieser Erklärung über
          spezifische Verarbeitungssituationen nichts anderes ergibt, werden
          gespeicherte personenbezogene Daten im Übrigen dann gelöscht, wenn sie
          für die Zwecke, für die sie erhoben oder auf sonstige Weise
          verarbeitet wurden, nicht mehr notwendig sind.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
