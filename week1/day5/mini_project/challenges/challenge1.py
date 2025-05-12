class Circle:
    def __init__(self, radius=None, diameter=None):
        if radius is not None:
            self.radius = radius
        elif diameter is not None:
            self.radius = diameter / 2
        else:
            raise ValueError("You must specify either a radius or a diameter")
    

    @property
    def diameter(self):
        return self.radius * 2
    
   
    @property
    def area(self):
       
        pi = 3.14159
        return pi * (self.radius ** 2)
    
    def __str__(self):
        return f"Circle with radius {self.radius} and diameter {self.diameter}"

    def __add__(self, other):
        if isinstance(other, Circle):
            new_radius = self.radius + other.radius
            return Circle(radius=new_radius)
        return NotImplemented

    def __gt__(self, other):
        if isinstance(other, Circle):
            return self.radius > other.radius
        return NotImplemented
    
    def __eq__(self, other):
        if isinstance(other, Circle):
            return self.radius == other.radius
        return NotImplemented


circle1 = Circle(radius=5)
circle2 = Circle(diameter=10)
circle3 = Circle(radius=7)

print(circle1.radius)  
print(circle1.diameter)  
print(circle1.area)  


print(circle1)  


circle4 = circle1 + circle2
print(circle4)  


print(circle1 > circle2) 
print(circle1 == circle2)  


circles = [circle1, circle2, circle3, circle4]
sorted_circles = sorted(circles, key=lambda x: x.radius)
for c in sorted_circles:
    print(c)


