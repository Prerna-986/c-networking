DATA COMMUNICATION
Data:-information presented in whatever form 
Data communication are the exchange of data between two devices via some form of transmission medium such as a wire cable.

four fundamental characteristics :delivery,accuracy,timeliness and jitter
1.Delivery:the system must deliver the data to correct destination.
2.Accuracy:-The system must deliver the data accurately.
3.timeliness:-the system must deliver data in timely manner.Data delivered late are useless.
4.jitter:-Jitter refers to the variation in the packet arrival time. It is the uneven delay in
the delivery of audio or video packets.


DATA COMMUNICATION HAS FIVE COMPONENTS
1.Message:-the message is the information to be communicated.Popular form of information include text,numbers,pictures,audio,and video.
2.Sender:-The sender is the device that sends the data message.It can be a computer,telephone handset,video camera and so on.
3.Receiver:The receiver is the device that receives the message.It can be a computer,workstation,telephone,handset,television and so on.
4.Tranmission medium:-the transmission medium is the physical path by which a message travels from sender to receiver .coaxialcable,fibre-optic cable,and radio waves.
5.Protocol:-set of rules that governs data communication.Without a protocol, two
devices may be connected but not communicating, just as a person speaking French
cannot be understood by a person who speaks only Japanese.

Data Flow
Communication between two devices can be simplex, half-duplex, or full-duplex .
Simplex
In simplex mode, the communication is unidirectional, as on a one-way street. Only one
of the two devices on a link can transmit; the other can only receiv.
Keyboards and traditional monitors are examples of simplex devices. The keyboard
can only introduce input; the monitor can only accept output. The simplex mode
can use the entire capacity of the channel to send data in one direction.

Half-Duplex
In half-duplex mode, each station can both transmit and receive, but not at the same time. :
When one device is sending, the other can only receive, and vice vers.
The half-duplex mode is like a one-lane road with traffic allowed in both directions.
When cars are traveling in one direction, cars going the other way must wait. In a
half-duplex transmission, the entire capacity of a channel is taken over by whichever of
the two devices is transmitting at the time. Walkie-talkies and CB (citizens band) radios
are both half-duplex systems.
The half-duplex mode is used in cases where there is no need for communication
in both directions at the same time; the entire capacity of the channel can be utilized for
each direction.
Full-Duplex
In full-duplex , both stations can transmit and receive simultaneously
The full-duplex mode is like a tW<D-way street with traffic flowing in both directions
at the same time. In full-duplex mode, si~nals going in one direction share the
capacity of the link: with signals going in the other direction. This sharing can occur in
two ways: Either the link must contain two physically separate tranmsmissiIDn paths, one
for sending and the other for receiving; or the capacity of the ch:arillilel is divided
between signals traveling in both directions.
One common example of full-duplex communication is the telephone network.
When two people are communicating by a telephone line, both can talk and listen at the
same time.
The full-duplex mode is used when communication in both directions is required
all the time. The capacity of the channel, however, must be divided between the two
directions.

NETWORK
A network is a set of devices (often referred to as nodes) connected by communication
links. A node can be a computer, printer, or any other device capable of sending and/or
receiving data generated by other nodes on the network.

OSI MODEL(Open Systems Interconnection model)
An open system is a set of protocols that
allows any two different systems to communicate regardless of their underlying architecture.
The purpose of the OSI model is to show how to facilitate communication
between different systems without requiring changes to the logic of the underlying hardware
and software. The OSI model is not a protocol; it is a model for understanding and
designing a network architecture that is flexible, robust, and interoperable.

The OSI model is a layered framework for the design of network systems that
allows communication between all types of computer systems. It consists of seven separate
but related layers, each of which defines a part of the process of moving information
across a network

The OSI model is composed of seven ordered layers: physical (layer 1), data link (layer 2),
network (layer 3), transport (layer 4), session (layer 5), presentation (layer 6), and
application (layer 7). the layers involved when a message is sent from
device A to device B. As the message travels from A to B, it may pass through many
intermediate nodes. These intermediate nodes usually involve only the first three layers
of the OSI model.
The processes on each machine that communicate at
a given layer are called peer-to-peer processes.
 Communication between machines is therefore a peer-to-peer process using the protocols appropriate to a given layer.

The physical layer is also concerned with the following:

o Physical characteristics of interfaces and medium:-. The physical layer defines
the characteristics of the interface between the devices and the transmission
medium. It also defines the type of transmission medium.
o Representation of bits. The physical layer data consists of a stream of bits
(sequence of Os or 1s) with no interpretation. To be transmitted, bits must be
encoded into signals--electrical or optical. The physical layer defines the type of
encoding (how Os and I s are changed to signals).

o Data rate. The transmission rate-the number of bits sent each second-is also
defined by the physical layer. In other words, the physical layer defines the duration
of a bit, which is how long it lasts.

o** Synchronization of bits. The sender and receiver not only must use the same bit
rate but also must be synchronized at the bit level. In other words, the sender and
the receiver clocks must be synchronized.

o**. Line configuration. The physical layer is concerned with the connection of
devices to the media. In a point-to-point configuration, two devices are connected
through a dedicated link. In a multipoint configuration, a link is shared among
several devices.

o** Physical topology. The physical topology defines how devices are connected to
make a network. Devices can be connected by using a mesh topology (every device
is connected to every other device), a star topology (devices are connected through
a central device), a ring topology (each device is connected to the next, forming a
ring), a bus topology (every device is on a common link), or a hybrid topology (this
is a combination of two or more topologies).

** Transmission mode. The physical layer also defines the direction of transmission
between two devices: simplex, half-duplex, or full-duplex. In simplex mode, only
one device can send; the other can only receive. The simplex mode is a one-way
communication. In the half-duplex mode, two devices can send and receive, but
not at the same time. In a full-duplex (or simply duplex) mode, two devices can
send and receive at the same time.

DATA LINK LAYER
Responsible for node-to-node delivery of the data.
Data link layer decides what ones and zeros represent.
data link layer is responsible for moving frames from one node to the next.
Other responsibilities of the data link layer include the following:

 Framing. The data link layer divides the stream of bits received from the network
layer into manageable data units called frames.

 Physical addressing. If frames are to be distributed to different systems on the
network, the data link layer adds a header to the frame to define the sender and/or
receiver of the frame. If the frame is intended for a system outside the sender's
network, the receiver address is the address of the device that connects the network
to the next one.

Flow control. If the rate at which the data are absorbed by the receiver is less than
the rate at which data are produced in the sender, the data link layer imposes a flow
control mechanism to avoid overwhelming the receiver.

 Error control. The data link layer adds reliability to the physical layer by adding
mechanisms to detect and retransmit damaged or lost frames. It also uses a mechanism
to recognize duplicate frames. Error control is normally achieved through a
trailer added to the end of the frame.

 Access control. When two or more devices are connected to the same link, data
link layer protocols are necessary to determine which device has control over the
link at any given time.
