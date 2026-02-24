import { ManualPage } from '../types';

export const MANUAL_CONTENT: ManualPage[] = [
    {
        "page": 1,
        "blocks": [
            "Manuale Utente",
            "DNAKE Cloud Platform",
            "Ver.2.2.0"
        ],
        "images": []
    },
    {
        "page": 2,
        "blocks": [
            "Indice",
            "1. Introduzione",
            "2. Accesso e Disconnessione (Login/Logout)",
            "3. Centro Personale e Messaggi di Sistema",
            "4. Distributor",
            "5. Reseller/Installer",
            "6. Property Manager",
            "7. Appendice A"
        ],
        "images": []
    },
    {
        "page": 3,
        "blocks": [
            "1 Introduzione",
            "1.1 Introduzione",
            "1. La piattaforma DNAKE Cloud prevede 3 tipologie di account: Distributor, Sub-distributor (opzionale), Reseller/Installer e Property Manager. Utenti diversi hanno funzioni uniche sulla piattaforma.",
            "2. Il Reseller/Installer può anche creare siti (Site) e passare alla visualizzazione come Property Manager per gestirli.",
            "3. Un singolo Property Manager può gestire più siti.",
            "Panoramica dei ruoli:",
            " Distributor e Sub-distributor: Messaggi di Sistema, Centro Personale, gestione Reseller/Installer, License Log, Messaggi Personali.",
            " Reseller/Installer: Messaggi di Sistema, Centro Personale, gestione Property Manager, gestione Progetti (Community/Single-family), gestione Device, License Log, Aggiornamenti (OTA), Log di sistema.",
            " Property Manager: Messaggi di Sistema, Centro Personale, gestione Appartamenti e Resident, Controllo Accessi (Access Control), Gestione Allarmi, Contact Technical Support, Log degli Eventi."
        ],
        "images": [
            "images/image10.png",
            "images/image11.png"
        ]
    },
    {
        "page": 4,
        "blocks": [
            "1.2 Introduzione ad alcune icone",
            "1. Le icone che potresti incontrare nella piattaforma:",
            " Edit (Modifica)",
            " Hide search (Nascondi ricerca)",
            " Delete (Elimina)",
            " Refresh (Aggiorna)",
            " Details (Dettagli)",
            " Synchronize All Residents data (Sincronizza tutti i dati dei Resident)",
            " Resent Email (Invia nuovamente l'Email di registrazione)",
            " Resident Details (Dettagli del Resident)",
            " Device"
        ],
        "images": [
            "images/image27.png",
            "images/image4.png",
            "images/image5.png",
            "images/image6.png",
            "images/image7.png",
            "images/image8.png"
        ]
    },
    {
        "page": 5,
        "blocks": [
            " Edit Value-added Services (Modifica i Servizi a Valore Aggiunto)",
            " License Management (Gestione License)",
            " Renew (Rinnova License)",
            " Sync again (Sincronizza di nuovo)",
            " Set as Owner (Imposta come Proprietario dell'appartamento)",
            " Replace Device (Sostituisci Device)",
            " Introduction (Istruzioni/Aiuto)",
            " Access Device Webserver (Accedi al pannello Web del Device)"
        ],
        "images": [
            "images/image15.png"
        ]
    },
    {
        "page": 6,
        "blocks": [
            "1.3 Dispositivi e soluzioni supportate",
            "1. Aggiungiamo continuamente nuove funzionalità alla piattaforma e all'app DNAKE Smart Pro. Questi sono i modelli attualmente supportati:",
            " Door Station (Postazioni Esterne): C112, S212, S213K, S213M, S215, S615, S617, S414.",
            " Indoor Monitor (Monitor Interni): E214, E216, E217, A416, E416, H618.",
            " Master Station (Centralina Portineria): 902C-A.",
            " Controllo Accessi: AC01, AC02, AC02C.",
            " Moduli Ascensore: EVC-ICC-A5.",
            "Modalità e Soluzioni configurabili:",
            "Door Station senza Indoor Monitor:",
            "Requisiti: La Door Station deve essere connessa alla rete internet, registrata sul server SIP e aggiunta alla piattaforma.",
            "Setup: Selezionare la license \"Without Indoor Monitor\" quando si crea l'appartamento."
        ],
        "images": [
            "images/image20.png"
        ]
    },
    {
        "page": 7,
        "blocks": [
            "Door Station con Indoor Monitor:",
            "Requisiti: Sia la Door Station che l'Indoor Monitor devono essere connessi a internet e aggiunti alla piattaforma. La Door Station deve supportare e registrarsi al server SIP.",
            "Setup: Selezionare la license \"With Indoor Monitor\" (Con Monitor Interno) quando si crea l'appartamento.",
            "Senza Door Station, ma con Indoor Monitor:",
            "Requisiti: L'Indoor Monitor deve essere connesso a internet e aggiunto alla piattaforma.",
            "Setup: Selezionare la license \"With Indoor Monitor\".",
            "Chiamata su Rete Locale (LAN - con Indoor Monitor):",
            "Questa configurazione opera senza connessione Internet, usando la rete locale per chiamate P2P. Nessuna registrazione al server SIP è richiesta. Nessuna connessione Internet necessaria.",
            "Chiamata su Rete Pubblica (Internet - con Indoor Monitor):",
            "Connettività Cloud: I dispositivi si connettono alla propria rete e si registrano al Cloud. Consentono la comunicazione inter-dispositivo anche senza essere nella stessa sottorete LAN, offrendo maggiore flessibilità."
        ],
        "images": [
            "images/image21.png",
            "images/image22.png",
            "images/image23.png"
        ]
    },
    {
        "page": 8,
        "blocks": [
            "2. Spiegazione dei termini DNAKE:",
            "With Indoor Monitor: Si riferisce alla soluzione P2P con monitor interno (dev'essere installato per ogni appartamento).",
            "Without Indoor Monitor: Si riferisce alla soluzione SIP o P2P senza monitor. Se la piattaforma riconosce che il Device la supporta, utilizzerà il protocollo SIP automaticamente.",
            "Value-added Services (Servizi a Valore Aggiunto): Si riferisce ai servizi premium come la chiamata diretta SIP al telefono fisso (Landline). Una volta utilizzato, questo servizio non è rimborsabile.",
            "Remote Management: Permette ai Property Manager di usare l'app Smart Pro per restare connessi anche durante i giri di ispezione, evitando di perdere comunicazioni o chiamate importanti dal citofono."
        ],
        "images": [
            "images/image14.png"
        ]
    },
    {
        "page": 9,
        "blocks": [
            "2 Login e Logout",
            "2.1 Accesso (Login)",
            "Step 1: Fornisci la tua email e le informazioni a DNAKE o ai partner DNAKE per registrare un account. Riceverai la password iniziale nella tua casella di posta.",
            "Step 2: Visita il sito della piattaforma e accedi con le tue credenziali. A seconda della regione, accedi al Data Center corretto:",
            " European data center (Europa): https://eu-cloud.dnake.com",
            " American data center (America): https://us-cloud.dnake.com",
            " Indian data center (India): https://ind-cloud.dnake.com",
            "2.1.2 Logout",
            "Fai clic sull'icona del tuo Account Personale nell'angolo in alto a destra e seleziona 'Logout' per uscire dalla sessione."
        ],
        "images": [
            "images/image100.png",
            "images/image27.png"
        ]
    },
    {
        "page": 10,
        "blocks": [
            "2.2 Recupero Password dimenticata",
            "1. Per recuperare o ripristinare la password:",
            "Step 1: Nella pagina di login, fai clic su \"Forget Password?\".",
            "Step 2: Inserisci il tuo indirizzo Email e clicca \"Next\".",
            "Step 3: La piattaforma invierà un link per resettare la password alla tua casella e-mail. Controlla la posta.",
            "Step 4: Specifica una nuova password rispettando i requisiti di sicurezza. Torna alla pagina di Login e accedi con le tue nuove credenziali."
        ],
        "images": [
            "images/image31.png"
        ]
    },
    {
        "page": 11,
        "blocks": [
            "3 Centro Personale e Messaggi di Sistema",
            "3.1 Informazioni Base (Basic information)",
            "1. Dal Centro Personale puoi verificare i dettagli dell'account con cui sei loggato. Troverai il tuo numero di telefono, e-mail, ruolo (Role), progetto gestito (Project), data di creazione e nickname. Puoi anche aggiornare la foto profilo.",
            "3.2 Cambio Password (Change Password)",
            "1. Se desideri modificare la password attuale in autonomia, clicca su \"Change Password\" all'interno del menù Personale e segui le istruzioni."
        ],
        "images": [
            "images/image32.png", "images/image33.png"
        ]
    },
    {
        "page": 12,
        "blocks": [
            "3.3 Login Settings (Impostazioni di Accesso)",
            "1. Questa sezione permette di configurare l'autenticazione a due fattori. Se abilitata, la piattaforma invierà un codice di verifica alla tua Email ogni volta che clicchi su \"Log in\". Questo aiuta a proteggere fortemente il tuo account da accessi non autorizzati. Se disattivata, accederai usando solamente email e password.",
            "3.4 Messaggi di Sistema (System Message)",
            "1. I messaggi di sistema ti arrivano dai membri sovrastanti o sottostanti alla tua gerarchia. Per esempio, se sei un Reseller, riceverai notifiche e messaggi dal Distributor e potrai inoltrare i tuoi a Property Manager e colleghi."
        ],
        "images": [
            "images/image34.png", "images/image35.png", "images/image36.png"
        ]
    },
    {
        "page": 13,
        "blocks": [
            "4 Distributor",
            "4.1 Gestione dei Device (Manage the device)",
            "I Distributor possono accedere al menù Device per visualizzare e monitorare l'elenco dei dispositivi aggiunti dai propri Reseller o Installatori associati. Questo offre una visione d'insieme della distribuzione dei dispositivi, garantendo al contempo una gestione gerarchica accurata.",
            "La schermata Device include:",
            " Site: Il sito di appartenenza a cui è associato il dispositivo.",
            " Reseller/Installer: Il referente (installatore/rivenditore) che lo ha importato.",
            " Device Name: Il nome del dispositivo e l'ubicazione.",
            " Type: Il tipo (Indoor Monitor, Door Station...).",
            " Model: Il modello esatto (es. S617).",
            " Status: Stato online/offline.",
            " MAC Address: Indirizzo di rete MAC associato in fabbrica."
        ],
        "images": [
            "images/image37.png"
        ]
    },
    {
        "page": 14,
        "blocks": [
            "4.2 Gestione Reseller/Installer",
            "4.2.1 Aggiungere un account Installer",
            "Step 1: Naviga nella colonna Reseller/installer e clicca \"Add\" (Aggiungi).",
            "Step 2: Compila le informazioni (Nome Azienda, Email, Lingua). Presta massima attenzione alla corretta digitazione dell'Email in quanto costituirà l'account d'accesso dell'Installer. La sua prima password sarà generata e inviata proprio a quella e-mail.",
            "4.2.2 Gestire l'account",
            "Dopo aver registrato un Reseller/Installer, puoi modificarne le informazioni (Edit), eliminarlo (Delete), ispezionarne i dettagli, inviare nuovamente l'e-mail d'invito o gestirne le License disponibili."
        ],
        "images": [
            "images/image104.png"
        ]
    },
    {
        "page": 15,
        "blocks": [
            "4.2.3 License Management (Gestione License)",
            "La License cloud è necessaria affinché il Resident (Condomino/Utente Finale) possa utilizzare l'App. Ogni utente host/principale dell'app DNAKE Smart Pro necessita di almeno 1 License per usufruire del Cloud. Tipologie disponibili per l'allocazione:",
            " With Indoor Monitor: Per le installazioni che includono l'acquisto e posa del Monitor interno per ogni unità immobiliare.",
            " Without Indoor Monitor: Per le installazioni in cui ci si affida completamente alla connessione smartphone-nuvola.",
            " Value-added Services: Quote di ricarica per funzionalità premium come inoltro chiamata a telefono cellulare/rete fissa (Landline).",
            " Remote Management: Permessi da sbloccare al Property Manager che li necessita per fare da \"portineria mobile\" via smartphone.",
            "Come Distributor, il tuo compito è ridimensionare o aumentare queste quote nei portafogli dei tuoi Installatori e Reseller.",
            "4.3 License Log e 4.4 My Message",
            "Da License Log puoi prendere visione della totalità delle tue license storiche comprate e assegnate."
        ],
        "images": [
            "images/image43.png", "images/image44.png", "images/image45.png"
        ]
    },
    {
        "page": 16,
        "blocks": [
            "Tramite la tendina My Message puoi creare (Add) dei messaggi o notifiche, definendo un Oggetto, un test contenuto, i destinatari (Recipients) tra i tuoi Installer e programmarne l'invio. Cliccando poi su un messaggio inviato se ne potranno ispezionare i Dettagli.",
            "5 Reseller/Installer",
            "5.1 Home Page",
            "La dashboard offre una vista rapida per tenere traccia del numero totale di siti e dispositivi attivi (Device). Offre inoltre scorciatoie operative rapide per avviare la creazione di una nuova Community (condominio) o di un Single-Family (casa singola/villa)."
        ],
        "images": [
            "images/image101.png",
            "images/image152.png"
        ]
    },
    {
        "page": 17,
        "blocks": [
            "5.2 Property Manager",
            "5.2.1 Aggiungere un account Property Manager",
            "Step 1: Apri la colonna Property Manager e fai clic su Add (Aggiungi) per creare un nuovo account Amministratore di Sistema/Condominio.",
            "Step 2: Compila le informazioni (Azienda, Email, Lingua). Anche qui l'Email è essenziale ed agirà da identificativo di Login al cloud per questo account.",
            "5.2.2 Gestione Account Property Manager",
            "Dopo l'avvenuta creazione di un account Property Manager, è possibile modificarlo (Edit), cancellarlo (Delete) o ispezionarne lo storico. Puoi anche decidere di fargli reinviare l'e-mail di benvenuto/registrazione per recuperarne l'accesso."
        ],
        "images": [
            "images/image104.png",
            "images/image104.png"
        ]
    },
    {
        "page": 18,
        "blocks": [
            "5.3 Site",
            "5.3.1 Aggiungere una Community (Progetto Condominiale)",
            "Step 1: Spostati nella scheda Site e clicca sul pulsante \"New Community\".",
            "Step 2: Inserisci le generalità, tra cui Nome della Community e Paese/Regione (fortemente consigliato per il fuso orario).",
            "Opzioni extra della Community:",
            " Allow Residents Register Face (Consenti Autoregistrazione Volto): Abilitando questa voce, se le tue Door Station supportano il riconoscimento facciale, i residenti potranno caricare una loro foto in completa autonomia dall'APP.",
            " Remote Management: Se attivata, la portineria o sicurezza potrà gestire le postazioni esterne videocitofoniche (Villa Station/Door Station) dei residenti configurate come varco e accedere non solo a quest'ultime, ma fungere da \"posto interno da passeggio\"."
        ],
        "images": [
            "images/image102.png",
            "images/image102.png"
        ]
    },
    {
        "page": 19,
        "blocks": [
            " Sync Resident to Phonebook by default: Se abitato, all'istante della creazione residenti abiliterà la propulsione di suddetti contatti in automatico alla rubrica (Phonebook) locale della postazione esterna.",
            " Report Device Anomalies: Attivazione notifiche e report automatico all'amministratore (via mail) per device in potenziale anomalia.",
            "5.3.2 Gestione della Community",
            "Con la Community ora prodotta, cliccandola, ci si tuffa nel gestore vero e proprio dei nodi (Site management page), degli appartmenti (Apartments) e dei device annessi per quel condominio."
        ],
        "images": [
            "images/image103.png",
            "images/image112.png"
        ]
    },
    {
        "page": 20,
        "blocks": [
            "5.3.4 Gestione Device e Resident in un Site",
            "Una volta internamente ad un Site (Community), potrai sfruttare la macro-struttura sinistra. Lì potrai avviare o cliccare \"New Building\" (Nuovo Edificio) per creare blocchi o scale e \"Public Areas\" per le aree comuni dotate di lettori, cancelli e varchi principali.",
            "Creazione di Dispositivi in un'Area Pubblica (Public Area):",
            "Step 1: Clicca \"New Public Area\" per l'ingresso condominiale, i cancelli etc.",
            "Step 2: A destra apparirà Add Device (Aggiungi Dispositivo). Premi, e riempi coi dati target: Modello, Type, e MAC address. Salva.",
            "Gestione di un Edificio (Building) e di un Appartamento (Apartment):",
            "Step 1: Ritorna a Site Management, seleziona \"New Building\", poi selezionale per aggiungere appartamenti (Add Apartment).",
            "Step 2: Si aprirà un modulo di assegnazione di Apartmet Number (n° dell'interno/stanza) e la selezione della License essenziale."
        ],
        "images": ["images/image105.png", "images/image106.png", "images/image107.png"]
    },
    {
        "page": 21,
        "blocks": [
            "Nota sui Modelli License: Scegli bene fin da subito le definizioni \"Without Indoor Monitor\" per installazioni di sola App e Device esterno e \"With Indoor Monitor\" se c'è fisica dotazione hardware negli alloggi privati. Se commetti un errore, non potrai sostituire la License! Dovrai eliminare la risorsa appartamento e crearla di nuovo!",
            "Step 3: Popola tale Appartamento cliccando al suo interno e usando i pulsanti Device (Aggiungi Indoor Monitor per l'appartamento) e Resident (Aggiungi Resident).",
            "Note App/Email: Lo stesso indirizzo Email utente DNAKE (Registrato nella Smart Pro app) può presenziare fino in un totale massimo simultaneo di venti (20) appartamenti diversi nel sistema Cloud DNAKE!",
            "5.3.5 Registrazione Autonoma Inquilini (QR Code)",
            "La piattaforma cloud supporta ed è in grado di snellire i collaudi per i Property Manager permettendo ad ogni utente, con una scansione di un codice QR dedicato (esibito magari appeso nell'androne o lasciato in cassetta lettere) di registrarsi all'app per ottenere le credenziali automaticamente, senza alcun inserimento manuale da consolle!",
            "Step 1: Abilita il toggle Register Account in the APP nel setup macroscopico della Community sotto il gruppo Site.",
            "Step 2: Accertati che nei form di creazione dei singoli Appartamenti tu accenda Generate Apartment QR Code e specifo un limite di scan ammissibili (scannable times).",
            "Step 3: Clicca sul pulsante Details dell'appartamento e l'apposito Codice QR da scaricare verrà esposto e manifestato a video. Stampa e distribuiscilo ai residenti!"
        ],
        "images": [
            "images/image113.png",
            "images/image115.png",
            "images/image116.png"
        ]
    },
    {
        "page": 22,
        "blocks": [
            "5.3.6 Telefono Fisso - Rete Fissa - Landline",
            "Step 1: Accertati che il Device (Door station installata in quell'area o Building) lo supporti come HW e SW nativo.",
            "Step 2: Negli attributi e impostazioni Edit dell'Appartamento in considerazione, fletti la preferenza al \"Value-added Services\" al call type apposito o numero e salvalo.",
            "Aggiunta Struttura Unifamigliare/Casolare/Casa Singola:",
            "Si differenzia dalla comunità per una gestione centralizzata al Single-Family in cui Area per l'hardware del perimetro si fonde con Resident. Usa Add Single-Family per compilarne lo scheletro in egual misura a come operato nella Community Mode."
        ],
        "images": [
            "images/image143.png",
            "images/image112.png"
        ]
    },
    {
        "page": 23,
        "blocks": [
            "5.4 Operatività Generiche sui Device",
            "5.4.1 Aggiunta Simultanea (Add in batch)",
            "Scaricando tramite Template Download potrai popolare massivamente i Device MAC in file tabulari .xlsx, da caricare col tasto olografo Upload specificando Add in batch.",
            "Automatic Device Deployment to the Cloud Platform:",
            "Compreso dal SiteID di un progetto, puoi attivare il toggle e riempire Building No, Unit No, etc. consentendo il deploy e associazione unanime via web/app al primo start HW.",
            "5.4.2 Sostituire Dispositivo Esistente (Replace device)",
            "Essenziale in attività come il Servizio Guasti (RMA). Permesso unicamente per medesimo modello prodotto, in Device colonna usa \"Replace Device\". Digita il nuovo MAC Address vergine e la rete. I dati pre-esistenti affluiranno automaticamente dal backup in Cloud al rimpiazzo appena quest'ultimo annuncerà on-line il suo stato."
        ],
        "images": [
            "images/image81.png", "images/image83.png"
        ]
    },
    {
        "page": 24,
        "blocks": [
            "5.4.3 Accesso WebServer da Remoto (Tunneling Sicuro - FRP)",
            "Dal Firmware aggiornato (e provvisto intrinseco meccanismo FRP) vai prima in interfaccia grafica locale Device Admin e poi su System -> Remote Access abilitandolo.",
            "Da Cloud, usa l'ingranaggio del device e seleziona Access Device Webserver. Hai ora 30 Minuti in cui DNAKE ti erige una linea privata VPN cifrata per navigarlo fuori rete locale.",
            "5.4.4 Settaggio Relé e Manovra Telecomando Hardware",
            "Dalle impostazioni d'ingranaggio More->Relay Setting, i vari terminali contatti puliti verranno esposti in schermata. Puoi renderli \"invisibili\" (inattivi) per lo Smart Pro APP o configurargli etichette.",
            "5.5 & 5.6 & 5.7 & 5.8: License Log & OTA (Aggiornamenti Firmware)",
            "Selezionando una gamma dai dispositivi visualizzati il DNAKE Cloud Platform funge da File Server di rilascio. È possibile disporre ed auto-ingegnerizzare installazioni firmware o downgrade anche a specific orari programmati (Update Time).",
            "6 Property Manager"
        ],
        "images": [
            "images/image109.png", "images/image110.png", "images/image108.png"
        ]
    },
    {
        "page": 25,
        "blocks": [
            "6.1 Home Page (Bacheca e Dashboard)",
            "La dashboard fornisce una panoramica istantanea delle funzioni principali. Troverai la sezione Active Security Alarm che mostra in tempo reale le emergenze e zone attivate e la Quick Operation per bypassare lunghi percorsi e creare avvisi o nuove utenze residenti.",
            "Statistiche Visibili (Information):",
            "Access Analysis: Segnala ed enumera graficamente, quotidianamente, settimanalmente o mensilmente i tentativi di accesso autorizzati (Successful) o falliti (Failed) inclusi i Log fotografici (Snapshots) per l'identificazione, i metodi sblocco e gli utenti associati.",
            "Call Analysis: Eroga in egual suddivisione di timeline uno spettro accurato quantitativo sul volume delle chiamate generatosi nelle postazioni citofoniche interne o remote nel medesimo periodo di analisi.",
            "6.2 Site",
            "6.2.1 Gestione Dispositivi (Device management)",
            "Synchronize all residents' data (Sincronizza rubrica residenti): Se i nomi non figurano immediatamente scesi sulle pulsantiere, forzane la sincronia su questo tasto. Tutte le modifiche video/privacy apportabili a specifici residenti sono fuse inoltre in Resident Details, che offre riassunti gerarchici Unit/Apartment e opzioni per servizi Video o Landline abilitabili centralmente."
        ],
        "images": [
            "images/image111.png",
            "images/image112.png",
            "images/image38.png", "images/image39.png", "images/image40.png"
        ]
    },
    {
        "page": 26,
        "blocks": [
            "6.2.3 Gestione dei Resident (Resident management)",
            "Importazione Singola (Add a new resident):",
            "Sposta il focus in Site -> Edit su un preciso Building -> Resident -> Add Resident. Inserisci identificazioni chiare in Nome, Indirizzo mail vero (cruciale per account Smart pro mobile), e seleziona le opzioni Card/PIN e se vuoi spingere l'allineamento automatico (Syncing to the door station phonebook).",
            "Aggiunta Card & PIN (RFID/NFC):",
            "Tramite la voce Edit in corrispondenza al Resident bersagliato, avrai un modulo apposito Card. Usufruendo di hardware da tavolo (Card Reader) su porta virtuale COM scegli Compatible Mode per l'ascolto, oppure inserisci manualmente la sequenza di tessera Full Card No. Mode e premi Save.  Ugualmente procedi in Add PIN code scendendo nella modulistica sottostante per conferire la macro-struttura numerica del PIN.",
            "Importazione Massiva e Esportazione:",
            "I tasti Import Residents/Cards prevedono lo scaricamento di un Template Excel/CSV per farti incollare grandissimi flussi di locatari senza farli a mano 1 ad 1. Per effettuare salvataggi dei dati in locale su PC si userà il tasto gemello Export All Residents."
        ],
        "images": [
            "images/image117.png",
            "images/image118.png",
            "images/image119.png",
            "images/image120.png",
            "images/image121.png",
            "images/image122.png",
            "images/image123.png",
            "images/image124.png",
            "images/image125.png"
        ]
    },
    {
        "page": 27,
        "blocks": [
            "6.3 Controllo Accessi (Access Control)",
            "6.3.1 Tassonomia Permessi Personali",
            "I gruppi d'accesso includono regole per profili netti (Person) quali: Staff (Personale), Tenant (Condòmini), Visitor (Visitatori temp) e Customized (Gruppi personalizzati di ditte come Pulizie/Manutenzione).",
            "Step 1/2: Dagli Add di ogni gruppo, aggiungerai sempre Nome primario, eventuali fotografie del volto (Face Image) o codici QR generati on-the-go per l'alloggiato.",
            "6.3.2 Regole di Accesso (Access Rule)",
            "The Access Rule Type fornisce un dualismo comportamentale massivo:",
            " Regola Standard (Normal): Controlla severamente i transiti vincolandoli a fasce temporali ed autorizzazioni limitate. Specifica il Validity Period (Periodo di validità es. mese per contratto mensile estivo) ed un Frequency (Frequenza ricalcolata, tipo LUN-VEN h 8-18). Usa Additional Access Rule per annettere o appendere ulteriori stratificazioni.",
            " Accesso Libero (Free Access): Una funzione \"Sempre aperto\" che disabilita i controlli in determinate fasce per permettere il transito a tutta la popolazione specificata nei Device legati al Rule."
        ],
        "images": [
            "images/image139.png",
            "images/image139.png"
        ]
    },
    {
        "page": 28,
        "blocks": [
            "6.3.3 Codici di Consegna Parcel e Spedizioni (Delivery Passcode)",
            "Ottimo sostitutivo di \"Lascia il pacco lì che apro\". (Supportato per es. su S617).",
            "In Site imposta la Door Station su ON -> Delivery.",
            "Vai in Access Control -> Person -> Add Delivery per un corriere.",
            "Produci il Delivery Code associato alla Delivery Rule pertinente. Il Fattorino in arrivo usa l'icona corriere, immette il codice, digita l'appartamento bersaglio col pacco e il Resident prenderà sul suo telefono una notifica di Parcel Arrival (Pacco Arrivato!).",
            "6.5 / 6.6 / 6.7 Alarm, Logistica Massiva e Eventi Storici",
            "La piattaforma, nella Dashboard di Sistema, incamera massicce infornate storiche su Security Alarm (eventi d'allarme scattati da rivelatori domestici dell'indoor monitor nel mese scorso). Traccia nel Menù Log i Call log, Config log ed anche chi ha chiamato ascensori e quando (Elevator Control module storico).",
            "Tale portale in My Message si tramuta in Posta Elettronica nativa di broadcasting: avvisare i 60 condòmini dell'arrivo dello spazzacamino la martedì è materia di un singolo Broadcast inviato massivamente ai loro Smart Pro App accounts!"
        ],
        "images": [
            "images/image136.png", "images/image137.png", "images/image138.png", "images/image140.png",
            "images/image142.png", "images/image144.png", "images/image149.png", "images/image150.png", "images/image151.png",
            "images/image145.png", "images/image146.png", "images/image147.png", "images/image148.png"
        ]
    },
    {
        "page": 29,
        "blocks": [
            "6.8 Contatta l'Assistenza Tecnica (Contact Technical Support)",
            "Il Property Manager cliccando tale pannello evoca a schermo i riferimenti anagrafici appositi telefonici ed e-mail (se inseriti preventivamente) dell'Integratore System Reseller/Installer proprietario e realizzatore dell'impianto in loco.",
            "6.9 Remote Management (Gestione Remota Mobile Integrata)",
            "Dotandosi della prerogativa tramite la spunta accesa dal proprio Installatore di riferimento (vedi Capitolo 5), un Property manager loggato su Smart Pro vedrà interconnessi i Device ed il centralino come fosse in portineria. È un Remote Management indispensabile alle ronde di ispezione serale da guardia mobile giurata.",
            "7 Appendice A: Regionalità server",
            "DNAKE incardina un'ecosistema server regionale decentralizzato per ottemperare alle massime normative di latenza e privacy (tra cui il GDPR).",
            "URL di Riferimento in Base alla geolocalizzazione dei servizi acquistanti (e Account App installatrice corrispondente):"
        ],
        "images": [
            "images/image153.png", "images/image154.png", "images/image155.png",
            "images/image153.png"
        ]
    },
    {
        "page": 30,
        "blocks": [
            "1. Server Europeo (EU Data Center): https://eu-cloud.dnake.com",
            "Risiede infrastrutturalmente in Europa e ne assorbe tutto l'emisfero logico: Italia, Francia, UK, Germania, Spagna etc.",
            "2. Server Nord Americano e LatAm (US Data Center): https://us-cloud.dnake.com",
            "Copertura totale su Canada, USA, Messico, Perù, Argentina, Brasile.",
            "3. Server Indiano e Asia (IND Data Center): https://ind-cloud.ss-iot.com/login",
            "Regione designata all'Oriente.",
            "Nota SIP App: Le nazioni e country code validati per le licenze P2P e PBX SIP o Landline sono globalmente listati a back-end, si prega di verificare la conformità tramite proprio delegato Distributore."
        ],
        "images": []
    }
];