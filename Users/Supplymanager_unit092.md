# Supplymanager_unit092:VjFaV2IxVXdNVWhVYTJ4VlZrWndU
## user
< - info -><br>
<br>
71<br>
00<br>
10<br>
44<br>
25<br>
90<br>
51<br>
01<br>
<br>
< - end of info -><br>
## notes

No notes found

## files
- storage_report_515.txt
- storage_report_556.txt
- storage_report_571.txt
- storage_report_583.txt
- storage_report_586.txt
- storage_report_589.txt
- storage_report_590.txt


### file storage_report_515.txt
```
< - file ->

CW

< - end of file ->
```


### file storage_report_556.txt
```
< - file ->

SX

< - end of file ->
```


### file storage_report_571.txt
```
< - file ->

Data: I5KTIRCTLAZVIT2SKNMECSKCKNEESUKOIJCVOUKYKB
Data: EUYTCVIZJTEQZXINMUSR2RK5GESTBXKVGUCMSDLF
Data: HEETKXKFMFSV2DIJKUMNZSIM3U4QSNK5IVQM2JLFB
Data: FKRRWGJDUEQ2ZJFDVCU2JKFHEEUCPKJJUQSKMLF
Data: EUOUKXGNEUYS2JJBBVCQ2LINBFKRSTGJDUCNKEIV
Data: FECMSDGY2UETKHKFMDGSKMIRKUMNRSI5AU4QSQ
Data: K5JFCSKRKNAUSQSBBI2TQOK7ON2GK4BAGE
Data: 5CAMTYFU3T2MJRBIQCAIBA

< - end of file ->
```

I5KTIRCTLAZVIT2SKNMECSKCKNEESUKOIJCVOUKYKBEUYTCVIZJTEQZXINMUSR2RK5GESTBXKVGUCMSDLFHEETKXKFMFSV2DIJKUMNZSIM3U4QSNK5IVQM2JLFBFKRRWGJDUEQ2ZJFDVCU2JKFHEEUCPKJJUQSKMLFEUOUKXGNEUYS2JJBBVCQ2LINBFKRSTGJDUCNKEIVFECMSDGY2UETKHKFMDGSKMIRKUMNRSI5AU4QSQK5JFCSKRKNAUSQSBBI2TQOK7ON2GK4BAGE5CAMTYFU3T2MJRBIQCAIBA


GU4DSX3TORSXAIBSHIQNBEWQXPILLUFS2C7CYIGQWLIL7UMA2CYNBMWQXYWCBUF72C7NBMWQX3IYBUF62GBCYIGQSIQNBPORSHILYIGQW3ILKIHCQCKCBUFS2GA5DEJA2C65BMGQX3ILDUF62GANBPWRQIQSAIBA
> All the data concatenated can be decoded with Base32, leading to
> ```
> GU4DSX3TORSXAIBSHIQNBEWQXPILLUFS2C7CYIGQWLIL7UMA2CYNBMWQXYWCBUF72C7NBMWQX3IYBUF62GBCYIGQSIQNBPORSHILYIGQW3ILKIHCQCKCBUFS2GA5DEJA2C65BMGQX3ILDUF62GANBPWRQIQSAIBA
> 589_step 1: 2x-7=11  
> ```
> X equals to `9` from this equation.  
> The first part can be decoded from Base32 once again, leading to:
> ```
> 589_step 2: Влево, вправо, поворот, В нём же — всё наоборот!   
> ```
> Translating to `Left, right, turn, In it - everything is the other way around!`


### file storage_report_583.txt
```
< - file ->

QA

< - end of file ->
```


### file storage_report_586.txt
```
< - file ->

< - end of file ->
```


### file storage_report_589.txt
```
< - file ->

JRXWO2LOFBSW4Y3SPFYHIZLEFE5CAQKCJFAUGUKJI5JEUOKOJFMFKWSOKYZVQRKYKM2U2OKCKQZUGV2XKZGUITBSJU4UOVBVJYQCAIBA
DR

< - end of file ->
```
> The first line decoded with Base32 results to  
> `Login(encrypted): ABIACQIGRJ9NIXUZNV3XEXS5M9BT3CWWVMDL2M9GT5N`  
> Assuming we did the first step mentioned in the file `storage_report_571`, we're supposed to reverse the encrypted string, getting
> `N5TG9M2LDMVWWC3TB9M5SXEX3VNZUXIN9JRGIQCAIBA`  
> which can be decoded with Base32 to `officemanager_unit512`. Together with the 2nd password from the file `storage_report_590.txt` we get access to the [next account](./officemanager_unit512.md).


### file storage_report_590.txt
```
< - file ->

R. NAWOCRA
C. OB3TUICWNJDGCVRSJF4FMWDEJZLF
W. O2CWLFKEUNCWNRNHEV3OMRKQU4
Q. CFKJWFUTTCNNFESVTLLJLGKRTEI5L
X. WFQYJRKUYVSVZRIZSW2RQKOB3TUI
D. VKWLJ2E2V3QKBLGWSSTKVDFC52QK
A. G4USTMJDFUWCUBJYHOORAKRDEW
S. DXHIQGESCCLBLFONKPMFWFU5DFJB

< - end of file ->
```

> If we take all the lines in the order of `CWSXQADR` (the two letters in previous files) and decode them with Base32, we get:
> ```
> pw: VjFaV2IxVXdNVWhVYTJ4VlZrWndU
> pw: bHBXVW5OalZteHlXa1U1YW1FemF
> pw: ERlZNbkJIVkZVeFdGVnRSbFZXT
> pw: TFKUVZtMWpPVkJSUFQwPSAg
> ```
