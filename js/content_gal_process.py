f = open('temp.txt',encoding = 'utf-8');
t =f.read()
f.close()

tt = t.split('<img');
tt = [i for i in tt if i.strip()]
tt = ['else if (order == %d){\n \t\t\t oframe.innerHTML = `<img '%(17+i)+tt[i]+'`;}' for i in range(len(tt))] 
f = open('gal_content.txt','w',encoding = 'utf-8')
f.write('\n'.join(tt) )
f.close()