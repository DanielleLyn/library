select * from books b
inner join users u 
on b.user_id = u.id 
where u.id=$1