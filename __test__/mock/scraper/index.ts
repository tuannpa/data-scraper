const tableRowsMockData = [
    ['Mark', 'Athlete', 'Date', 'Venue'],
    [
        '1.46 m (.mw-parser-output .frac{white-space:nowrap}.mw-parser-output .frac .num,.mw-parser-output .frac .den{font-size:80%;line-height:0;vertical-align:super}.mw-parser-output .frac .den{vertical-align:sub}.mw-parser-output .sr-only{border:0;clip:rect(0,0,0,0);clip-path:polygon(0px 0px,0px 0px,0px 0px);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}4 ft 9+1⁄4 in)',
        'Nancy Voorhees (USA)',
        '20 May 1922',
        'Simsbury[1]'
    ],
    [
        '1.485 m (4 ft 10+1⁄4 in)',
        'Elizabeth Stine (USA)',
        '26 May 1923',
        'Englewood, New Jersey[1][2]'
    ],
    [
        '1.485 m (4 ft 10+1⁄4 in)',
        'Sophie Eliott-Lynn (GBR)',
        '6 August 1923',
        'Brentwood[1]'
    ],
    [
        '1.524 m (5 ft 0 in)',
        'Phyllis Green (GBR)',
        '11 July 1925',
        'London[1]'
    ],
    [
        '1.552 m (5 ft 1 in)',
        'Phyllis Green (GBR)',
        '2 August 1926',
        'London[1]'
    ],
    [
        '1.58 m (5 ft 2 in)',
        'Ethel Catherwood (CAN)',
        '6 September 1926',
        'Regina[1]'
    ],
    [
        '1.58 m (5 ft 2 in)',
        'Lien Gisolf (NED)',
        '3 July 1928',
        'Brussels[1]'
    ],
    [
        '1.595 m (5 ft 2+3⁄4 in)',
        'Ethel Catherwood (CAN)',
        '5 August 1928',
        'Amsterdam[1]'
    ],
    [
        '1.605 m (5 ft 3 in)',
        'Lien Gisolf (NED)',
        '18 August 1929',
        'Maastricht[1]'
    ],
    [
        '1.62 m (5 ft 3+3⁄4 in)',
        'Lien Gisolf (NED)',
        '12 June 1932',
        'Amsterdam[1]'
    ],
    [
        '1.65 m (5 ft 4+3⁄4 in)',
        'Jean Shiley (USA)',
        '7 August 1932',
        'Los Angeles[1]'
    ],
    [
        '1.65 m (5 ft 4+3⁄4 in)',
        'Mildred Didrikson (USA)',
        '7 August 1932',
        'Los Angeles[1]'
    ],
    [
        '1.66 m (5 ft 5+1⁄4 in)',
        'Dorothy Odam (GBR)',
        '29 May 1939',
        'Brentwood[1]'
    ],
    [
        '1.66 m (5 ft 5+1⁄4 in)',
        'Esther van Heerden (South Africa)',
        '29 March 1941',
        'Stellenbosch[1]'
    ],
    [
        '1.66 m (5 ft 5+1⁄4 in)',
        'Ilsebill Pfenning (SUI)',
        '27 July 1941',
        'Lugano[1]'
    ],
    [
        '1.71 m (5 ft 7+1⁄4 in)',
        'Fanny Blankers-Koen (NED)',
        '30 May 1943',
        'Amsterdam[1]'
    ],
    [
        '1.72 m (5 ft 7+1⁄2 in)',
        'Sheila Lerwill (GBR)',
        '7 July 1951',
        'London[1]'
    ],
    [
        '1.73 m (5 ft 8 in)',
        'Aleksandra Chudina (URS)',
        '22 May 1954',
        'Kiev[1]'
    ],
    [
        '1.74 m (5 ft 8+1⁄2 in)',
        'Thelma Hopkins (GBR)',
        '5 May 1956',
        'Belfast[1]'
    ],
    [
        '1.75 m (5 ft 8+3⁄4 in)',
        'Iolanda Balaș (ROM)',
        '14 July 1956',
        'Bucharest[1]'
    ],
    [
        '1.76 m (5 ft 9+1⁄4 in)',
        'Mildred McDaniel (USA)',
        '1 December 1956',
        'Melbourne[1]'
    ],
    [
        '1.76 m (5 ft 9+1⁄4 in)',
        'Iolanda Balaş (ROM)',
        '13 October 1957',
        'Bucharest[1]'
    ],
    [
        '1.77 m (5 ft 9+1⁄2 in)',
        'Zheng Fengrong (CHN)',
        '17 November 1957',
        'Beijing[1]'
    ],
    [
        '1.78 m (5 ft 10 in)',
        'Iolanda Balaş (ROM)',
        '7 June 1958',
        'Bucharest[1]'
    ],
    [
        '1.80 m (5 ft 10+3⁄4 in)',
        'Iolanda Balaş (ROM)',
        '22 June 1958',
        'Cluj-Napoca[1]'
    ],
    [
        '1.81 m (5 ft 11+1⁄4 in)',
        'Iolanda Balaş (ROM)',
        '31 July 1958',
        'Poiana Brasov[1]'
    ],
    [
        '1.82 m (5 ft 11+1⁄2 in)',
        'Iolanda Balaş (ROM)',
        '4 October 1958',
        'Bucharest[1]'
    ],
    [
        '1.83 m (6 ft 0 in)',
        'Iolanda Balaş (ROM)',
        '18 October 1958',
        'Bucharest[1]'
    ],
    [
        '1.84 m (6 ft 1⁄4 in)',
        'Iolanda Balaş (ROM)',
        '21 September 1959',
        'Bucharest[1]'
    ],
    [
        '1.85 m (6 ft 3⁄4 in)',
        'Iolanda Balaş (ROM)',
        '6 June 1960',
        'Bucharest[1]'
    ],
    [
        '1.86 m (6 ft 1 in)',
        'Iolanda Balaş (ROM)',
        '10 July 1960',
        'Bucharest[1]'
    ],
    [
        '1.87 m (6 ft 1+1⁄2 in)',
        'Iolanda Balaş (ROM)',
        '15 April 1961',
        'Bucharest[1]'
    ],
    [
        '1.88 m (6 ft 2 in)',
        'Iolanda Balaş (ROM)',
        '18 June 1961',
        'Warsaw[1]'
    ],
    [
        '1.90 m (6 ft 2+3⁄4 in)',
        'Iolanda Balaş (ROM)',
        '8 July 1961',
        'Budapest[1]'
    ],
    [
        '1.91 m (6 ft 3 in)',
        'Iolanda Balaş (ROM)',
        '16 July 1961',
        'Sofia[1]'
    ],
    [
        '1.92 m (6 ft 3+1⁄2 in)',
        'Ilona Gusenbauer (AUT)',
        '4 September 1971',
        'Vienna[1]'
    ],
    [
        '1.92 m (6 ft 3+1⁄2 in)',
        'Ulrike Meyfarth (FRG)',
        '4 September 1972',
        'Munich[1]'
    ],
    [
        '1.94 m (6 ft 4+1⁄4 in)',
        'Yordanka Blagoeva (BUL)',
        '24 September 1972',
        'Zagreb[1]'
    ],
    [
        '1.94 m (6 ft 4+1⁄4 in)',
        'Rosemarie Witschas (GDR)',
        '24 August 1974',
        'Berlin[1]'
    ],
    [
        '1.95 m (6 ft 4+3⁄4 in)',
        'Rosemarie Ackermann (GDR)',
        '8 September 1974',
        'Rome[1]'
    ],
    [
        '1.96 m (6 ft 5 in)',
        'Rosemarie Ackermann (GDR)',
        '8 May 1976',
        'Dresden[1]'
    ],
    [
        '1.96 m (6 ft 5 in)',
        'Rosemarie Ackermann (GDR)',
        '3 July 1977',
        'Dresden[1]'
    ],
    [
        '1.97 m (6 ft 5+1⁄2 in)',
        'Rosemarie Ackermann (GDR)',
        '14 August 1977',
        'Helsinki[1]'
    ],
    [
        '1.97 m (6 ft 5+1⁄2 in)',
        'Rosemarie Ackermann (GDR)',
        '26 August 1977',
        'West Berlin[1]'
    ],
    [
        '2.00 m (6 ft 6+1⁄2 in)',
        'Rosemarie Ackermann (GDR)',
        '26 August 1977',
        'West Berlin[1]'
    ],
    [
        '2.01 m (6 ft 7 in)',
        'Sara Simeoni (ITA)',
        '4 August 1978',
        'Brescia[1]'
    ],
    [
        '2.01 m (6 ft 7 in)',
        'Sara Simeoni (ITA)',
        '31 August 1978',
        'Prague[1]'
    ],
    [
        '2.02 m (6 ft 7+1⁄2 in)',
        'Ulrike Meyfarth (FRG)',
        '8 September 1982',
        'Athens[1]'
    ],
    [
        '2.03 m (6 ft 7+3⁄4 in)',
        'Ulrike Meyfarth (FRG)',
        '21 August 1983',
        'London[1]'
    ],
    [
        '2.03 m (6 ft 7+3⁄4 in)',
        'Tamara Bykova (URS)',
        '21 August 1983',
        'London[1]'
    ],
    [
        '2.04 m (6 ft 8+1⁄4 in)',
        'Tamara Bykova (URS)',
        '25 August 1983',
        'Pisa[1]'
    ],
    [
        '2.05 m (6 ft 8+1⁄2 in)',
        'Tamara Bykova (URS)',
        '22 June 1984',
        'Kiev[1]'
    ],
    [
        '2.07 m (6 ft 9+1⁄4 in)',
        'Lyudmila Andonova (BUL)',
        '20 July 1984',
        'East Berlin[1]'
    ],
    [
        '2.07 m (6 ft 9+1⁄4 in)',
        'Stefka Kostadinova (BUL)',
        '25 May 1986',
        'Sofia[1]'
    ],
    [
        '2.08 m (6 ft 9+3⁄4 in)',
        'Stefka Kostadinova (BUL)',
        '31 May 1986',
        'Sofia[1]'
    ],
    [
        '2.09 m (6 ft 10+1⁄4 in)',
        'Stefka Kostadinova (BUL)',
        '30 August 1987',
        'Rome[1]'
    ],
    [
        '2.10 m (6 ft 10+1⁄2 in)',
        'Yaroslava Mahuchikh (UKR)',
        '7 July 2024',
        'Paris[3]'
    ]
];

const graphMockData = {
    datasetLabel: 'Mark',
    data: [
        { label: 'Nancy Voorhees (USA)', value: 1.46 },
        { label: 'Elizabeth Stine (USA)', value: 1.485 },
        { label: 'Sophie Eliott-Lynn (GBR)', value: 1.485 },
        { label: 'Phyllis Green (GBR)', value: 1.524 },
        { label: 'Phyllis Green (GBR)', value: 1.552 },
        { label: 'Ethel Catherwood (CAN)', value: 1.58 },
        { label: 'Lien Gisolf (NED)', value: 1.58 },
        { label: 'Ethel Catherwood (CAN)', value: 1.595 },
        { label: 'Lien Gisolf (NED)', value: 1.605 },
        { label: 'Lien Gisolf (NED)', value: 1.62 },
        { label: 'Jean Shiley (USA)', value: 1.65 },
        { label: 'Mildred Didrikson (USA)', value: 1.65 },
        { label: 'Dorothy Odam (GBR)', value: 1.66 },
        { label: 'Esther van Heerden (South Africa)', value: 1.66 },
        { label: 'Ilsebill Pfenning (SUI)', value: 1.66 },
        { label: 'Fanny Blankers-Koen (NED)', value: 1.71 },
        { label: 'Sheila Lerwill (GBR)', value: 1.72 },
        { label: 'Aleksandra Chudina (URS)', value: 1.73 },
        { label: 'Thelma Hopkins (GBR)', value: 1.74 },
        { label: 'Iolanda Balaș (ROM)', value: 1.75 },
        { label: 'Mildred McDaniel (USA)', value: 1.76 },
        { label: 'Iolanda Balaş (ROM)', value: 1.76 },
        { label: 'Zheng Fengrong (CHN)', value: 1.77 },
        { label: 'Iolanda Balaş (ROM)', value: 1.78 },
        { label: 'Iolanda Balaş (ROM)', value: 1.8 },
        { label: 'Iolanda Balaş (ROM)', value: 1.81 },
        { label: 'Iolanda Balaş (ROM)', value: 1.82 },
        { label: 'Iolanda Balaş (ROM)', value: 1.83 },
        { label: 'Iolanda Balaş (ROM)', value: 1.84 },
        { label: 'Iolanda Balaş (ROM)', value: 1.85 },
        { label: 'Iolanda Balaş (ROM)', value: 1.86 },
        { label: 'Iolanda Balaş (ROM)', value: 1.87 },
        { label: 'Iolanda Balaş (ROM)', value: 1.88 },
        { label: 'Iolanda Balaş (ROM)', value: 1.9 },
        { label: 'Iolanda Balaş (ROM)', value: 1.91 },
        { label: 'Ilona Gusenbauer (AUT)', value: 1.92 },
        { label: 'Ulrike Meyfarth (FRG)', value: 1.92 },
        { label: 'Yordanka Blagoeva (BUL)', value: 1.94 },
        { label: 'Rosemarie Witschas (GDR)', value: 1.94 },
        { label: 'Rosemarie Ackermann (GDR)', value: 1.95 },
        { label: 'Rosemarie Ackermann (GDR)', value: 1.96 },
        { label: 'Rosemarie Ackermann (GDR)', value: 1.96 },
        { label: 'Rosemarie Ackermann (GDR)', value: 1.97 },
        { label: 'Rosemarie Ackermann (GDR)', value: 1.97 },
        { label: 'Rosemarie Ackermann (GDR)', value: 2 },
        { label: 'Sara Simeoni (ITA)', value: 2.01 },
        { label: 'Sara Simeoni (ITA)', value: 2.01 },
        { label: 'Ulrike Meyfarth (FRG)', value: 2.02 },
        { label: 'Ulrike Meyfarth (FRG)', value: 2.03 },
        { label: 'Tamara Bykova (URS)', value: 2.03 },
        { label: 'Tamara Bykova (URS)', value: 2.04 },
        { label: 'Tamara Bykova (URS)', value: 2.05 },
        { label: 'Lyudmila Andonova (BUL)', value: 2.07 },
        { label: 'Stefka Kostadinova (BUL)', value: 2.07 },
        { label: 'Stefka Kostadinova (BUL)', value: 2.08 },
        { label: 'Stefka Kostadinova (BUL)', value: 2.09 },
        { label: 'Yaroslava Mahuchikh (UKR)', value: 2.1 }
    ]
};

export {
    tableRowsMockData,
    graphMockData
};