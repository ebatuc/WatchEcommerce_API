select o.PersonalInfoId,pd.Id,pd.FirstName,o.Id,op.OrderId,op.ProductId,p.Id,b.Title,p.Title,p.Description,op.Quantity
from Orders o 
inner join PersonalData pd on pd.Id=o.PersonalInfoId
inner join OrderedProducts op on op.OrderId=o.Id
inner join Products p on p.Id=op.ProductId
inner join Brands b on p.BrandId=b.Id
order by pd.FirstName
