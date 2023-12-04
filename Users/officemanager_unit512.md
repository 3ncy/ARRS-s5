# officemanager_unit512:bHBXVW5OalZteHlXa1U1YW1FemF
## user
< - info -><br>
<br>
The first vision uncovers the truth<br>
The second is opposite<br>
<br>
< - end of info -><br>
## notes

No notes found

## files
- data_transfer_error:9210.txt
- data_transfer_error:9351.txt
- data_transfer_error:9444.txt
- data_transfer_error:9571.txt
- data_transfer_error:9825.txt
- data_transfer_error:9900.txt
- data_transfer_error:9901.txt
- data_transfer_error:9990.txt


### file data_transfer_error:9210.txt
```
BNPFJACGA
```


### file data_transfer_error:9351.txt
```
KADAJ
```


### file data_transfer_error:9444.txt
```
LSGQPZTGK
```


### file data_transfer_error:9571.txt
```
BWVXZJBXD
```


### file data_transfer_error:9825.txt
```
 DKMOR
```
> The space at the start is intentional and was present in the original file.

### file data_transfer_error:9900.txt
```
MZLIPR2CQ
```


### file data_transfer_error:9901.txt
```
TZVT
```


### file data_transfer_error:9990.txt
```
JQPZC2
```

> The previous account [Supplymanager_unit092](./Supplymanager_unit092.md) had a [user note](./Supplymanager_unit092.md#user) containing a sequence of numbers which weren't used anywhere else:
> ```
> 71
> 00
> 10
> 44
> 25
> 90
> 51
> 01
> ```
>
> Those match exactly the endings of the filenames in this account. When we string the contents of the files together based on this order, we get  
> `BWVXZJBXDMZLIPR2CQBNPFJACGALSGQPZTGK DKMORJQPZC2KADAJTZVT` (Notice the space, which however isn't useful for anything and has to be removed before decoding the message further.)  
> Taking the first line of this user's note (`The first vision uncovers the truth`), this text can be decoded with Vigenere(key: truth) to  
> `IFBESQKDKFGUOWK2JZHUIMSGJZHUYNJWIZND KTSVKQZVGV2RJJHCAIBA`  
> and then decode it with Base32 to get `ABIACQMGYZNOD2FNOL56FZ5NUT3SWQJN`.
> 
> To this we apply the second line of the user note (`The second is opposite`) to reverse this string resulting with  
> `NJQWS3TUN5ZF65LONF2DONZYGMQCAIBA`  
> which can be again decoded with Base32 to get the final `jaintor_unit7783`.  
>
> This is a username for the [next account](./jaintor_unit7783.md), paired with one of the passwords from [Supplymanager_unit092](./Supplymanager_unit092.md#file-storage_report_590txt).
